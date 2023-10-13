"use client";

import Image from "next/image";
import { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";

type Params = {
  label: string;
  url: string;
};

const LinkPlate = ({ label, url }: Params) => {
  const [imageUrl, setImageUrl] = useState<string>(
    `https://www.google.com/s2/favicons?domain=${url}&sz=${30}`
  );
  return (
    <a
      href={url.startsWith("http") ? url : `https://${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 items-center cursor-pointer h-16 px-4 w-full md:w-[500px]"
    >
      <Image
        src={imageUrl}
        width={30}
        height={30}
        alt={label}
        onError={() => setImageUrl("/images/placeholder.png")} // TODO: Add placeholder image
        className="rounded-full min-w-[20px] min-h-[20px]"
      />
      <div className="flex-1 py-3 flex items-center justify-between overflow-hidden">
        <div className="max-w-full overflow-hidden">
          <div className="font-semibold text-lg italic">{label}</div>
        </div>
        <div className="absolute right-4">
          <BiLinkExternal size={18} />
        </div>
      </div>
    </a>
  );
};

export default LinkPlate;
