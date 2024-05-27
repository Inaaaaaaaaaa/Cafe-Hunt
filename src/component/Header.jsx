import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../firebase/firebase-config';
import logo from '../images/LOGO.png';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login'); // Redirect to login page after logout
        } catch (error) {
            console.error('Logout Error:', error.message);
            // Optionally handle errors, e.g., display an error message
        }
    };

    return (
        <header>
            <div className="header" id="home">
                <div className="container">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} width="190" alt="CafeHunt" />
                        </Link>
                    </div>
                    <ul className="list">
                        <li><Link to="/">HOMEPAGE</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/reviews" className="dropbtn">Reviews</Link></li>
                        <li><Link to="/promotions">PROMOTIONS</Link></li>
                        <li><Link to="/about">ABOUT US</Link></li>
                        <li><button onClick={handleLogout} className="logout-button">Logout</button></li> {/* Logout button added */}
                    </ul>
                    <div className="search">
                        <form>
                            <input type="submit" value="SEARCH" className="search1" />
                            <input type="text" className="content1" placeholder="City, food, name, address" />
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;