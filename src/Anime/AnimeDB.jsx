import React, { useEffect, useState } from "react";
import AnimeInfos from "./AnimeInfos.js";
function Body() {
  useEffect(() => {
    // Check if IDs are already in localStorage
    const storedIds = localStorage.getItem("propertyIds");
    if (!storedIds) {
      // Generate unique IDs for each property of each item
      const generatedIds = AnimeInfos.reduce((acc, item, index) => {
        const propertyIds = Object.keys(item).reduce((propAcc, propKey) => {
          propAcc[propKey] = `item-${index}-${propKey}`;
          return propAcc;
        }, {});
        acc[index] = propertyIds;
        return acc;
      }, {});

      localStorage.setItem("propertyIds", JSON.stringify(generatedIds));
    }
  }, []);

  return (
    <>
      <div>
        {AnimeInfos.map((item, index) => (
          <div
            key={index}
            id={`item-${index}`}
            className="flex flex-col m-auto gap-5 items-center border-2 border-black rounded-lg my-4"
          >
            <h2
              id={`EngName-${index}`}
              className="md:text-xl px-7 font-semibold -mb-4 mt-4 border-2 border-black bg-white p-1 rounded-lg md:w-auto w-auto text-base text-center"
            >
              English Name: {item.EngName}
            </h2>
            <h2
              id={`JpName-${index}`}
              className="md:text-xl px-7 font-semibold -mb-2 mt-1 border-2 border-black bg-white p-1 rounded-lg md:w-auto w-auto text-base text-center"
            >
              Japanese Name: {item.JpName}
            </h2>
            <img
              id={`Picture-${index}`}
              src={item.Picture}
              className="md:w-100 w-80 rounded-lg border-2 border-black"
              alt={item.EngName}
            />
            <span
              className="flex flex-row md:gap-4 gap-2"
              id={`span-main-${index}`}
            >
              <p
                id={`Date-${index}`}
                className="md:text-xl px-5 font-semibold -mb-2 mt-1 border-2 border-black bg-white p-1 rounded-lg md:w-auto w-auto text-sm text-center"
              >
                {item.Date}
              </p>
              <p
                id={`Genre-${index}`}
                className="md:text-xl px-5 font-semibold -mb-2 mt-1 border-2 border-black bg-white p-1 rounded-lg md:w-auto w-auto text-sm text-center"
              >
                {item.Genre}
              </p>
              <p
                id={`Episodes-${index}`}
                className="md:text-xl px-4 font-semibold -mb-2 mt-1 border-2 border-black bg-white p-1 rounded-lg md:w-auto w-auto text-sm text-center"
              >
                {item.Episode}
              </p>
              <p
                id={`Rank-${index}`}
                className="md:text-xl px-2 font-semibold -mb-2 mt-1 border-2 border-black bg-amber-400 p-1 rounded-lg md:w-auto w-auto text-sm text-center"
              >
                {item.Rank}
              </p>
            </span>
            <p
              id={`Description-${index}`}
              className="md:text-xl px-3 font-semibold -mb-2 mt-1 border-2 border-black bg-emerald-300 p-1 rounded-lg md:w-auto w-auto text-sm text-center"
            >
              {item.Description}
            </p>
            <span
              className="flex flex-row md:gap-4 gap-2"
              id={`span-second-${index}`}
            >
              <p
                id={`ARating-${index}`}
                className="md:text-xl px-5 font-semibold mb-2 mt-1 border-2 border-black bg-white p-1 rounded-lg md:w-auto w-auto text-sm text-center"
              >
                My Rating: {item.ARating}
              </p>
              <p
                id={`MRating-${index}`}
                className="md:text-xl px-5 font-semibold mb-2 mt-1 border-2 border-black bg-white p-1 rounded-lg md:w-auto w-auto text-sm text-center"
              >
                AnimeList Rating: {item.MRating}
              </p>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
export default Body;
