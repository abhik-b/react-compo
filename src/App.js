import React, { useState } from "react";
import "./App.css";
import DarkToggle from "./components/DarkToggle";
import { useEffect } from "react";
import CardsContainer from "./components/ExpandingCards/CardsContainer";



function App() {
  
  return (
    <div className="App">
     <CardsContainer/>
<h1 className='headin'>Easy way to expand cards</h1>
      <div className="logo">abhikB</div>
      <DarkToggle />
    </div>
  );
}
export default App;
