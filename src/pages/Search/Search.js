import React, { useState } from 'react';
import './Search.css';
import '../Home/Home.css';
import api from '../../api/index';
import Spinner from '../../utility/Spinner/Spinner';
import Cities from '../../utility/City/Cities';
import Activities from '../../utility/Activity/Activities';
import Venues from '../../utility/Venue/Venues';



const Search = (props) => {

    const [activities, setActivities]=useState([]);
    const [cities, setCities]=useState([]);
    const [venues, setVenues]=useState([]);
    const [loading, setLoading]=useState(true);

    useEffect(async () => {
        const searchText = props.match.params.searchText;    
        const response = await api.searchLocation(searchText);
        const data = response.data;

        setActivities(data.activities);
        setCities(data.cities);
        setVenues(data.venues);
        setLoading(false);
    });
    
    if(loading){
        return <Spinner/>;
    }

    return (
        <div className='container-fluid lower-fold'>
            <div className='row'>
                <div className='col s12'>
                    <Cities cities={cities} header="Found cities"/>
                    <Activities activities={activities} header="Matching activities"/>
                    <Venues venues={venues} header="Matching venues"/>
                </div>
            </div>
        </div>
    )
}

export default Search;