import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase-config';
import './AuthForm.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(''); // State to store login error message
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError(''); // Clear out any previous errors
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in User:', userCredential.user);
      navigate('/home'); // Navigate to the home page on successful login
    } catch (error) {
      console.error('Error during login:', error.message);
      if (error.code === 'auth/wrong-password') {
        setLoginError('The password is wrong.');
      } else if (error.code === 'auth/user-not-found') {
        setLoginError('No user found with this email.');
      } else {
        setLoginError('Failed to login. Please try again.');
      }
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
        {loginError && <div className="error-message">{loginError}</div>} {/* Display the error message */}
      </form>
      <button onClick={() => navigate('/register')}>Register</button>
    </div>
  );
}

export default LoginPage;