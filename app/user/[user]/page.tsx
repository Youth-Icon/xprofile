import type { Metadata } from "next";
import UserPage from "./UserPage";

type Params = {
  params: {
    user: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return {
    title: `${params.user} | X Profile`,
    description:
      "X Profile is an Open Source that allows you to showcase your profile in a unique way.",
  };
}

export default function Page({ params }: Params) {
  return <UserPage params={params} />;
}
