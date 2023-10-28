"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function MostStarredCard(props: any) {
  return (
    <div className=" w-full shadow h-auto overflow-hidden border border-gray-700 hover:border-gray-600 hover:scale-[1.006] rounded-xl">
      <div className="bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-lg items-center justify-center p-5 h-full">
      <div className="flex flex-col items-center">
        <Image
          className="w-max items-center justify-center object-contain rounded-full border border-zinc-400"
          src={props.image}
          alt="profile pic"
          width={96}
          height={96}
        />
        <div className="w-max mx-auto mt-2 flex flex-col gap-2">
          <h1 className="">{props.name}</h1>
          <p>{props.github}</p>
          <p>Github Stars {props.github_stars}</p>
          {/* Later Change to xprofile url */}
          <Link href={`/${props.slug}`}>
            <Button
              variant="outline"
              className={cn(
                "hover:bg-zinc-300 border border-zinc-400 dark:hover:bg-zinc-700"
              )}
            >
              View Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    
  );
}

