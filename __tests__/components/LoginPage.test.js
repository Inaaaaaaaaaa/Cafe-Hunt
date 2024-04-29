import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../../src/component/LoginPage';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../src/firebase/firebase-config';

// Mock Firebase Auth and Navigation
jest.mock("firebase/auth", () => ({
  signInWithEmailAndPassword: jest.fn()
}));

jest.mock('../../src/firebase/firebase-config', () => ({
  auth: { currentUser: { uid: "123" } } // or whatever your auth needs to mock
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn().mockImplementation(() => (path) => {})
}));

describe('LoginPage Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('allows the user to log in successfully', async () => {
    signInWithEmailAndPassword.mockResolvedValue({
      user: { email: 'sparky46465@gmail.com', uid: '123123' }
    });

    render(<LoginPage />);

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    // You can check for calls or arguments here if needed
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, 'user@example.com', 'password123');
  });

  it('shows an error message if login fails', async () => {
    signInWithEmailAndPassword.mockRejectedValue(new Error('Failed to login'));

    render(<LoginPage />);

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'user@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    const errorMessage = await screen.findByText('Failed to login. Please try again.');
    expect(errorMessage).toBeInTheDocument();
  });
});