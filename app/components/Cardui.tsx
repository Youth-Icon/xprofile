"use-client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cardui = (props: any) => {
  const about = props.about;
  const aboutLink = about?.includes("http");

  let aboutLinkMain;
  let aboutWithoutLink;
  // if aboutLink is true, then make it clickable
  if (aboutLink) {
    const aboutArray = about.split(" ");
    aboutLinkMain = aboutArray.find((element: string) =>
      element.includes("http")
    );
    const aboutLinkIndex = aboutArray.indexOf(aboutLinkMain);
    aboutArray.splice(aboutLinkIndex, 1);
    aboutWithoutLink = aboutArray.join(" ");
  }
  return (
    <>
      {/* design a card using tailwind css good ui */}
      <div className=" w-full shadow h-auto overflow-hidden border border-gray-700 hover:border-gray-600 hover:scale-[1.006] rounded-xl">
        <div className="bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-lg">
          <div className="flex flex-col">
            <div
              className="h-20 md:h-24"
              style={{ backgroundColor: props.banner_color }}
            ></div>

            <div className="flex  space-x-2">
              <Image
                src={props.image}
                alt={props.name}
                width={95}
                height={95}
                className="rounded-full ml-2 md:ml-4 -mt-8 border-4 border-white dark:border-black text-zinc-700 dark:text-gray-300"
              />
              <div className="flex items-baseline gap-1">
                <p className="mt-2 font-bold text-lg md:text-xl">
                  {props.name}
                </p>
                {/* TODO: Change this href to project domain */}
                <Link
                  href={"https://twitter.com/" + props.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 font-mono italic text-black dark:text-gray-300 text-sm hover:text-blue-400 cursor-pointer"
                >
                  @{props.twitter}
                </Link>
              </div>
            </div>

            {aboutLink ? (
              <p className="mx-4 md:mx-5 text-base overflow-hidden text-ellipsis min-h-[48px] line-clamp-none md:line-clamp-2 md:active:line-clamp-3 cursor-pointer">
                {aboutWithoutLink}{" "}
                <Link
                  href={aboutLinkMain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 cursor-pointer"
                >
                  {aboutLinkMain}
                </Link>
              </p>
            ) : (
              <div className="mx-4 md:mx-5 text-base overflow-hidden min-h-[48px] text-ellipsis line-clamp-none md:line-clamp-2 md:active:line-clamp-3 cursor-pointer">
                {props.about}
              </div>
            )}

            {/* Follow on github and on twitter button 2 in column */}
            <div className="grid grid-cols-2 gap-2 md:gap-3 text-center justify-between mt-2 mb-4 mx-4 md:mx-5">
              <Link
                href={"https://github.com/" + props.github_username}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-1 py-2 text-sm font-medium bg-white border border-gray-700 text-black hover:bg-gray-200 dark:bg-zinc-600 dark:text-white dark:hover:bg-zinc-500 rounded focus:outline-none focus:ring"
              >
                Follow on <i className="bi bi-github"></i>
              </Link>
              {/* TODO: Change this username value to twitter/X username */}
              <Link
                href={"https://x.com/" + props.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-1 py-2 text-sm font-medium bg-white border border-gray-700 text-black hover:bg-gray-200 dark:bg-zinc-600 dark:text-white dark:hover:bg-zinc-500 rounded focus:outline-none focus:ring"
              >
                Follow on 𝕏
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardui;
