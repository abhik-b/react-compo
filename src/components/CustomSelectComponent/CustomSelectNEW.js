import { useField } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "./customselect.css";
const inputRowVariantsParent = {
  animate: { transition: { staggerChildren: 0.2 } },
};
const inputRowVariants = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { duration: 0.5 } },
};

const scrollBTNVariants = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0, transition: { duration: 0.3 } },
};
const optionParentVariants = {
  initial: { scaleY: 0, transition: { duration: 0.4 } },
  animate: {
    scaleY: 1,
  },
};

const CustomSelectNew = ({
  values,
  afterSelect,
  multiple = false,
  invalid,
}) => {
  const [options, setOptions] = useState(values);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  //
  function select(value) {
    if (multiple) {
      if (selected.includes(value)) {
        setSelected((selected) =>
          selected.filter((selectedValues) => selectedValues !== value)
        );
      } else {
        setSelected((selected) => [...selected, value]);
      }
    } else {
      setSelected(value);
      afterSelect(value);
    }
  }

  //
  function onChange(event) {
    if (event.target.value.length > 0) {
      setOptions(
        values.filter((value) =>
          value.search(event.target.value) !== -1 ? value : ""
        )
      );
    } else {
      setOptions(values);
    }
  }

  //
  return (
    <div className="customSelect">
      {invalid && <h1>invalid</h1>}
      <motion.div
        animate={
          invalid
            ? {
                x: [0, -10, 10, 0],
                background: "#ff0000",
                transition: { loop: 3 },
              }
            : {
                background: "#eaeaea",
              }
        }
        className="customSelect-display-title"
        onClick={() => {
          setOpen(!open);

          if (open) {
            afterSelect(selected);
            setOptions(values);
          }
        }}
      >
        {selected.length > 0 ? `${selected}` : "Please select"}
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div className="customSelect-body">
            <motion.div
              initial="initial"
              animate="animate"
              exit="initial"
              variants={inputRowVariantsParent}
              className="input-row"
            >
              <motion.input variants={inputRowVariants} onChange={onChange} />
              <motion.div
                variants={inputRowVariants}
                exit="initial"
                className="close-btn"
                onClick={() => {
                  setOpen(false);
                  if (open) {
                    afterSelect(selected);
                    setOptions(values);
                  }
                }}
              >
                X
              </motion.div>
            </motion.div>
            <motion.ul
              className="ul"
              initial="initial"
              animate="animate"
              exit="initial"
              variants={optionParentVariants}
            >
              {options.map((option) => {
                return (
                  <motion.div
                    className={
                      selected.includes(option)
                        ? "customSelect-option-selected"
                        : "customSelect-option"
                    }
                    onClick={() => {
                      select(option);
                      if (!multiple) {
                        setOpen(false);
                        setOptions(values);
                      }
                    }}
                    key={option}
                  >
                    {option}
                  </motion.div>
                );
              })}
            </motion.ul>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={scrollBTNVariants}
              className="scroll-btn"
              onClick={(e) => {
                if (
                  Math.ceil(
                    e.currentTarget.previousSibling.scrollHeight -
                      e.currentTarget.previousSibling.scrollTop
                  ) === e.currentTarget.previousSibling.clientHeight
                ) {
                  e.currentTarget.previousSibling.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                } else {
                  e.currentTarget.previousSibling.scrollBy({
                    top: 100,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Scroll
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

//
export default CustomSelectNew;
