import './Event.css';
import Media1 from './Media1';
import { motion } from "framer-motion";
import { useScroll } from "framer-motion"
import { pageVariants, pageTransition } from "./FarmerAnimation";

function Event(props){
  return(

    <motion.div
    initial='init'
    animate='anim'
    exit='last'
    variants={pageVariants}
    transition={pageTransition}
  >

  <div className='train' style={{
    backgroundImage: `url(${props.image})`
  }}>
     <div className='train2'>
              <p>
              Artist:-{props.name}
              <br/>
              price: {props.price}<br/>
              date:{props.date}<br/>
              Venue:{props.Location}
              
            </p>
            </div>    
            <motion.button
            whileHover={{
            scale: 1.1,
            animate:360,
            transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            className='train1'>Book</motion.button>
            
  </div>
</motion.div>



  );
}      export default  Event;