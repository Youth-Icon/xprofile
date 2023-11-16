import React from "react";
import { getServerAuthSession } from "@/backend/auth";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ProfileSidebar from "./components/ProfileSidebar";
import Skills from "./components/Skills";
import Tags from "./components/Tags";
import Achievements from "./components/Achievements";
import Discover from "./components/Discover";
import Blob from "./components/Blob";
import BlobCanvas from "./components/BlobCanvas";

export default async function page() {
  const session = await getServerAuthSession();

  return (
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
        <Discover/>
      </div>



      
    </div>
  );
}
