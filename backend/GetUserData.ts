"use server";

import { db } from "@/backend/firebase";
import { collection, getDocs } from "firebase/firestore";

type userData = {
  user: string;
};

export async function GetUserData({ user }: userData) {
  console.log("user", user);

  const querySnapshot = await getDocs(collection(db, "profiles"));
  const profiles = querySnapshot.docs.map((doc) => doc.data());
  const profile = profiles.find((profile) => profile.slug === user);

  console.log("profile", profile);
  return profile;
}
