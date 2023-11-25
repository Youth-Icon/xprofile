import React from "react";
import FeatureBox from "./FeatureBox";

const CardRowSection = () => {
  return (
<div className="w-full pt-8 flex flex-col items-center gap-[32px] overflow-clip">
{/* First Row */}
<div className="flex justify-between gap-[32px] ml-[12rem] md:ml-[17rem]">
  <FeatureBox height="362px" width="462px" paddingX="24px" paddingY="28px">
    {/* FeatureBox Content */}
  </FeatureBox>
  <FeatureBox height="362px" width="462px" paddingX="24px" paddingY="28px">
    {/* FeatureBox Content */}
  </FeatureBox>
  <FeatureBox height="362px" width="462px" paddingX="24px" paddingY="28px">
    {/* FeatureBox Content */}
  </FeatureBox>
  <FeatureBox height="362px" width="462px" paddingX="24px" paddingY="28px">
    {/* FeatureBox Content */}
  </FeatureBox>
</div>
{/* Second Row */}
<div className="flex justify-between gap-[32px] mr-[21rem] md:mr-[7rem]">
  <FeatureBox height="362px" width="462px" paddingX="24px" paddingY="28px">
    {/* FeatureBox Content */}
  </FeatureBox>
  <FeatureBox height="362px" width="462px" paddingX="24px" paddingY="28px">
    {/* FeatureBox Content */}
  </FeatureBox>
  <FeatureBox height="362px" width="462px" paddingX="24px" paddingY="28px">
{/* Container with flex layout, aligning items at the center vertically and horizontally */}
<div className="flex flex-col items-center">
  
  {/* Circle container with specific dimensions, styling, and a background gradient */}
  <div className="w-[90px] h-[90px] px-[15px] bg-orange-600 bg-opacity-10 rounded-[46px] border border-stone-300 border-opacity-5 justify-center items-center inline-flex mb-4">
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
  <path d="M45 47.15H43.1C41.1 47.15 39.2 47.925 37.8 49.325L33.5249 53.55C31.5749 55.475 28.4 55.475 26.45 53.55L22.175 49.325C20.775 47.925 18.85 47.15 16.875 47.15H15C10.85 47.15 7.5 43.825 7.5 39.725V12.425C7.5 8.325 10.85 5 15 5H45C49.15 5 52.5 8.325 52.5 12.425V39.7C52.5 43.8 49.15 47.15 45 47.15Z" fill="#454545" fillOpacity="0.15" stroke="url(#paint0_linear_139_547)" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M30.175 22.375C30.075 22.375 29.9249 22.375 29.7999 22.375C27.1749 22.275 25.0999 20.15 25.0999 17.5C25.0999 14.8 27.2749 12.625 29.9749 12.625C32.6749 12.625 34.85 14.825 34.85 17.5C34.875 20.15 32.8 22.3 30.175 22.375Z" stroke="url(#paint1_linear_139_547)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M23.125 29.8999C19.8 32.1249 19.8 35.7499 23.125 37.9749C26.9 40.4999 33.1 40.4999 36.875 37.9749C40.2 35.7499 40.2 32.1249 36.875 29.8999C33.1 27.3999 26.925 27.3999 23.125 29.8999Z" stroke="url(#paint2_linear_139_547)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <defs>
    <linearGradient id="paint0_linear_139_547" x1="-1.35038e-05" y1="-1.49998" x2="72.0607" y2="38.9529" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FAA307"/>
      <stop offset="0.518161" stopColor="#FF5400"/>
      <stop offset="1" stopColor="#FF0054"/>
    </linearGradient>
    <linearGradient id="paint1_linear_139_547" x1="-1.00001" y1="-0.999989" x2="71.701" y2="39.9527" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FAA307"/>
      <stop offset="0.518161" stopColor="#FF5400"/>
      <stop offset="1" stopColor="#FF0054"/>
    </linearGradient>
    <linearGradient id="paint2_linear_139_547" x1="6.37296e-06" y1="-3.50001" x2="68.534" y2="51.4961" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FAA307"/>
      <stop offset="0.518161" stopColor="#FF5400"/>
      <stop offset="1" stopColor="#FF0054"/>
    </linearGradient>
  </defs>
</svg>
  </div>
  <div className="w-[369px] pt-4 pb-8 text-center text-slate-300 text-2xl font-[400] font-manrope">Why wait? Grab yours now before this opportunity slips away!</div>
  {/* button with a gradient background and rounded corners */}
  <div className="w-[185px] h-[50px] px-6 py-4 bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 rounded-xl justify-center items-center inline-flex">
    
    {/* Text element with specific styling */}
    <div className="text-center text-white text-[17px] font-weight-600 font-manrope leading-[18px]">Claim yours now!</div>
  </div>
</div>
</FeatureBox>
  <FeatureBox height="362px" width="462px" paddingX="24px" paddingY="28px">
    {/* FeatureBox Content */}
  </FeatureBox>
</div>
</div>
  );
};
export default CardRowSection;
