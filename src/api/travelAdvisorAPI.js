import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const response = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
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

    const data = response.data.data;

    console.log('API response data:', data);

    if (!data || data.length === 0) {
      throw new Error('API limit reached or no data returned');
    }

    return { data, error: null };
  } catch (error) {
    console.log('API error:', error.message);
    let errorMessage = 'Network Error';
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      errorMessage = `${error.response.status}: ${error.response.statusText}`;
      if (error.response.data && error.response.data.message) {
        errorMessage += ` - ${error.response.data.message}`;
      }
    } else if (error.request) {
      // The request was made but no response was received
      errorMessage = 'No response received from server';
    }
    return { data: [], error: errorMessage };
  }
};