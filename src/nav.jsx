import React, { useState } from "react";
import { BiHome } from "react-icons/bi";
import { MdOutlineUpdate } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";

function Nav() {
  const openHtmlFileInNewTab = () => {
    // Handle the logic to load your HTML file
    // For simplicity, let's assume you have an HTML file named "example.html"
    window.open("./public/index.html", "_blank");
  };
  // const openHtmlFileInNewTab = () => {
  //   // Use the absolute path to the HTML file in the public folder
  //   // For example, if your HTML file is in the public folder, provide the full path
  //   const htmlFilePath = process.env.PUBLIC_URL + './public/updatelog.html';

  //   // Open the HTML file in a new tab
  //   window.open(htmlFilePath, '_blank');
  // };

  return (
    <>
      <ul className="flex md:gap-10 gap-6 items-center justify-center pb-3">
        <a href="#">
          <button className="bg-amber-50 md:p-2 p-2.5 text-center md:text-2xl text-xl font-bold rounded hover:bg-amber-300 transition-all">
            <BiHome />
          </button>
        </a>
        <a href="#" onClick={openHtmlFileInNewTab}>
          <button className="bg-amber-50 md:p-2 p-2.5 text-center md:text-2xl text-xl font-bold rounded hover:bg-amber-300 transition-all">
            <MdOutlineUpdate />
          </button>
        </a>
        <a href="#">
          <button className="bg-amber-50 md:p-2 p-2.5 text-center md:text-2xl text-xl font-bold rounded hover:bg-amber-300 transition-all">
            <FaDatabase />
          </button>
        </a>
        <a href="https://www.coffeebede.com/amirhosseind" target="_blank">
          <button className="bg-amber-50 md:p-2 p-2.5 text-center md:text-2xl text-xl font-bold rounded hover:bg-amber-300 transition-all">
            <PiCoffeeFill />
          </button>
        </a>
        <a
          href="https://github.com/AmirSenpai/My-Top-AnimeDB-List"
          target="_blank"
        >
          <button className="bg-amber-50 md:p-2 p-2.5 text-center md:text-2xl text-xl font-bold rounded hover:bg-amber-300 transition-all">
            <FaGithub />
          </button>
        </a>
      </ul>
    </>
  );
}
export default Nav;
