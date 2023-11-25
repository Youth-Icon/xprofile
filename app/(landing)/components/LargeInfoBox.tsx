import React from "react";
import FeatureBox from "./FeatureBox";
import DropDownFeatures from "./DropDownFeatures";
import Round from "./round";
import Image from 'next/image';

const LargeInfoBox = () => {
  return (
    <div className="w-full pt-8 px-4 flex justify-center items-center">
      <div className="w-full md:w-[1200px] flex flex-col md:flex-row justify-between items-center">
        <Round className='absolute w-[400px] md:ml-[14rem] mt-[6rem] md:h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full' />
        <FeatureBox height="692px" width="100%" paddingX="32px" paddingY="88px" style={{ zIndex: "20" }} >
          <div className="md:flex md:items-center justify-center ">
            
            <DropDownFeatures />
            <div className="hidden mlg:block absolute top-[5.7rem] right-0 overflow-hidden w-[60%]">
              <FeatureBox height="600px" width="auto" paddingX="0" paddingY="0" style={{ backgroundColor: "black", color: "white", borderRadius: "0px", borderTopLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
                <div className="absolute right-[-8.7rem]">
                  <div className="flex-col justify-center items-center text-center ">
                    <Image
                      src="/main.svg"
                      alt='Image'
                      width={500}  // Adjust the width based on your design
                      height={200} // Adjust the height based on your design
                      sizes="100vw"
                      className='drop-shadow-lg'
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              </FeatureBox>
            </div>
          </div>
        </FeatureBox>
      </div>
    </div>
  );
};

export default LargeInfoBox;
