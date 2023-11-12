import React from "react";
import FeatureBox from "./FeatureBox";
import DropDownFeatures from "./DropDownFeatures";
import Round from "./round";

const LargeInfoBox = () => {
  return (
<div className="w-full pt-8 flex justify-center items-center">
  <div className="w-[1200px] flex justify-between ">
  <Round className='absolute w-[400px] ml-[14rem] mt-[6rem] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full' />
    <FeatureBox height="692px" width="1200px" paddingX="32px" paddingY="88px" style={{zIndex:"20"}} >
        <DropDownFeatures />
        <div className="absolute top-[5.7rem] right-0 overflow-hidden">
      <FeatureBox height="600px" width="823px" paddingX="0" paddingY="0" style={{ backgroundColor: "black", color: "white",borderRadius:"0px", borderTopLeftRadius: '20px', borderBottomRightRadius: '20px'}}>
        <div className="absolute top-[6.5rem] right-[-8.7rem]">
        <div className="flex-col justify-center items-center text-center ">
            
          <div className=" text-white font-medium text-[5rem] font-manrope ">
            Dashboard design
          </div>
          <div className=" text-[5rem] font-bold font-manrope bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text">
            coming soon
          </div>
        </div>
        </div>

      </FeatureBox>
      </div>
    </FeatureBox>


  </div>
</div>
  );
};

export default LargeInfoBox;