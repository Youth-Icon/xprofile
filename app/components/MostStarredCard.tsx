"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function MostStarredCard(props: any) {
  return (
    <div className="text-center w-[200px] flex-shrink-0 my-4 flex flex-col items-center p-4 rounded-lg dark:bg-zinc-800 bg-zinc-200 border-slate-600">
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
        <Link href={`/user/${props.slug}`}>
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
  );
}
