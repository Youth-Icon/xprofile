"use server";

import supabase from "./supabase";

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

  const { data, error } = await supabase.from("profiles").insert([
    {
      xusername: userData.get("twitter"),
      name: userData.get("username"),
      location: userData.get("location"),
      github: userData.get("github"),
      banner_color: userData.get("color"),
      about: userData.get("description"),
      tags: userData.getAll("tags"),
      socials: userData.getAll("socials"),
      repos: ["dummy repos"],
      links: ["dummy links"],
      github_stars: githubstars,
      github_followers: githubfollowers,
    },
  ]);

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }
}
