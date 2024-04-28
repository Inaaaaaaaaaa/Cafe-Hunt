/* eslint-disable consistent-return */
import axios from 'axios';

//retrieve places 
export const getPlacesData = async (type, sw, ne) => {
  try {
    //GET request to travel-advisor API
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': 'b10a322c33msh72c0cd5f51f337bp16c40ejsnc60455e192eb',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

//retrieve weather data based on area 
export const getWeatherData = async (lat, lng) => {
    try {
      if (lat && lng) {
        const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
          params: { lat, lon: lng },
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          },
        });
  
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

