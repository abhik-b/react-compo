import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';


const Arrow=({clicked,scale})=>{
    return (<motion.svg animate={clicked >1 && {scale}} width="294" height="72" viewBox="0 0 294 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path initial={{pathLength:0}} animate={clicked >0 &&{stroke:'#00ff80',pathLength:1,transition:{duration:.5}}} d="M292 36.0004C261.5 0.667103 145.863 -19.5166 188.5 36.0004C236.5 98.5002 232 -63.0001 24.5 53" stroke="none" stroke-width="3"/>
    <motion.path initial={{stroke:"none",pathLength:0,fill:'none'}} animate={clicked >0 &&{pathLength:1,stroke:"#00ff80",fill:"#00ff80"}}transition={{fill:{delay:1,duration:.2},stroke:{duration:.4,delay:.5}}}  d="M39.2038 22L27.1783 51.0231H61L2 71L39.2038 22Z" fill="none"   stroke-width="2"/>
    </motion.svg>)
}
const AnimateSvg=()=>{
    const [clicked,setClicked]=useState(0)
    const [scale,setScale]=useState(1)
    const [arrowScale,setArrowScale]=useState(1)
return (
<div className="animateSvg">
    <motion.button
    animate={{scale}}
    onClick={()=>{setClicked(clicked+1);
    setScale(1.2);
    setArrowScale(.8);setTimeout(()=>{setScale(1);setArrowScale(1)},200)}}
    >button</motion.button>
<Arrow clicked={clicked} scale={arrowScale}/>
{clicked >0 &&
<motion.p
animate={{scale}}
>clicked {clicked} times</motion.p>
}
</div>
);
};
export default AnimateSvg;