import'./Body.css'
import DatePicker from "react-datepicker";  
import Location from './Location';
import Price from './Price';
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "./FarmerAnimation";
import Filter from './Filter'
import'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react';

function Body(){
  const[selectedDate,setSelectedDate] = useState(null)
  return(
    <motion.div
        initial='init'
        animate='anim'
        exit='last'
        variants={pageVariants}
        transition={pageTransition}
      >
  <div id='box3'>
      <div className='browse'>
        <form>
          <div className='box1'>city:~<Location/></div>
          <div className='box1'>price:~<Price/></div>
          <div className='box1'>date:~<DatePicker className='boxx' selected={selectedDate} onChange={date => setSelectedDate(date)}/></div>
          <div className='box1'><button id='button' >Search</button></div>
        </form>
    </div>
    <div className='box2 '>We are excited to be a part of your musical journey<br/> and <br/>can't wait to see you at the next concert!</div>       
</div>
</motion.div>

  );
}      export default Body;
