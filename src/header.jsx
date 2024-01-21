import React from "react";
import nav from "./nav.jsx";
import Nav from "./nav.jsx";

function Header() {
  return (
    <>
      <div className="bg-custom-100-0 md:w-full m-auto md:rounded-b-xl">
        <h1 className="md:text-5xl font-bold text-2xl font-vazir md:pt-5 pt-3 pl-5 text-left text-white">
          Amir's Top 10 Anime's DB
        </h1>
        <p className="md:text-2xl text-lg text-left pl-3 text-white md:py-5 py-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
          veniam.
        </p>
        <Nav />
      </div>
    </>
  );
}
export default Header;
