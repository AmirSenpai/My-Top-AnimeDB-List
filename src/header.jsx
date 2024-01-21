import React from "react";
import nav from "./nav.jsx";
import Nav from "./nav.jsx";

function Header(){
    return(
        <>
            <div className="bg-gray-800 w-11/12 m-auto rounded-b-xl">
            <h1 className="text-5xl font-vazir pt-5 text-center text-white">Amir's Top Anime's + DB & List</h1>
                <p className="text-2xl text-center text-white py-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, veniam.
                </p>
                <Nav />
            </div>
        </>
    )
}
export default Header