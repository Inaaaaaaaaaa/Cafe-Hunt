import React from 'react';
import './ReservationForm.css'; // Ensure the path is correct based on your file structure

const ReservationForm = () => {
    return (
        <section className="order" id="order">
            <h3 className="sub-heading">Any Feedback?</h3>
            <h1 className="heading">Take a coffee and send us a feedback</h1>
            <form>
                <div className="inputBox">
                    {/* Input fields */}
                    <div className="input">
                        <span>FIrst name</span>
                        <input type="text" placeholder="Enter your first name" />
                    </div>
                    <div className="input">
                        <span>Last name</span>
                        <input type="number" placeholder="Enter your last name" />
                    </div>
                    <div className="input">
                        <span>Email</span>
                        <input type="text" placeholder="Enter your email" />
                    </div>
                    <div className="input">
                        <span>Contact number</span>
                        <input type="text" placeholder="Enter your contact number" />
                    </div>
                    <div className="input">
                        <span>Cafe name</span>
                        <input type="number" placeholder="What cafe did you visit" />
                    </div>
                    <div className="input">
                        <span>date and time you visited</span>
                        <input type="datetime-local" />
                    </div>
                    <div className="input">
                        <span>your message</span>
                        <textarea placeholder="Enter your feedback" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <input type="submit" value="order now" className="btn" />
            </form>
        </section>
    );
};
export default ReservationForm;
