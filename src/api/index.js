import axios from 'axios';

const endpoint = process.env.REACT_APP_API_ENDPOINT;
 

const api =  {
    getRecommendedCities() {
		return  axios.get(`${endpoint}/cities/recommended`); 
	},
	getAsian(){
		return  axios.get(`${endpoint}/cities/asia`); 
	},
	getEuropean(){
		return  axios.get(`${endpoint}/cities/europe`); ;
	},
	getExotic(){
		return  axios.get(`${endpoint}/cities/exotic`); 
	}

}

export default api;

