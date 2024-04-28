import React from 'react';
import './ReservationForm.css'; // Ensure the path is correct based on your file structure

const ReservationForm = () => {
    return (
        <section className="order" id="order">
            <h1 className="sub-heading">Any Feedback?</h1>
            <h3 className="heading">Feel free to send us any feedback for improvements of this website! We will keep in contact with you soon :D</h3>
            <form>
                <div className="inputBox">
                    {/* Input fields */}
                    <div className="input">
                        <span>FIrst name:</span>
                        <input type="text" placeholder="Enter your first name" />
                    </div>
                    <div className="input">
                        <span>Last name:</span>
                        <input type="number" placeholder="Enter your last name" />
                    </div>
                    <div className="input">
                        <span>Email:</span>
                        <input type="text" placeholder="Enter your email" />
                    </div>
                    <div className="input">
                        <span>Contact number:</span>
                        <input type="text" placeholder="Enter your contact number" />
                    </div>
   
                    <div className="input">
                        <span>Your message:</span>
                        <textarea placeholder="Enter your feedback" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <input type="submit" value="Submit your form" className="btn" />
            </form>
        </section>
    );
};
export default ReservationForm;
