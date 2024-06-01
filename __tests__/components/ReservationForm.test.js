// __tests__/components/ReservationForm.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ReservationForm from '../../src/component/ReservationForm'; // Adjust the path to your ReservationForm component

// Mock the client module
jest.mock('../../src/client', () => ({
  client: {
    create: jest.fn()
  }
}));

import { client } from '../../src/client';

describe('ReservationForm', () => {
  it('renders the form correctly', () => {
    render(<ReservationForm />);
    
    expect(screen.getByText('Any Feedback?')).toBeInTheDocument();
    expect(screen.getByText('Feel free to send us any feedback for improvements of this website! We will keep in contact with you soon :D')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your first name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your last name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your feedback')).toBeInTheDocument();
    expect(screen.getByText('Submit your form')).toBeInTheDocument();
  });

  it('handles input changes correctly', () => {
    render(<ReservationForm />);
    
    const firstNameInput = screen.getByPlaceholderText('Enter your first name');
    const lastNameInput = screen.getByPlaceholderText('Enter your last name');
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const messageInput = screen.getByPlaceholderText('Enter your feedback');
    
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Great website!' } });
    
    expect(firstNameInput.value).toBe('John');
    expect(lastNameInput.value).toBe('Doe');
    expect(emailInput.value).toBe('john.doe@example.com');
    expect(messageInput.value).toBe('Great website!');
  });

  it('submits the form correctly', async () => {
    client.create.mockResolvedValue({});

    render(<ReservationForm />);
    
    fireEvent.change(screen.getByPlaceholderText('Enter your first name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your last name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your feedback'), { target: { value: 'Great website!' } });
    
    fireEvent.click(screen.getByText('Submit your form'));
    
    await waitFor(() => expect(client.create).toHaveBeenCalledWith({
      _type: 'database',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      message: 'Great website!',
    }));
    
    await waitFor(() => expect(screen.getByText('Thank you for your feedback!')).toBeInTheDocument());
  });

  it('handles form submission errors', async () => {
    client.create.mockRejectedValue(new Error('Error submitting form'));

    render(<ReservationForm />);
    
    fireEvent.change(screen.getByPlaceholderText('Enter your first name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your last name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your feedback'), { target: { value: 'Great website!' } });
    
    fireEvent.click(screen.getByText('Submit your form'));
    
    await waitFor(() => expect(client.create).toHaveBeenCalledWith({
      _type: 'database',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      message: 'Great website!',
    }));
  });
});