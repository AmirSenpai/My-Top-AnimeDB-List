import React from "react";
import Header from "./header.jsx";
import Body from "./Anime/AnimeDB.jsx";
import Footer from "./footer.jsx";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-custom-200-0 h-full">
        <Header />
        <Body />
        <Footer/>
      </div>
    </>
  );
}

export default App;
