"use client";

import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";

type Params = {
  label: string;
  url: string;
};

const LinkPlate = ({ label, url }: Params) => {
  const [imageUrl, setImageUrl] = useState(
    `https://www.google.com/s2/favicons?domain=${url}&sz=${30}`
  );

  return (
    <div className="flex gap-4 items-center cursor-pointer h-16 px-4 w-full md:w-[500px]">
      <Image
        src={imageUrl}
        width={30}
        height={30}
        alt={label}
        onError={() => setImageUrl("/images/placeholder.png")} // TODO: Add placeholder image
        className="rounded-full"
      />
      <div className="flex-1 py-3 flex items-center justify-between">
        <div className="max-w-full overflow-hidden">
          <div className="font-semibold text-lg">{label}</div>
          <div className="text-sm text-gray-500">{url.slice(0, 50)}</div>
        </div>
        <BsArrowRight size={24} />
      </div>
    </div>
  );
};

export default LinkPlate;
