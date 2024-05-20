import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RegisterPage from '../../src/component/RegisterPage'; // Adjust the import path as necessary

// Mock the firebase/auth module
jest.mock('../../src/firebase/firebase-config', () => ({
  auth: {}
}));

jest.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: jest.fn()
}));

describe('RegisterPage Component', () => {
  test('renders RegisterPage component', () => {
    render(
      <Router>
        <RegisterPage />
      </Router>
    );

    expect(screen.getByText(/Register ☕/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Back to login/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Register/i)).toHaveLength(2);
  });
});