"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const Dashboard = () => {
  const { user, loading } = useAuth();

  const userFireStoreInfo = {
    about: "test",
    banner_color: "#00fff",
    github_followers: 5,
    github_stars: 7,
    github_username: "bashamega",
    image: 'https://avatars.githubusercontent.com/BashaMega',
    location: 'egypt',
    name: 'Coder_Master',
    slug: 'codermaster',
    links: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/username/' },
      { name: 'Twitter', url: 'https://twitter.com/username' },
      { name: 'Portfolio', url: 'https://username.com' },
    ]
  }
  useEffect(() => {
    if (!loading) {
      if (!user) {
        redirect("/login");
      } else {

      }
    }
  }, [user, loading]);

  return (
    <main>
      {user ? (
        <main className="mt-16 w-screen">
          <nav className="flex p-5 w-full">
            <img src={userFireStoreInfo.image} className="rounded-full mr-5 w-20" alt="User Photo" />
            <div>
              <h1>Hello {userFireStoreInfo.name}</h1>
              <p>@{userFireStoreInfo.slug}</p>
            </div>
            <a
              href={`https://xprofile-git-dev-youthicon.vercel.app/${userFireStoreInfo.slug}`}
              className="cursor-pointer rounded-sm border-white border-2 pl-2 pr-2 justify-center h-10"
              style={{ marginLeft: '70%' }}
            >
              View Profile
            </a>
          </nav>
          <section className=" justify-center">
            <Tabs >
              <TabList className="flex border-b  flex flex-wrap p-2 gap-4 justify-center">
                <Tab className="font-mono cursor-pointer p-1" style={{backgroundColor: 'white', color: 'black'}}>Stats</Tab>
                <Tab className="font-mono cursor-pointer p-1" style={{backgroundColor: 'white', color: 'black'}}>About</Tab>
                <Tab className="font-mono cursor-pointer p-1" style={{backgroundColor: 'white', color: 'black'}}>Links</Tab>
                <Tab className="font-mono cursor-pointer p-1" style={{backgroundColor: 'white', color: 'black'}}>Socials</Tab>
                <Tab className="font-mono cursor-pointer p-1" style={{backgroundColor: 'white', color: 'black'}}>Settings</Tab>
              </TabList>
              <TabPanel id="TabPanel">
                <h1 className="text-center">Stats</h1>
                <section className="flex h-20 justify-between pl-5 pr-5">
                  <div className="border-2 border-white w-20 text-center ">
                    <h1>Rank</h1>
                  </div>
                  <div className="border-2 border-white w-20 text-center ">
                    <h1>Today Profile visits</h1>
                  </div>
                  <div className="border-2 border-white w-20 text-center ">
                    <h1>Profile Visits</h1>
                  </div>
                  <div className="border-2 border-white w-20 text-center ">
                    <h1>Link clicks</h1>
                  </div>
                  <div className="border-2 border-white w-20 text-center">
                    <h1>Todo</h1>
                  </div>
                </section>
                <div></div>
              </TabPanel>
              <TabPanel>
                <h1>About</h1>
                <p>{userFireStoreInfo.about}</p>
              </TabPanel>
              <TabPanel>
                <h1>Links</h1>
                <ul>
                  {userFireStoreInfo.links && userFireStoreInfo.links.map((link: any) => (
                    <li key={link.name}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </TabPanel>
              <TabPanel>
                <h1>Socials</h1>
                <ul>
                  {userFireStoreInfo.socials && userFireStoreInfo.socials.map((link: any) => (
                    <li key={link.name}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </TabPanel>
              <TabPanel>
                <h1>Settings</h1>
              </TabPanel>
            </Tabs>
          </section>

        </main>
      ) : (
        <div>Loading</div>
      )}
    </main>
  );
};

export default Dashboard