// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Creating a new instance of the GoogleAuthProvider
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider).then(async (res) => {
      const ref = doc(db, "profiles", res.user?.uid);
      const docRef = await setDoc(ref, {
        email: res.user?.email,
        uid: res.user?.uid,
        createdAt: serverTimestamp(),
        about: "",
        banner_color: "",
        github_followers: "",
        github_stars: "",
        github_username: "",
        image: "",
        links: [],
        location: "",
        name: "",
        socials: [{}],
        twitter: "",
        slug: "",
      });
    });
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};
export { auth, db, signInWithGoogle, logout };
