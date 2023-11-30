import React from "react";
import { getServerAuthSession } from "@/backend/auth";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ProfileSidebar from "./components/ProfileSidebar";
import Skills from "./components/Skills";
import Tags from "./components/Tags";
import Achievements from "./components/Achievements";
import Discover from "./components/Discover";
import ProjectAnalytics from "./components/ProjectAnalytics";
import { env } from "@/env.mjs";
import CompactFooter from "./components/CompactFooter";
import Project from "./components/Project";
import Round from "@/app/(landing)/components/round";

export default async function page({
  params,
}: {
  params: { username: string };
}) {
  // const session = await getServerAuthSession();
  // const username = params.username;

  // const getProfile = async () => {
  //   const res = await fetch(`${env.NEXTAUTH_URL}/api/profile/${username}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const profile = await res.json();
  //   return profile;
  // };

  // const profile = await getProfile();
  // console.log(profile);

  

  return (
    <div>
      <div className="px-4 xs:px-12 pb-12 pt-6">
        {/* Header Component */}
        <div className="mb-[32px]">
          <Header />
        </div>
        <div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 mml:grid-cols-5 lgx:grid-cols-4 gap-6">
            <div className="col-span-1 sm:row-span-2 mml:col-span-3 order-2 sm:order-none">
              {/* Projects Component */}
              <Projects />
            </div>
            <div className="col-span-1 mml:col-span-2 row-span-1 sm:row-span-4 lgx:row-span-4 lgx:col-span-1 order-1 sm:order-none">
            {/* Profile Sidebar Component */}
            <ProfileSidebar />
            </div>

            {/* Nested grid for Skills and Tags */}
            <div className="lgx:col-start-1 sm:col-span-2 mml:col-span-5 lgx:col-span-3  sm:row-span-1 order-3 sm:order-none">
              <div className="flex flex-col sm:flex-row justify-between gap-6">
                <div className="w-auto sm:w-[50%]">
                  <Skills />
                </div>

                <div className="w-auto sm:w-[50%]">
                  <Tags />
                </div>
              </div>
            </div>
            <div className="col-start-1 col-span-2 mml:col-span-5 lgx:col-span-3 row-span-1 order-4 sm:order-none ">
              {/* Achievements Component */}
              <Achievements />
            </div>
          </div>
        </div>
        <div>
          {/* Discover Component */}
          <Discover />
        </div>
        <div className="hidden sm:block max-w-[1325px] mx-auto">
          {/* Analytics Component */}
          <ProjectAnalytics selectedTimePeriod="thisWeek" />
        </div>
      </div>
      <div className="mt-10">
        <CompactFooter />
      </div>
    </div>
  );
}
