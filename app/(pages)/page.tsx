import Contributors from "./home/Contributors";
import Footer from "./home/Footer";
import PreviewCard from "./home/PreviewCard";
import ProfileCardsLists from "./home/ProfileCardsLists";
import TitleSection from "./home/TitleSection";
import Extras from "./home/Extras";
import { getServerAuthSession } from "../../backend/auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerAuthSession();
  console.log({ session });
  return (
    <div className="p-1 flex flex-col items-center">

      <div className="flex flex-col items-center justify-center gap-4 mt-96">
        <p className="text-center text-2xl text-white">
          {session && <><span>Logged in as {session.user?.name}</span></>
          }
        </p>
        <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        >
          {session ? "Sign out" : "Sign in"}
        </Link>
      </div>
      <TitleSection />
      <PreviewCard />
      <Contributors />
      <Extras />
      <ProfileCardsLists />
      <Footer />
    </div>
  );
}
