import './About.css';
import Artist from './Artist';
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "./FarmerAnimation";
function About(props){
    return(  
       
      <> <motion.div
      initial='init'
      animate='anim'
      exit='last'
      variants={pageVariants}
      transition={pageTransition}
    ><div className=' about'>
            <div className='About1'>
                Connecting artists <br />
                with their most <br />
                passionate fans</div>
        </div><Artist /></motion.div></>
       
    );
}      export default  About;