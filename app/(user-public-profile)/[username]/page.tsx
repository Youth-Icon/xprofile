"use client";

import { MdVerified } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineGooglePlus,
} from "react-icons/ai";
import LinkPlate from "./components/LinkPlate";
import TagChips from "./components/TagChips";
import { startTransition, useEffect, useState } from "react";
import { GetUserData } from "@/backend/GetUserData";
import Image from "next/image";

type UserPublicProfileProps = {
  params: { username: string };
};

const UserPublicProfile = ({ params }: UserPublicProfileProps) => {
  type UserObjectType = {
    about: string;
    image: string;
    location: string;
    slug: string;
    github_username: string;
    name: string;
    twitter: string;
    github_stars: number;
    github_followers: number;
    banner_color: string;
    links: any[]; // Adjust as needed
    socials: {
      type: string;
      link: string;
    }[];
  };

  const [userData, setUserData] = useState<UserObjectType>();

  useEffect(() => {
    try {
      startTransition(() => {
        GetUserData({ user: params.username })
          .then((data) => {
            const userData = data as UserObjectType;
            setUserData(userData);
          })
          .catch((error: string) => {
            console.log(error);
          });
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log("userData", userData);

  return (
    <section className="dark:bg-gradient-to-r dark:from-black dark:via-slate-900 dark:to-black  ">
      <div className="w-full h-32 md:h-48 bg-purple-700"></div>
      <div className="border-white flex flex-col items-center px-3">
        <Image
          src={userData?.image || "/images/placeholder.png"}
          alt={userData?.name || "User Image"}
          width={150}
          height={150}
          className="rounded-full relative border -translate-y-1/2"
        />

        <div className="relative -translate-y-14 flex items-center flex-col w-max max-w-full space-y-6">
          <div className="flex flex-col items-center mx-auto">
            <h1 className="text-4xl font-semibold">
              {userData?.name}
              <MdVerified className="text-blue-600 inline ml-1 text-2xl" />
            </h1>
            <p className="text-gray-500 text-xl -mt-0.5">{userData?.slug} 👋</p>
            <p className="text-lg mt-2">{userData?.about}</p>
          </div>

          {/* tags */}
          <div className="flex flex-wrap justify-center gap-3 text-sm w-4/5 mx-auto">
            <TagChips tag="3D designer" />
            <TagChips tag="UI/UX" />
            <TagChips tag="No-code" />
            <TagChips tag="Designer" />
          </div>

          {/* social media icons */}
          <div className="flex gap-4 ">
            <BsTwitter className="text-3xl" />
            <AiFillLinkedin className="text-3xl" />
            <AiFillGithub className="text-3xl" />
            <AiOutlineGooglePlus className="text-3xl" />
          </div>

          {/* Attached Link */}
          <div>
            <div className="w-full bg-opacity-5 rounded-md border border-purple-300 dark:border-slate-700 backdrop-filter backdrop-blur-3xl bg-purple-700 overflow-hidden">
              <LinkPlate />
              <span className="block border-b border-purple-300 dark:border-slate-700" />
              <LinkPlate />
              <span className="block border-b border-purple-300 dark:border-slate-700" />
              <LinkPlate />
            </div>
          </div>
          {/* Attached Link End  */}
        </div>
      </div>
    </section>
  );
};

export default UserPublicProfile;
