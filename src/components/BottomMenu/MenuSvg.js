import { motion } from "framer-motion";
import React from "react";

const MenuSvg = ({ isSelected }) => {
  return (
    <motion.svg
      id="Capa_1"
      height="100%"
      viewBox="0 0 512 512"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ fill: "#c300ff" }}
      animate={isSelected ? { fill: "#fff" } : { fill: "#c300ff" }}
      transition={{ ease: "easeOut" }}
    >
      <g>
        <path d="m120 91h392v90h-392z" />
        <circle cx="45" cy="136" r="45" />
        <path d="m120 211h392v90h-392z" />
        <circle cx="45" cy="256" r="45" />
        <path d="m120 331h392v90h-392z" />
        <circle cx="45" cy="376" r="45" />
      </g>
    </motion.svg>
  );
};
export default MenuSvg;
