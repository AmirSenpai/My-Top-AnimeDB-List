import React from "react";
import { GoArrowUp } from "react-icons/go";
import { FaGithub, FaDiscord } from "react-icons/fa";

function Footer() {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let test = new Date();
  var namedDay = days[test.getDay()];
  var namedMonth = months[test.getMonth()];
  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="text-center bg-custom-100-0 text-white border-amber-500 border-t-2 border-x-2 rounded-t-lg md:py-7 py-3 md:text-lg text-sm">
        <p>
          Today is {namedDay} : {test.getFullYear()}/{namedMonth}/
          {test.getDate()}
        </p>
        <p className="pt-4 text-teal-500">
          • Made With React.js, Vite.js and TailwindCss •<br />• Compiled With
          GitHub Pages and Node.js •
        </p>
        <div className="flex flex-row gap-2 items-center justify-center text-center mt-4">
          <a target="_blank" href="https://github.com/AmirSenpai" className="bg-slate-300 p-2 text-black mx-4 rounded-md w-12 hover:bg-slate-400 transition-all md:text-2xl text-xl"><button><FaGithub/></button></a>
          <a  onClick={ScrollTop} href="" className="bg-slate-300 mx-2 w-12 p-2 md:text-2xl text-xl font-bold rounded-md hover:bg-amber-500 transition-all text-black"><button><GoArrowUp/></button></a>
          <a target="_blank" href="" className="bg-slate-300 p-2 text-black mx-4 rounded-md w-12 hover:bg-slate-400 transition-all md:text-2xl text-xl"><button><FaDiscord/></button></a>
        </div>
        <p className=" pt-5 font-semibold pb-0 -mb-3">
          CopyRight &copy; {new Date().getFullYear()} Amir Hossein Doosti |{" "}
          <a className="text-cyan-700" href="https://github.com/AmirSenpai">
            AmirSenpai.
          </a>
        </p>
      </div>
    </>
  );
}
export default Footer;
