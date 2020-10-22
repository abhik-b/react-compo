import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const variants={
    enter:(direction)=>{
        return{
            x:direction>0?400:-400,
            opacity:0,rotateZ:90,
        };
    },
    center:{
        zIndex:1,
            x:0,
            opacity:1   ,rotateZ:0,
           
    },
    exit:(direction)=>{
        return{
            zIndex:0,
            x:direction<0?400:-400,
            opacity:0,rotateZ:90,
        };
    }
}
const variants2={
    enter:(direction)=>{
        return{
            scale:direction>0?2:0,
            opacity:0,
            y:direction>0?400:-400,
            
        };
    },
    center:{
        y:0, 
        // zIndex:1,
            scale:1,
            opacity:1   ,  
    },
    exit:(direction)=>{
        return{
            // zIndex:0,
            scale:direction<0?2:0,
            opacity:0,
            y:direction<0?400:-400,
            
        };
    }
}
const variants3={
    enter:(direction)=>{
        return{
            scale:2,
            opacity:0,
            // y:direction>0?400:-400,
        };
    },
    center:{
        // y:0, 
            scale:1,
            opacity:1   ,  
    },
    exit:(direction)=>{
        return{
            scale:2,
            opacity:0,
            // y:direction<0?400:-400,
        };
    }
}




const ImgCarousel=()=>{
    const [index,setIndex]=useState(0)
    const [[page,direction],setPage]=useState([0,0])
    const paginate=(direction)=>{
        setPage([page + direction,direction])
        if (direction>0) {
            if(page%images.length===0){
                setIndex(0)
            }else{
                setIndex(index+direction)
            }
        } else {
            if(index+direction<0){
                setIndex(images.length-1)
            }else{
                setIndex(index+direction)
            }
        }
        console.log(index,page)
    }
    
return (
    <div className="img-carousel">
    <AnimatePresence initial={false} custom={direction} >
        <motion.img 
        key={page}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }}
            height="500"
            width="500"
        src={images[index]}
        />
    </AnimatePresence>
    <div className='indicator prev' onClick={()=>paginate(-1)}>p</div>
    <div className='indicator next' onClick={()=>paginate(1)}>n</div>
    </div>
);
};
export default ImgCarousel;


export const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
    "https://www.thegreatapps.com/application/upload/Apps/2016/07/sri-krishna-god-live-wallpaper-9.jpg",
    "http://getwallpapers.com/wallpaper/full/b/a/4/926038-best-lord-krishna-wallpaper-2018-2400x1800-720p.jpg"
  ];

//   transition={{
    // x: { type: "spring", stiffness: 300, damping: 30,},
    // opacity: { duration: 0.4 },
    // borderRadius: { duration: .3}
    // }}