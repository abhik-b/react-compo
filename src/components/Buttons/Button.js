import { motion } from "framer-motion";
import React from "react";
import { useState, useEffect } from "react";
import "./Button.css";

const Button = ({ isSelected, b, onClick }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 2000);
  }, [isSelected]);

  return (
    <>
      <motion.div
        animate={
          isSelected
            ? {
                background: "rgba(17, 72, 255,0)",
                color: "rgba(17, 72, 255,1)",
                transition: { delay: 0.7 },
              }
            : {
                background: "rgba(17, 72, 255,1)",
                color: "rgba(255,255,255,1)",
                transition: { delay: 0.4 },
              }
        }
        className="glitcheDBOX"
        onClick={() => onClick(b)}
      >
        {b}
        {active && (
          <motion.div className="glitch">
            <motion.div
              animate={{
                background: ["#0ff", "#ff0", "#00f", "#0ff"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ delay: 0.4 }}
              className="box one"
            ></motion.div>
            <motion.div
              animate={{
                background: ["#ff0000", "#0000ff", "#00ffff", "#ff0000"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="box two"
            ></motion.div>
            <motion.div
              animate={{
                background: ["#00f", "#0ff", "#f00", "#00f"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ delay: 0.7 }}
              className="box three"
            ></motion.div>
            <motion.div
              animate={{
                background: ["#ff0000", "#0000ff", "#00ffff", "#ff0000"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ delay: 0.2 }}
              className="box four"
            ></motion.div>
            <motion.div
              animate={{
                background: ["#00f", "#0ff", "#f00", "#00f"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ duration: 1 }}
              className="box five"
            ></motion.div>
            <motion.div
              animate={{
                background: ["#0ff", "#f00", "#00f", "#0ff"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ delay: 0.2 }}
              className="box  six"
            ></motion.div>
            <motion.div
              animate={{
                background: ["#00f", "#0ff", "#f00", "#00f"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ delay: 0.6 }}
              className="box  seven"
            ></motion.div>
            <motion.div
              animate={{
                background: ["#0ff", "#ff0", "#00f", "#0ff"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ delay: 0.5 }}
              className="box eight"
            ></motion.div>
            <motion.div
              animate={{
                background: ["#0ff", "#f00", "#0f0", "#f0f"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ delay: 0.4 }}
              className="box nine"
            ></motion.div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};
export default Button;
