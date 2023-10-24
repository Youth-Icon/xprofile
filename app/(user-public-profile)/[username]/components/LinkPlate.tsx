import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";

type Params = {
  label: string;
  url: string;
};

const LinkPlate = ({ label, url }: Params) => {
  url = url.startsWith("http") ? url : `https://${url}`;

  const hostname = new URL(url).hostname;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 items-center cursor-pointer h-16 px-4 w-full md:w-[500px]"
    >
      <Image
        src={`https://icon.horse/icon/${hostname}`}
        width={40}
        height={40}
        alt={label}
        className="rounded-full min-w-[20px] min-h-[20px]"
      />
      <div className="flex-1 py-3 flex items-center justify-between overflow-hidden">
        <div className="max-w-full overflow-hidden mr-7">
          <div className="font-semibold text-lg italic">{hostname}</div>
          <div className="text-gray-500 text-sm min-w-max">{url}</div>
        </div>
        <div className="absolute right-4">
          <BiLinkExternal size={18} />
        </div>
      </div>
    </a>
  );
};

export default LinkPlate;
