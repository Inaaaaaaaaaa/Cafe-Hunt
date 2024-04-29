import React from 'react';
import { render } from '@testing-library/react';
import Map from '../../src/component/Map';
import GoogleMapReact from 'google-map-react';

// We mock GoogleMapReact to render children
jest.mock('google-map-react', () => ({
  __esModule: true,
  default: jest.fn(({ children }) => <div>{children}</div>)
}));

// We use this mock to simplify the output of MUI's Paper component in the tests
jest.mock('@mui/material/Paper', () => ({ children }) => <div>{children}</div>);

describe('Map Component', () => {
    const defaultProps = {
        coords: { lat: 0, lng: 0 },
        places: [{
            latitude: '0',
            longitude: '0',
            name: 'Place 1',
            photo: { images: { large: { url: 'http://example.com/photo.jpg' } } },
            rating: 4
        }],
        setCoords: jest.fn(),
        setBounds: jest.fn(),
        setChildClicked: jest.fn()
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly with default props', () => {
        render(<Map {...defaultProps} />);
        
        // Verify if the GoogleMapReact component has been called
        expect(GoogleMapReact).toHaveBeenCalled();
    });
});