import { MdVerified } from "react-icons/md";
import LinkPlate from "./components/LinkPlate";
import TagChips from "./components/TagChips";
import Image from "next/image";
import SocialMediaLink from "./components/SocialMediaLink";

const UserProfile = ({ userData }: any) => {
  const tags = "JS Developer,UI/UX,Coding,Designer";

  return (
    <section className="dark:bg-gradient-to-r dark:from-black dark:via-slate-900 dark:to-black ">
      <div
        style={{ backgroundColor: userData.banner_color || "#7E22CE" }}
        className="w-full h-32 md:h-48"
      ></div>
      <div className="border-white flex flex-col items-center px-3">
        <Image
          src={userData.image || "/images/placeholder.png"} // TODO: Add placeholder image
          alt={userData.name || "User Image"}
          width={150}
          height={150}
          className="rounded-full relative border -translate-y-1/2"
          priority
        />
        <div className="relative -translate-y-14 flex items-center flex-col w-max max-w-full space-y-6">
          <div className="flex flex-col items-center mx-auto">
            <h1 className="text-4xl font-semibold">
              {userData.name}
              <MdVerified className="text-blue-600 inline ml-1 text-2xl" />
            </h1>

            <p className="text-gray-500 text-xl -mt-0.5">@{userData.slug} 👋</p>
            <p className="text-lg mt-2 text-center max-w-md">
              {userData.about}
            </p>
          </div>

          {/* tags */}
          <div className="flex flex-wrap justify-center gap-3 text-sm mx-auto max-w-lg">
            {tags.split(",").map((tag, index) => (
              <TagChips key={index} tag={tag} />
            ))}
          </div>

          {/* social media icons */}
          <div className="flex gap-4 flex-wrap justify-center">
            {userData.socials.map(
              (social: { type: string; link: string }, index: number) => (
                <SocialMediaLink
                  key={index}
                  icon={social.type}
                  link={social.link}
                />
              )
            )}
          </div>

          {/* Attached Link */}
          <div className="w-full mx-auto max-w-lg">
            <div className="w-full mx-auto bg-opacity-5 rounded-md border border-purple-300 dark:border-slate-700 backdrop-filter backdrop-blur-3xl bg-purple-700 overflow-hidden">
              <LinkPlate />
              <span className="block border-b border-purple-300 dark:border-slate-700" />
              <LinkPlate />
              <span className="block border-b border-purple-300 dark:border-slate-700" />
              <LinkPlate />
              <span className="block border-b border-purple-300 dark:border-slate-700" />
            </div>
          </div>
          {/* Attached Link End  */}
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
