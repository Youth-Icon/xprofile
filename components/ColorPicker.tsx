"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Paintbrush } from "lucide-react";

interface ColorPickerProps {
  data: {
    username: string;
    github: string;
    twitter: string;
    tags: string[];
    color: string;
    description: string;
    location: string;
  };
  setData: (data: {
    username: string;
    github: string;
    twitter: string;
    tags: string[];
    color: string;
    description: string;
    location: string;
  }) => void;
}

export function PickerExample({ data, setData }: ColorPickerProps) {
  const updateColor = (color: string) => {
    setData({ ...data, color });
  };

  return <GradientPicker background={data.color} setBackground={updateColor} />;
}

export function GradientPicker({
  background,
  setBackground,
  className,
}: {
  background: string;
  setBackground: (background: string) => void;
  className?: string;
}) {
  const solids = [
    "#E2E2E2",
    "#ff75c3",
    "#ffa647",
    "#ffe83f",
    "#9fff5b",
    "#70e2ff",
    "#cd93ff",
    "#09203f",
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[220px] justify-start text-left font-normal",
            !background && "text-muted-foreground",
            className
          )}
        >
          <div className="w-full flex items-center gap-2">
            {background ? (
              <div
                className="h-4 w-4 rounded !bg-center !bg-cover transition-all"
                style={{ background }}
              ></div>
            ) : (
              <Paintbrush className="h-4 w-4" />
            )}
            <div className="truncate flex-1">
              {background ? background : "Pick a color"}
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 flex flex-wrap gap-1 mt-0">
        {solids.map((s) => (
          <div
            key={s}
            style={{ background: s }}
            className="rounded-md h-6 w-6 cursor-pointer active:scale-105"
            onClick={() => setBackground(s)}
          />
        ))}

        <Input
          id="custom"
          value={background}
          className="col-span-2 h-8 mt-4"
          onChange={(e) => setBackground(e.currentTarget.value)}
        />
      </PopoverContent>
    </Popover>
  );
}
