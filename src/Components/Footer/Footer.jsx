import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <button className="logo-button">WEB MAGNETISM</button>
            </div>
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li>Digital Marketing</li>
                        <li>Email Nurture</li>
                        <li>SEO</li>
                        <li>Social Media Marketing</li>
                        <li>Conversion Rate Optimization</li>
                        <li>Copy Writing</li>
                        <li>Email Marketing</li>
                        <li>Remarketing</li>
                        <li>PPC</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Bespoke Web Design</h4>
                    <ul>
                        <li>Web Design</li>
                        <li>Web Redesign</li>
                        <li>UI/UX Design</li>
                        <li>Brand Identity and Logo</li>
                        <li>App Development</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Home</h4>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>United Kingdom, TW4 7LU London</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Resources</h4>
                    <ul>
                        <li>Our Work</li>
                        <li>Insights</li>
                    </ul>
                </div>
                <div className="footer-section social-media">
                    <h4>Social media</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Telegram</li>
                        <li>YouTube</li>
                        <li>Tiktok</li>
                    </ul>
                </div>
                <div className="footer-subscription">
                    <p>Subscribe to our weekly newsletter today!</p>
                    <div className="newsletter">
                        <input type="email" placeholder="Enter your email address here" />
                        <button className="newsletter-button">➔</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>©Copyright. 2024 Web Magnetism All rights reserved | Terms and condition | Privacy Policy.</p>
            </div>
        </footer>
    );
}

export default Footer;
