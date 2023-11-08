"use server";

import prisma from "@/lib/prismaconfig";
import { getServerAuthSession } from "./auth";

const socialPrefix = {
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/in/",
  reddit: "https://reddit.com/u/",
  youtube: "https://youtube.com/",
  paypal: "https://paypal.me/",
};

export async function deployProfile(data: any) {
  const session = await getServerAuthSession();

  // create profile using prisma client
  // const profile = await prisma.profile.create({
  //   data: {
  //     User: {
  //       connect: {
  //         id: session?.user?.id,
  //       },
  //     },
  //     name: data.name,
  //     username: data.username,
  //     email: data.email,
  //     premium: false,
  //     profession: "Student",
  //     portfolio: data.portfolio,
  //     about: data.about,
  //     avatar: data.avatar,
  //     location: data.location,
  //     github: data.username,
  //     bannerColor: data.color,
  //     showGithubGraph: true,
  //     collectMessages: false,
  //     tags: data.tags
  //   },
  // });

  console.log(data, "profile created");
}
