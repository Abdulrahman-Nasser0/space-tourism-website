import React from "react";
import { useNavigation } from "./NavigationContext";
import Navbar from "./layout/Navbar";
import Homepage from "./layout/Homepage";
import Destination from "./layout/Destination";
const Website = () => {
  const { currentSection } = useNavigation();

  return (
    <div
      className={`
                transition-all duration-500 ease-in-out
                flex flex-col 
                min-h-screen bg-black
                ${
                  currentSection === "home" &&
                  'bg-[url("/Home.png")] lg:bg-[url("/Home-lg.jpg")]'
                }
                ${
                  currentSection === "destination" &&
                  'bg-[url("/Destination.png")]'
                }
                ${
                  currentSection === "crew" &&
                  'bg-[url("/Crew.png")] lg:bg-[url("/Crew-lg.jpg")]'
                }
                ${
                  currentSection === "technology" &&
                  'bg-[url("/Technology.png")] lg:bg-[url("/Technology-lg.jpg")]'
                }
                bg-cover bg-center bg-no-repeat
              `}
    >
      <Navbar />
      {currentSection === "home" && <Homepage />}
      {currentSection === "destination" && <Destination />}
      
    </div>
  );
};

export default Website;
