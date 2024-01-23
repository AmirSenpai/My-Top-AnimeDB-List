import React from "react";
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
  return (
    <>
      <div className="text-center bg-custom-100-0 text-white md:py-7 py-3 md:text-lg text-sm">
        <p>
          Today is {namedDay} : {test.getFullYear()}/{namedMonth}/
          {test.getDate()}
        </p>
        <p className=" pt-2 font-semibold">
          CopyRight &copy; {new Date().getFullYear()} Amir Hossein Doosti |{" "}
          <a className="text-cyan-700" href="https://github.com/AmirSenpai">
            AmirSenpai.
          </a>
        </p>
        <p className="pt-4 text-cyan-400">
          • Made With React.js, Vite.js and TailwindCss •<br />• Compiled With
          GitHub Pages and Node.js •
        </p>
      </div>
    </>
  );
}
export default Footer;
