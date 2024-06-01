import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ReviewForm from '../../src/component/ReviewForm'; // Adjust the path to your ReviewForm component

// Mock the client module
jest.mock('../../src/client', () => ({
  client: {
    create: jest.fn()
  }
}));

import { client } from '../../src/client';

describe('ReviewForm', () => {
  it('renders the form correctly', () => {
    render(<ReviewForm />);
    
    expect(screen.getByPlaceholderText('Write your review here')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Cafes you visited')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Rating (0-5)')).toBeInTheDocument();
    expect(screen.getByText('Submit Review')).toBeInTheDocument();
  });

  it('handles input changes correctly', () => {
    render(<ReviewForm />);
    
    const reviewInput = screen.getByPlaceholderText('Write your review here');
    const cafesVisitedInput = screen.getByPlaceholderText('Cafes you visited');
    const ratingInput = screen.getByPlaceholderText('Rating (0-5)');
    
    fireEvent.change(reviewInput, { target: { value: 'Great experience!' } });
    fireEvent.change(cafesVisitedInput, { target: { value: 'Cafe Mocha' } });
    fireEvent.change(ratingInput, { target: { value: '5' } });
    
    expect(reviewInput.value).toBe('Great experience!');
    expect(cafesVisitedInput.value).toBe('Cafe Mocha');
    expect(ratingInput.value).toBe('5');
  });

  it('submits the form correctly', async () => {
    client.create.mockResolvedValue({});

    render(<ReviewForm />);
    
    fireEvent.change(screen.getByPlaceholderText('Write your review here'), { target: { value: 'Great experience!' } });
    fireEvent.change(screen.getByPlaceholderText('Cafes you visited'), { target: { value: 'Cafe Mocha' } });
    fireEvent.change(screen.getByPlaceholderText('Rating (0-5)'), { target: { value: '5' } });
    
    fireEvent.click(screen.getByText('Submit Review'));
    
    await waitFor(() => expect(client.create).toHaveBeenCalledWith({
      _type: 'review',
      review: 'Great experience!',
      cafesVisited: 'Cafe Mocha',
      rating: 5,
    }));
    
    await waitFor(() => expect(screen.getByText('Thank you for your review!')).toBeInTheDocument());
  });

  it('handles form submission errors', async () => {
    client.create.mockRejectedValue(new Error('Error submitting review'));

    render(<ReviewForm />);
    
    fireEvent.change(screen.getByPlaceholderText('Write your review here'), { target: { value: 'Great experience!' } });
    fireEvent.change(screen.getByPlaceholderText('Cafes you visited'), { target: { value: 'Cafe Mocha' } });
    fireEvent.change(screen.getByPlaceholderText('Rating (0-5)'), { target: { value: '5' } });
    
    fireEvent.click(screen.getByText('Submit Review'));
    
    await waitFor(() => expect(client.create).toHaveBeenCalledWith({
      _type: 'review',
      review: 'Great experience!',
      cafesVisited: 'Cafe Mocha',
      rating: 5,
    }));
  });
});