import React, { useState } from "react";
import TabButton from "../common/TabButton";
import { destinations } from "../../destinationData.jsx";
const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState("moon");
  const destinationData = destinations[selectedDestination];

  const handleTabClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div
      className=" animate-[fadeIn_0.5s_ease-in-out]
        flex flex-col gap-6 p-6 md:p-10 
        lg:p-12  lg:mx-auto 
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
        <span className="opacity-25">01</span>
        <span>PICK YOUR DESTINATION</span>
      </h3>

      <div
        className="
            flex flex-col items-center justify-center gap-6
            lg:flex-row  lg:justify-between lg:gap-12 
        
        
        "
      >
        {/* Animated image */}
        <div
          key={`image-${selectedDestination}`}
          className="min-w-[14.284rem] h-[14.284rem] mb-1.5 md:min-w-[28.56744rem] md:h-[28.56744rem] lg:min-w-[50%] lg:h-[28.56744rem] animate-[fadeIn_0.7s_ease-in-out]"
        >
          <img
            className="w-full h-full object-contain"
            src={destinationData.image}
            alt={destinationData.name}
          />
        </div>

        {/* explanation */}
        <div
          className="
                flex flex-col items-center justify-center gap-6
                max-w-[32.125rem]
            "
        >
          <nav className="flex gap-6">
            <TabButton
              isActive={selectedDestination === "moon"}
              text={"moon"}
              onClick={() => handleTabClick("moon")}
            />
            <TabButton
              isActive={selectedDestination === "mars"}
              text={"mars"}
              onClick={() => handleTabClick("mars")}
            />
            <TabButton
              isActive={selectedDestination === "europa"}
              text={"europa"}
              onClick={() => handleTabClick("europa")}
            />
            <TabButton
              isActive={selectedDestination === "titan"}
              text={"titan"}
              onClick={() => handleTabClick("titan")}
            />
          </nav>
          {/* Animated content */}
          <div 
            key={`content-${selectedDestination}`}
            className="flex flex-col items-center gap-4 animate-[fadeIn_0.7s_ease-in-out]"
          >
            <h1 className="font-bellefair text-[3.5rem]">
              {destinationData.name}
            </h1>
            <p className="font-barlow text-blue-300 text-[0.9375rem] text-center md:text-[1rem] md:leading-[180%]">
              {destinationData.description}
            </p>
          </div>

          <span className="h-[0.0625rem] bg-white w-full self-stretch opacity-25"></span>

          <div
            key={`stats-${selectedDestination}`}
            className="
                flex flex-col items-center justify-between w-full 
                gap-6  
                md:flex-row 
                animate-[fadeIn_0.7s_ease-in-out]
                "
          >
            <div className="flex flex-col items-center md:items-st gap-2 self-stretch md:w-[45%] md:leading-8">
              <span className="text-blue-300 text-center text-[0.875rem] font-barlow-condensed">
                AVG. DISTANCE
              </span>
              <span className="font-bellefair uppercase text-[1.75rem]">
                {destinationData.distance}
              </span>
            </div>
            <div className="flex flex-col items-center md:items-st gap-2 self-stretch md:w-[45%] md:leading-8">
              <span className="text-blue-300 text-center text-[0.875rem] font-barlow-condensed">
                EST. TRAVEL TIME
              </span>
              <span className="font-bellefair uppercase text-[1.75rem]">
                {destinationData.travelTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
