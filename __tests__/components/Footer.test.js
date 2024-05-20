import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../src/component/Footer'; // Adjust the import path as necessary

describe('Footer Component', () => {
  it('renders About us section', () => {
    render(<Footer />);
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Market reports')).toBeInTheDocument();
    expect(screen.getByText('News')).toBeInTheDocument();
    expect(screen.getByText('Careers')).toBeInTheDocument();
    expect(screen.getByText('Supporting our community')).toBeInTheDocument();
    expect(screen.getByText('Feedback')).toBeInTheDocument();
    expect(screen.getByText('Sitemap')).toBeInTheDocument();
    expect(screen.getByText('Something else')).toBeInTheDocument();
  });

  it('renders Contact us section', () => {
    render(<Footer />);
    expect(screen.getByText('Contact us')).toBeInTheDocument();
    expect(screen.getByText('Phone number: 0212016116')).toBeInTheDocument();
    expect(screen.getByText('Telephone: 0086-18660884524')).toBeInTheDocument();
    expect(screen.getByText('Email: toshiakixu@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('Email: CafeHunt@.nz.com')).toBeInTheDocument();
    expect(screen.getByText('Address: Manuku-Auckland-1010')).toBeInTheDocument();
  });

  it('renders Follow us section', () => {
    render(<Footer />);
    expect(screen.getByText('Follow us')).toBeInTheDocument();
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
    expect(screen.getByText('Google+')).toBeInTheDocument();
  });

  it('renders User help section', () => {
    render(<Footer />);
    expect(screen.getByText('User help')).toBeInTheDocument();
    expect(screen.getByText('Customer service center')).toBeInTheDocument();
    expect(screen.getByText('Intellectual property rights protection')).toBeInTheDocument();
    expect(screen.getByText('Integrity Reporting Platform')).toBeInTheDocument();
  });

  it('renders the copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright @ 2024 CafeHunt.com/)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved. by/)).toBeInTheDocument();
    expect(screen.getByText(/We keep customers personal information confidential and respect customers privacy/)).toBeInTheDocument();
  });
});