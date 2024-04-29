// src/components/Header.jsx
import React from 'react';

function Header() {
    return (
        <header>
            <div className="header" id="home">
                <div className="container">
                    <div className="logo">
                        <a href="#">
                            <img src="LOGO.jpg" width="190" alt="CafeHunt" />
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
                            <a href="#Booking">Booking</a>
                        </li>
                        <li>
                            <a href="#footer">PROMOTIONS</a>
                        </li>
                        <li>
                            <a href="#footer">ABOUT US</a>
                        </li>
                        <li>
                            <a href="#footer">CONTACT US</a>
                        </li>
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
}

export default Header;