import React from 'react'
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <h3 className="footer-text">
            Sample text. Click to select the text box. Click again or double
          </h3>
          <h3 className="footer-text">click to start editing the text.</h3>
        </div>
        <div className="footer-bottom">
          <h5 className="author-text">
            Website Templates created By Jeral Sandeeptha.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Footer
