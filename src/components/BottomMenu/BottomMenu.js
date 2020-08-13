import { motion } from "framer-motion";
import React, { useState } from "react";
import HomeSvg from "./HomeSvg";
import MenuSvg from "./MenuSvg";
import MailSvg from "./Mail";
import InfoSvg from "./Info";

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.5 } },
};
const itemVariants = {
  hidden: { y: 100 },
  show: { y: 0 },
};
const MenuItem = ({ item, isSelected, onClick }) => {
  return (
    <motion.li
      variants={itemVariants}
      className="item"
      onClick={() => onClick()}
    >
      <motion.div
        className="icon"
        animate={isSelected ? "open" : "close"}
        variants={{
          open: { rotate: [0, 360], y: [0, -70, 0], scale: 1.3 },
          close: { y: 0, scale: 0.9 },
        }}
        transition={{ ease: "easeOut" }}
      >
        {item}
      </motion.div>
      <motion.div
        className="backdrop"
        animate={isSelected ? "hidden" : "show"}
        variants={{
          hidden: {
            height: "10%",
            borderTopLeftRadius: "100px",
            borderTopRightRadius: "100px",
            transition: { duration: 0.5 },
          },
          show: {
            height: "100%",
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
          },
        }}
      />
    </motion.li>
  );
};

function BottomMenu({ onTabSelect, tabs }) {
  const [item, setItem] = useState();
  return (
    <motion.ul
      initial="hidden"
      animate="show"
      variants={listVariants}
      className="bottom-menu"
    >
      <MenuItem
        item={<HomeSvg isSelected={item === 0} />}
        isSelected={item === 0}
        onClick={() => {
          setItem(0);
          onTabSelect(tabs[0]);
        }}
        key={0}
      />
      <MenuItem
        item={<InfoSvg isSelected={item === 1} />}
        isSelected={item === 1}
        onClick={() => {
          setItem(1);
          onTabSelect(tabs[1]);
        }}
        key={1}
      />
      <MenuItem
        item={<MailSvg isSelected={item === 2} />}
        isSelected={item === 2}
        onClick={() => {
          setItem(2);
          onTabSelect(tabs[2]);
        }}
        key={2}
      />
      <MenuItem
        item={<MenuSvg isSelected={item === 3} />}
        isSelected={item === 3}
        onClick={() => {
          setItem(3);
          onTabSelect(tabs[3]);
        }}
        key={3}
      />
    </motion.ul>
  );
}
export default BottomMenu;
