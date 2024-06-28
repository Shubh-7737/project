import './Signup.css';
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "./FarmerAnimation";
function Signup(Props) {
    return(
      <motion.div className='Sign1'
      initial='init'
      animate='anim'
      exit='last'
      variants={pageVariants}
      transition={pageTransition}
    >    <h1 className='heading'> Create Account</h1>
      <div className='Sign2'>K</div>
     </motion.div>      
    );
}export default Signup;