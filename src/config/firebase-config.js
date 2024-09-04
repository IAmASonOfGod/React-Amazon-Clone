import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsBBzAmOoSgoGcdRV-BkPZoqhjtkd4QHo",
  authDomain: "clone-68dea.firebaseapp.com",
  projectId: "clone-68dea",
  storageBucket: "clone-68dea.appspot.com",
  messagingSenderId: "560633358824",
  appId: "1:560633358824:web:0b7a7ed5cfe9e639dc1c5d",
  measurementId: "G-5H5K0Y47W8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the auth service
const auth = getAuth(firebaseApp);

// Get a reference to the Firestore service
const db = getFirestore(firebaseApp);

// Export the auth functions
export {
  db,
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
};
