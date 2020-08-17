import { motion } from "framer-motion";
import React, { useState } from "react";
import "./App.css";
import BottomMenu from "./components/BottomMenu/BottomMenu"; // import StaggerChildrenDemo from "./components/StaggerChildren/Stagger";
import CustomSelect from "./components/CustomSelectComponent/CustomSelect";

const tabs = ["Home", "Menu", "About", "MAil"];
const liVariants = {
  start: { scale: [0, 1, 0] },
  end: { scale: [0, 1, 0] },
};
function App() {
  const [tab, setTab] = useState();
  return (
    <div className="App">
      {tab === tabs[0] && (
        <div className="demo">
          <h1>Welcome to TabBar Animation</h1>
          <CustomSelect
            values={["a", "b", "c", "ab", "ac", "abc"]}
            afterSelect={(value) => console.log(value)}
            multiple={true}
          />
        </div>
      )}
      {tab === tabs[1] && (
        <div className="demo">
          <h1>This video focuses on</h1>
          <motion.ul
            className="notes-ul"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { y: "-100%", opacity: 0 },
              show: {
                y: "0%",
                opacity: 1,
                transition: { staggerChildren: 0.5 },
              },
            }}
          >
            <motion.li
              className="notes"
              variants={{
                hidden: { y: -100, opacity: 0 },
                show: { y: 0, opacity: 1 },
              }}
            >
              TabBar Animations
            </motion.li>
            <motion.li
              className="notes"
              variants={{
                hidden: { y: -100, opacity: 0 },
                show: { y: 0, opacity: 1 },
              }}
            >
              Animate svgs
            </motion.li>
            <motion.li
              className="notes"
              variants={{
                hidden: { y: -100, opacity: 0 },
                show: { y: 0, opacity: 1 },
              }}
            >
              Stagger Children
            </motion.li>
          </motion.ul>
        </div>
      )}
      {tab === tabs[2] && (
        <div className="demo">
          <h1>Pay Attention </h1>
          <motion.ul
            variants={{
              start: { transition: { staggerChildren: 3 } },
              end: { transition: { staggerChildren: 3 } },
            }}
            initial="start"
            animate="end"
          >
            <motion.p
              className="tabbar-p"
              variants={liVariants}
              transition={{ duration: 6, yoyo: Infinity, ease: "easeInOut" }}
            >
              npx create-react-app your-app-name
            </motion.p>
            <motion.p
              className="tabbar-p"
              variants={liVariants}
              transition={{ duration: 6, loop: Infinity, ease: "easeInOut" }}
            >
              npm i --save framer-motion
            </motion.p>
          </motion.ul>
        </div>
      )}
      {tab === tabs[3] && (
        <div className="demo">
          <h1>Thank You for stopping by</h1>
          <motion.h3
            animate={{ opacity: [0, 1], transition: { duration: 4.9 } }}
          >
            if u want to see more web development related content , consider
            subscribing
          </motion.h3>
        </div>
      )}
      <BottomMenu tabs={tabs} onTabSelect={(tab) => setTab(tab)} />
    </div>
  );
}
export default App;
