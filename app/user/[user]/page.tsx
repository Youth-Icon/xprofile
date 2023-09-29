import type { Metadata } from "next";
import UserPage from "./UserPage";
import { GetUserData } from "@/backend/GetUserData";

type Params = {
  params: {
    user: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const data = await GetUserData({ user: params.user });
  return {
    title: `${data?.name} | X Profile`,
    description:
      "X Profile is an Open Source that allows you to showcase your profile in a unique way.",
  };
}

export default function Page({ params }: Params) {
  return <UserPage params={params} />;
}
