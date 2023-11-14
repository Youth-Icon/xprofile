import React, { CSSProperties } from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";

const Skills = () => {
  let test_skills = [
    "javascript",
    "coding",
    "chilling",
    "webskills",
    "coding",
    "javascript",
    "webskills",
    ,
    "chilling",
    "coding",
    "chilling",
  ];

  const skillsHTML = test_skills.map((skill, index) => (
    <div
      key={index}
      className=" h-[27px] px-3 py-1 mb-3 mr-3 bg-stone-300 bg-opacity-20 rounded-3xl justify-center items-center gap-1 inline-flex"
    >
      <div className="text-center text-white text-sm font-medium font-manrope">
        {skill}
      </div>
    </div>
  ));

  return (
    <FeatureBox
      width="465px"
      height="282px"
      paddingX="20px"
      paddingY="24px"
      style={{
        background:
          "linear-gradient(to right, rgba(70, 6, 6, 0.1), rgba(233, 30, 99, 0.1))",
          margin:"0px"
      }}
    >
      <div className="mb-[32px] text-white text-lg font-semibold font-manrope">
        Skills
      </div>
      {skillsHTML}
      <div>
        <div className=" h-[27px] px-3 py-1 mt-3 mr-2 bg-stone-300 bg-opacity-20 rounded-3xl justify-center items-center gap-1 inline-flex">
          <div className="text-center text-white text-sm font-medium font-manrope">
            {" "}
            + Add More
          </div>
        </div>
      </div>
    </FeatureBox>
  );
};

export default Skills;
