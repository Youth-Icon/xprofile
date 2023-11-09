
import Link from "next/link";
import { getServerAuthSession } from "@/backend/auth";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await getServerAuthSession();

  console.log(session);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-2">

      <p className="scroll-m-20 hover:text-green-500 text-3xl font-semibold tracking-tight">
        <Link href="https://x.hellofaizan.me">Under construction 🚧</Link>
      </p>
    </div>
  );
}
