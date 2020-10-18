import React,{useState} from 'react';
import Card from './ExpandingCard'
import  {motion} from 'framer-motion'
const cards=['#f81566','#fb4903','#03de5a','#ffec42',"#b413ff",'#FF2020','#00E3D6','#0035BC','#FB03C4','#FFA98D']


const CardsContainer=()=>{
    const [selected,setSelected]= useState()

return (
    
<motion.div  className='cards-container'>
{cards.map(card=>{
    return <Card key={card}
                isSelected={selected===card} 
                select={()=>setSelected(card)} 
                deselect={()=>setSelected()}
                value={card}
                />
})}
</motion.div>

);
};
export default CardsContainer;