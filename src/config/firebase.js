import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzXrmx8MyESG8kIrw88M94tx4g9jzS0hY",
  authDomain: "bookie-5cc26.firebaseapp.com",
  projectId: "bookie-5cc26",
  storageBucket: "bookie-5cc26.firebasestorage.app",
  messagingSenderId: "99275109409",
  appId: "1:99275109409:web:f492cadd681ae980b59f60",
  measurementId: "G-4R44T4WTHD"
};

// ✅ You must log AFTER defining firebaseConfig
console.log("🔥 FIREBASE CONFIG DEBUG:", firebaseConfig);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();



