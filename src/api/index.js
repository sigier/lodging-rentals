import axios from 'axios';

const endpoint = process.env.REACT_APP_API_ENDPOINT;


const api =  {
    getRecommendedCities() {
		return  axios.get(`${endpoint}/cities/recommended`); 
	},

}

export default api;

