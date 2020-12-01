import React from 'react';
import '../App.css';
import './Banner.css';

function Banner() {
  return (
    <>
    <img src='./images/bg.svg' className="banner-img" />
    <div className="banner pd" id='banner'>
      <div id='btry-position'>
      <img src='./images/battery(1).svg' className="battery-logo" />
      </div>
      <div className="contant" >
        <div className='abcd'>
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
    </div>
    </>
  );
}

export default Banner;
