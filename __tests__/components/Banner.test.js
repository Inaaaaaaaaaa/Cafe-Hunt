import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from '../../src/component/Banner';

describe('Banner Component', () => {
  test('displays the correct text', () => {
    render(<Banner />);
    const bannerText = screen.getByText(/easy\/ delicious\/ healthy/i);
    expect(bannerText).toBeInTheDocument();
  });
});