import React, { CSSProperties } from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
import Round from "@/app/(landing)/components/round";

const Tags = () => {
  let test_tags = [
    "tag1",
    "tag2",
    "tag3",
    "tag1",
    "tag2",
    "tag3",
    "tag1",
    "tag2",
    "tag3",
  ];

  const tagsHTML = test_tags.map((tag, index) => (
    <div
      key={index}
      className=" h-[27px] px-3 py-1 mb-3 mr-3 bg-stone-300 bg-opacity-20 rounded-3xl justify-center items-center gap-1 inline-flex"
    >
      <div className="text-center text-white text-sm font-medium font-manrope">
        {tag}
      </div>
    </div>
  ));

  return (
    <FeatureBox
      width="auto"
      height="282px"
      paddingX="20px"
      paddingY="24px"
      style={{
        overflow:"hidden"
        // background:
        //   "linear-gradient(to right, rgba(70, 6, 6, 0.1), rgba(233, 30, 99, 0.1))",
      }}
    >
        <Round className="hidden xs:block absolute left-[-6rem] top-[-9rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF5400] blur-[150px] rounded-full z-10" />
        <Round className="hidden xs:block absolute right-[-16rem] top-[1rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full z-10 " />
      <div className="mb-[32px] text-white text-lg font-semibold font-manrope">
        Tags & hobbies
      </div>
      {tagsHTML}

      <div className="z-20">
        <div style={{ position: "relative" }} className=" h-[27px] px-3 py-1 mt-3 mr-2 bg-orange-600 bg-opacity-20 rounded-3xl justify-center items-center gap-1 inline-flex  hover:bg-neutral-400 cursor-pointer transition-all duration-300 z-30">
          <div className="text-center text-orange-600 text-sm font-medium font-manrope">
            {" "}
            + Add More
          </div>
        </div>
      </div>
    </FeatureBox>
  );
};

export default Tags;
