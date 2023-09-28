"use client";

import { useState, useEffect, useTransition } from "react";
import { GetUserData } from "@/backend/GetUserData";

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
        setUserData(data);
      });
    } catch (err) {
      console.log(err);
    }

    // setUserData(data);
  }, [params.user]);

  return (
    <div className="flex md:flex-row flex-col gap-5 md:gap-0 w-full min-h-screen pt-20">
      {isPending ? <p>Loading...</p> : <pre>{JSON.stringify(userData)}</pre>}
    </div>
  );
};

export default UserPage;
