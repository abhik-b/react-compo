import { motion } from "framer-motion";
import React, { useState } from "react";

const CustomSelect = ({ values, afterSelect, multiple = false }) => {
  const [select, setSelect] = useState([]);
  const [open, setOpen] = useState(false);
  const [bhaloos, setBhaloo] = useState(values);

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
      <div></div>
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
        <>
          <input
            type="text"
            onChange={(e) => {
              if (e.currentTarget.value.length > 0) {
                setBhaloo(
                  values.filter((bhaloo) =>
                    bhaloo.search(e.currentTarget.value) !== -1 ? bhaloo : ""
                  )
                );
              } else {
                setBhaloo(values);
              }
            }}
          ></input>
          <motion.ul className="customSelect-ul">
            {bhaloos &&
              open &&
              bhaloos.map((bhaloo) => {
                return (
                  <motion.li
                    className="customSelect-li"
                    key={bhaloo}
                    onClick={() => {
                      selected(bhaloo);
                      if (!multiple) {
                        setOpen(false);
                      }
                    }}
                  >
                    {bhaloo}
                  </motion.li>
                );
              })}
          </motion.ul>
        </>
      )}
    </div>
  );
};
export default CustomSelect;

// {values.map((value) => {
//   return (
//     <motion.li
//       className="customSelect-li"
//       key={value}
//       onClick={() => {
//         selected(value);
//         if (!multiple) {
//           setOpen(false);
//         }
//       }}
//     >
//       {value}
//     </motion.li>
//   );
// })}
