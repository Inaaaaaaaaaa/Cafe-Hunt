import React from 'react';

function Footer() {
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
                    <a href="#">something else</a>
                </div>

                <div className="box">
                    <h3>contact us</h3>
                    <a href="#">phone number: 0212016116</a>
                    <a href="#">telephone: 0086-18660884524</a>
                    <a href="mailto:toshiakixu@gmail.com">toshiakixu@gmail.com</a>
                    <a href="mailto:CafeHunt@.nz.com">CafeHunt@.nz.com</a>
                    <a href="#">manuku-Auckland-1010</a>
                </div>

                <div className="box">
                    <h3>follow us</h3>
                    <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
                    <a href="https://www.instagram.com/" className="fa fa-twitter"></a>
                    <a href="https://www.google.com" className="fa fa-google"></a>
                </div>

                <div className="box">
                    <h3>User help</h3>
                    <a href="#">customer service center</a>
                    <a href="#">Intellectual property rights protection</a>
                    <a href="#">Integrity Reporting Platform</a>
                </div>
            </div>
            <div className="credit">
                Copyright © 2024 CafeHunt.com,
                <br /> All rights reserved. by <span>Cafe Hunt</span>
                <br />We keep customers' personal information confidential and respect customers' privacy
            </div>
        </section>
    );
}

export default Footer;