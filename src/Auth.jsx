import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  reload,
  updateProfile,
} from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, db } from "./firebase.js";

export default function Auth() {
  const [isRegister, setIsRegister] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isRegister) {
        const cleanName = name.trim();
        const cleanEmail = email.trim().toLowerCase();

        if (!cleanName) {
          throw new Error("Lütfen bir isim gir.");
        }

        const result = await createUserWithEmailAndPassword(
          auth,
          cleanEmail,
          password
        );

        await updateProfile(result.user, {
          displayName: cleanName,
        });

        await set(ref(db, `users/${result.user.uid}`), {
          name: cleanName,
          email: cleanEmail,
          puzzlesRemaining: 3,
          createdAt: Date.now(),
        });

        await sendEmailVerification(result.user);

        setVerificationSent(true);
      } else {
        const result = await signInWithEmailAndPassword(
          auth,
          email.trim().toLowerCase(),
          password
        );

        await reload(result.user);

        if (!result.user.emailVerified) {
          setVerificationSent(true);
          return;
        }
      }
    } catch (err) {
      console.error(err);

      const messages = {
        "auth/email-already-in-use": "Bu e-posta zaten kayıtlı.",
        "auth/invalid-email": "Geçerli bir e-posta gir.",
        "auth/weak-password": "Şifre en az 6 karakter olmalı.",
        "auth/invalid-credential": "E-posta veya şifre hatalı.",
        "auth/user-not-found": "Bu hesap bulunamadı.",
        "auth/wrong-password": "Şifre hatalı.",
        "auth/too-many-requests":
          "Çok fazla deneme yapıldı. Biraz sonra tekrar dene.",
      };

      setError(
        messages[err.code] ||
          err.message ||
          "Bir hata oluştu."
      );
    } finally {
      setLoading(false);
    }
  }

  async function checkVerification() {
    setError("");
    setLoading(true);

    try {
      if (!auth.currentUser) {
        setError("Oturum bulunamadı.");
        return;
      }

      await reload(auth.currentUser);

      if (auth.currentUser.emailVerified) {
        // App yeniden başlasın; davet URL'sindeki ?room=... korunur ve
        // kullanıcı doğrulama sonrasında doğrudan davet edilen odaya alınır.
        window.location.reload();
        return;
      }

      setError(
        "E-posta henüz doğrulanmamış. Mail kutunu kontrol et."
      );
    } catch (err) {
      console.error(err);
      setError("Doğrulama kontrol edilemedi.");
    } finally {
      setLoading(false);
    }
  }

  async function resendVerification() {
    setError("");
    setLoading(true);

    try {
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
        setError("Doğrulama e-postası tekrar gönderildi.");
      }
    } catch (err) {
      console.error(err);
      setError("E-posta gönderilemedi. Biraz sonra tekrar dene.");
    } finally {
      setLoading(false);
    }
  }

  if (verificationSent) {
    return (
      <main className="auth-page">
        <div className="auth-card">
          <div className="auth-logo">✉️</div>

          <h1>E-postanı doğrula</h1>

          <p className="auth-subtitle">
            {email} adresine bir doğrulama bağlantısı gönderdik.
          </p>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <button
            type="button"
            className="auth-submit"
            onClick={checkVerification}
            disabled={loading}
          >
            {loading ? "Kontrol ediliyor..." : "Doğrulamayı kontrol et"}
          </button>

          <button
            type="button"
            className="auth-link-button"
            onClick={resendVerification}
            disabled={loading}
          >
            Doğrulama mailini tekrar gönder
          </button>

          <button
            type="button"
            className="auth-link-button"
            onClick={() => {
              setVerificationSent(false);
              setError("");
            }}
          >
            Giriş ekranına dön
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-logo" aria-hidden="true"><i/><i/><i/><i/></div>

        <h1>
          {isRegister ? "Hesap oluştur" : "Hoş geldin"}
        </h1>

        <p className="auth-subtitle">
          {isRegister
            ? "Puzzle'larını kaydetmek için hesap oluştur."
            : "Puzzle'larına devam etmek için giriş yap."}
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          {isRegister && (
            <label>
              <span>İsmin</span>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="İsmin"
                maxLength={30}
                required
              />
            </label>
          )}

          <label>
            <span>E-posta</span>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ornek@mail.com"
              required
            />
          </label>

          <label>
            <span>Şifre</span>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="En az 6 karakter"
              minLength={6}
              required
            />
          </label>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="auth-submit"
            disabled={loading}
          >
            {loading
              ? "Bekleyin..."
              : isRegister
              ? "Hesap oluştur"
              : "Giriş yap"}
          </button>
        </form>

        <div className="auth-switch">
          {isRegister
            ? "Zaten hesabın var mı?"
            : "Hesabın yok mu?"}

          <button
            type="button"
            onClick={() => {
              setIsRegister(!isRegister);
              setError("");
            }}
          >
            {isRegister ? "Giriş yap" : "Kayıt ol"}
          </button>
        </div>
      </div>
    </main>
  );
}
