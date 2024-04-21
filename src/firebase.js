// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKvdZ5pe_ihP2lwmHSb4D7nZrflVWUtT0",
  authDomain: "nv-restro.firebaseapp.com",
  projectId: "nv-restro",
  storageBucket: "nv-restro.appspot.com",
  messagingSenderId: "151398752004",
  appId: "1:151398752004:web:d16a61697b04898baaba51",
  measurementId: "G-6SX0C4CZC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;