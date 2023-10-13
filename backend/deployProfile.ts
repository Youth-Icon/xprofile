"use server";

import { setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

const socialPrefix = {
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/in/",
  reddit: "https://reddit.com/u/",
  youtube: "https://youtube.com/",
  paypal: "https://paypal.me/",
};

export async function deployProfile(userData: FormData) {
  const githubstars = await fetch(
    `https://api.github-star-counter.workers.dev/user/${userData.get("github")}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data.stars;
    });

  const githubfollowers = await fetch(
    `https://api.github.com/users/${userData.get("github")}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data.followers;
    });

  const newSocial = JSON.parse(userData.get("socials") as string).map(
    (social: { [x: string]: string; type: string }) => {
      return {
        link:
          socialPrefix[social.type as keyof typeof socialPrefix] + social.link,
        type: social.type,
      };
    }
  );

  function convertToSlug(inputString: string) {
    return inputString.toLowerCase().replace(/ /g, "-");
  }

  // const docRef = doc(db, "profiles", `${userData.get("uid")}`);
  // // const docRef = doc(db, "profiles", "GUeFBcIcQ0wzdgu4DzFy");
  // const docSnap = await getDoc(docRef);
  // console.log(docSnap.data());

  await setDoc(doc(db, "profiles", `${userData.get("uid")}`), {
    about: userData.get("description"),
    banner_color: userData.get("color"),
    github_followers: githubfollowers,
    github_stars: githubstars,
    github_username: userData.get("github"),
    image: `https://avatars.githubusercontent.com/${userData.get("github")}`,
    links: userData.getAll("links"),
    location: userData.get("location"),
    name: userData.get("username"),
    socials: newSocial,
    twitter: userData.get("twitter"),
    slug: convertToSlug(userData.get("username") as string),
  });
}
