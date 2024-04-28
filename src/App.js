import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './component/Header';
import Banner from './component/Banner';
import Map from './component/Map';
import List from './component/List';
import ReservationForm from './component/ReservationForm';
import Footer from './component/Footer';
import LoginPage from './component/LoginPage';  
import RegisterPage from './component/RegisterPage';  
import { getPlacesData } from './api/travelAdvisorAPI';
import useStyles from './component/styles';

function App() {
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState(null);
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={
          <div className="App">
            <Header />
            <Banner />
            <div className={classes.flexContainer}>
              <div className={classes.mapContainer}>
                <Map coords={coords} places={places} setCoords={setCoords} setBounds={setBounds} setChildClicked={setChildClicked} />
              </div>
              <div className={classes.listContainer}>
                <List places={places} childClicked={childClicked} isLoading={isLoading} />
              </div>
            </div>
            <ReservationForm />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;