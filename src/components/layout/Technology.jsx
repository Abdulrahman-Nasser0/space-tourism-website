import React, { useState } from "react";
import { technologies } from "../../technologyData";
import TechButton from "../common/TechButton";

const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] = useState("vehicle");
  const technologyData = technologies[selectedTechnology];

  return (
    <div
      className="
            animate-[fadeIn_0.5s_ease-in-out]
            flex flex-col gap-6 p-6
            md:p-10
            lg:p-12 lg:max-w-[95%] lg:mx-auto 
        "
    >
      <h3
        className="
                            flex items-center gap-4 justify-center 
                            text-base uppercase tracking-widest font-barlow-condensed
                            md:text-[1.25rem] md:justify-start  
                            lg:text-[1.75rem]
                            "
      >
        <span className="opacity-25">03</span>
        <span>SPACE LAUNCH 101</span>
      </h3>

      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-12 lg:mt-10">
        {/* Image Section */}
        <div
          className="
    w-screen -mx-6 h-[18.35863rem] mt-16 mb-6
    md:-mx-10 md:w-[calc(100%+5rem)] md:h-[28.35863rem]
    lg:mx-0 lg:w-auto lg:h-auto lg:mb-0 lg:mt-0
    lg:aspect-[515/527] lg:max-w-[32rem]
    flex-shrink-0 lg:order-2
  "
        >
          <img
            className="w-full h-full object-cover lg:object-contain"
            src={technologyData.image}
            alt={technologyData.name}
          />
        </div>

        {/* Navigation and Text Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 self-center
              lg:text-left lg:order-1 
            
            ">
          <nav className="flex justify-center gap-4  font-bellefair 
          
            lg:flex-col lg:gap-6 lg:mb-0 lg:pr-6

          ">
            <TechButton
              onClick={() => setSelectedTechnology("vehicle")}
              isActive={selectedTechnology === "vehicle"}
            >
              1
            </TechButton>
            <TechButton
              onClick={() => setSelectedTechnology("spaceport")}
              isActive={selectedTechnology === "spaceport"}
            >
              2
            </TechButton>
            <TechButton
              onClick={() => setSelectedTechnology("capsule")}
              isActive={selectedTechnology === "capsule"}
            >
              3
            </TechButton>
          </nav>
          
          <div>
            <h3
              className="
                        flex flex-col items-center  justify-center 
                        uppercase tracking-widest font-barlow-condensed
                        md:justify-start  
                        gap-2 text-center 
                        md:pt-[2.5rem]
                        lg:pt-0
                        lg:items-start 
                        lg:text-left leading-[1.4]
                        
                        "
            >
              <span className="opacity-25 text-[1.125rem] md:text-[1.5rem] lg:text-[2rem] font-bellefair">
                {technologyData.terminology}
              </span>
              <span className="text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] font-bellefair">
                {technologyData.name}
              </span>
            </h3>
            <p
              className="
                        font-barlow text-blue-300 
                        text-[0.9375rem] text-center
                        min-h-40
                        md:text-[1rem]
                        md:leading-[180%]
                        md:max-w-[70%] md:mx-auto
                        md:min-h-36
                        lg:max-w-[90%] lg:m-0
                        lg:text-left lg:text-[1.125rem] 
                    "
            >
              {technologyData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
