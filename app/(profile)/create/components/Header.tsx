import FeatCard from "@/app/(landing)/components/FeatCard";
import React from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";

const Header = () => {
  return (
    <FeatureBox
      height="82px"
      paddingX="32px"
      style={{
        width: "full",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        background: "linear-gradient(to left, rgba(255, 152, 0, 0.1), rgba(233, 30, 99, 0.1))",
      }}
    >
      <div className="flex items-center gap-3">
        <div className=" text-white text-[22px] font-extrabold font-manrope">X</div>
        <div className=" text-white text-[22px] font-thin">/</div>
        <div className=" text-white text-[18px] font-manrope">
          John Doe
        </div>
      </div>


      <div className="flex items-center gap-5">
      <div className="text-center text-neutral-400 text-sm font-medium font-manrope leading-none">Login</div>
      <div className=" h-10 px-4 py-3 bg-gradient-to-l from-orange-600 to-rose-600 rounded-lg backdrop-blur-[32px] justify-center items-center gap-2 inline-flex">
        <div className="w-4 h-4 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6.85708 0L8.70911 5.42213L13.7142 7.4285L8.70911 9.43487L6.85708 14.857L5.00504 9.43487L0 7.4285L5.00504 5.42213L6.85708 0Z"
              fill="white"
            />
            <path
              d="M13.1413 10.2858L13.913 12.3712L15.9984 13.1429L13.913 13.9146L13.1413 16L12.3696 13.9146L10.2842 13.1429L12.3696 12.3712L13.1413 10.2858Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="text-center text-white text-sm font-semibold font-manrope leading-none">
          Claim your profile
        </div>
        </div>
      </div>
    </FeatureBox>
  );
};

export default Header;
