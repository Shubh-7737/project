import './Login.css';
import { motion } from "framer-motion";
import { transform } from "framer-motion"
import { pageVariants, pageTransition } from "./FarmerAnimation";

const transformer = transform([0, 100], [0, 360])
const rotate = transformer(50)
function Login(Props) {
    return(
      <div
      initial='init'
      animate='anim'
      exit='last'
      variants={pageVariants}
      transition={pageTransition}
    >      
      <div className='Login1'>
            <div className='Login2'>Welcome to <br></br>Concert Booking</div>
            <div className='user1'>USER:</div>
            <div className='pass1'>PASS:</div>
            <form>   
           <input className='user' type='text' name="user"/>
           <input className='pass' type='text' name="pass"/>
            <div className='butt'> NEXT</div>
            </form>
            <button className='forget'>forgot your password?</button>
            <div className='create'>Not member?  Create account</div>
            <div className='banner'>  
            <div className='banner1'></div>
            <div className='banner2'></div>
            <div className='banner3'></div>
            {/* <motion.div  animate={{ rotate: 10 }}className='banner3'></motion.div> */}
            </div>
     </div> 
     </div>      
    );
}export default Login;