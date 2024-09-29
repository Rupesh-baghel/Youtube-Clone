


import axios from 'axios';

export const fetchData = async (query) => {
  const options = {
    method: 'GET',
    url: `https://youtube138.p.rapidapi.com/search/`,
    params: {
      q: query,
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'x-rapidapi-key': '89796965a8mshd1732599fdce66ap120927jsn4a7015681041', 
      'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};



  