import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <img src='./images/main_.jpg' className="banner-img" />
      <div className="contant">
        <h1>NIKHIL BATTERIES</h1>
        <p>Car Battery | Inverter Battery | 2 Wheelers Battery | Inverters</p>
        <div className="btns">
          <div className='btn-container'>
            <button className="btn btn-shopnow">Shop Now</button>
          </div>
          <div className="btn-container">
            <button className="btn btn-callnow">call now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
