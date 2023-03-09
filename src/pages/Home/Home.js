import React, {useEffect, useState} from 'react';
import './Home.css';
import SearchBox from '../SearchBox/SearchBox';
import api from '../../api/index';
import Spinner from '../../utility/Spinner/Spinner';
import Cities from '../../utility/City/Cities';
import Activities from '../../utility/Activity/Activities';
import Venues from '../../utility/Venue/Venues';

const Home = () => {   
    
    const [cities, setCities] = useState([]);
    const [asian, setAsianCities] = useState([]);
    const [european, setEuropeanCities] = useState([]);
    const [exotic, setExoticCities] = useState([]);
    const [activities, setActivities] = useState([]);
    const [venuesRecommended, setVenues] = useState([]);



    

    useEffect( () => {
        const promises = [
            api.getRecommendedCities(),
            api.getAsian(),
            api.getEuropean(),
            api.getExotic(),
            api.getActivities(),
            api.getRecommendedVenues()
        ]; 

        Promise.all(promises).then(data =>{
            setCities(data[0].data); 
            setAsianCities(data[1].data);
            setEuropeanCities(data[2].data);
            setExoticCities(data[3].data);
            setActivities(data[4].data);
            setVenues(data[5].data);
        });
       
   

    },[]);

 
    if (cities.length===0){
        return (<Spinner/>);
    }     


    return(<>
        
        
           
    <div className='container-fluid'>
    <div className='row'>
        <div className='home col s12'>
            <div className='upper-fold'>
               <SearchBox/>
            </div>
        </div>        
    </div>

    </div>

    <div className='container-fluid lower-fold'>
        <div className='row'>
            <div className='col s12'>
                <Cities cities={cities} header="Your recommendations"/>
            </div>

            <div className='col s12'>
                <Activities activities={activities} header="Your daily area"/>
            </div>

            <div className='col s12'>
                <Cities cities={european.cities} header={european.header}/>
            </div>

            <div className="col s12">
                <Venues venues={venuesRecommended.venues} header={venuesRecommended.header} />
            </div>

            <div className='col s12'>
                <Cities cities={asian.cities} header={asian.header}/>
            </div>

            <div className='col s12'>
                <Cities cities={exotic.cities} header={exotic.header}/>
            </div>

        </div>
    </div>

    </>);
}  


export default Home;