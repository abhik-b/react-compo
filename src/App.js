import React, { useState } from "react";
import "./App.css";
import DarkToggle from "./components/DarkToggle";
import { useEffect } from "react";
import CardsContainer from "./components/ExpandingCards/CardsContainer";
import ScrollableCard from "./components/FramerAnims/ScrollableCard";
import ImgCarousel from "./components/FramerAnims/ImgCarousel";
import AnimateSvg from "./components/FramerAnims/AnimateSvg";


  


function App() {
  

  


  return (
    <div  className="App">
    
      <ImgCarousel/>
      <div className="logo">abhikB</div>
      <DarkToggle />
    </div>
  );
}
export default App;
