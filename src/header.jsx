import React from "react";
import Nav from "./nav.jsx";
import packageJson from "../package.json"; // adjust the path accordingly
import { MdOutlineUpdate } from "react-icons/md";

function Header() {
  const appVersion = packageJson.version;
  return (
    <>
      <div className="bg-custom-100-0 md:w-full m-auto md:rounded-b-xl md:h-70 h-56">
        <h1 className="md:text-5xl font-bold text-2xl font-vazir md:pt-5 pt-3 pl-5 text-left text-white">
          Amir's Top 10 Anime's DB
        </h1>
        <span className="flex flex-col">
          <p className="md:text-2xl text-lg text-left pl-10 text-white md:pt-5 md:pb-1 pt-3 pb-1">
            ╘ `Amir Top 10 Anime's Ranked` Website
          </p>
          <p className="md:text-lg text-sm text-left md:pl-20 pl-16 pb-3 pt-1 text-white">
            ╘ Current Website's Version:{" "}
            <span className="text-fuchsia-500 underline">{appVersion}</span>
            <span className="md:text-sm text-xs flex flex-row pl-1 pt-2 pb-2">
              "click on the{" "}
              <MdOutlineUpdate className="text-white text-base mx-2" /> button
              to see Update-Log's Page"
            </span>
          </p>
        </span>
        {/* <p className="md:text-lg text-sm text-left pl-3 text-white md:py-2 pb-2">
        ╘  `Amir's Top 10 Anime's Ranked` Website ╛
        </p> */}
        <Nav />
      </div>
    </>
  );
}
export default Header;
