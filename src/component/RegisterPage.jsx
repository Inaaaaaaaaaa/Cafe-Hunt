import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase-config'; // Adjust the path as necessary


function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState(''); // To store the registration status message
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registered User:', userCredential.user);
      setRegistrationMessage('Register successfully. Please go to Login.'); // Set success message
      // Optional: Automatically redirect to login page after a delay
       setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      console.error('Error during registration:', error.message);
      setRegistrationMessage('Failed to register. ' + error.message); // Set error message
    }
  };

  const goToLogin = () => {
    navigate('/login'); // Function to navigate to login page
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Register</button>
        {registrationMessage && <p>{registrationMessage}</p>} {/* Display the registration message */}
      </form>
      <button onClick={goToLogin}>Go to Login</button> {/* Button to navigate to login page */}
    </div>
  );
}

export default RegisterPage;