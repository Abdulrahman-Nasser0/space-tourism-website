import React, { useState } from "react";
import { crewMembers } from "../../crewData"; // Assuming you have crew data in this file
import CircleButton from "../common/CircleButton"; // Assuming you have a CircleButton component for navigation
const Crew = () => {
  const [currentMember, setCurrentMember] = useState("commander");
  const selectedMember = crewMembers[currentMember];

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
        <span className="opacity-25">02</span>
        <span>MEET YOUR CREW</span>
      </h3>

      <div className="
        flex flex-col
        lg:flex-row lg:justify-between lg:items-center lg:gap-12
      ">
        
        {/* content */}
        <div className="
            flex flex-col items-center justify-center gap-4
            lg:items-start
            lg:justify-between
            self-stretch
            lg:max-w-[40rem]
            lg:gap-10
            lg:py-16
        ">
          <h3
            className="
                        flex flex-col items-center  justify-center 
                        uppercase tracking-widest font-barlow-condensed
                        md:justify-start  
                        gap-2 text-center 
                        md:pt-[2.5rem]
                        lg:items-start 
                        lg:text-left leading-[1.4]
                        lg:
                        "
          >
            <span className="opacity-25 text-[1.125rem] md:text-[1.5rem] lg:text-[2rem] font-bellefair">
              {selectedMember.role}
            </span>
            <span className="text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] font-bellefair">
              {selectedMember.name}
            </span>
          </h3>
          <p
            className="
                        font-barlow text-blue-300 
                        text-[0.9375rem] text-center
                        md:text-[1rem]
                        md:leading-[180%]
                        min-h-40
                        md:min-h-36
                        lg:text-left lg:text-[1.125rem] 
                        "
          >
            {selectedMember.bio}
          </p>

          <ul className="flex justify-center gap-4 mb-4 lg:justify-end">
            <CircleButton
              isActive={currentMember === "commander"}
              onClick={() => setCurrentMember("commander")}
            />
            <CircleButton
              isActive={currentMember === "specialist"}
              onClick={() => setCurrentMember("specialist")}
            />
            <CircleButton
              isActive={currentMember === "engineer"}
              onClick={() => setCurrentMember("engineer")}
            />
            <CircleButton
              isActive={currentMember === "pilot"}
              onClick={() => setCurrentMember("pilot")}
            />
          </ul>
        </div>

        {/* image */}
        <div
          className="
                min-w-[16.95438rem] h-[21.25rem] mb-1.5
                md:min-w-[25.9565rem] md:h-[37.43531rem]
                lg:min-w-[50%] lg:h-[28.56744rem] shrink-0
            "
        >
          <img
            className="w-full h-full object-contain"
            src={selectedMember.image}
            alt={selectedMember.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
