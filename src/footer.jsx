import React from "react";
function Footer(){
    var months = ["January", "February", "March", "April", "May", "June", "July",
         "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let test = new Date();
    var namedDay = days[test.getDay()];
    var namedMonth = months[test.getMonth()];
    return(
        <>
        <div className="bg-custom-100-0 text-white py-7 rounded-t-lg">
        <p className="text-center pt-2 font-semibold text-lg">&copy; {new Date().getFullYear()} Amir Hossein Doosti - AmirSenpai.</p>
        <p className="text-center text-xl">Today is {namedDay} : {test.getFullYear()}/{namedMonth}/{test.getDate()}</p>
        </div>
        </>
    )
}
export default Footer;