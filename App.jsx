// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from "react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Button from "./assets/components/Button";

const App = () =>{
  function handleClick() {
    alert("Button Clicked!");
  }

  return(
    <>
    <Header title ="My First App" subtitle = "Welcome to website"/>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Button label="Primary" color="blue" onClick={handleClick} />
        <Button label="Success" color="green" onClick={() => alert('Success!')} />
        <Button label="Danger" color="red" onClick={() => alert('Danger!')} />
      </div>
    <Footer text="@ My First App, All rights reserved."/>
    </>
  );
}; export default App;