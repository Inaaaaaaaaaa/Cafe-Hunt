import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from '../../src/component/Banner';

describe('Banner Component', () => {
  test('displays the correct text', () => {
    render(<Banner />);
    const bannerText = screen.getByText(/Discover Your Next Favorite Cafe with Cafe Hunt/i);
    expect(bannerText).toBeInTheDocument();
  });
});