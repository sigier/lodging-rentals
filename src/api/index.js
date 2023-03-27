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
 		return  axios.post(`${endpoint}/users/signup`, data);
	},	
	logIn(data){
		return  axios.post(`${endpoint}/users/login`, data);
   	},
	checkToken(data){
		return  axios.post(`${endpoint}/users/token-check`, data);
	},
	getCityVenue(cityName){
		return  axios.get(`${endpoint}/venues/city/${cityName}`);
	},
	createStripeSession(data){
		return  axios.post(`${endpoint}/payment/create-session`, data);
	},
	completePayment(data){
		return  axios.post(`${endpoint}/payment/success`, data);
	},

}

export default api;

