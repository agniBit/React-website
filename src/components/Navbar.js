import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [nav_up, setNav_up] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
    console.log(button);
  };

  useEffect(() => {
    setNav_up();
  }, []);

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  window.addEventListener('scroll', function(){
    if (window.scrollY > 0){
      setNav_up(false);
    } else {
      setNav_up(true);
    }
  })

  return (
    <>
      <nav className={ nav_up ? 'navbar' : 'navbar-up'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Nikhil Batteries
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <img src={click ? 'images/delete.png' : 'images/list.png'}/>
          </div>
          <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='#banner' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='#shop'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Shop
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='#services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='#contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='' className='nav-links' onClick={closeMobileMenu}>
                Call
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
