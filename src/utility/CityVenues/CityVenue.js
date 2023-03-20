import React, { useEffect, useState } from 'react';
import './CityVenue.css';
import api from '../../api/index';
import Spinner from '../Spinner/Spinner';
import Venues from '../Venue/Venues';

const CityVenue = (props) => {

   const [header, setHeader] = useState('');
   const [venues, setVenues] = useState({});
   const cityName = props.match.params.cityName;

    useEffect(()=>{
        api.getCityVenue(cityName).then((res) => {
            console.log(res.data)
            setHeader(res.data.header);
            setVenues(res.data.venues);
        });
    },[cityName]);

    if(!header){
        return <Spinner/>;
    }

    return (
        <div className='row'>
            <Venues venues={venues} header={header}/>
        </div>
    )
};

export default CityVenue;