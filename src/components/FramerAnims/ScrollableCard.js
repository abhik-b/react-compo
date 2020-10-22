import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';
import { useIntersection } from 'react-use';
import '../../FramerAnim.css'

const ScrollableCard=()=>{
    const { scrollY ,scrollYProgress }=useViewportScroll()
    const scale=useTransform(scrollY,[100,500],[1,3])
    const rotateX=useTransform(scrollY,[100,500],[80,0])
    const y=useTransform(scrollY,[100,500],[0,150])
   console.log(scrollYProgress.get())
    return (
    <motion.div
    className='scrollableCard-container'
    style={{height: "100vh"}}
    >
    <motion.div
    style={{scale,y,position: "sticky", top: "50%",left:'40%',rotateX}}
    className="scrollableCard"
    >
    </motion.div>
    </motion.div> 
    );
    };



export default ScrollableCard;
