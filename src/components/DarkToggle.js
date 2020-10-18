import { AnimateSharedLayout, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import "../DarkToggle.css";
import day from "../day1.png";
import night from "../night1.png";

function changeTheme() {
  document.body.classList.toggle("light");
}

export function ToggleButton({
  img,
  onCLick,
  selected,
  marginLeft = "0px",
  borderColor,
}) {
  return (
    <div
      onClick={() => onCLick()}
      style={{ background: `url(${img})`, marginLeft: marginLeft }}
      className="tgl-btn"
    >
      {!selected && (
        <motion.div
          layoutId="outline"
          className="outline"
          initial={false}
          animate={{ background: borderColor }}
          transition={spring}
        >
          change theme
        </motion.div>
      )}
    </div>
  );
}

export default function DarkToggle() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    changeTheme();
  }, [light]);
  return (
    <AnimateSharedLayout>
      <div className="tgl">
        <ToggleButton
          onCLick={() => {
            setLight(true);
          }}
          borderColor="#202020"
          selected={light === true}
          img={day}
        />
        <ToggleButton
          onCLick={() => {
            setLight(false);
          }}
          borderColor="#fff"
          marginLeft={"5px"}
          selected={light === false}
          img={night}
        />
      </div>
    </AnimateSharedLayout>
  );
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};
