// getAuth coming from firebase/auth
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "studynotion-2517.firebaseapp.com",
  projectId: "studynotion-2517",
  storageBucket: "studynotion-2517.firebasestorage.app",
  messagingSenderId: "804610072487",
  appId: "1:804610072487:web:cbc379c754cbae277c6082",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// exporting auth and Provider
export { auth, provider };
