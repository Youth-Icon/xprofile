import Link from "next/link";
import AddProfileButton from "@/components/AddProfileButton";
export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-2">
      <AddProfileButton className="top-20" />
      <p className="scroll-m-20 hover:text-green-500 text-3xl font-semibold tracking-tight">
        <Link href="https://x.hellofaizan.me">Under construction 🚧</Link>
      </p>
    </div>
  );
}
