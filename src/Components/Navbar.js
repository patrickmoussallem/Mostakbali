// Navbar.js
import React, { useState } from 'react';
import { Button } from "./Button";
import '../App.css';
import "./Navbar.css"


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <a href='#' className='navbar-logo'>
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
              About
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
        <Button class='signupbtn' to='SignUp' name='SignUp' />
      </nav>
    </>
  );
};

export default Navbar;
