import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
const Button = ({ children, onClick }) => {
  const [counter, setCounter] = useState(0);
  function clicked() {
    onClick();
    setCounter(counter + 1);
  }
  const variants = {
    notpressed: {
      boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.5)",
      backgroundColor: "#fff",
      color: "#000",
    },
    pressed: {
      boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#4e5ff7",
      color: "#fff",
    },
  };

  return (
    <motion.div
      whileHover={{
        borderRadius: 12,
        transition: { duration: 0.7 },
      }}
      animate={counter % 2 === 0 ? "notpressed" : "pressed"}
      transition={{ ease: "easeInOut" }}
      variants={variants}
      onClick={() => clicked()}
      className="custom-button"
    >
      {children}
    </motion.div>
  );
};
export default Button;
