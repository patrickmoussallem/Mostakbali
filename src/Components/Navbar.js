// Navbar.js
import React, { useState } from 'react';
import { Button } from "./Button";
import '../App.css';
import "./Navbar.css"
import { useLocation } from 'react-router-dom';
import { useNavigate, Link } from "react-router-dom"



const Navbar = () => {
  const history=useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  let token = localStorage.getItem('token');
  
  function handlesignout(){
    console.log("signing out")
    localStorage.removeItem('token');
    token = null;
    history('/');
  } 
  

  return (
    <>
      <nav className='navbar'>
        <a href='/' className='navbar-logo'>
          Mostakbali <i className="fa-solid fa-graduation-cap"></i>
        </a>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <a href='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='/test' className='nav-links' onClick={closeMobileMenu}>
              Our test
            </a>
          </li>
          <li className='nav-item'>
            <a href='/about' className='nav-links' onClick={closeMobileMenu}>
              About us
            </a>
          </li>
          <li className='nav-item'>
            <a href='/contactus' className='nav-links' onClick={closeMobileMenu}>
              Contact us
            </a>
          </li>
          <li className='nav-item'>
            <a href='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
              Signup
            </a>
          </li>
        </ul>
        
        {isLoggedIn ? <Button class='signupbtn' to='/' name= <i class="fa-solid fa-right-from-bracket fa-sm"> </i> onClick={handlesignout}/> : <Button class='signupbtn' to='signup' name='Sign up'/> }
      </nav>
    </>
  );
};

export default Navbar;
