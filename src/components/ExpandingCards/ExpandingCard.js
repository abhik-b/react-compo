import React from 'react'
import {AnimateSharedLayout, motion} from 'framer-motion'
import '../../ExpandingCard.css'


const ExpandedCard=({deselect,value})=>{
    return <motion.div 
    onClick={()=>deselect()}
    className='expanded-card' 
    layoutId="expandable-card"
    style={{background:value}}>
    <motion.h2
            className='expanded-card-h' 
            layoutId="expandable-card-h"
            >
            Expanded 
            {value}</motion.h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate aliquam molestiae ratione sint magnam sequi fugiat u
        llam earum distinctio fuga iure, ad odit repudiandae modi est alias ipsum aperiam. 
        Culpa?</p>
    </motion.div>
}


function Card({value,select,deselect,isSelected}) {
    return <AnimateSharedLayout>
        {isSelected ?

           <ExpandedCard value={value} deselect={()=>deselect()}/>
        :
           
            (<motion.div     
            onClick={()=>select()}
            className="normal-card" 
            layoutId="expandable-card"
            style={{background:value}}>
            <motion.h1
            layoutId="expandable-card-h"
            >{value}</motion.h1>
            </motion.div>)
        }
    
    </AnimateSharedLayout>
    
}

export default Card;