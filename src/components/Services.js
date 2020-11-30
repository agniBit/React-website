import React from 'react';
import './Services.css'

function Services(){
    return(
        <div className='services' id='services'>
            <h1>OUR SERVICES</h1>
            <div className='services_container'>
                <div className="service_container">
                    <div className="service_logo">
                        <img src='images/free-delivery.svg' />
                    </div>
                    <h2>FREE SHIPPING</h2>
                    <p>Cash On Delivery, Best Prices.</p>
                </div>

                <div className="service_container">
                    <div className="service_logo">
                        <img src='images/install.svg' />
                    </div>
                    <h2>FREE INSTALLATION</h2>
                    <p>free professional installation</p>
                </div>
                <div className="service_container">
                    <div className="service_logo">
                    <img src='images/construction.svg' />
                    </div>
                    <h2>MAINTENANCE</h2>
                    <p>repair at your doorstep</p>
                </div>
            </div>
        </div>
    )
};

export default Services;