import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from "./header.jsx";
import Body from "./Anime/AnimeDB.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-stone-300 h-screen2">
    <Header />
        <Body/>
      </div>
    </>
  )
}

export default App
