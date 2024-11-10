import React from 'react'
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-inner">
        <h1 className="contact-header">Subscribe</h1>
        <div className="contact-form">
            <input placeholder='Enter Your Email Address' type="text" className="contact-input" />
            <button className='contact-btn'>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact
