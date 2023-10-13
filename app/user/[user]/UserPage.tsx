"use client";

import { useState, useEffect, useTransition } from "react";
import { GetUserData } from "@/backend/GetUserData";
import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaReddit,
  FaPaypal,
  FaCoffee,
} from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";

type Params = {
  params: {
    user: string;
  };
};

const UserPage = ({ params }: Params) => {
  const [userData, setUserData] = useState<any>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    try {
      startTransition(async () => {
        const data = await GetUserData({ user: params.user });
        JSON.stringify(data);
        setUserData(data);
      });
    } catch (err) {
      console.log(err);
    }

    // setUserData(data);
  }, [params.user]);

  return (
    <main>
      <div className="flex md:flex-row flex-col gap-5 md:gap-0 w-full min-h-screen pt-20">
        <div className="flex flex-col w-full">
          {isPending ? (
            <Skeleton className="w-full h-40 md:h-52" />
          ) : (
            <div
              className="h-40 md:h-52"
              style={{
                backgroundColor: userData?.banner_color,
              }}
            ></div>
          )}
          <div className="flex space-x-2">
            {isPending ? (
              <Skeleton className="w-[115px] h-[115px] ml-2 md:ml-4 -mt-8 border-4 border-white dark:border-black rounded-full" />
            ) : (
              <Image
                src={
                  userData?.image ||
                  "https://avatars.githubusercontent.com/" +
                    userData?.github_username
                }
                alt={userData?.name || userData?.github_username}
                width={115}
                height={115}
                className="rounded-full ml-2 md:ml-4 -mt-8 border-4 border-white dark:border-black text-zinc-700 dark:text-gray-300"
              />
            )}

            <div className="flex flex-col w-full">
              {/* Name Username */}
              <div className="flex items-baseline gap-1">
                {isPending ? (
                  <Skeleton className="w-[200px] h-8 mt-2" />
                ) : (
                  <>
                    <p className="mt-2 font-bold text-lg md:text-xl font-mono">
                      {userData?.name}
                    </p>
                    <p className="font-thin italic dark:text-gray-300 text-gray-700">
                      @{userData?.twitter}
                    </p>
                  </>
                )}
              </div>
              {/* Socials */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserPage;
