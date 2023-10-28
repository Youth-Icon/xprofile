import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

interface PreviewStep3Props {
  data: {
    links: string[];
  };
  formStep: number;
}

const PreviewStep3 = ({ data, formStep }: PreviewStep3Props) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-auto sm:w-[70%] w-full mx-2"
      style={{
        display: formStep === 3 ? "block" : "none",
      }}
    >
      {data.links
        .filter((link: string) => link !== "")
        .map((link: string, index: number) => (
          <div
            key={index}
            className="my-2 py-5 px-3 bg-slate-200 dark:bg-black/10 hover:scale-105 hover:my-3 cursor-pointer"
          >
            <Link
              href={
                link.includes("https://" || "http://")
                  ? link
                  : `https://${link}`
              }
              target="_blank"
              className="flex items-center flex-row justify-between space-x-2 font-mono italic"
            >
              <Image
                src={
                  link.includes("https://" || "http://")
                    ? `https://s2.googleusercontent.com/s2/favicons?domain=${link}`
                    : `https://s2.googleusercontent.com/s2/favicons?domain=https://${link}`
                }
                alt=""
                width={20}
                height={20}
              />

              <p className="overflow-hidden">{link}</p>
              <BiLinkExternal className="text-zinc-900 dark:text-slate-100" />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PreviewStep3;
