
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authintelligentnote.firebaseapp.com",
  projectId: "authintelligentnote",
  storageBucket: "authintelligentnote.firebasestorage.app",
  messagingSenderId: "981253922196",
  appId: "1:981253922196:web:5b7f80e3c3f91a697d8381"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };