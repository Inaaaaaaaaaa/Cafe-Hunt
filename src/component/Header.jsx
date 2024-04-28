import React from 'react';
import logo from '../images/LOGO.jpg';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="header" id="home">
                <div className="container">
                    <div className="logo">
                        <a href="#">
                            <img src={logo} width="190" alt="CafeHunt" />
                        </a>
                    </div>
                    <ul className="list">
                        <li><a href="cafe_hunt.html">HOMEPAGE</a></li>
                        <li><a href="#det">Gallery</a></li>
                        <li>
                            <div className="dropdown">
                                <a href="menu.html" className="dropbtn">Categories</a>
                                <div className="dropdown-content">
                                    <a href="menu.html">Desserts</a>
                                    <a href="menu.html">Drinks</a>
                                    <a href="menu.html">Lunch</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown">
                                <a href="menu.html" className="dropbtn">Area</a>
                                <div className="dropdown-content">
                                    <a href="menu.html">CBD</a>
                                    <a href="menu.html">Epsom</a>
                                    <a href="menu.html">Waitakere</a>
                                    <a href="menu.html">Blockhouse Bay</a>
                                    <a href="menu.html">Greenfield</a>
                                    <a href="menu.html">Birkenhead</a>
                                    <a href="menu.html">North Shore</a>
                                    <a href="menu.html">Manukau</a>
                                    <a href="menu.html">Royal Oak</a>
                                    <a href="menu.html">Botany</a>
                                </div>
                            </div>
                        </li>
                        <li><a href="#footer">PROMOTIONS</a></li>
                        <li><a href="#footer">ABOUT US</a></li>
                        <li><a href="#footer">CONTACT US</a></li>
                    </ul>
                    <div className="search">
                        <form>
                            <input type="submit" value="SEARCH" className="search1" />
                            <input type="text" className="content1" placeholder="City,food,name,address" />
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;