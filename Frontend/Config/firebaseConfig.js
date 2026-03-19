// getAuth coming from firebase/auth
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "studynotion-2517-ef48b.firebaseapp.com",
  projectId: "studynotion-2517-ef48b",
  storageBucket: "studynotion-2517-ef48b.firebasestorage.app",
  messagingSenderId: "51049045559",
  appId: "1:51049045559:web:6c3e51f1faae28eda3e9b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// exporting auth and Provider
export { auth, provider };
