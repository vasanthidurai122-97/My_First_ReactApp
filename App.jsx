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
        <Button label="First" color="blue" onClick={handleClick} />
        <Button label="Success" color="green" onClick={() => alert('Success!')} />
        <Button label="Danger" color="red" onClick={() => alert('Danger!')} />
      </div>
    <Footer text="@ My First App, All rights reserved."/>
    </>
  );
}; export default App;
