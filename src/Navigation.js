import './Navigation.css';
import './Body.css';
import { Link } from "react-router-dom";
import Media1 from './Media1';
import { motion } from "framer-motion";
import Login from './Login';
import { render } from '@testing-library/react';

function Navigation(){
  return(
    <><div className='box'>
      <div className='logo'>LOGO</div>
      <div className='nav'>
        <ul>
          <li><Link to="/"id='col'>Home</Link> </li>
          <li><Link to="Event"id='col'>Event</Link></li>
          <li><Link to="Media"id='col'>Media</Link></li>
          <li><Link to="About"id='col'>About us</Link></li>
          <div className='button nav'id='col'><Link to="Login"id='col'>Log in</Link></div>
        </ul>
      </div>
    </div>

      </> 
        
  );
}      export default Navigation;