// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCojgGzlF4ZKRK9vsXXl_2OsQpCOHoS1WM",
  authDomain: "financely-d0610.firebaseapp.com",
  projectId: "financely-d0610",
  storageBucket: "financely-d0610.appspot.com",
  messagingSenderId: "220704025717",
  appId: "1:220704025717:web:1d0d607407a853dbc85c3c",
  measurementId: "G-59291DGYWJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
