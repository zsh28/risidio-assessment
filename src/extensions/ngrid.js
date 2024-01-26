import React from "react";
import nfts from '../data/nfts';

const NGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {nfts.map((nft) => (
        <div
          key={nft.id}
          className="shadow-2xl bg-neutral-50 flex flex-col items-stretch pt-4 pb-12 px-4 rounded-[47px] relative group"
        >
          <div className="relative">
            <img
              loading="lazy"
              src={nft.image}
              alt="Product image"
              className="aspect-[1.13] object-contain object-center w-full overflow-hidden rounded-[50px] transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center rounded-[47px]">
              <button className="bg-white text-black py-2 px-4 rounded-full shadow-md flex items-center justify-center shadow-[50px]">
                Buy <span className="ml-1">&#8594;</span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <h1 className="text-black text-2xl font-bold">{nft.title}</h1>
            <span className="text-zinc-800 text-xs font-medium bg-slate-300 px-3 py-1 rounded-full">
              {nft.price} BTC
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NGrid;
