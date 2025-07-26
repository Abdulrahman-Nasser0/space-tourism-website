import React from "react";
import ExploreBtn from "../common/ExploreBtn";

const Hero = () => {
  return (
    <main
      className="
        flex flex-col justify-center items-center 
        self-stretch flex-1 shrink-0 basis-0  p-6
        md:py-[8rem]
        md:px-[2.5rem]

        lg:flex-row
        lg:justify-between lg:gap-40
        
        lg:mx-auto
        lg:items-end
        "
    >
      <div className="flex flex-col items-center gap-6 lg:items-start ">
        <h3
          className="
                font-barlow-condensed text-[1.75rem] 
                leading-[1.5rem]  tracking-[0.1rem] uppercase  
                text-blue-300 text-center 
            "
        >
          SO, YOU WANT TO TRAVEL TO
        </h3>

        <h1
          className="
                font-bellefair
                text-[5rem]  font-normal 
                uppercase
                md:text-[9rem]
            "
        >
          space
        </h1>

        <p
          className="font-barlow-condensed  
            text-center text-[1rem] text-blue-300 
            max-w-lg tracking-wide md:leading-loose lg:text-left
            "
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we will give you a truly out of this world
          experience!
        </p>
      </div>
      <div
        className="
            flex justify-center items-end 
            pt-[2rem]
            
            lg:pt-0 lg:self-end
            lg:flex-col lg:items-end
            
        "
      >
        <ExploreBtn />
      </div>
    </main>
  );
};

export default Hero;
