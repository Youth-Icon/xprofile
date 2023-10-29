import { Metadata } from "next";

type Params = {
  params: { username: string };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return {
    title: `X Profile`,
    description:
      "X Profile is an Open Source that allows you to showcase your profile in a unique way.",
  };
}

const UserPublicProfile = async ({ params }: Params) => {
  return (
    <div>
      Hi
    </div>
  );
};

export default UserPublicProfile;
