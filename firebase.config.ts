// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE-uwh8Ucztsavj1fenw9DO5gXVpqR-dk",
  authDomain: "netflix-copy-f0350.firebaseapp.com",
  projectId: "netflix-copy-f0350",
  storageBucket: "netflix-copy-f0350.appspot.com",
  messagingSenderId: "722564931183",
  appId: "1:722564931183:web:62e30039fb20a8bbbc379a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };