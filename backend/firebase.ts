// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX1hnJ3l5em_8JzninHfoC4LpE-iPvWJ0",
  authDomain: "xprofiledb.firebaseapp.com",
  databaseURL:
    "https://xprofiledb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "xprofiledb",
  storageBucket: "xprofiledb.appspot.com",
  messagingSenderId: "431145649971",
  appId: "1:431145649971:web:decb03c957c89e7fcfe046",
  measurementId: "G-MVR4T3QVPX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
