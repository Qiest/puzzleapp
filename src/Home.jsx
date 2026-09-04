import React, { useEffect, useState } from "react";
import { ref, set, get, update, onValue, push, remove, onDisconnect, query, orderByChild, startAt, endAt } from "firebase/database";
import { auth, db } from "./firebase.js";
import { signOut, updatePassword } from "firebase/auth";
import { computeGrid, generateEdges, pieceEdges, mulberry32, scatterPosition, createShuffledOrder, makeRoomCode } from "./puzzleUtils.js";

const DIFFICULTIES = [
  { id: "relaxed", name: "Rahat", pieces: 50, rotate: false, hints: 5, preview: true, desc: "Kısa ve keyifli" },
  { id: "classic", name: "Klasik", pieces: 100, rotate: false, hints: 3, preview: true, desc: "Dengeli deneyim" },
  { id: "master", name: "Usta", pieces: 100, rotate: true, hints: 2, preview: true, desc: "Parçalar dönebilir" },
  { id: "chaos", name: "Çılgın", pieces: 200, rotate: true, hints: 1, preview: true, desc: "Daha çok parça" },
  { id: "expert", name: "Uzman", pieces: 200, rotate: true, hints: 0, preview: false, desc: "Fotoğraf önizlemesi yok" },
];

const BADGES = [
  { id: "first", name: "İlk Adım", desc: "İlk puzzle'ını tamamla" },
  { id: "team", name: "İkili Ekip", desc: "Birlikte puzzle tamamla" },
  { id: "hundred", name: "100 Parça", desc: "100 parçalık puzzle tamamla" },
  { id: "twohundred", name: "200 Parça", desc: "200 parçalık puzzle tamamla" },
  { id: "rotator", name: "Döndürme Ustası", desc: "Döndürmeli puzzle tamamla" },
  { id: "perfect", name: "Kusursuz", desc: "Hiç ipucu kullanmadan bitir" },
];

function formatHomeTime(seconds) {
  const s = Math.max(0, Number(seconds) || 0);
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
}

function safeNumber(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function getLevel(xp) {
  return Math.max(1, Math.floor(Math.max(0, safeNumber(xp)) / 500) + 1);
}

function getLevelProgress(xp) {
  const safeXp = Math.max(0, safeNumber(xp));
  return safeXp % 500;
}

function resizeImage(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = e => { img.src = e.target.result; };
    reader.onerror = reject;
    img.onload = () => {
      const scale = Math.min(1, 1000 / img.width);
      const width = Math.max(1, Math.round(img.width * scale));
      const height = Math.max(1, Math.round(img.height * scale));
      const canvas = document.createElement("canvas");
      canvas.width = width; canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("Canvas oluşturulamadı."));
      ctx.drawImage(img, 0, 0, width, height);
      resolve({ dataUrl: canvas.toDataURL("image/jpeg", 0.65), width, height });
    };
    img.onerror = () => reject(new Error("Fotoğraf yüklenemedi."));
    reader.readAsDataURL(file);
  });
}

export default function Home({ onEnterRoom, user, playerName, theme = "light", onToggleTheme }) {
  const [mode, setMode] = useState("choose");
  const [name, setName] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [file, setFile] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [puzzlesRemaining, setPuzzlesRemaining] = useState(null);
  const [accountLoading, setAccountLoading] = useState(true);
  const [difficulty, setDifficulty] = useState("classic");
  const [profileOpen, setProfileOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [socialQuery, setSocialQuery] = useState("");
  const [socialResults, setSocialResults] = useState([]);
  const [friends, setFriends] = useState([]);
  const [socialBusy, setSocialBusy] = useState(false);
  const [socialMessage, setSocialMessage] = useState("");
  const [incomingRequests, setIncomingRequests] = useState([]);
  const [sentRequests, setSentRequests] = useState({});
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [chatFriend, setChatFriend] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatText, setChatText] = useState("");
  const [selectedInviteFriends, setSelectedInviteFriends] = useState([]);
  const [gameInvites, setGameInvites] = useState([]);
  const [unreadChats, setUnreadChats] = useState({});
  const [blockedUsers, setBlockedUsers] = useState({});
  const [notifications, setNotifications] = useState([]);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const unreadNotificationCount = notifications.filter((n) => {
    const readAt = Number(localStorage.getItem(`notificationRead:${n.id}`) || 0);
    return Number(n.at || 0) > readAt;
  }).length;

  function markNotificationsRead(items = notifications) {
    const now = Date.now();
    items.forEach((n) => localStorage.setItem(`notificationRead:${n.id}`, String(now)));
  }
  const [profileAvatar, setProfileAvatar] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsTab, setSettingsTab] = useState("profile");
  const [editName, setEditName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileVisible, setProfileVisible] = useState(true);
  const [allowFriendRequests, setAllowFriendRequests] = useState(true);
  const [allowMessages, setAllowMessages] = useState(true);
  const [blockedProfiles, setBlockedProfiles] = useState([]);
  const [settingsBusy, setSettingsBusy] = useState(false);
  const [avatarViewer, setAvatarViewer] = useState(null);



  const selected = DIFFICULTIES.find(d => d.id === difficulty) || DIFFICULTIES[1];

  useEffect(() => {
    let cancelled = false;
    async function loadAccount() {
      if (!user?.uid) { setPuzzlesRemaining(null); setAccountLoading(false); return; }
      try {
        const snap = await get(ref(db, `users/${user.uid}`));
        const data = snap.val() || {};
        const blockedMap = data.blocked || {};
        if (!cancelled) setBlockedUsers(blockedMap);
        const blockedEntries = Object.keys(blockedMap);
        const blockedLoaded = [];
        for (const id of blockedEntries.slice(0, 50)) {
          const bs = await get(ref(db, `publicProfiles/${id}`));
          if (bs.exists()) blockedLoaded.push({ uid: id, ...bs.val() });
        }
        if (!cancelled) setBlockedProfiles(blockedLoaded);
        const normalized = { ...data, profileVisible: data.profileVisible !== false, allowFriendRequests: data.allowFriendRequests !== false, allowMessages: data.allowMessages !== false, avatar: typeof data.avatar === "string" ? data.avatar : "", name: typeof data.name === "string" && data.name.trim() ? data.name.trim().slice(0, 40) : (playerName || "Oyuncu"), nameLower: (typeof data.name === "string" && data.name.trim() ? data.name.trim().slice(0, 40) : (playerName || "Oyuncu")).toLowerCase(), email: typeof data.email === "string" ? data.email : (user.email || ""), puzzlesRemaining: data.puzzlesRemaining === undefined ? 3 : Math.max(0, Math.floor(safeNumber(data.puzzlesRemaining, 0))), xp: Math.max(0, safeNumber(data.xp, 0)), completedPuzzles: Math.max(0, Math.floor(safeNumber(data.completedPuzzles, 0))), togetherPuzzles: Math.max(0, Math.floor(safeNumber(data.togetherPuzzles, 0))), totalTime: Math.max(0, safeNumber(data.totalTime, 0)), bestTime: Math.max(0, safeNumber(data.bestTime, 0)), badges: Array.isArray(data.badges) ? data.badges : [], history: Array.isArray(data.history) ? data.history : [] };
        await update(ref(db, `users/${user.uid}`), normalized);
        if (!user.isAnonymous) {
          await update(ref(db, `publicProfiles/${user.uid}`), {
            name: normalized.name,
            nameLower: normalized.name.toLowerCase(),
            email: normalized.email,
            avatar: normalized.avatar || "",
            xp: normalized.xp,
            completedPuzzles: normalized.completedPuzzles,
            badges: normalized.badges,
            profileVisible: normalized.profileVisible !== false,
            allowFriendRequests: normalized.allowFriendRequests !== false,
            allowMessages: normalized.allowMessages !== false,
          });
          const friendSnap = await get(ref(db, `users/${user.uid}/friends`));
          const friendMap = friendSnap.val() || {};
          const friendIds = Object.keys(friendMap);
          const friendProfiles = [];
          for (const id of friendIds.slice(0, 30)) {
            const ps = await get(ref(db, `publicProfiles/${id}`));
            if (ps.exists()) friendProfiles.push({ uid: id, ...ps.val() });
          }
          if (!cancelled) setFriends(friendProfiles);
        }
        if (!cancelled) { setPuzzlesRemaining(normalized.puzzlesRemaining); setProfile(normalized); setProfileAvatar(normalized.avatar || ""); setEditName(normalized.name || ""); setProfileVisible(normalized.profileVisible !== false); setAllowFriendRequests(normalized.allowFriendRequests !== false); setAllowMessages(normalized.allowMessages !== false); }
      } catch (e) {
        console.error("Hesap bilgisi yüklenemedi:", e);
        if (!cancelled) setPuzzlesRemaining(3);
      } finally { if (!cancelled) setAccountLoading(false); }
    }
    loadAccount();
    return () => { cancelled = true; };
  }, [user?.uid, user?.email, playerName]);


  async function updateProfileAvatar(file) {
    if (!file || !user?.uid || user.isAnonymous) return;
    try {
      const avatar = await new Promise((resolve, reject) => {
        const img = new Image();
        const reader = new FileReader();
        reader.onload = e => { img.src = e.target.result; };
        reader.onerror = reject;
        img.onload = () => {
          const size = 180;
          const canvas = document.createElement("canvas");
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext("2d");
          if (!ctx) return reject(new Error("Canvas oluşturulamadı."));
          const scale = Math.max(size / img.width, size / img.height);
          const w = img.width * scale;
          const h = img.height * scale;
          ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
          resolve(canvas.toDataURL("image/jpeg", 0.72));
        };
        img.onerror = () => reject(new Error("Profil fotoğrafı okunamadı."));
        reader.readAsDataURL(file);
      });
      const avatarUrl = avatar;
      await update(ref(db), {
        [`users/${user.uid}/avatar`]: avatarUrl,
        [`publicProfiles/${user.uid}/avatar`]: avatarUrl,
      });
      setProfileAvatar(avatarUrl);
      setProfile(current => ({ ...(current || {}), avatar: avatarUrl }));
      setSocialMessage("Profil fotoğrafın güncellendi.");
    } catch (e) {
      console.error(e);
      setSocialMessage("Profil fotoğrafı güncellenemedi.");
    }
  }

  async function searchProfiles() {
    const q = socialQuery.trim().toLowerCase();
    if (!q || user?.isAnonymous) { setSocialResults([]); return; }
    setSocialBusy(true); setSocialMessage("");
    try {
      const profilesQuery = query(ref(db, "publicProfiles"), orderByChild("nameLower"), startAt(q), endAt(`${q}\uf8ff`));
      const snap = await get(profilesQuery);
      const all = snap.val() || {};
      const result = Object.entries(all)
        .filter(([uid, p]) => uid !== user.uid && p?.profileVisible !== false)
        .slice(0, 8)
        .map(([uid, p]) => ({ uid, ...p }));
      setSocialResults(result);
      if (!result.length) setSocialMessage("Bu isimle oyuncu bulunamadı.");
    } catch (e) {
      console.error(e);
      setSocialMessage("Oyuncular aranamadı.");
    } finally { setSocialBusy(false); }
  }

  async function addFriend(target) {
    if (!user || user.isAnonymous || !target?.uid) return;
    setSocialBusy(true); setSocialMessage("");
    try {
      await update(ref(db), {
        [`friendRequests/${target.uid}/${user.uid}`]: {
          name: profile?.name || playerName || "Oyuncu",
          avatar: profileAvatar || profile?.avatar || "",
          at: Date.now(),
        },
        [`users/${user.uid}/sentFriendRequests/${target.uid}`]: true,
      });
      setSocialMessage(`${target.name || "Oyuncu"} için arkadaşlık isteği gönderildi.`);
    } catch (e) {
      console.error(e); setSocialMessage("İstek gönderilemedi.");
    } finally { setSocialBusy(false); }
  }


  useEffect(() => {
    if (!user?.uid || user.isAnonymous) {
      setNotifications([]);
      return;
    }

    const unsubs = [];
    const refresh = () => {
      // Child listeners below update local notification state.
    };

    const reqRef = ref(db, `friendRequests/${user.uid}`);
    const reqUnsub = onValue(reqRef, snap => {
      const data = snap.val() || {};
      const items = Object.entries(data).map(([uid, v]) => ({
        id: `friend:${uid}:${Number(v?.at || 0)}`,
        type: "friend",
        uid,
        name: v?.name || "Oyuncu",
        avatar: v?.avatar || "",
        at: Number(v?.at || 0),
      }));
      setNotifications(current => [
        ...current.filter(n => n.type !== "friend"),
        ...items,
      ].sort((a,b) => b.at - a.at));
    });
    unsubs.push(reqUnsub);

    const inviteRef = ref(db, `roomInvites/${user.uid}`);
    const inviteUnsub = onValue(inviteRef, snap => {
      const data = snap.val() || {};
      const items = Object.entries(data).map(([code, v]) => ({
        id: `invite:${code}:${Number(v?.at || 0)}`,
        type: "invite",
        code,
        fromUid: v?.fromUid,
        name: v?.fromName || "Oyuncu",
        at: Number(v?.at || 0),
      }));
      setNotifications(current => [
        ...current.filter(n => n.type !== "invite"),
        ...items,
      ].sort((a,b) => b.at - a.at));
    });
    unsubs.push(inviteUnsub);

    return () => unsubs.forEach(fn => fn?.());
  }, [user?.uid, user?.isAnonymous]);

  useEffect(() => {
    if (!user?.uid || user.isAnonymous) {
      setIncomingRequests([]);
      setSentRequests({});
      setFriends([]);
      return;
    }

    const reqRef = ref(db, `friendRequests/${user.uid}`);
    const unsubReq = onValue(reqRef, (snap) => {
      const data = snap.val() || {};
      setIncomingRequests(Object.entries(data).map(([uid, value]) => ({ uid, ...(value || {}) })));
    });

    const sentRef = ref(db, `users/${user.uid}/sentFriendRequests`);
    const unsubSent = onValue(sentRef, (snap) => setSentRequests(snap.val() || {}));

    // Arkadaş listesini gerçek zamanlı dinle: karşı taraf kabul ettiğinde iki taraf da anında görür.
    const friendsRef = ref(db, `users/${user.uid}/friends`);
    const unsubFriends = onValue(friendsRef, async (snap) => {
      const friendMap = snap.val() || {};
      const friendIds = Object.keys(friendMap).filter(id => friendMap[id]);
      const profiles = await Promise.all(friendIds.slice(0, 50).map(async (id) => {
        try {
          const ps = await get(ref(db, `publicProfiles/${id}`));
          if (!ps.exists()) return { uid: id, name: "Oyuncu", avatar: "" };
          const data = ps.val() || {};
          return { uid: id, ...data, name: data.name || "Oyuncu", avatar: data.avatar || "" };
        } catch {
          return { uid: id, name: "Oyuncu", avatar: "" };
        }
      }));
      setFriends(profiles);
    });

    return () => {
      unsubReq?.();
      unsubSent?.();
      unsubFriends?.();
    };
  }, [user?.uid, user?.isAnonymous]);

  useEffect(() => {
    if (!user?.uid || user.isAnonymous) return;
    const invitesRef = ref(db, `roomInvites/${user.uid}`);
    const unsub = onValue(invitesRef, (snap) => {
      const data = snap.val() || {};
      setGameInvites(Object.entries(data).map(([code, value]) => ({ code, ...(value || {}) })));
    });
    return () => unsub?.();
  }, [user?.uid, user?.isAnonymous]);

  useEffect(() => {
    if (!user?.uid || user.isAnonymous || !friends.length) {
      setUnreadChats({});
      return;
    }
    const unsubs = [];
    friends.forEach(friend => {
      const ids = [user.uid, friend.uid].sort();
      const chatRef = ref(db, `chats/${ids[0]}/${ids[1]}/messages`);
      const unsub = onValue(chatRef, (snap) => {
        const data = snap.val() || {};
        const messages = Object.values(data).sort((a,b) => Number(a.at||0)-Number(b.at||0));
        const last = messages[messages.length - 1];
        const readAt = Number(localStorage.getItem(`chatRead:${friend.uid}`) || 0);
        setUnreadChats(current => ({
          ...current,
          [friend.uid]: Boolean(last && last.senderId !== user.uid && Number(last.at || 0) > readAt),
        }));
      });
      unsubs.push(unsub);
    });
    return () => unsubs.forEach(fn => fn?.());
  }, [user?.uid, user?.isAnonymous, friends]);

  async function acceptFriend(request) {
    if (!user?.uid || user.isAnonymous || !request?.uid) return;
    try {
      await update(ref(db), {
        [`users/${user.uid}/friends/${request.uid}`]: true,
        [`users/${request.uid}/friends/${user.uid}`]: true,
        [`friendRequests/${user.uid}/${request.uid}`]: null,
      });
      setSocialMessage(`${request.name || "Oyuncu"} artık arkadaşın.`);
      const ps = await get(ref(db, `publicProfiles/${request.uid}`));
      const friendData = ps.exists() ? ps.val() : {};
      const friendProfile = {
        uid: request.uid,
        name: friendData.name || request.name || "Oyuncu",
        avatar: friendData.avatar || request.avatar || "",
        ...friendData,
      };
      setFriends((current) => current.some(f => f.uid === request.uid) ? current : [...current, friendProfile]);
    } catch (e) {
      console.error(e);
      setSocialMessage("Arkadaşlık isteği kabul edilemedi.");
    }
  }

  async function rejectFriend(request) {
    if (!user?.uid || user.isAnonymous || !request?.uid) return;
    try {
      await remove(ref(db, `friendRequests/${user.uid}/${request.uid}`));
      setSocialMessage("İstek kaldırıldı.");
    } catch (e) {
      console.error(e);
      setSocialMessage("İstek kaldırılamadı.");
    }
  }

  async function openFriendChat(friend) {
    setChatFriend(friend);
    if (friend?.uid) {
      localStorage.setItem(`chatRead:${friend.uid}`, String(Date.now()));
      setUnreadChats(current => ({ ...current, [friend.uid]: false }));
    }
    setChatText("");
    if (!user?.uid || !friend?.uid) return;
    const ids = [user.uid, friend.uid].sort();
    const chatRef = ref(db, `chats/${ids[0]}/${ids[1]}/messages`);
    onValue(chatRef, (snap) => {
      const data = snap.val() || {};
      setChatMessages(Object.entries(data).map(([id, value]) => ({ id, ...(value || {}) })).sort((a,b) => Number(a.at||0)-Number(b.at||0)).slice(-80));
    });
  }

  async function sendChatMessage() {
    const message = chatText.trim();
    if (!message || !user?.uid || user.isAnonymous || !chatFriend?.uid) return;
    const ids = [user.uid, chatFriend.uid].sort();
    const messagesRef = ref(db, `chats/${ids[0]}/${ids[1]}/messages`);
    await set(push(messagesRef), {
      senderId: user.uid,
      senderName: profile?.name || playerName || "Oyuncu",
      text: message.slice(0, 500),
      at: Date.now(),
    });
    setChatText("");
  }


  async function openProfile(target) {
    if (!target?.uid) return;
    try {
      const snap = await get(ref(db, `publicProfiles/${target.uid}`));
      if (snap.exists()) setSelectedProfile({ uid: target.uid, ...snap.val() });
      else setSelectedProfile(target);
    } catch {
      setSelectedProfile(target);
    }
  }

  async function removeFriend(friend) {
    if (!user?.uid || user.isAnonymous || !friend?.uid) return;
    if (!window.confirm(`${friend.name || "Bu oyuncu"} arkadaşlıktan çıkarılsın mı?`)) return;
    try {
      await update(ref(db), {
        [`users/${user.uid}/friends/${friend.uid}`]: null,
        [`users/${friend.uid}/friends/${user.uid}`]: null,
        [`chats/${[user.uid, friend.uid].sort()[0]}/${[user.uid, friend.uid].sort()[1]}/messages`]: null,
      });
      setFriends(current => current.filter(f => f.uid !== friend.uid));
      setChatFriend(null);
      setSocialMessage("Arkadaş kaldırıldı.");
    } catch (e) {
      console.error(e);
      setSocialMessage("Arkadaş kaldırılamadı.");
    }
  }

  async function blockUser(target) {
    if (!user?.uid || user.isAnonymous || !target?.uid) return;
    if (!window.confirm(`${target.name || "Bu oyuncu"} engellensin mi?`)) return;
    try {
      await update(ref(db), {
        [`users/${user.uid}/blocked/${target.uid}`]: true,
        [`users/${user.uid}/friends/${target.uid}`]: null,
        [`users/${target.uid}/friends/${user.uid}`]: null,
        [`friendRequests/${user.uid}/${target.uid}`]: null,
        [`friendRequests/${target.uid}/${user.uid}`]: null,
      });
      setBlockedUsers(current => ({ ...current, [target.uid]: true }));
      setFriends(current => current.filter(f => f.uid !== target.uid));
      setSelectedProfile(null);
      setChatFriend(null);
      setSocialMessage("Oyuncu engellendi.");
    } catch (e) {
      console.error(e);
      setSocialMessage("Oyuncu engellenemedi.");
    }
  }

  async function unblockUser(target) {
    if (!user?.uid || user.isAnonymous || !target?.uid) return;
    try {
      await remove(ref(db, `users/${user.uid}/blocked/${target.uid}`));
      setBlockedUsers(current => { const next = { ...current }; delete next[target.uid]; return next; });
      setBlockedProfiles(current => current.filter(p => p.uid !== target.uid));
      setSocialMessage(`${target.name || "Oyuncu"} için engel kaldırıldı.`);
    } catch (e) {
      console.error(e);
      setSocialMessage("Engel kaldırılamadı.");
    }
  }

  async function saveProfileSettings() {
    if (!user?.uid || user.isAnonymous) return;
    const nextName = editName.trim().slice(0, 40);
    if (!nextName) { setSocialMessage("Ad boş bırakılamaz."); return; }
    setSettingsBusy(true);
    try {
      await update(ref(db), {
        [`users/${user.uid}/name`]: nextName,
        [`users/${user.uid}/nameLower`]: nextName.toLowerCase(),
        [`users/${user.uid}/profileVisible`]: profileVisible,
        [`users/${user.uid}/allowFriendRequests`]: allowFriendRequests,
        [`users/${user.uid}/allowMessages`]: allowMessages,
        [`publicProfiles/${user.uid}/name`]: nextName,
        [`publicProfiles/${user.uid}/nameLower`]: nextName.toLowerCase(),
        [`publicProfiles/${user.uid}/avatar`]: profileAvatar || "",
        [`publicProfiles/${user.uid}/profileVisible`]: profileVisible,
        [`publicProfiles/${user.uid}/allowFriendRequests`]: allowFriendRequests,
        [`publicProfiles/${user.uid}/allowMessages`]: allowMessages,
      });
      setProfile(current => ({ ...(current || {}), name: nextName, profileVisible, allowFriendRequests, allowMessages }));
      setSocialMessage("Profil ayarların kaydedildi.");
      setSettingsOpen(false);
    } catch (e) {
      console.error(e);
      setSocialMessage("Profil ayarları kaydedilemedi.");
    } finally { setSettingsBusy(false); }
  }

  async function changePassword() {
    if (!user?.uid || user.isAnonymous) return;
    if (newPassword.length < 6) { setSocialMessage("Yeni şifre en az 6 karakter olmalı."); return; }
    if (newPassword !== confirmPassword) { setSocialMessage("Şifreler eşleşmiyor."); return; }
    setSettingsBusy(true);
    try {
      await updatePassword(user, newPassword);
      setNewPassword(""); setConfirmPassword("");
      setSocialMessage("Şifren başarıyla değiştirildi.");
    } catch (e) {
      console.error(e);
      setSocialMessage(e?.code === "auth/requires-recent-login" ? "Güvenlik için yeniden giriş yapman gerekiyor." : (e?.message || "Şifre değiştirilemedi."));
    } finally { setSettingsBusy(false); }
  }

  async function inviteFriendToRoom(friend) {
    if (!friend?.uid || !user?.uid || user.isAnonymous) return;
    const code = window.__lastCreatedRoomCode;
    if (!code) {
      setSocialMessage("Önce puzzle odanı oluştur.");
      return;
    }
    try {
      await set(ref(db, `roomInvites/${friend.uid}/${code}`), {
        roomCode: code,
        fromUid: user.uid,
        fromName: profile?.name || playerName || "Oyuncu",
        at: Date.now(),
        status: "pending",
      });
      setSocialMessage(`${friend.name} puzzle'a davet edildi.`);
    } catch (e) {
      console.error(e);
      setSocialMessage("Davet gönderilemedi.");
    }
  }

  async function acceptGameInvite(invite) {
    if (!invite?.roomCode || !user?.uid) return;
    try {
      const snap = await get(ref(db, `rooms/${invite.roomCode}`));
      if (!snap.exists()) {
        setSocialMessage("Bu puzzle odası artık mevcut değil.");
        await remove(ref(db, `roomInvites/${user.uid}/${invite.roomCode}`));
        return;
      }
      await remove(ref(db, `roomInvites/${user.uid}/${invite.roomCode}`));
      onEnterRoom(invite.roomCode, profile?.name || playerName || "Oyuncu", true);
    } catch (e) {
      console.error(e);
      setSocialMessage("Puzzle daveti açılamadı.");
    }
  }

  async function rejectGameInvite(invite) {
    if (!user?.uid || !invite?.roomCode) return;
    await remove(ref(db, `roomInvites/${user.uid}/${invite.roomCode}`));
  }

  function makeRandomPuzzleImage() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#7c83fd"/><stop offset=".5" stop-color="#f48fb1"/><stop offset="1" stop-color="#ffd6a5"/></linearGradient>
      <radialGradient id="r"><stop stop-color="#fff" stop-opacity=".9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>
      <rect width="1200" height="800" fill="url(#g)"/><circle cx="260" cy="230" r="190" fill="url(#r)"/><circle cx="900" cy="560" r="240" fill="url(#r)"/>
      <path d="M0 610 Q220 480 430 620 T850 600 T1200 520 V800 H0Z" fill="#ffffff" opacity=".22"/>
      <text x="600" y="395" text-anchor="middle" font-family="Arial" font-size="72" font-weight="700" fill="#fff">Rastgele Puzzle</text>
      <text x="600" y="465" text-anchor="middle" font-family="Arial" font-size="30" fill="#fff" opacity=".9">İki oyuncu • birlikte çöz</text>
    </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  async function startRandomMatch() {
    if (!user || user.isAnonymous) {
      setMatchMessage("Rastgele eşleşme için bir hesapla giriş yapmalısın.");
      return;
    }
    setMatchmaking(true);
    setMatchMessage("Uygun bir oyuncu aranıyor...");
    const myRef = ref(db, `matchmaking/${user.uid}`);
    const ticket = { uid: user.uid, name: profile?.name || playerName || "Oyuncu", at: Date.now(), status: "waiting" };
    try {
      await set(myRef, ticket);
      onDisconnect(myRef).remove();

      const snap = await get(ref(db, "matchmaking"));
      const queue = snap.val() || {};
      const other = Object.entries(queue)
        .filter(([uid, p]) => uid !== user.uid && p?.status === "waiting")
        .sort((a,b) => Number(a[1]?.at||0)-Number(b[1]?.at||0))[0];

      if (other) {
        const [otherUid, otherPlayer] = other;
        const pair = [user.uid, otherUid].sort();
        const code = `R${pair[0].slice(-3)}${pair[1].slice(-3)}`.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
        const roomRef = ref(db, `rooms/${code}`);
        const roomSnap = await get(roomRef);
        if (!roomSnap.exists()) {
          const dataUrl = makeRandomPuzzleImage();
          const width = 1200, height = 800, rows = 5, cols = 10, boardW = 900, boardH = 600;
          const { generateEdges, pieceEdges, mulberry32, scatterPosition, createShuffledOrder } = await import("./puzzleUtils.js");
          const seed = Math.floor(Math.random() * 0xffffffff);
          const rand = mulberry32(seed + 1);
          const edges = generateEdges(rows, cols, seed);
          const order = createShuffledOrder(rows * cols, seed);
          const pieces = {};
          for (let r=0;r<rows;r++) for(let c=0;c<cols;c++) {
            const key=`${r}_${c}`;
            const pos=scatterPosition(r,c,rows,cols,boardW/cols,boardH/rows,670,boardW,rand,order);
            pieces[key]={edges:pieceEdges(r,c,rows,cols,edges.edgesV,edges.edgesH),x:Math.round(pos.x),y:Math.round(pos.y),placed:false,placedBy:null,movedBy:null,movedAt:0,rotation:0};
          }
          await set(roomRef,{image:dataUrl,imgWidth:width,imgHeight:height,rows,cols,seed,boardW,boardH,edges,difficulty:"relaxed",difficultyName:"Rastgele",totalPieces:50,rotatePieces:false,hintsAllowed:5,previewAllowed:true,createdAt:Date.now(),pieces,players:{},matchmade:true});
        }
        await update(ref(db), {
          [`matchmaking/${user.uid}`]: null,
          [`matchmaking/${otherUid}`]: null,
        });
        setMatchMessage("Eşleşme bulundu.");
        setMatchmaking(false);
        onEnterRoom(code, profile?.name || playerName || "Oyuncu", true);
        return;
      }

      // Poll until someone appears, then let the next poller create the room.
      let tries = 0;
      const timer = setInterval(async () => {
        tries++;
        const s = await get(ref(db, "matchmaking"));
        const q = s.val() || {};
        const match = Object.entries(q).find(([uid,p]) => uid !== user.uid && p?.status === "waiting");
        if (match) {
          clearInterval(timer);
          await update(ref(db), {
            [`matchmaking/${user.uid}/status`]: "matched",
            [`matchmaking/${match[0]}/status`]: "matched",
          });
          // Other side will create/join through its own polling cycle.
          setMatchMessage("Eşleşme bulundu, oda hazırlanıyor...");
        } else if (tries >= 60) {
          clearInterval(timer);
          await remove(myRef);
          setMatchmaking(false);
          setMatchMessage("Şimdilik uygun oyuncu bulunamadı.");
        }
      }, 1000);
    } catch (e) {
      console.error(e);
      setMatchmaking(false);
      setMatchMessage("Eşleşme başlatılamadı.");
    }
  }

  async function handleCreate() {
    if (user?.isAnonymous) return setError("Misafir oyuncular puzzle oluşturamaz. Bir hesapla devam et.");
    if (!file) return setError("Önce bir fotoğraf seç.");
    if (puzzlesRemaining !== null && puzzlesRemaining <= 0) return setError("Puzzle hakkın kalmadı.");
    setBusy(true); setError("");
    try {
      const { dataUrl, width, height } = await resizeImage(file);
      const { cols, rows } = computeGrid(width, height, selected.pieces);
      const boardW = selected.pieces === 200 ? 1000 : 900;
      const boardH = Math.max(360, Math.round((height / width) * boardW));
      const pieceW = boardW / cols, pieceH = boardH / rows;
      let code = makeRoomCode();
      for (let i = 0; i < 8; i++) {
        const snap = await get(ref(db, `rooms/${code}`));
        if (!snap.exists()) break;
        code = makeRoomCode();
      }
      const seed = Math.floor(Math.random() * 0xffffffff);
      const rand = mulberry32(seed + 1);
      const edges = generateEdges(rows, cols, seed);
      const shuffleOrder = createShuffledOrder(rows * cols, seed);
      const trayTop = boardH + 70;
      const pieces = {};
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        const key = `${r}_${c}`;
        const pos = scatterPosition(r, c, rows, cols, pieceW, pieceH, trayTop, boardW, rand, shuffleOrder);
        pieces[key] = {
          edges: pieceEdges(r, c, rows, cols, edges.edgesV, edges.edgesH),
          x: Math.round(pos.x), y: Math.round(pos.y), placed: false, placedBy: null, movedBy: null, movedAt: 0,
          rotation: selected.rotate ? [0, 90, 180, 270][Math.floor(rand() * 4)] : 0,
        };
      }
      const imageUrl = dataUrl;

      await set(ref(db, `rooms/${code}`), {
        ownerUid: user.uid,
        image: imageUrl, imgWidth: width, imgHeight: height, rows, cols, seed, boardW, boardH,
        edges, difficulty: selected.id, difficultyName: selected.name, totalPieces: selected.pieces,
        rotatePieces: selected.rotate, hintsAllowed: selected.hints, previewAllowed: selected.preview,
        createdAt: Date.now(),
        players: {
          [user.uid]: {
            name: profile?.name || name.trim() || playerName || "Oyuncu",
            connected: true,
            joinedAt: Date.now(),
          },
        },
      });
      await set(ref(db, `rooms/${code}/pieces`), pieces);
      const nextRemaining = Math.max(0, (Number(puzzlesRemaining) || 3) - 1);
      await set(ref(db, `users/${user.uid}/puzzlesRemaining`), nextRemaining);
      setPuzzlesRemaining(nextRemaining);
      window.__lastCreatedRoomCode = code;
      // Odanın açılması, davet yazısına bağlı kalmasın.
      // Bir arkadaş daveti Rules/bağlantı yüzünden reddedilse bile oda normal şekilde açılır.
      if (selectedInviteFriends.length) {
        const inviteData = {
          roomCode: code,
          fromUid: user.uid,
          fromName: profile?.name || name.trim() || playerName || "Oyuncu",
          at: Date.now(),
          status: "pending",
        };
        await Promise.all(selectedInviteFriends.map(async (uid) => {
          try {
            await set(ref(db, `roomInvites/${uid}/${code}`), inviteData);
          } catch (inviteError) {
            console.warn("Arkadaş daveti gönderilemedi:", uid, inviteError);
          }
        }));
      }
      onEnterRoom(code, name.trim() || playerName || "Oyuncu");
    } catch (e) {
      console.error(e);
      setError(e?.code === "PERMISSION_DENIED" ? "Firebase erişim izni vermedi." : (e?.message || "Bir şeyler ters gitti."));
    } finally { setBusy(false); }
  }

  async function handleJoin() {
    const code = joinCode.trim().toUpperCase();
    if (!code) return setError("Oda kodunu gir.");
    setBusy(true); setError("");
    try {
      const snap = await get(ref(db, `rooms/${code}`));
      if (!snap.exists()) return setError("Böyle bir oda bulunamadı.");
      onEnterRoom(code, name.trim() || playerName || "Oyuncu", true);
    } catch (e) { console.error(e); setError(e?.message || "Odaya bağlanılamadı."); }
    finally { setBusy(false); }
  }

  return (
    <main className="home-shell">
      <div className="home-decoration" aria-hidden="true"><span/><span/><span/><span/></div>
      <section className="home-card premium-card">
        <div className="brand-mark" aria-hidden="true"><i/><i/><i/><i/></div>
        <div className="eyebrow">BİRLİKTE TAMAMLA</div>
        <h1>Bir fotoğrafı<br/><em>anıya</em> dönüştür.</h1>
        <p className="subtitle">Fotoğrafını seç, kendi puzzle'ını oluştur ve başka biriyle aynı anda çöz.</p>

        <div className="top-nav">
          <div className="top-brand-status"><span className="online-pulse"></span><span>{accountLoading ? "Hesap yükleniyor..." : `${puzzlesRemaining ?? 0} puzzle hakkı`}</span></div>
          <div className="top-user-actions">
            <span className="top-user-name">{profile?.name || playerName || "Oyuncu"}</span>
            <button className="icon-profile-button" title="Profil" onClick={() => { setError(""); setProfileOpen(true); }}>
              {profileAvatar ? <img src={profileAvatar} alt="" /> : <span>{(playerName || "O").slice(0,1).toUpperCase()}</span>}
            </button>
            <button className="theme-toggle-button" type="button" onClick={onToggleTheme} title={theme === "dark" ? "Açık temaya geç" : "Koyu temaya geç"} aria-label={theme === "dark" ? "Açık temaya geç" : "Koyu temaya geç"}>
              <span className="theme-toggle-icon theme-toggle-moon" aria-hidden="true"></span>
              <span className="theme-toggle-icon theme-toggle-sun" aria-hidden="true"></span>
              <i className={theme === "dark" ? "is-dark" : "is-light"}></i>
            </button>
            <button className="icon-notification-button" title="Bildirimler" onClick={() => {
                setNotificationsOpen(v => {
                  const next = !v;
                  if (next) markNotificationsRead();
                  return next;
                });
              }}>
              <span className="bell-icon"></span>
              {unreadNotificationCount > 0 && <b>{Math.min(99, unreadNotificationCount)}</b>}
            </button>
            <button className="text-button top-logout" onClick={() => signOut(auth)}>Çıkış</button>
          </div>
        </div>

        {mode === "choose" && !user?.isAnonymous && profile && (
          <div className="home-dashboard">
            <div className="home-dashboard-head">
              <div>
                <span className="panel-kicker">HESABIN</span>
                <strong>{profile.name || "Oyuncu"}</strong>
                <span>İlerlemen ve oyun istatistiklerin</span>
              </div>
              <button className="home-profile-link" onClick={() => setProfileOpen(true)}>Profil</button>
            </div>
            <div className="home-stat-strip">
              <div><span>Seviye</span><b>{getLevel(profile.xp)}</b></div>
              <div><span>XP</span><b>{safeNumber(profile.xp)}</b></div>
              <div><span>Tamamlanan</span><b>{safeNumber(profile.completedPuzzles)}</b></div>
              <div><span>Arkadaş</span><b>{friends.length}</b></div>
            </div>
          </div>
        )}

        {mode === "choose" && <div className="choice-grid">
          <button className="big-choice blue" onClick={() => { setError(""); setMode("create"); }}><span>Yeni puzzle</span><small>Fotoğrafından bir oda oluştur</small></button>
          <button className="big-choice pink" onClick={() => { setError(""); setMode("join"); }}><span>Odaya katıl</span><small>Bir arkadaşının kodunu kullan</small></button>
        </div>}

        {mode === "create" && <div className="create-flow">
          <div className="section-title"><span>01</span> Fotoğrafını seç</div>
          <label className="upload-zone"><input type="file" accept="image/*" disabled={busy} onChange={e => { setFile(e.target.files?.[0] || null); setError(""); }}/><div className="upload-art"><i/><i/><i/></div><strong>{file ? file.name : "Fotoğrafı buraya bırak"}</strong><small>{file ? "Fotoğraf hazır" : "veya seçmek için tıkla"}</small></label>
          <div className="section-title"><span>02</span> Zorluk seç</div>
          <div className="difficulty-grid">{DIFFICULTIES.map(d => <button key={d.id} className={`difficulty ${difficulty === d.id ? "active" : ""}`} onClick={() => setDifficulty(d.id)}><b>{d.name}</b><small>{d.pieces} parça · {d.rotate ? "döndürme açık" : "sabit"}</small><em>{d.desc}</em></button>)}</div>
          <div className="difficulty-info"><strong>{selected.name}</strong><span>{selected.hints} yardım hakkı · {selected.preview ? "fotoğraf önizlemesi açık" : "önizleme kapalı"}</span></div>
          <label className="field"><span>Adın</span><input value={name} onChange={e => setName(e.target.value)} placeholder="Oyuncu" disabled={busy}/></label><label className="field"><span>Arkadaşlarını doğrudan davet et</span>
<div className="friend-invite-picker">
{friends.length ? friends.map(f => <label key={f.uid} className={`friend-invite-chip ${selectedInviteFriends.includes(f.uid) ? "selected" : ""}`}>
<input type="checkbox" checked={selectedInviteFriends.includes(f.uid)} onChange={e => setSelectedInviteFriends(current => e.target.checked ? [...current, f.uid] : current.filter(id => id !== f.uid))}/>
<span>{f.name}</span>
</label>) : <small>Henüz arkadaşın yok. Puzzle'ı oluşturduktan sonra da davet linkini kullanabilirsin.</small>}
</div></label>
          {error && <div className="error">{error}</div>}
          <div className="row-buttons"><button className="btn ghost" onClick={() => setMode("choose")} disabled={busy}>Geri</button><button className="btn primary" disabled={busy || accountLoading || puzzlesRemaining === 0} onClick={handleCreate}>{busy ? "Hazırlanıyor..." : "Puzzle'ı oluştur"}</button></div>
        </div>}

        {mode === "join" && <div className="create-flow"><div className="section-title"><span>01</span> Oda kodunu gir</div><label className="field"><span>Oda kodu</span><input value={joinCode} onChange={e => setJoinCode(e.target.value.toUpperCase())} placeholder="ABC123" maxLength={8} disabled={busy}/></label><label className="field"><span>Adın</span><input value={name} onChange={e => setName(e.target.value)} placeholder="Oyuncu" disabled={busy}/></label>{error && <div className="error">{error}</div>}<div className="row-buttons"><button className="btn ghost" onClick={() => setMode("choose")} disabled={busy}>Geri</button><button className="btn primary" disabled={busy} onClick={handleJoin}>{busy ? "Bağlanıyor..." : "Odaya katıl"}</button></div></div>}

      </section>


      {notificationsOpen && notifications.length > 0 && (
        <div className="notification-modal-backdrop" onClick={() => setNotificationsOpen(false)}>
          <section className="notification-modal" onClick={e => e.stopPropagation()}>
            <div className="notification-modal-head">
              <div><span className="panel-kicker">BİLDİRİMLER</span><h3>Bekleyenler</h3></div>
              <button className="drawer-close" onClick={() => setNotificationsOpen(false)}>×</button>
            </div>
            <div className="notification-list">
              {notifications.map(n => (
                <div className="notification-card" key={n.id}>
                  <div className={`notification-symbol ${n.type}`}>{n.type === "friend" && n.avatar ? <img src={n.avatar} alt="" /> : (n.type === "friend" ? "＋" : "◆")}</div>
                  <div className="notification-copy">
                    <strong>{n.type === "friend" ? `${n.name} arkadaşlık isteği gönderdi` : `${n.name} seni puzzle'a davet etti`}</strong>
                    <span>{n.type === "friend" ? "Profiline bakabilir veya isteği kabul edebilirsin." : "Ortak puzzle'a katılmak için seç."}</span>
                  </div>
                  {n.type === "friend" ? (
                    <div className="notification-actions">
                      <button className="btn primary tiny" onClick={() => { const r = incomingRequests.find(x => x.uid === n.uid); if (r) acceptFriend(r); setNotificationsOpen(false); }}>Kabul</button>
                      <button className="btn ghost tiny" onClick={() => { const r = incomingRequests.find(x => x.uid === n.uid); if (r) rejectFriend(r); }}>Reddet</button>
                      <button className="btn ghost tiny" onClick={() => { openProfile({uid:n.uid,name:n.name}); setNotificationsOpen(false); }}>Profil</button>
                    </div>
                  ) : (
                    <div className="notification-actions">
                      <button className="btn primary tiny" onClick={() => { const inv = gameInvites.find(x => x.roomCode === n.code || x.code === n.code); if (inv) acceptGameInvite(inv); setNotificationsOpen(false); }}>Katıl</button>
                      <button className="btn ghost tiny" onClick={() => rejectGameInvite({roomCode:n.code})}>Reddet</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
      {profileOpen && profile && (
        <div className="profile-drawer-backdrop" onClick={() => setProfileOpen(false)}>
          <aside className="profile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-top">
              <div><span className="panel-kicker">OYUNCU ALANI</span><h2>Profilin</h2><p>İlerlemeni, rozetlerini ve arkadaşlarını burada yönet.</p></div>
              <button className="drawer-close" onClick={() => setProfileOpen(false)}>×</button>
            </div>
            <div className="drawer-identity">
              <label className="profile-avatar profile-avatar-large profile-avatar-edit" title="Profil fotoğrafını değiştir">
              {profileAvatar ? <img src={profileAvatar} alt="" /> : <span>{(profile.name || "O").slice(0,1).toUpperCase()}</span>}
              <input type="file" accept="image/*" onChange={e => updateProfileAvatar(e.target.files?.[0])} />
              <i>+</i>
            </label>
              <div><strong>{profile.name || "Oyuncu"}</strong><span>Seviye {getLevel(profile.xp)} · {profile.xp || 0} XP</span></div>
            </div>
            <div className="drawer-account-actions"><button className="btn primary" onClick={() => { setEditName(profile.name || ""); setSettingsTab("profile"); setSettingsOpen(true); }}>Profili düzenle</button></div>
            <div className="drawer-xp"><div><span>Seviye ilerlemesi</span><b>{(profile.xp || 0) % 500} / 500 XP</b></div><div className="xp-track"><i style={{width: `${Math.min(100, ((profile.xp || 0) % 500) / 5)}%`}} /></div></div>
            <div className="drawer-stat-grid"><div><b>{profile.completedPuzzles || 0}</b><span>Puzzle</span></div><div><b>{profile.togetherPuzzles || 0}</b><span>Birlikte</span></div><div><b>{profile.bestTime ? formatHomeTime(profile.bestTime) : "—"}</b><span>Rekor</span></div></div>
            <section className="drawer-section history-section"><div className="drawer-section-title"><span>YAPILAN PUZZLELAR</span><b>{Array.isArray(profile.history) ? profile.history.length : 0}</b></div>{Array.isArray(profile.history) && profile.history.length > 0 ? <div className="history-grid">{profile.history.slice(0,20).map((item,index)=><div className="history-card" key={`${item.roomCode || "puzzle"}-${item.completedAt || index}`}>{item.imageUrl ? <img src={item.imageUrl} alt="Tamamlanan puzzle" loading="lazy"/> : <div className="history-image-placeholder">PUZZLE</div>}<div className="history-card-copy"><strong>{item.difficulty || "Puzzle"}</strong><span>{item.pieces || "—"} parça · {formatHomeTime(item.time)}</span><small>{item.completedAt ? new Date(item.completedAt).toLocaleDateString("tr-TR") : ""}</small></div></div>)}</div> : <div className="social-empty">Henüz tamamladığın puzzle yok.</div>}</section>
            <section className="drawer-section"><div className="drawer-section-title"><span>ROZETLER</span><b>{profile.badges?.length || 0} / {BADGES.length}</b></div><div className="drawer-badges">{BADGES.map(b => { const earned = profile.badges?.includes(b.id); return <div key={b.id} className={`drawer-badge ${earned ? "earned" : "locked"}`}><i>{earned ? "✓" : "·"}</i><span>{b.name}</span></div>; })}</div></section>
            {!user?.isAnonymous && <section className="drawer-section social-section"><div className="drawer-section-title"><span>SOSYAL</span><b>{friends.length} arkadaş</b></div><div className="social-search"><input value={socialQuery} onChange={e => setSocialQuery(e.target.value)} onKeyDown={e => { if (e.key === "Enter") searchProfiles(); }} placeholder="Oyuncu adı ara"/><button className="btn primary" onClick={searchProfiles} disabled={socialBusy}>{socialBusy ? "..." : "Ara"}</button></div>{socialMessage && <div className="social-message">{socialMessage}</div>}{socialResults.length > 0 && <div className="social-results">{socialResults.map(p => <div className="social-result" key={p.uid}><div className="mini-avatar avatar-click" onClick={() => p.avatar && setAvatarViewer({ src: p.avatar, name: p.name || "Oyuncu" })}>{p.avatar ? <img src={p.avatar} alt="" /> : (p.name || "O").slice(0,1).toUpperCase()}</div><div><strong>{p.name || "Oyuncu"}</strong><span>Seviye {getLevel(p.xp)} · {p.completedPuzzles || 0} puzzle</span></div><button className="btn tiny ghost" onClick={() => openProfile(p)}>Profil</button><button className="btn tiny ghost" disabled={!!sentRequests[p.uid]} onClick={() => addFriend(p)}>{sentRequests[p.uid] ? "Gönderildi" : "Ekle"}</button></div>)}</div>}<div className="friend-list">{friends.map(f => <div className="friend-row" key={f.uid}>
<div className="mini-avatar" onClick={() => openProfile(f)}>{f.avatar ? <img src={f.avatar} alt="" /> : (f.name || "O").slice(0,1).toUpperCase()}</div>
<div onClick={() => openProfile(f)} className="friend-main"><strong>{f.name}</strong><span>{f.completedPuzzles || 0} puzzle · Seviye {getLevel(f.xp)}</span></div>
<div className="friend-row-actions"><button className="mini-action" onClick={() => openFriendChat(f)}>Sohbet{unreadChats[f.uid] ? <i className="unread-dot"/> : null}</button><button className="mini-action" onClick={() => openProfile(f)}>Profil</button><button className="mini-action danger" onClick={() => removeFriend(f)}>Sil</button></div>
</div>)}{!friends.length && !socialResults.length && <div className="social-empty">Arkadaşlarını isimleriyle bul. Eşleştiğinizde davet linkiyle aynı odada oynayabilirsiniz.</div>}</div>
              {blockedProfiles.length > 0 && <div className="request-box blocked-box"><div className="drawer-section-title"><span>ENGELLENENLER</span><b>{blockedProfiles.length}</b></div>{blockedProfiles.map(p => <div className="social-result" key={p.uid}><div className="mini-avatar avatar-click" onClick={() => p.avatar && setAvatarViewer({ src: p.avatar, name: p.name || "Oyuncu" })}>{p.avatar ? <img src={p.avatar} alt="" /> : (p.name || "O").slice(0,1).toUpperCase()}</div><div><strong>{p.name || "Oyuncu"}</strong><span>Engellenmiş hesap</span></div><button className="btn tiny ghost" onClick={() => unblockUser(p)}>Engeli kaldır</button></div>)}</div>}

              {incomingRequests.length > 0 && <div className="request-box"><div className="drawer-section-title"><span>GELEN İSTEKLER</span><b>{incomingRequests.length}</b></div>{incomingRequests.map(r => <div className="social-result" key={r.uid}><div className="mini-avatar avatar-click" onClick={() => r.avatar && setAvatarViewer({ src: r.avatar, name: r.name || "Oyuncu" })}>{r.avatar ? <img src={r.avatar} alt="" /> : (r.name || "O").slice(0,1).toUpperCase()}</div><div><strong>{r.name || "Oyuncu"}</strong><span>Seninle arkadaş olmak istiyor</span></div><button className="btn tiny primary" onClick={() => acceptFriend(r)}>Kabul</button><button className="btn tiny ghost" onClick={() => rejectFriend(r)}>Sil</button></div>)}</div>}

              {gameInvites.length > 0 && <div className="request-box room-invites"><div className="drawer-section-title"><span>PUZZLE DAVETLERİ</span><b>{gameInvites.length}</b></div>{gameInvites.map(inv => <div className="social-result" key={inv.code}><div className="mini-avatar">{(inv.fromName || "O").slice(0,1).toUpperCase()}</div><div><strong>{inv.fromName || "Oyuncu"}</strong><span>Seni ortak puzzle'a davet etti</span></div><button className="btn tiny primary" onClick={() => acceptGameInvite(inv)}>Katıl</button><button className="btn tiny ghost" onClick={() => rejectGameInvite(inv)}>Sil</button></div>)}</div>}
              {chatFriend && <div className="chat-panel"><div className="chat-head"><strong>{chatFriend.name}</strong><button className="drawer-close" onClick={() => setChatFriend(null)}>×</button></div><div className="chat-messages">{chatMessages.map(m => <div key={m.id} className={`chat-bubble ${m.senderId === user.uid ? "mine" : ""}`}><span>{m.text}</span><small>{new Date(m.at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})}</small></div>)}</div><div className="chat-compose"><input value={chatText} onChange={e=>setChatText(e.target.value)} onKeyDown={e=>{if(e.key==="Enter") sendChatMessage();}} placeholder="Mesaj yaz..."/><button className="btn primary" onClick={sendChatMessage}>Gönder</button></div></div>}

              {selectedProfile && <div className="selected-profile-card">
                <div className="selected-profile-head"><button className="drawer-close" onClick={() => setSelectedProfile(null)}>×</button><div className="profile-avatar profile-avatar-large avatar-click" onClick={() => selectedProfile.avatar && setAvatarViewer({ src: selectedProfile.avatar, name: selectedProfile.name || "Oyuncu" })}>{selectedProfile.avatar ? <img src={selectedProfile.avatar} alt="" /> : (selectedProfile.name || "O").slice(0,1).toUpperCase()}</div><div><span className="panel-kicker">OYUNCU PROFİLİ</span><h3>{selectedProfile.name || "Oyuncu"}</h3><p>Seviye {getLevel(selectedProfile.xp)} · {selectedProfile.xp || 0} XP</p></div></div>
                <div className="profile-stat-grid compact"><div className="profile-stat-card"><b>{selectedProfile.completedPuzzles || 0}</b><span>Puzzle</span></div><div className="profile-stat-card accent-pink"><b>{selectedProfile.togetherPuzzles || 0}</b><span>Birlikte</span></div></div>
                <div className="selected-profile-actions"><button className="btn primary" onClick={() => addFriend(selectedProfile)} disabled={selectedProfile.uid === user.uid || !!friends.some(f => f.uid === selectedProfile.uid) || !!sentRequests[selectedProfile.uid]}> {friends.some(f => f.uid === selectedProfile.uid) ? "Arkadaşsınız" : sentRequests[selectedProfile.uid] ? "İstek gönderildi" : "Arkadaş ekle"}</button>{friends.some(f => f.uid === selectedProfile.uid) && <button className="btn ghost" onClick={() => openFriendChat(selectedProfile)}>Sohbet</button>}<button className="btn ghost danger-btn" onClick={() => blockUser(selectedProfile)}>Engelle</button></div>
              </div>}
            </section>}
          </aside>
        </div>
      )}

      {avatarViewer && (
        <div className="avatar-viewer-backdrop" onClick={() => setAvatarViewer(null)}>
          <div className="avatar-viewer" onClick={e => e.stopPropagation()}>
            <button className="avatar-viewer-close" onClick={() => setAvatarViewer(null)} aria-label="Kapat">×</button>
            <img src={avatarViewer.src} alt={avatarViewer.name || "Profil fotoğrafı"} />
            <strong>{avatarViewer.name || "Oyuncu"}</strong>
          </div>
        </div>
      )}

      {settingsOpen && profile && (
        <div className="settings-modal-backdrop" onClick={() => setSettingsOpen(false)}>
          <section className="settings-modal" onClick={e => e.stopPropagation()}>
            <div className="settings-head"><div><span className="panel-kicker">HESAP AYARLARI</span><h3>Profilini yönet</h3></div><button className="drawer-close" onClick={() => setSettingsOpen(false)}>×</button></div>
            <div className="settings-tabs"><button className={settingsTab === "profile" ? "active" : ""} onClick={() => setSettingsTab("profile")}>Profil</button><button className={settingsTab === "security" ? "active" : ""} onClick={() => setSettingsTab("security")}>Güvenlik</button></div>
            {settingsTab === "profile" ? (
              <div className="settings-form">
                <label className="settings-avatar profile-avatar profile-avatar-large profile-avatar-edit">{profileAvatar ? <img src={profileAvatar} alt="" /> : <span>{(editName || "O").slice(0,1).toUpperCase()}</span>}<input type="file" accept="image/*" onChange={e => updateProfileAvatar(e.target.files?.[0])}/><i>+</i></label>
                <label className="field"><span>Görünen ad</span><input value={editName} onChange={e => setEditName(e.target.value)} maxLength={40}/></label>
                <div className="settings-option theme-option"><div><strong>Koyu tema</strong><span>Puzzle alanı ve arayüzü koyu görünüme geçir.</span></div><button className={`switch ${theme === "dark" ? "on" : ""}`} onClick={onToggleTheme}><i/></button></div>
                <button className="btn primary settings-save" disabled={settingsBusy} onClick={saveProfileSettings}>{settingsBusy ? "Kaydediliyor..." : "Değişiklikleri kaydet"}</button>
              </div>
            ) : (
              <div className="settings-form">
                <div className="security-note"><strong>Şifre</strong><span>Hesabının giriş şifresini buradan değiştirebilirsin.</span></div>
                <label className="field"><span>Yeni şifre</span><input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="En az 6 karakter"/></label>
                <label className="field"><span>Yeni şifre tekrar</span><input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Şifreyi tekrar yaz"/></label>
                <button className="btn primary settings-save" disabled={settingsBusy} onClick={changePassword}>{settingsBusy ? "Değiştiriliyor..." : "Şifreyi değiştir"}</button>
                <div className="security-divider"><span>GÖRÜNÜRLÜK VE ERİŞİM</span></div>
                <div className="settings-option"><div><strong>Profilim aramalarda görünsün</strong><span>Diğer oyuncular seni isimle bulabilsin.</span></div><button className={`switch ${profileVisible ? "on" : ""}`} onClick={() => setProfileVisible(v => !v)}><i/></button></div>
                <div className="settings-option"><div><strong>Arkadaşlık isteklerine izin ver</strong><span>Sana yeni arkadaşlık isteği gönderilebilsin.</span></div><button className={`switch ${allowFriendRequests ? "on" : ""}`} onClick={() => setAllowFriendRequests(v => !v)}><i/></button></div>
                <div className="settings-option"><div><strong>Mesajlara izin ver</strong><span>Arkadaşların sana özel mesaj gönderebilsin.</span></div><button className={`switch ${allowMessages ? "on" : ""}`} onClick={() => setAllowMessages(v => !v)}><i/></button></div>
                <button className="btn primary settings-save" disabled={settingsBusy} onClick={saveProfileSettings}>{settingsBusy ? "Kaydediliyor..." : "Güvenlik ve görünürlük ayarlarını kaydet"}</button>
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
