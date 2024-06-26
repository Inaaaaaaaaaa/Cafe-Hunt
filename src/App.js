import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import Banner from './component/Banner';
import Map from './component/Map';
import List from './component/List';
import ReservationForm from './component/ReservationForm';
import Footer from './component/Footer';
import useStyles from './component/styles'; // Ensure this points to your styles file
import { getPlacesData } from './api/travelAdvisorAPI'; // Ensure this points to your API file
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LoginPage from './component/LoginPage';  
import RegisterPage from './component/RegisterPage';  
import ReviewForm from './component/ReviewForm';
import ReviewsList from './component/ReviewList';
import Gallery from './component/Gallery'; // Import Gallery component
import About from './component/About'; // Import About component


function App() {
  const [coords, setCoords] = useState({ lat: 0, lng: 0 }); // Start with a default location
  const [bounds, setBounds] = useState(null);
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Add error state
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Add authentication state
  const classes = useStyles();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      getPlacesData('restaurants', bounds.sw, bounds.ne)
        .then((data) => {
          setPlaces(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log('Error fetching places:', error);
          setIsLoading(false);
        });
    }
  }, [bounds]);

  return (
    <Router>
      {isAuthenticated && <Header />} {/* Conditionally render Header */}
      <Routes>
        <Route path="/" element={<Navigate replace to={isAuthenticated ? "/home" : "/login"} />} />
        <Route path="/login" element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} /> {/* Pass login function to LoginPage */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={
          isAuthenticated ? ( // Conditionally render home content based on authentication
            <div className="App">
              <Banner />
              <div className={classes.flexContainer}>
        <div className={classes.mapContainer}>
          <Map
            coords={coords}
            places={places}
            setCoords={setCoords}
            setBounds={setBounds}
            setChildClicked={setChildClicked}
          />
        </div>
        <div className={classes.listContainer}>
          <List
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
          />
        </div>
      </div> 
              
              <ReservationForm />
              <Footer />
            </div>
          ) : (
            <Navigate replace to="/login" /> // Redirect to login if not authenticated
          )
        } />
        <Route path="/gallery" element={<Gallery />} /> {/* Add Gallery route */}
        <Route path="/about" element={<About />} /> {/* Add About route */}
        <Route path="/reviews" element={<ReviewForm />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;