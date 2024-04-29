import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../src/component/Header';

describe('Header Component', () => {
    it('renders the logo', () => {
        render(<Header />);
        const logo = screen.getByAltText('CafeHunt');
        expect(logo).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(<Header />);
        expect(screen.getByText('HOMEPAGE')).toBeInTheDocument();
        expect(screen.getByText('Gallery')).toBeInTheDocument();
        expect(screen.getByText('Categories')).toBeInTheDocument();
        expect(screen.getByText('Area')).toBeInTheDocument();
        expect(screen.getByText('Booking')).toBeInTheDocument();
        expect(screen.getByText('PROMOTIONS')).toBeInTheDocument();
        expect(screen.getByText('ABOUT US')).toBeInTheDocument();
        expect(screen.getByText('CONTACT US')).toBeInTheDocument();
    });

    it('renders search input', () => {
        render(<Header />);
        expect(screen.getByPlaceholderText('City,food,name,address')).toBeInTheDocument();
    });
});