import { MdVerified } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineGooglePlus,
} from "react-icons/ai";
import LinkPlate from "./components/LinkPlate";
import TagChips from "./components/TagChips";

const page = () => {
  return (
    <section className="bg-gradient-to-r from-black via-slate-900 to-black  ">
      <div className="w-full h-32 md:h-48 bg-purple-700"></div>
      <div className="border-white flex flex-col items-center px-3">
        <HiUser
          size={150}
          className="text-slate-700 rounded-full bg-white border-8 border-white relative -translate-y-1/2"
        />

        <div className="relative -translate-y-14 flex items-center flex-col w-max max-w-full">
          <div className="flex flex-col items-center mx-auto">
            <h1 className="text-4xl font-semibold">
              Amena Rahul
              <MdVerified className="text-blue-600 inline ml-1 text-2xl" />
            </h1>
            <p className="text-gray-500 text-xl -mt-0.5">@ayesha.tech 👋</p>
            <p className="text-lg my-2">UI/UX Designer | No-code Learner</p>
          </div>

          {/* tags */}
          <div className="flex flex-wrap justify-center gap-3 my-4 text-sm w-4/5 mx-auto">
            <TagChips tag="3D designer" />
            <TagChips tag="UI/UX" />
            <TagChips tag="No-code" />
            <TagChips tag="Designer" />
          </div>

          {/* social media icons */}
          <div className="flex gap-4 my-4">
            <BsTwitter className="text-3xl" />
            <AiFillLinkedin className="text-3xl" />
            <AiFillGithub className="text-3xl" />
            <AiOutlineGooglePlus className="text-3xl" />
          </div>

          {/* Attached Link */}
          <div className="w-full bg-slate-500 bg-opacity-5 py-2 rounded-md border border-slate-700">
            <LinkPlate />
            <span className="block border-b border-slate-700" />
            <LinkPlate />
            <span className="block border-b border-slate-700" />
            <LinkPlate />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
