import React from "react";
import { BiHome } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Nav(){
    return(
        <>
        <ul className="flex gap-10 items-center justify-center pb-3">
            <button className="bg-amber-50 p-2 text-center text-2xl font-bold rounded hover:bg-amber-300 transition-all"><a href="#"><BiHome /></a></button>
            <button className="bg-amber-50 p-2 text-center text-2xl font-bold rounded hover:bg-amber-300 transition-all"><a href="#"><GrContact /></a></button>
            <button className="bg-amber-50 p-2 text-center text-2xl font-bold rounded hover:bg-amber-300 transition-all"><a href="#"><FaDatabase /></a></button>
            {/*<button className="bg-amber-50 p-2 text-center text-lg font-bold rounded hover:bg-amber-300 transition-all"><a href="#">d</a></button>*/}
            {/*<button className="bg-amber-50 p-2 text-center text-lg font-bold rounded hover:bg-amber-300 transition-all"><a href="#">d</a></button>*/}
            <button className="bg-amber-50 p-2 text-center text-2xl font-bold rounded hover:bg-amber-300 transition-all"><a href="#"><FaGithub /></a></button>
        </ul>
        </>
    )
}
export default Nav