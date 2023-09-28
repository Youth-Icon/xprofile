"use client";

import { useState, useEffect } from "react";
import { db } from "@/backend/firebase";

type Params = {
  params: {
    user: string;
  };
};

const UserPage = ({ params }: Params) => {
  return (
    <div className="flex md:flex-row flex-col gap-5 md:gap-0 w-full min-h-screen pt-20">
      <p>User: {params.user}</p>
    </div>
  );
};

export default UserPage;
