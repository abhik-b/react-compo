import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Buttons/Button";

const variants = {
  open: {
    opacity: 1,
  },
  closed: { opacity: 0 },
};

const StaggerChildrenDemo = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>toggle stagger demo</Button>

      <motion.div animate={isOpen ? "open" : "closed"} variants={variants}>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.6,
                  },
                },
                hidden: {
                  opacity: 0,
                  transition: {
                    staggerChildren: 0.9,
                    staggerDirection: -1,
                  },
                },
              }}
            >
              {data.map((d) => {
                return (
                  <motion.li
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: "100%",
                      },
                      show: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    key={d.id}
                  >
                    <h1 style={{ color: "pink" }}>{d.title}</h1>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
export default StaggerChildrenDemo;
