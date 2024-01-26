import * as React from "react";
import iStars from "../images/stars.png";
import leaAvatar from "../images/lea.png";
import { useState, useEffect } from "react";

function ProgressBar({ value, isMobile }) {
  const progressContainerStyle = {
    borderRadius: "10px",
    height: "20px",
    overflow: "hidden",
    width: `${100}%`,
    background: "#DFDFDF"
  };

  const progressBarStyle = {
    height: "100%",
    width: `${value * 100}%`,
    background: value > 0 ? "black" : "#DFDFDF",
    transition: "width 0.5s ease",
  };

  const remainingBarStyle = {
    height: "100%",
    width: `${(1 - value) * 100}%`,
    background: "#b8b8b8",
  };

  return (
    <div style={progressContainerStyle}>
      <div style={progressBarStyle}></div>
      <div style={remainingBarStyle}></div>
    </div>
  );
}

function Carousel() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const progressValues = [1, 0.3, 0, 0, 0, 0];
  const shouldHideProgress = windowWidth < 775; //hide progress bar at less than 775 pixels of width

  return (
    
    <div>
      {!shouldHideProgress && (
        <div className={`items-stretch flex justify-between gap-2 max-md:flex-wrap`}>
          {progressValues.map((value, index) => (
            <ProgressBar key={index} value={value} />
          ))}
        </div>
      )}
      <><br/></>
      <div className="bg-slate-200 px-20 py-12 rounded-[30px] max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-full max-md:w-full">
            <div className="mt-4">
              <div
                className="text-zinc-800 text-xs font-medium whitespace-nowrap justify-center items-stretch bg-red-100 px-9 py-2.5 rounded-[49px] max-md:px-5"
                aria-label="Trending Now"
                role="banner"
                style={{ maxWidth: "150px" }} // Set a fixed width
              >
                Trending Now
              </div>
            </div>
            <h2 className="text-slate-500 text-2xl self-stretch mt-4 max-md:max-w-full max-md:mt-4">
              Night sky collection
            </h2>
            <h1 className="text-black text-6xl font-extrabold self-stretch mt-2 max-md:max-w-full max-md:text-4xl">
              With the stars{" "}
            </h1>
            <div className="flex items-center">
              <img
                src={leaAvatar}
                alt="Author Lea Jacquot"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="flex flex-col">
                <div className="text-slate-500 text-xs">Artist</div>
                <h2 className="text-zinc-800 text-1xl whitespace-nowrap mt-1">
                  Léa Jacquot
                </h2>
              </div>
            </div>
            <div className="flex justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap max-md:mt-4">
              <button
                className="text-neutral-50 text-base font-semibold whitespace-nowrap justify-center items-center bg-zinc-800 grow px-16 py-6 rounded-[87px] max-md:px-5"
                aria-label="Buy"
                role="button"
              >
                Buy
              </button>
              <a
                href="/collections/"
                className="text-zinc-800 text-base font-semibold whitespace-nowrap justify-center items-center border border-[color:var(--Black,#23252B)] grow px-16 py-6 rounded-[87px] border-solid max-md:px-5"
                aria-label="See collection"
                role="link"
                style={{ maxHeight: "100px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }} // Set a max height and adjust alignment
              >
                See collection
              </a>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src={iStars}
              alt="Night sky with stars"
              className="aspect-[1.06] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
