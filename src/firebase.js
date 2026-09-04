import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Bu config public/client-side bilgidir, gizli bir anahtar değildir.
const firebaseConfig = {
  apiKey: "AIzaSyAJ4sGcHNhzcKSvGvqbYnqt9TtNj-owksM",
  authDomain: "puzzle-907d0.firebaseapp.com",
  // NOT: Realtime Database URL'in bu değilse (Firebase Console > Realtime Database
  // sayfasının en üstünde yazan adresle) burayı güncelle. Bölgeye göre değişebilir,
  // örn: https://puzzle-907d0-default-rtdb.europe-west1.firebasedatabase.app
  databaseURL: "https://puzzle-907d0-default-rtdb.firebaseio.com/",
  projectId: "puzzle-907d0",
  messagingSenderId: "443092750922",
  appId: "1:443092750922:web:f7a6520020788aead5ccb3",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
