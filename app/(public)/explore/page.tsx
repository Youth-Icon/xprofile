"use client";

import Cardui from "@/components/Cardui";
import React, { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import MostStarredCard from "@/components/MostStarredCard";
import { cn } from "@/lib/utils";

export default function Page() {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [loadingData, setLoadingData] = useState(false);
  const [loadMore, setLoadMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [mostStar, setMostStar] = useState<any[]>([]);

  useEffect(() => {
    async function fetchMostStar() {
      const res = await fetch(`/api/explore/most-star`, {
        next: { revalidate: 5000 },
      });
      // console.log("in explore", user)
      const { data } = await res.json();
      // console.log(data)
      setMostStar(data);
    }
    fetchMostStar();
  }, []);

  async function fetcher(page: number) {
    setLoadingData(true);
    console.log("in prof id", profiles[profiles.length - 1]?.id);
    const res = await fetch(
      `/api/explore/profiles?page=${page}&lastdocid=${
        profiles[profiles.length - 1]?.id
      }`,
      { next: { revalidate: 5000 } }
    );
    const { data } = await res.json();
    if (data.length === 0) {
      setLoadingData(false);
      setLoadMore(false);
      return;
    }
    // console.log(data)
    setProfiles((item) => [...item, ...data]);
    setLoadingData(false);
  }

  useEffect(() => {
    fetcher(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <div className="w-[100%] pt-20">
        <h1 className="text-4xl font-bold">Github Stars</h1>
        <p className="text-gray-500 my-2">Find and connect with people</p>
        <div className="flex scrollbar pb-4 overflow-x-scroll gap-4 my-7">
          {mostStar?.map((eachprof, key) => (
            <MostStarredCard key={key} {...eachprof} />
          ))}
        </div>
      </div>
      {profiles.length === 0 ? (
        <Loader />
      ) : (
        <div className="mt-10">
          <h1 className="text-4xl font-bold my-2">Explore</h1>
          <p className="text-gray-500 my-2">Find and connect with people</p>
          <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 my-8 ">
            {profiles.map((profile) => (
              <Cardui key={profile.id} {...profile} />
            ))}
          </div>
          {loadMore && (
            <Button
              className={cn(
                "border hover:bg-zinc-200 block mx-auto mt-10 border-zinc-400"
              )}
              variant={"outline"}
              onClick={() => setPage((prev) => prev + 1)}
            >
              {loadingData ? <Loader /> : "Load More"}
            </Button>
          )}
        </div>
      )}
    </>
  );
}
