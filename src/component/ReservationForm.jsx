import React, { useState } from 'react';
import { client } from '../client'; // Ensure this path is correct
import './ReservationForm.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await client.create({
        _type: 'database',
        ...formData,
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="order" id="order">
      <h1 className="sub-heading">Any Feedback?</h1>
      <h3 className="heading">Feel free to send us any feedback for improvements of this website! We will keep in contact with you soon :D</h3>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <div className="input">
              <span>First name:</span>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="input">
              <span>Last name:</span>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="input">
              <span>Email:</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input message-box-centered">
              <span>Your message:</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your feedback"
                cols="30"
                rows="10"
                required
              ></textarea>
            </div>
          </div>
          <input type="submit" value="Submit your form" className="btn" />
        </form>
      )}
    </section>
  );
};

export default ReservationForm;