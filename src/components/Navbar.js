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
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  window.addEventListener('scroll', function(){
    if (window.scrollY > 10){
      setNav_up(false);
    } else {
      setNav_up(true);
    }
  })

  return (
    <>
      <nav className={ !click & nav_up ? 'navbar' : 'navbar-up'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Nikhil Batteries
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <img src={click ? 'images/delete.png' : 'images/list.png'}/>
          </div>
          <ul className={ click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <a href='#banner' className='nav-links' 
                onClick={closeMobileMenu}>
                Home
              </a>
            </li>

            <li className='nav-item'>
              <a
                href='#shop'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Shop
              </a>
            </li>

            <li className='nav-item'>
              <a
                href='#services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </a>
            </li>

            <li className='nav-item'>
              <a href='#contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
              </a>
            </li>

            <li className='nav-item'>
              <a href='tel:+919807045162' className='nav-links'
                onClick={closeMobileMenu}>
                <i class="fas fa-phone-alt"></i><b>9807045162</b>
              </a>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
