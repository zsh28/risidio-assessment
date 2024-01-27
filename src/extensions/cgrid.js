import React from "react";
import collections from '../data/collections';


//this page shows collections data from the figma canvas
//lists of the collection contains the following data title, tag, image, description, price range, artist, artist name
//used one function to display the collections data so I dont have to repeat the same code
function CCard({ title, tags, priceRange, description, artistImage, artistName, image }) {
  return (
    <div className="flex-grow flex flex-col justify-center items-stretch mb-8 overflow-hidden rounded-3xl shadow-lg">
      <div className="group overflow-hidden rounded-3xl relative flex-grow">
        <div className="group-hover:opacity-50 transition-opacity duration-300">
          <img
            src={image}
            alt={`Collection: ${title}`}
            className="aspect-[1.72] object-cover object-center w-11/12 flex-grow h-full rounded-3xl mx-auto mt-4" // Adjust the mt value to push the image down
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-80 rounded-lg group-hover:opacity-100 z-10">
          <a
            href="/collections/" // hyperlink to collection
            aria-label="Go to collection"
            role="button"
            className="text-black font-semibold bg-white px-4 py-4 rounded-3xl"
          >
            <span className="text-black font-semibold">Go to collection &rarr;</span>
          </a>
        </div>
      </div>
      <div className="self-stretch flex items-center justify-between gap-5 mt-10 mx-3 z-1"> {/* Ensure that this div is above the shadow */}
        <div className="text-black text-2xl font-bold my-auto">{title}</div>
        <div className="text-zinc-800 text-xs font-medium whitespace-nowrap justify-center items-stretch bg-green-100 self-stretch px-9 py-2.5 rounded-[49px]">{tags}</div>
      </div>
      <div className="text-slate-500 text-sm whitespace-nowrap ml-3.5 mt-8 self-start">
  Price Range: {priceRange}
</div>

<div className="text-zinc-800 text-base leading-6 max-w-[420px] mt-3.5 ml-3.5">{description}</div>

      <div className="flex w-full max-w-full items-stretch gap-4 ml-3.5 mt-12 self-start">
        <img src={artistImage} alt={artistName} className="aspect-square object-cover object-center w-14 h-14 rounded-full overflow-hidden shrink-0 flex-shrink-0" />
        <div className="self-center flex-grow">
          <div className="text-slate-500 text-xs whitespace-nowrap">Artist</div>
          <div className="text-zinc-800 text-base whitespace-nowrap">{artistName}</div>
        </div>
      </div>
    </div>
  );
}

//used one function to display the collections data so I dont have to repeat the same code
function Cgrid() {
  return (
    <div className="w-full">
    <div className="flex flex-wrap justify-center gap-6">
      {collections.map((item) => (
        <CCard
          key={item.id}
          title={item.title}
          tags={item.tags}
          priceRange={item.priceRange}
          description={item.description}
          artistImage={item.artistImage}
          artistName={item.artistName}
          image={item.image}
        />
      ))}
    </div>
    </div>
  );
}

export default Cgrid;
