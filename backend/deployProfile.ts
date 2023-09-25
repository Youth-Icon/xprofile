"use server";

import supabase from "./supabase";

export async function deployProfile(userData: FormData) {
  //   console.log(userData.getAll("tags"));
  const { data, error } = await supabase.from("profiles").insert([
    {
      xusername: userData.get("twitter"),
      name: userData.get("username"),
      location: "dummy loc",
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
