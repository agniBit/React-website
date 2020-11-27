import React from 'react';
import './Services.css'

function Services(){
    return(
        <div className='services'>
            <h1>OUR SERVICES</h1>
            <div className='services_container'>
                <div className="service_container">
                    <div className="service_logo">
                        <i class="fa fa-cart-arrow-down fa-5x" />
                    </div>
                    <h2>FREE PROFESSIONAL Installation</h2>
                    <p>Cash On Delivery, Best Prices.</p>
                </div>

                <div className="service_container">
                    <div className="service_logo">
                        <i class="fa fa-cart-arrow-down fa-5x" />
                    </div>
                    <h2>FREE PROFESSIONAL Installation</h2>
                    <p>Cash On Delivery, Best Prices.</p>
                </div>

                <div className="service_container">
                    <div className="service_logo">
                        <i class="fa fa-cart-arrow-down fa-5x" />
                    </div>
                    <h2>FREE PROFESSIONAL Installation</h2>
                    <p>Cash On Delivery, Best Prices.</p>
                </div>
            </div>
        </div>
    )
};

export default Services;