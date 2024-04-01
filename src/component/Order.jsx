// src/components/Order.jsx
import React from 'react';

function Order() {
    return (
        <section className="order" id="order">
            <h3 className="sub-heading">Make a reservation?</h3>
            <h1 className="heading">Make an appointment quickly and skip the line</h1>
            <form>
                <div className="inputBox">
                    <div className="input">
                        <span>Your name</span>
                        <input type="text" placeholder="Please enter your name" />
                    </div>
                    <div className="input">
                        <span>Your table number</span>
                        <input type="number" placeholder="Please enter your table number" />
                    </div>
                </div>
                <div className="inputBox">
                    <div className="input">
                        <span>Eat spicy food?</span>
                        <input type="text" placeholder="Yes or no" />
                    </div>
                    <div className="input">
                        <span>Allergy information</span>
                        <input type="text" placeholder="Allergy food" />
                    </div>
                </div>
                <div className="inputBox">
                    <div className="input">
                        <span>How many people?</span>
                        <input type="number" placeholder="Number of people" />
                    </div>
                    <div className="input">
                        <span>Date and time</span>
                        <input type="datetime-local" />
                    </div>
                </div>
                <div className="inputBox">
                    <div className="input">
                        <span>Your address</span>
                        <textarea placeholder="Enter your address" rows="10"></textarea>
                    </div>
                    <div className="input">
                        <span>Your message</span>
                        <textarea placeholder="Enter your message" rows="10"></textarea>
                    </div>
                </div>
                <input type="submit" value="Order now" className="btn" />
            </form>
        </section>
    );
}

export default Order;