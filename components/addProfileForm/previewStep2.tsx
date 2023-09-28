import Link from "next/link";
import { BsInstagram, BsFillPlayFill } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaRedditAlien, FaPaypal } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

interface PreviewStep2Props {
  data: {
    socials: {
      link: string;
      type: string;
    }[];
  };
  formStep: number;
}

const PreviewStep2 = ({ data, formStep }: PreviewStep2Props) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-auto w-[70%]"
      style={{
        display: formStep === 2 ? "block" : "none",
      }}
    >
      {data.socials
        .filter((social: any) => social.link !== "")
        .map((social: any, index: number) => (
          <div
            key={index}
            className="my-2 py-5 px-3 bg-slate-200 dark:bg-zinc-950 hover:scale-105 hover:my-3 cursor-pointer"
          >
            {social.type === "instagram" && (
              <Link
                href={"https://instagram.com/" + social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center flex-row justify-between space-x-2 font-mono italic"
              >
                <div className="flex flex-row gap-2 items-center">
                  <span className="p-1 bg-gradient-to-br from-yellow-400 via-red-500 to-purple-800 rounded-lg flex items-center justify-center">
                    <BsInstagram size={30} className="text-white" />
                  </span>
                  <p>@{social.link}</p>
                </div>

                <BiLinkExternal className="text-zinc-900 dark:text-slate-100" />
              </Link>
            )}
            {social.type === "linkedin" && (
              <Link
                href={"https://linkedin.com/in/" + social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center flex-row justify-between space-x-2 font-mono italic"
              >
                <div className="flex flex-row gap-2 items-center">
                  <span className="p-1 bg-gradient-to-br bg-blue-600 rounded-lg flex items-center justify-center">
                    <GrLinkedinOption size={30} className="text-white" />
                  </span>
                  <p>@{social.link}</p>
                </div>

                <BiLinkExternal className="text-zinc-900 dark:text-slate-100" />
              </Link>
            )}
            {social.type === "reddit" && (
              <Link
                href={"https://reddit.com/u/" + social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center flex-row justify-between space-x-2 font-mono italic"
              >
                <div className="flex flex-row gap-2 items-center">
                  <span className="p-1 bg-gradient-to-br bg-orange-600 rounded-lg flex items-center justify-center">
                    <FaRedditAlien size={30} className="text-white" />
                  </span>
                  <p>@{social.link}</p>
                </div>

                <BiLinkExternal className="text-zinc-900 dark:text-slate-100" />
              </Link>
            )}
            {social.type === "youtube" && (
              <Link
                href={"https://youtube.com/" + social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center flex-row justify-between space-x-2 font-mono italic"
              >
                <div className="flex flex-row gap-2 items-center">
                  <span className="p-1 bg-gradient-to-br bg-orange-600 rounded-lg flex items-center justify-center aspect-square">
                    <BsFillPlayFill size={30} className="text-white" />
                  </span>
                  <p>@{social.link}</p>
                </div>

                <BiLinkExternal className="text-zinc-900 dark:text-slate-100" />
              </Link>
            )}
            {social.type === "paypal" && (
              <Link
                href={"https://paypal.com/" + social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center flex-row justify-between space-x-2 font-mono italic"
              >
                <div className="flex flex-row gap-2 items-center">
                  <span className="p-1 bg-gradient-to-br bg-blue-600 rounded-lg flex items-center justify-center">
                    <FaPaypal size={30} className="text-white" />
                  </span>
                  <p>@{social.link}</p>
                </div>

                <BiLinkExternal className="text-zinc-900 dark:text-slate-100" />
              </Link>
            )}
          </div>
        ))}
    </div>
  );
};

export default PreviewStep2;
