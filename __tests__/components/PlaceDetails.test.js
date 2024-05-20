import React from 'react';
import { render } from '@testing-library/react';
import PlaceDetails from '../../src/component/PlaceDetails';

describe('PlaceDetails Component', () => {
    const place = {
        name: 'Test Place',
        website: 'http://example.com',
        photo: {
            images: {
                large: {
                    url: 'http://example.com/photo.jpg'
                }
            }
        },
        rating: 4,
        ranking: 1
        // Add other required properties as needed for testing
    };

    it('renders correctly with place details', () => {
        const { getByText, getByTitle } = render(<PlaceDetails place={place} />);
        
        // Check if place name is rendered
        expect(getByText('Test Place')).toBeInTheDocument();
    
        // Check if place rating is rendered
        expect(getByText('4 out of 5 stars')).toBeInTheDocument();

        // Check if place ranking is rendered
        expect(getByText('Ranking: 1')).toBeInTheDocument();
        
        // Check if place image is rendered with correct title
        expect(getByTitle('Test Place')).toBeInTheDocument();
    });

    // Add more test cases for other scenarios as needed
});