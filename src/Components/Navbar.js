import './Navbar.css';
import React, {useState} from 'react';
import { Button } from './Button';
import {Link} from 'react-router-dom';


function Navbar(){
    const [click, setClick] = useState(false);

    const hadleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
 

    return(
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                مستقبلي <i class="fa-solid fa-graduation-cap"></i>
                </Link>
                <div className='menu-icon' onClick={hadleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/test' className='nav-links' onClick={closeMobileMenu}>
                            Our test
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Contactus' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    
                </ul>
                <Button class='signupbtn' to='SignUp' name='SignUp'/>


                



            </nav>
        
        </>

    );


}

export default Navbar;