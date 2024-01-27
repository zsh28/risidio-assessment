import * as React from "react";
import iStars from "../images/stars.png";
import leaAvatar from "../images/lea.png";

//nft banner component
function Nftbanner() {
    return (
          <div className="bg-light px-20 py-12 rounded-[30px] max-md:px-5">
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
                  Collection
                </h2>
                <h1 className="text-black text-6xl font-extrabold self-stretch mt-2 max-md:max-w-full max-md:text-4xl">
                  Night Sky{" "}
                </h1>
                <><br/></>
                <div className="text-zinc-800 text-base leading-6 max-w-[650px]">Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo</div>
                <><br/>
                <br/></>
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
      );
    }
    
    export default Nftbanner;