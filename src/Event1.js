import React, { useState } from 'react';
import './App.css';
import { motion } from "framer-motion";
import Event from './Event';
const pageVariants = {
    init: {
      opacity: 0,
      x: '-100%',
    },
    anim: {
      opacity: 1,
      x: 0,
    },
    last: {
      opacity: 0,
      x: '-100%',
    },
  };
  
  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 1,
  };
function Event1(){
    
   
    const a=[
        {
              Artist:"Anuv Jain",
              price:"650",
              date:"20/12/2023",
              Venue:"Jaipur",
              backgroundImage:"images/artist/anu.jpeg",
              state:false
        
        },

       {   
              Artist:"King",
              price:"1300",
              date:"9/12/2023",
              Venue:"Delhi",
              backgroundImage:"images/artist/king.jpeg",
              state:false
        },

       {
              Artist:"Justin biber",
              price:"1450",
              date:"9/11/23",
              Venue:"Goa",
              backgroundImage:"images/artist/justin.jpeg",
              state:false},

        {
             Artist:"Weekend",
             price:"5000",
             date:"31/12/23",
             Venue:"Mumbai",
             backgroundImage:"images/artist/weeek.jpeg",
             state:false},

        {
             Artist:"Coldplay",
             price:"10000",
             date:"06/05/2024",
             Venue:"Goa",
             backgroundImage:"images/artist/cold.jpeg",
             state:false},
        {
             Artist:"Ed Sheeran",
             price:"950",
             date:"21/03/2023",
             Venue:"Delhi",
             backgroundImage:"images/artist/Ed.jpeg",
             state:false},

    ];

    const [endresult, setEndresult] = useState(a);
   

    return( 
        <div>
                
            {
            endresult.map((x,index)=>(
                <Event name={x.Artist} price={x.price} date={x.date} Location={x.Venue} image={x.backgroundImage}/>
              
            ))
            }  
        </div>
    );
}
        
export default Event1;