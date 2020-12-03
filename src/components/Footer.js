import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              NIKHIL BATTERIES
            </Link>
          </div>
          <a href="https://g.page/nikhil-electricals?share" class='addr' target='_blank'>
            <small class='addr'>Saraimeera, Kannauj, UP 209727</small>
          </a>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link twitter'
              href='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>

            <a
              class='social-icon-link'
              href='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>

            <a
              class='social-icon-link'
              href='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class="fa fa-phone" aria-hidden="true"></i>
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
