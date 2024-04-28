import React from 'react';
import './Banner.css'; // Ensure the path is correct based on your file structure

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-bg">
                <h2><b>Welcome to Cafe Hunt!</b></h2>
                <p>Start your journey of finding cafes around your area! Start by typing your location below.</p>
            </div>
        </div>
    );
};

export default Banner;