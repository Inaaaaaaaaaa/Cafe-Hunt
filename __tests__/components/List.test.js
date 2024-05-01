import React from 'react';
import { render, screen } from '@testing-library/react';
import List from '../../src/component/List';

// Mocking the PlaceDetails component to focus on List functionality
jest.mock('../../src/component/PlaceDetails', () => (props) => (
  <div data-testid="placeDetails">{props.place.name}</div>
));

describe('List Component', () => {
    // Sample data for places
    const mockPlaces = [
        { name: 'Place 1' },
        { name: 'Place 2' },
        { name: 'Place 3' }
    ];

    it('renders the loading state when isLoading is true', () => {
        render(<List places={[]} isLoading={true} />);
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('renders the list of places when not loading', () => {
        render(<List places={mockPlaces} isLoading={false} />);
        mockPlaces.forEach(place => {
            expect(screen.getByText(place.name)).toBeInTheDocument();
        });
    });

    it('does not render places when list is empty and not loading', () => {
        render(<List places={[]} isLoading={false} />);
        mockPlaces.forEach(place => {
            // The queryByText function is used here to ensure elements are not present
            expect(screen.queryByText(place.name)).toBeNull();
        });
    });
});
