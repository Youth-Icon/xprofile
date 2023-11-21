import React from "react";
import { getServerAuthSession } from "@/backend/auth";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ProfileSidebar from "./components/ProfileSidebar";
import Skills from "./components/Skills";
import Tags from "./components/Tags";
import Achievements from "./components/Achievements";
import Discover from "./components/Discover";
import ProjectAnalytics from "./components/ProjectAnalytics"
import { env } from "@/env.mjs";
import CompactFooter from "./components/CompactFooter";

export default async function page({ params }: { params: { username: string } }) {
  const session = await getServerAuthSession();
  const username = params.username;


  const getProfile = async () => {
    const res = await fetch(`${env.NEXTAUTH_URL}/api/profile/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const profile = await res.json();
    return profile;
  };

  const profile = await getProfile();
  console.log(profile);

  return (
    <div>
    <div className="px-12 pb-12">
      {/* Header Component */}
      <div className="mb-[32px]">
        <Header />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "32px",
          maxWidth: "1350px",
          margin: "auto",
        }}
      >
        <div>
          {/* Projects Component */}
          <Projects />

          {/* Nested grid for Skills and Tags */}
          <div className="w-full flex gap-[32px]">
            <Skills />
            <Tags />
          </div>
          <div className="mt-[32px]">
            {/* Achievements Component */}
            <Achievements />
          </div>
        </div>

        <div>
          {/* Profile Sidebar Component */}
          <ProfileSidebar />
        </div>
      </div>
      <div>
        {/* Discover Component */}
        <Discover />
      </div>
      <div className="max-w-[1325px] mx-auto">
        {/* Analytics Component */}
        <ProjectAnalytics selectedTimePeriod="thisWeek" />
      </div>
    



    </div>
      <div className="mt-10">
      <CompactFooter/>
    </div>
    </div>
  );
}
