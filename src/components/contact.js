import React from 'react';
import './contact.css'

function Contact(){
    return(
        <div className='contact'>
            <div className='contact-container'>
                <div className='contact-img'>
                    <img src='images/getintouch.png' />
                </div>
                <div className='contact-content'>
                    <h1>GET IN TOUCH</h1>
                    <form methode="post" action="/send" target="hiddenFrame">
                        <div class="form-group">
                            <input type="text" class="contact-form" placeholder="Name" name="name" id="name" required />
                        </div>
                        <div class="form-group">
                            <input type="text" class="contact-form" placeholder="Mobile Number" name="number" id="number" required />
                        </div>
                        <div class="form-group">
                            <input type="email" class="contact-form" placeholder="Email" name="email" id="email" />
                        </div>
                        <div class="form-group">
                            <textarea class="contact-form" placeholder="message" rows="3" name="message" id="message" />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;