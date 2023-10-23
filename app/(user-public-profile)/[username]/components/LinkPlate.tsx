import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";

type Params = {
  label: string;
  url: string;
};

const LinkPlate = ({ label, url }: Params) => {

  // 
  const trimUrl = (url: string): string => {
    return url.replace(/(^\w+:|^)\/\//, "");
  };

  return (
    <a
      href={url.startsWith("http") ? url : `https://${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 items-center cursor-pointer h-16 px-4 w-full md:w-[500px]"
    >
      <Image
        src={`https://icon.horse/icon/${trimUrl(url)}`}
        width={60}
        height={60}
        alt={label}
        // onError={() => setImageUrl("/images/placeholder.png")} // TODO: Add placeholder image
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
