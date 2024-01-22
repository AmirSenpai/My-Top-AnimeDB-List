import React from "react";
import { BiHome } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";
import { PiCoffeeFill } from "react-icons/pi";
function Nav() {
  return (
    <>
      <ul className="flex md:gap-10 gap-6 items-center justify-center pb-3">
        <a href="#">
          <button className="bg-amber-50 md:p-2 p-2.5 text-center md:text-2xl text-xl font-bold rounded hover:bg-amber-300 transition-all">
            <BiHome />
          </button>
        </a>
        <a href="#">
          <button className="bg-amber-50 md:p-2 p-2.5 text-center md:text-2xl text-xl font-bold rounded hover:bg-amber-300 transition-all">
            <GrContact />
          </button>
        </a>
        <a href="#">
          <button className="bg-amber-50 md:p-2 p-2.5 text-center md:text-2xl text-xl font-bold rounded hover:bg-amber-300 transition-all">
            <FaDatabase />
          </button>
        </a>
        {/*<button className="bg-amber-50 p-2 text-center text-lg font-bold rounded hover:bg-amber-300 transition-all"><a href="#">d</a></button>*/}
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
