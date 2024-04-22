import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <section className="footer" id="footer">
            <div className="box-container">
                <div className="box">
                    <h3>About us</h3>
                    <a href="#">Market reports</a>
                    <a href="#">News</a>
                    <a href="#">Careers</a>
                    <a href="#">Supporting our community</a>
                    <a href="#">Feedback</a>
                    <a href="#">Sitemap</a>
                    <a href="#">Something else</a>
                </div>
                <div className="box">
                    <h3>Contact us</h3>
                    <a href="#">Phone number: 0212016116</a>
                    <a href="#">Telephone: 0086-18660884524</a>
                    <a href="#">Email: toshiakixu@gmail.com</a>
                    <a href="#">Email: CafeHunt@.nz.com</a>
                    <a href="#">Address: Manuku-Auckland-1010</a>
                </div>
                <div className="box">
                    <h3>Follow us</h3>
                    <a href="https://www.facebook.com/" className="fa fa-facebook">Facebook</a>
                    <a href="https://www.twitter.com/" className="fa fa-twitter">Twitter</a>
                    <a href="https://www.google.com" className="fa fa-google">Google+</a>
                </div>
                <div className="box">
                    <h3>User help</h3>
                    <a href="#">Customer service center</a>
                    <a href="#">Intellectual property rights protection</a>
                    <a href="#">Integrity Reporting Platform</a>
                </div>
            </div>
            <div className="credit">Copyright @ 2024 CafeHunt.com, <br /> All rights reserved. by <span>Cafe Hunt</span><br />We keep customers personal information confidential and respect customers privacy</div>
        </section>
    );
};

export default Footer;