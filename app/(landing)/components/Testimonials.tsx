import React from "react";
import FeatCard from "./FeatCard";
import {Twitter} from "lucide-react"
import Round from "./round";

const Testimonials = () => {
  return (
    // Outer container for the entire component
    <div className="w-full flex items-center">
      <Round className='absolute w-[500px] h-[500px] right-0 shadow-xl opacity-[0.27] bg-[#FF5400] blur-[150px] rounded-full ' />
      {/* Main container with three columns */}
      <div className="flex justify-between mx-auto h-[1216px] gap-3 items-center top-[12px]">

        {/* First Column */}
        <div className="hidden lgx:flex flex-col items-center gap-5 mt-[4rem] w-[290px] xs:w-[300px] sm:w-[380px]">

          <FeatCard height="500px" width="auto" paddingX="24px" paddingY="32px">
            <div className="flex flex-col items-start gap-5">

              {/* Container for user information */}
              <div className="flex w-full">
                    <img className="w-10 h-10 rounded-[20px]" src="https://via.placeholder.com/40x40" alt="Profile" />
                    <div className="ml-2 w-full flex items-center justify-between">
                      <div>
                        <div className="text-white text-[13px] font-semibold font-manrope">Andrea R.</div>
                        <div className="flex items-center gap-1.5">
                          <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope">@annawarren</div>
                          <div className="w-0.5 h-0.5 bg-slate-300 bg-opacity-60 rounded-full" />
                          <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope">Sep 2</div>
                        </div>
                      </div>
                      {/* Twitter icon */}
                      <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope ml-auto">
                        <Twitter/>
                      </div>
                    </div>
              </div>

              {/* User description */}
              <div className="mt-3">
                <span className="text-sky-400 text-base font-medium font-manrope">xProfile</span>
                <span className="text-slate-300 text-base font-medium font-manrope text-[11px] sm:text-base ">
                  {' '}
                  is not just a bio link, it’s a portfolio which you can claim in just 5 minutes. <br />
                  <br /> Open source to its your next favorite tool. Keeping close 👀 on this one!
                </span>
              </div>

              {/* Placeholder image container */}
              <div className="w-full h-[212px] bg-white rounded-xl mt-5">
                <div className="flex flex-col justify-start items-start h-full">
                  <img
                    className="w-[274.56px] h-[110.34px] opacity-30"
                    src="https://via.placeholder.com/275x110"
                    alt="Placeholder"
                  />
                </div>
              </div>
            </div>
          </FeatCard>

          {/* Second FeatureBox in the first column */}
          <FeatCard height="500px" width="auto" paddingX="24px" paddingY="32px">
            <div className="flex flex-col items-start gap-5">

              {/* Container for user information */}
              <div className="flex w-full">
                    <img className="w-10 h-10 rounded-[20px]" src="https://via.placeholder.com/40x40" alt="Profile" />
                    <div className="ml-2 w-full flex items-center justify-between">
                      <div>
                        <div className="text-white text-[13px] font-semibold font-manrope">Andrea R.</div>
                        <div className="flex items-center gap-1.5">
                          <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope">@annawarren</div>
                          <div className="w-0.5 h-0.5 bg-slate-300 bg-opacity-60 rounded-full" />
                          <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope">Sep 2</div>
                        </div>
                      </div>
                      {/* Twitter icon */}
                      <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope ml-auto">
                        <Twitter/>
                      </div>
                    </div>
              </div>

              {/* User description */}
              <div className="mt-3">
                <span className="text-sky-400 text-base font-medium font-manrope">xProfile</span>
                <span className="text-slate-300 text-base font-medium font-manrope text-[11px] sm:text-base">
                  {' '}
                  is not just a bio link, it’s a portfolio which you can claim in just 5 minutes. <br />
                  <br /> Open source to its your next favorite tool. Keeping close 👀 on this one!
                </span>
              </div>

              {/* Placeholder image container */}
              <div className="w-full h-[212px] bg-white rounded-xl mt-5">
                <div className="flex flex-col justify-start items-start h-full">
                  <img
                    className="w-[274.56px] h-[110.34px] opacity-30"
                    src="https://via.placeholder.com/275x110"
                    alt="Placeholder"
                  />
                </div>
              </div>
            </div>
          </FeatCard>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col items-center gap-5 w-[300px] xs:w-[300px] sm:w-[380px]">
          {/* First FeatureBox in the middle column */}
          <FeatCard height="429px" width="auto" paddingX="24px" paddingY="32px">
            <div className="flex flex-col items-start gap-5">

              {/* Container for user information */}
              <div className="flex w-full">
                    <img className="w-10 h-10 rounded-[20px]" src="https://via.placeholder.com/40x40" alt="Profile" />
                    <div className="ml-2 w-full flex items-center justify-between">
                      <div>
                        <div className="text-white text-[13px] font-semibold font-manrope">Andrea R.</div>
                        <div className="flex items-center gap-1.5">
                          <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope">@annawarren</div>
                          <div className="w-0.5 h-0.5 bg-slate-300 bg-opacity-60 rounded-full" />
                          <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope">Sep 2</div>
                        </div>
                      </div>
                      {/* Twitter icon */}
                      <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope ml-auto">
                        <Twitter/>
                      </div>
                    </div>
              </div>

              {/* User description */}
              <div className="mt-3">
                <span className="text-sky-400 text-base font-medium font-manrope">xProfile</span>
                <div className="text-slate-300  font-medium font-manrope text-[11px] sm:text-base ">
                  {' '}
                  is not just a bio link, it’s a portfolio which you can claim in just 5 minutes. <br />
                  <br /> Open source to its gonna be your next favorite tool. Open source to its gonna be your next favorite tool. Open source to its your next favorite tool.<br/><br/>
                  We love it. Very useful. <br/><br/>
                  Open source too it is gonna be your next favourite tool. Try it today. Its your next favourite tool.
                </div>
              </div>
            </div>
          </FeatCard>

          {/* Second FeatureBox in the middle column */}
          <FeatCard height="500px" width="auto" paddingX="24px" paddingY="32px">
            <div className="flex flex-col items-start gap-5">

              {/* Container for user information */}
              <div className="flex w-full">
                    <img className="w-10 h-10 rounded-[20px]" src="https://via.placeholder.com/40x40" alt="Profile" />
                    <div className="ml-2 w-full flex items-center justify-between">
                      <div>
                        <div className="text-white text-[13px] font-semibold font-manrope">Andrea R.</div>
                        <div className="flex items-center gap-1.5">
                          <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope">@annawarren</div>
                          <div className="w-0.5 h-0.5 bg-slate-300 bg-opacity-60 rounded-full" />
                          <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope">Sep 2</div>
                        </div>
                      </div>
                      {/* Twitter icon */}
                      <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope ml-auto">
                        <Twitter/>
                      </div>
                    </div>
              </div>

              {/* User description */}
              <div className="mt-3">
                <span className="text-sky-400 text-base font-medium font-manrope">xProfile</span>
                <span className="text-slate-300 font-medium font-manrope text-[11px] sm:text-base">
                  {' '}
                  is not just a bio link, it’s a portfolio which you can claim in just 5 minutes. <br />
                  <br /> Open source to its your next favorite tool. Keeping close 👀 on this one!
                </span>
              </div>

              {/* Placeholder image container */}
              <div className="w-full h-[212px] bg-white rounded-xl mt-5">
                <div className="flex flex-col justify-start items-start h-full">
                  <img
                    className="w-[274.56px] h-[110.34px] opacity-30"
                    src="https://via.placeholder.com/275x110"
                    alt="Placeholder"
                  />
                </div>
              </div>
            </div>
          </FeatCard>

          {/* Third FeatureBox in the middle column */}
          <FeatCard height="188px" width="auto" paddingX="24px" paddingY="32px">
            <div className="flex flex-col items-start gap-5">

              {/* Container for user information */}
              <div className="flex w-full">
                    <img className="w-10 h-10 rounded-[20px]" src="https://via.placeholder.com/40x40" alt="Profile" />
                    <div className="ml-2 w-full flex items-center justify-between">
                      <div>
                        <div className="text-white text-[13px] font-semibold font-manrope">Andrea R.</div>
                        <div className="flex items-center gap-1.5">
                          <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope">@annawarren</div>
                          <div className="w-0.5 h-0.5 bg-slate-300 bg-opacity-60 rounded-full" />
                          <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope">Sep 2</div>
                        </div>
                      </div>
                      {/* Twitter icon */}
                      <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope ml-auto">
                        <Twitter/>
                      </div>
                    </div>
              </div>

              {/* User description */}
              <div className="mt-3">
                <span className="text-sky-400 text-base font-medium font-manrope">xProfile</span>
                <span className="text-slate-300 font-medium font-manrope text-[11px] sm:text-base">
                  {' '}
                  is not just a bio link, it’s a portfolio which you can claim in just 5 minutes.
                </span>
              </div>   
            </div>
          </FeatCard>
        </div>

        {/* Last Column */}
        <div className="hidden md:flex flex-col items-center gap-5 mt-6 w-[290px] xs:w-[300px] sm:w-[380px]">
          {/* First FeatureBox in the last column */}
          <FeatCard height="500px" width="auto" paddingX="24px" paddingY="32px">
            <div className="flex flex-col items-start gap-5">

              {/* Container for user information */}
              <div className="flex w-full">
                    <img className="w-10 h-10 rounded-[20px]" src="https://via.placeholder.com/40x40" alt="Profile" />
                    <div className="ml-2 w-full flex items-center justify-between">
                      <div>
                        <div className="text-white text-[13px] font-semibold font-manrope">Andrea R.</div>
                        <div className="flex items-center gap-1.5">
                          <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope">@annawarren</div>
                          <div className="w-0.5 h-0.5 bg-slate-300 bg-opacity-60 rounded-full" />
                          <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope">Sep 2</div>
                        </div>
                      </div>
                      {/* Twitter icon */}
                      <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope ml-auto">
                        <Twitter/>
                      </div>
                    </div>
              </div>

              {/* User description */}
              <div className="mt-3">
                <span className="text-sky-400 text-base font-medium font-manrope">xProfile</span>
                <span className="text-slate-300 text-base font-medium font-manrope text-[11px] sm:text-base">
                  {' '}
                  is not just a bio link, it’s a portfolio which you can claim in just 5 minutes. <br />
                  <br /> Open source to its your next favorite tool. Keeping close 👀 on this one!
                </span>
              </div>

              {/* Placeholder image container */}
              <div className="w-full h-[212px] bg-white rounded-xl mt-5">
                <div className="flex flex-col justify-start items-start h-full">
                  <img
                    className="w-[274.56px] h-[110.34px] opacity-30"
                    src="https://via.placeholder.com/275x110"
                    alt="Placeholder"
                  />
                </div>
              </div>
            </div>
          </FeatCard>

          {/* Second FeatureBox in the last column */}
          <FeatCard height="500px" width="auto" paddingX="24px" paddingY="32px">
            <div className="flex flex-col items-start gap-5">

              {/* Container for user information */}
              <div className="flex w-full">
                    <img className="w-10 h-10 rounded-[20px]" src="https://via.placeholder.com/40x40" alt="Profile" />
                    <div className="ml-2 w-full flex items-center justify-between">
                      <div>
                        <div className="text-white text-[13px] font-semibold font-manrope">Andrea R.</div>
                        <div className="flex items-center gap-1.5">
                          <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope">@annawarren</div>
                          <div className="w-0.5 h-0.5 bg-slate-300 bg-opacity-60 rounded-full" />
                          <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope">Sep 2</div>
                        </div>
                      </div>
                      {/* Twitter icon */}
                      <div className="text-slate-300 text-opacity-60 text-[11px] font-medium font-manrope ml-auto">
                        <Twitter/>
                      </div>
                    </div>
              </div>

              {/* User description */}
              <div className="mt-3">
                <span className="text-sky-400 text-base font-medium font-manrope">xProfile</span>
                <span className="text-slate-300 text-base font-medium font-manrope text-[11px] sm:text-base">
                  {' '}
                  is not just a bio link, it’s a portfolio which you can claim in just 5 minutes. <br />
                  <br /> Open source to its your next favorite tool. Keeping close 👀 on this one!
                </span>
              </div>

              {/* Placeholder image container */}
              <div className="w-full h-[212px] bg-white rounded-xl mt-5">
                <div className="flex flex-col justify-start items-start h-full">
                  <img
                    className="w-[274.56px] h-[110.34px] opacity-30"
                    src="https://via.placeholder.com/275x110"
                    alt="Placeholder"
                  />
                </div>
              </div>
            </div>
          </FeatCard>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;