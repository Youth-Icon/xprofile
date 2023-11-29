import React from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
import BlobCanvas from "./BlobCanvas";
import Round from "@/app/(landing)/components/round";

const Achievements = () => {

const achievements = [
    { name: "New Start", date: "2022-01-01", style: "w-[100px] h-[100px] bg-gradient-to-br from-yellow-400 via-red-600 to-amber-500 rounded-full relative group", isSpinning:false},
    { name: "Hey Friendo", date: "2022-02-15" , style: "w-[100px] h-[100px] bg-gradient-to-br from-amber-100 via-orange-400 to-stone-300 rounded-full relative group" , isSpinning:false},
    { name: "Hi-Projector", date: "2022-03-20" , style: "w-[100px] h-[100px] h-[100px] bg-gradient-to-br from-orange-600 via-rose-600 to-stone-300 rounded-full relative group", isSpinning:false},
    { name: "Star Power", date: "2022-04-05", style: "w-[100px] h-[100px] bg-gradient-to-br from-stone-100 via-stone-400 to-yellow-700 rounded-full relative group" , isSpinning:false},
  ];

  return (
    <FeatureBox
      width="auto"
      height="194px"
      paddingX="20px"
      paddingY="24px"
      style={{
        overflow:"hidden",
      }}
    >
        <Round className="absolute left-[-6rem] top-[-9rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full " />
        <Round className="absolute right-[-16rem] top-[1rem] w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF5400] blur-[150px] rounded-full " />
      <div className="mb-[20px] text-white text-lg font-semibold font-manrope">
        Achievements
      </div>
      <div className="flex gap-5 overflow-scroll">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={achievement.style}
          >
            <div className="absolute invisible group-hover:visible bottom-full left-[7px] p-2 bg-neutral-100 bg-opacity-25 rounded-xl backdrop-blur-[32px] justify-center items-center gap-1.5 shadow-md text-manrope text-sm">
              <div className="block">{achievement.name}</div>

            </div>
            <div style={{ width: "100px", height: "100px", overflow:"visible"}}>
              {achievement.isSpinning && (
                      <div><BlobCanvas/></div>
              )}
            </div>
            
          </div>
          

        ))}
        
      </div>
    </FeatureBox>
  );
};

export default Achievements;

