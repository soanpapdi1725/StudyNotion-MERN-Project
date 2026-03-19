import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "studynotion-2517-2517.firebaseapp.com",
  projectId: "studynotion-2517-2517",
  storageBucket: "studynotion-2517-2517.firebasestorage.app",
  messagingSenderId: "1069796136433",
  appId: "1:1069796136433:web:419dc397da9619a9aa6050",
  measurementId: "G-49KGQF29RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// exporting auth and Provider
export { auth, provider, analytics };
