import { useEffect } from "react";
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
    <div>
      <div>
        <h2 className="md:text-xl px-2 font-semibold mt-4 border-2 border-black bg-indigo-300 p-1 rounded-lg m-auto mb-2 md:w-1/2 w-96 text-base text-center">
          👇 List Of My Top 10 Anime`s | Ranked 👇
        </h2>
        {AnimeInfos.map((item, index) => (
          <div
            key={index}
            id={`item-${index}`}
            className="flex flex-col m-auto gap-5 items-center border-x-2 px-4 md:mx-7 mx-4 my-4 text-white"
          >
            <hr className="h-1 w-full rounded-3xl bg-rose-600 border-none" />
            <h2
              id={`EngName-${index}`}
              className="md:text-xl px-7 font-semibold -mb-4 mt-4 border-2 border-black bg-lime-500 p-1 rounded-lg md:w-auto w-auto text-base text-center text-black"
            >
              English Name: {item.EngName}
            </h2>
            <h2
              id={`JpName-${index}`}
              className="md:text-xl px-7 font-semibold -mb-2 mt-1 border-2 border-black bg-green-500 p-1 rounded-lg md:w-auto w-auto text-sm text-center text-black"
            >
              Japanese Name: {item.JpName}
            </h2>
            <img
              id={`Picture-${index}`}
              src={item.Picture}
              className="md:w-100 w-80 rounded-lg border-2 border-white"
              alt={"#Img Alt :" + item.EngName}
            />
            <span
              className="flex flex-row md:gap-4 gap-0.5"
              id={`span-main-${index}`}
            >
              <p
                id={`Date-${index}`}
                className="md:text-xl px-2 md:px-7 font-bold -mb-2 mt-1 border-2 border-black bg-violet-400 p-1 rounded-lg md:w-auto w-auto text-xs text-center text-black"
              >
                {item.Date}
              </p>
              <p
                id={`Genre-${index}`}
                className="md:text-xl px-3 md:px-7 font-bold -mb-2 mt-1 border-2 border-black bg-purple-400 p-1 rounded-lg md:w-auto w-auto text-xs text-center text-black"
              >
                {item.Genre}
              </p>
              <p
                id={`Episodes-${index}`}
                className="md:text-xl px-3 md:px-7 font-bold -mb-2 mt-1 border-2 border-black bg-fuchsia-400 p-1 rounded-lg md:w-auto w-auto text-xs text-center text-black"
              >
                {item.Episode}
              </p>
              <p
                id={`Rank-${index}`}
                className="md:text-xl px-2 font-semibold text-black -mb-2 mt-1 border-2 border-black bg-amber-400 p-1 rounded-lg md:w-auto w-auto text-sm text-center"
              >
                {item.Rank}
              </p>
            </span>
            <p
              id={`Description-${index}`}
              className="md:text-xl px-3 m-7 font-semibold -mb-2 mt-1 border-2 border-black bg-indigo-500 p-1 rounded-lg md:w-200 w-80 text-sm text-center"
            >
              {item.Description}
            </p>
            <span
              className="flex flex-row md:gap-4 gap-2"
              id={`span-second-${index}`}
            >
              <p
                id={`ARating-${index}`}
                className="md:text-xl px-5 font-semibold text-black mb-2 mt-1 border-2 border-black bg-blue-400 p-1 rounded-lg md:w-auto w-auto text-sm text-center"
              >
                My Rating: {item.ARating}
              </p>
              <p
                id={`MRating-${index}`}
                className="md:text-xl px-5 font-semibold text-black mb-2 mt-1 border-2 border-black bg-sky-400 p-1 rounded-lg md:w-auto w-auto text-sm text-center"
              >
                AnimeList Rating: {item.MRating}
              </p>
            </span>
            <hr className="h-1 w-full rounded-3xl bg-rose-600 border-none" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Body;
