"use client";

import Cardui from "@/app/components/Cardui";
import React, { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import MostStarredCard from "@/app/components/MostStarredCard";
import { cn } from "@/lib/utils";

export default function Page() {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [loadingData, setLoadingData] = useState(false);
  const [loadMore, setLoadMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [mostStar, setMostStar] = useState<any[]>([]);

  return (
    <>
      <p>Hi</p>
    </>
  );
}
