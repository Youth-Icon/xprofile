import React from "react";
import Round from "./round";
import { Button } from "@/components/ui/button";

const ProjectsAndCreators = () => {
  return (
    <section className="w-full my-16 relative">
      {/* TEXT AREA */}
      <div className="flex gap-y-8 flex-col text-center mt-28 mb-16 items-center max-w-screen-[1200px] mx-auto">
        <h2 className="text-white font-medium text-5xl text-center">
          Discover inspiring
          <span className="block font-bold font-Manrope bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text text-center">
            projects and creators
          </span>
        </h2>
        <p className="text-neutral-400 text-lg font-medium font-Manrope max-w-[636px]">
          Discover projects and meet the brilliant minds behind them. Get ready
          to be inspired as we unveil a treasure trove of talent and innovation.
        </p>
      </div>

      {/* CARDS AREA  */}
      <div className="overflow-clip">
        <div className="flex min-w-max gap-8 relative right-20">
          <BlankCard />
          <BlankCard />
          <BlankCard />
          <BlankCard />
          <BlankCard />
          <BlankCard />
          <BlankCard />
        </div>
        <div className="flex min-w-max gap-8 mt-8 relative right-80">
          <BlankCard />
          <BlankCard />
          <CardWithContent />
          <BlankCard />
          <BlankCard />
          <BlankCard />
          <BlankCard />
        </div>
        <Round className="absolute bottom-36 -left-32 w-[400px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full " />
        <Round className="absolute bottom-0 right-36 w-[400px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF5400] blur-[150px] rounded-full " />
      </div>
    </section>
  );
};

const BlankCard = () => {
  return (
    <div className="w-[462px] h-[362px] rounded-3xl border border-opacity-20 border-[#BDBDBD] bg-[#454545] bg-opacity-20"></div>
  );
};

const CardWithContent = () => {
  return (
    <div className="w-[462px] h-[362px] rounded-3xl border border-opacity-20 border-[#BDBDBD] bg-[#454545] bg-opacity-20 p-4">
      <div className="flex w-full h-full justify-between items-center flex-col p-6">
        <div className="border border-[#BDBDBD] border-opacity-5 rounded-full bg-[#FF5400] bg-opacity-10 p-3.5 pt-4 flex justify-center items-center">
          <UserSvg />
        </div>
        <p className="text-2xl font-normal text-center font-manrope text-[#C6CFDC]">
          Why wait? Grab yours now before this opportunity slips away!
        </p>
        <Button
          type="submit"
          className="h-15 hover:shadow-md hover:shadow-[#FF5400]/20 bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] hover:bg-gradient-to-r hover:from-[#FF5400] hover:via-[#FF0054] hover:to-[#FF0054] rounded-xl text-white bg-transparent text-md font-bold font-manrope p-4 px-5"
        >
          Claim yours now!
        </Button>
      </div>
    </div>
  );
};

const UserSvg = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45 47.15H43.1C41.1 47.15 39.2 47.925 37.8 49.325L33.5249 53.55C31.5749 55.475 28.4 55.475 26.45 53.55L22.175 49.325C20.775 47.925 18.85 47.15 16.875 47.15H15C10.85 47.15 7.5 43.825 7.5 39.725V12.425C7.5 8.325 10.85 5 15 5H45C49.15 5 52.5 8.325 52.5 12.425V39.7C52.5 43.8 49.15 47.15 45 47.15Z"
        fill="#454545"
        fillOpacity="0.15"
        stroke="url(#paint0_linear_139_548)"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.175 22.375C30.075 22.375 29.9249 22.375 29.7999 22.375C27.1749 22.275 25.0999 20.15 25.0999 17.5C25.0999 14.8 27.2749 12.625 29.9749 12.625C32.6749 12.625 34.85 14.825 34.85 17.5C34.875 20.15 32.8 22.3 30.175 22.375Z"
        stroke="url(#paint1_linear_139_548)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.125 29.8999C19.8 32.1249 19.8 35.7499 23.125 37.9749C26.9 40.4999 33.1 40.4999 36.875 37.9749C40.2 35.7499 40.2 32.1249 36.875 29.8999C33.1 27.3999 26.925 27.3999 23.125 29.8999Z"
        stroke="url(#paint2_linear_139_548)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_139_548"
          x1="-1.35038e-05"
          y1="-1.49998"
          x2="72.0607"
          y2="38.9529"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAA307" />
          <stop offset="0.518161" stopColor="#FF5400" />
          <stop offset="1" stopColor="#FF0054" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_139_548"
          x1="-1.00001"
          y1="-0.999989"
          x2="71.701"
          y2="39.9527"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAA307" />
          <stop offset="0.518161" stopColor="#FF5400" />
          <stop offset="1" stopColor="#FF0054" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_139_548"
          x1="6.37296e-06"
          y1="-3.50001"
          x2="68.534"
          y2="51.4961"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAA307" />
          <stop offset="0.518161" stopColor="#FF5400" />
          <stop offset="1" stopColor="#FF0054" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ProjectsAndCreators;
