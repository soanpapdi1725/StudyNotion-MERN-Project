import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDytCCgM4J77ggyzfcKw_6zywTp9825Ugk",
  authDomain: "studynotion-2517-2517.firebaseapp.com",
  projectId: "studynotion-2517-2517",
  storageBucket: "studynotion-2517-2517.firebasestorage.app",
  messagingSenderId: "1069796136433",
  appId: "1:1069796136433:web:419dc397da9619a9aa6050",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// exporting auth and Provider
export { auth, provider };
