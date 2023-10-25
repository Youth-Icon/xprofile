import { GetUserData } from "@/backend/GetUserData";
import { Metadata } from "next";
import UserProfile from "./userProfile";

type Params = {
  params: { username: string };
};

async function getUser(userName: string) {
  try {
    const data = await GetUserData({ user: userName });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const userName = params.username;
  const userData = await getUser(userName);
  return {
    title: `${userData?.name || "404"} | X Profile`,
    description:
      "X Profile is an Open Source that allows you to showcase your profile in a unique way.",
  };
}

const UserPublicProfile = async ({ params }: Params) => {
  const userName = params.username;
  const userData = await getUser(userName);

  if (!userData) {
    return (
      <div className="flex w-screen h-screen justify-center items-center text-2xl">
        404 | User Not Found
      </div>
    );
  }

  return (
    <div>
      <UserProfile userData={userData} />
    </div>
  );
};

export default UserPublicProfile;
