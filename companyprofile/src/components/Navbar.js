import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  

    return (
        <>
          <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/' className='navbar-logo'>
                CLOUD STORMS
              </Link>
              <div>
              </div>
              <ul className= 'nav-menu'>
                <li className='nav-item'>
                  <Link to='/' className='nav-links'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/ourteam'
                    className='nav-links'
                  >
                    Our Team
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/contactus'
                    className='nav-links'
                  >
                    Contact Us
                  </Link>
                </li>
    
              </ul>
          
            </div>
          </nav>
        </>
      );
}

export default Navbar;
