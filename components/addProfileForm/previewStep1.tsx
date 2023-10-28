import Link from "next/link";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { validate } from "@/backend/validategithub";

interface PreviewStep1Props {
  data: {
    username: string;
    github: string;
    twitter: string;
    description: string;
    tags: string[];
    color: string;
  };
  formStep: number;
}

const PreviewStep1 = ({ data, formStep }: PreviewStep1Props) => {
  return (
    <div
      className="sm:w-[420px] w-full mx-2 mb-4 sm:mb-0 shadow h-auto overflow-hidden border border-gray-700 hover:border-gray-600 rounded-xl transition-all duration-500"
      style={{
        display: formStep === 1 ? "block" : "none",
      }}
    >
      <div className="bg-white dark:bg-[#080808] rounded-lg shadow-lg">
        <div className="flex flex-col">
          <div
            className="h-20 md:h-24"
            style={{ backgroundColor: data.color }}
          ></div>

          <div className="flex space-x-2 mb-2">
            {data.github === ""  ? (
              <Image
                src={"/undefined.png"}
                alt="Profile Image"
                width={100}
                height={100}
                className="object-cover rounded-full ml-2 md:ml-4 -mt-8 border-4 border-white dark:border-black text-white dark:text-gray-300"
              />
            ) : (
              <Image
              src={"https://avatars.githubusercontent.com/" + data.github}
              alt="Profile Image"
              width={100}
              height={100}
              className="object-cover rounded-full ml-2 md:ml-4 -mt-8 border-4 border-white dark:border-black text-white dark:text-gray-300"
            />
            )}
            <div className="flex flex-col w-full">
              <div className="flex items-baseline gap-1">
                <p className="font-bold text-lg md:text-xl">{data.username}</p>
                <Link
                  href={"https://twitter.com/" + data.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono italic text-black dark:text-gray-300 text-sm hover:text-blue-400 cursor-pointer"
                >
                  @{data.twitter}
                </Link>
              </div>

              <ScrollContainer className="cursor-grab active:cursor-grabbing flex flex-row gap-2 my-2">
                {data.tags.map((tag: string) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="flex items-center justify-between px-2 py-0.5"
                  >
                    <p className="text-sm whitespace-nowrap">{tag}</p>
                  </Badge>
                ))}
              </ScrollContainer>
            </div>
          </div>
          <div className="mx-4 md:mx-5 text-base overflow-none min-h-[48px] text-ellipsis line-clamp-none md:line-clamp-2 md:active:line-clamp-3 cursor-pointer">
            {data.description}
          </div>

          {/* Follow on github and on twitter button 2 in column */}
          <div className="grid grid-cols-2 gap-2 md:gap-3 text-center justify-between mt-2 mb-4 mx-4 md:mx-5">
          {data.github !== ""  ? (
            <Link
              href={"https://github.com/" + data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center gap-2 col-span-1 py-2 text-sm font-medium bg-white border border-gray-700 text-black hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 rounded focus:outline-none focus:ring"
            >
              Follow on <Github size={20} />
            </Link>)
            :(<></>)}
            {data.twitter !== "" && data.twitter !== "tweethandle" ? (
              <Link
                href={"https://x.com/" + data.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-1 py-2 text-sm font-medium bg-white border border-gray-700 text-black hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 rounded focus:outline-none focus:ring"
              >
                Follow on 𝕏
              </Link>
            ) : (
              <></>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewStep1;
