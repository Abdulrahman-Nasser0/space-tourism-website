import React, { Suspense, lazy } from "react";
import { useNavigation } from "./NavigationContext";
import Navbar from "./layout/Navbar";

const Homepage = lazy(() => import("./layout/Homepage"));
const Destination = lazy(() => import("./layout/Destination"));
const Technology = lazy(() => import("./layout/Technology"));
const Crew = lazy(() => import("./layout/Crew"));

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
          'bg-[url("/Home.webp")] lg:bg-[url("/Home-lg.webp")]'
        }
        ${
          currentSection === "destination" &&
          'bg-[url("/Destination.webp")]'
        }
        ${
          currentSection === "crew" &&
          'bg-[url("/Crew.webp")]'
        }
        ${
          currentSection === "technology" &&
          'bg-[url("/Technology.webp")]'
        }
        bg-cover bg-center bg-no-repeat
      `}
    >
      <Navbar />
      <Suspense fallback={<div className="flex-1 flex items-center justify-center text-white">Loading...</div>}>
        {currentSection === "home" && <Homepage />}
        {currentSection === "destination" && <Destination />}
        {currentSection === "crew" && <Crew />}
        {currentSection === "technology" && <Technology />}
      </Suspense>
    </div>
  );
};

export default Website;
