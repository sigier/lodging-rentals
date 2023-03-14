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
	},
	getActivities() {
		return  axios.get(`${endpoint}/activities/today`); 
	},
	getRecommendedVenues(){
		return  axios.get(`${endpoint}/venues/recommended`); 
	},
	getVenueById(id){
		return  axios.get(`${endpoint}/venue/${id}`); 
	},
	getPoints(){
		return  axios.get(`${endpoint}/points/get`);
	},
	signUp(data){
		return  axios.post(`${endpoint}/user/signup`, data);
	},
	checkToken(data){
		return  axios.post(`${endpoint}/user/token-check`, data);
	}

}

export default api;

