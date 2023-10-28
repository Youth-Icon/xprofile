"use client";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type AddProfileButtonProps = {
  className?: string;
};

const AddProfileButton = ({ className, ...props }: AddProfileButtonProps) => {
  const router = useRouter();

  return (
    <Button
      variant={"link"}
      className={cn(
        "absolute top-0 right-40 m-4 hover:bg-slate-200 dark:hover:bg-zinc-800 hover:scale-105 active:translate-y-1",
        className
      )}
      onClick={() => router.replace("/create")}
    >
      Add Profile✨
    </Button>
  );
};

export default AddProfileButton;
