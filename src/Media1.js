import React, { useState } from 'react';
import './App.css';
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "./FarmerAnimation";
import Media from './Media';
function Media1(){
    
   
    const a=[
        {     content:"Sunburn Goa is one of the most popular electronic dance music festivals in the world. Held annually in Goa, India, Sunburn is known for its vibrant atmosphere, diverse music lineup, and breathtaking venue. The festival attracts thousands of music lovers from all around the world who come to experience the unique blend of music, culture, and natural beauty that Goa has to offer.",
              video:"videos/sunburn.mp4https://drive.google.com/file/d/15TLvQxMB2xyQO9wpl0mDqmJXro-0Gery/view?usp=sharing",
              state:false
        
        },
     
        {     content:"Coachella is one of the most iconic and popular music festivals in the world. It takes place annually in the desert of California and attracts music lovers from all over the globe. The festival is renowned for its diverse lineup of artists from various genres, including rock, hip hop, pop, electronic, and more. The festival features multiple stages, interactive art installations, and a variety of food and drink options.",
               video:"https://drive.google.com/file/d/1DXoFn5cw0gYX6zWKI2Yk9Oxc0MNRjWS2/view?usp=sharing",
              state:false
            
        },
        
         {     content:"Tomorrowland is one of the most famous and popular electronic dance music festivals in the world. It takes place annually in Boom, Belgium and attracts tens of thousands of music lovers from all around the globe. The festival is renowned for its unique and magical atmosphere, which is created through its stage designs, light shows, and special effects.",
              video:"https://drive.google.com/file/d/14PD2TwXN5aDP6JhAlhydh1u3V-2HMQxt/view?usp=sharingdd.mp4",
              state:false
            
        },


    ];

    const [endresult, setEndresult] = useState(a);
   

    return( 
        <motion.div
    initial='init'
    animate='anim'
    exit='last'
    variants={pageVariants}
    transition={pageTransition}
  >       
                
            {
            endresult.map((x,index)=>(
                <Media content={x.content} video={x.video}/>    
            ))
            }  

        
        </motion.div>
);
}
        
export default Media1;