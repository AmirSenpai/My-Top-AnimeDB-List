import React, { useState } from "react";
import { BiHome } from "react-icons/bi";
import { MdOutlineUpdate } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";

function Nav() {
  const openHtmlFileInNewTab = () => {
    // Use the correct path to your HTML file
    window.open("./Logs.html", "_blank");
  };
  const NotAvailable = () => {
    confirm(
      "this page is still under Development, please return at another time💙",
    );
  };

  return (
    <>
      <ul className="flex md:gap-10 gap-6 items-center justify-center pb-3">
        <a href="#">
          <button className="bg-amber-50 md:p-2 p-2.5 text-center md:text-2xl text-xl font-bold rounded hover:bg-amber-300 transition-all ease-in-out delay-100">
            <BiHome />
          </button>
        </a>
        <a href="#" onClick={openHtmlFileInNewTab}>
          <span class="bg-red-800 text-white text-xs font-light me-2 px-2 py-0.5 rounded-full absolute -mt-3 -ml-5">
            NEW
          </span>
          <button className="bg-amber-50 md:p-2 p-2.5 text-center md:text-2xl text-xl font-bold rounded hover:bg-amber-300 transition-all ease-in-out delay-100">
            <MdOutlineUpdate className="animate-spin-slow" />
          </button>
        </a>
        <a href="#" onClick={NotAvailable}>
          <button className="bg-amber-50 md:p-2 p-2.5 text-center md:text-2xl text-xl font-bold rounded hover:bg-amber-300 transition-all ease-in-out delay-100">
            <FaDatabase />
          </button>
        </a>
        <a href="https://www.coffeebede.com/amirhosseind" target="_blank">
          {/* <span class="bg-yellow-950 text-white text-xs font-light me-2 px-2 py-0.5 rounded-full absolute -mt-3 ml-4">
            $Coffee
          </span> */}
          <button className="bg-amber-50 md:p-2 p-2.5 text-center md:text-2xl text-xl font-bold rounded hover:bg-amber-300 transition-all ease-in-out delay-100">
            <PiCoffeeFill />
          </button>
        </a>
        <a
          href="https://github.com/AmirSenpai/My-Top-AnimeDB-List"
          target="_blank"
        >
          <button className="bg-amber-50 md:p-2 p-2.5 text-center md:text-2xl text-xl font-bold rounded hover:bg-amber-300 transition-all ease-in-out delay-100">
            <FaGithub />
          </button>
        </a>
      </ul>
    </>
  );
}
export default Nav;
