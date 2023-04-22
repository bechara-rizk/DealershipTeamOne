import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn,} from '@fortawesome/free-brands-svg-icons';




const Footer = () => {
	return (
		<div className="footer">
		<div className="container">
		 <div className="row">
		 <div className="footer-logo"  style={{ height: '200px', lineHeight: '200px', textAlign: 'center' }}>
	   <img src="/images/logo.jpg"  alt="Logo" style={{width: '150px', height: 'auto' }}/>
	 </div>
		   <div className="footer-col">
			 <h4>Luxe Motors</h4>
			 <ul>
			   <li><a href="#">about us</a></li>
			   <li><a href="#">Contact us</a></li>
			   <li><a href="#">our services</a></li>
			   <li><a href="#">privacy policy</a></li>
			   
			 </ul>
		   </div>
		   <div className="footer-col">
			 <h4>get help</h4>
			 <ul>
			 	
			   <li><a href="/home/faq ">FAQ</a></li>
			   <li><a href=" ">Car Listing</a></li>
			   <li><a href=" ">Test Drive</a></li>
			   <li><a href=" ">News</a></li>
			   
			 </ul>
		   </div>
		   
		   <div className="footer-col">
			 <h4>follow us</h4>
			 <div className="social-links">
             <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
			 </div>
		   </div>
		 </div>
         
		</div>
        <div className="footer__copyright">Copyright © 2023 luxe Motor</div>
	 </div>
	);
};

export default Footer;
