import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ReviewList from '../../src/component/ReviewList'; // Adjust the path to your ReviewList component

// Mock the client module
jest.mock('../../src/client', () => ({
  client: {
    fetch: jest.fn()
  }
}));

import { client } from '../../src/client';

describe('ReviewList', () => {
  it('renders the ReviewList component correctly', () => {
    render(<ReviewList />);
    
    expect(screen.getByText('Reviews')).toBeInTheDocument();
  });

  it('fetches and displays reviews correctly', async () => {
    const mockReviews = [
      {
        _id: '1',
        review: 'Great experience!',
        cafesVisited: 'Cafe Mocha',
        rating: 5,
        _createdAt: '2024-01-01T00:00:00Z'
      },
      {
        _id: '2',
        review: 'Good service!',
        cafesVisited: 'Cafe Latte',
        rating: 4,
        _createdAt: '2024-02-01T00:00:00Z'
      }
    ];

    client.fetch.mockResolvedValue(mockReviews);

    render(<ReviewList />);
    
    await waitFor(() => {
      expect(screen.getByText('Great experience!')).toBeInTheDocument();
      expect(screen.getByText('Cafe Mocha')).toBeInTheDocument();
      expect(screen.getAllByText('Rating:').length).toBe(2); // Check if there are two Rating: elements
      expect(screen.getByText('5')).toBeInTheDocument();
      expect(screen.getByText('Good service!')).toBeInTheDocument();
      expect(screen.getByText('Cafe Latte')).toBeInTheDocument();
      expect(screen.getByText('4')).toBeInTheDocument();
    });
  });

  it('handles errors while fetching reviews', async () => {
    client.fetch.mockRejectedValue(new Error('Error fetching reviews'));

    render(<ReviewList />);
    
    await waitFor(() => {
      expect(screen.getByText('Reviews')).toBeInTheDocument();
    });
  });
});