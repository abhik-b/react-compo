import { motion } from "framer-motion";
import React, { useState } from "react";

const CustomSelect = ({ values, afterSelect, multiple = false }) => {
  const [select, setSelect] = useState([]);
  const [open, setOpen] = useState(false);
  function selected(value) {
    if (multiple) {
      if (!select.includes(value)) {
        setSelect((select) => [...select, value]);
      } else {
        setSelect((select) => select.filter((val) => val !== value));
      }
    } else {
      if (value === select) {
        setSelect([]);
        afterSelect();
      } else {
        setSelect(value);
        afterSelect(value);
      }
    }
  }
  return (
    <div className="customSelect-body">
      <div
        className="customSelect-display-title"
        onClick={() => {
          setOpen(!open);
          if (open) {
            afterSelect(select);
          }
        }}
      >
        {select.length > 0 ? `${select}` : "Please Select"}
      </div>
      {open && (
        <motion.ul className="customSelect-ul">
          {values.map((value) => {
            return (
              <motion.li
                className="customSelect-li"
                key={value}
                onClick={() => {
                  selected(value);
                  if (!multiple) {
                    setOpen(false);
                  }
                }}
              >
                {value}
              </motion.li>
            );
          })}
        </motion.ul>
      )}
    </div>
  );
};
export default CustomSelect;
