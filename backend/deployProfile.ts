"use server";

import supabase from "./supabase";

export async function deployProfile(userData: FormData) {
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
    },
  ]);

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }
}
