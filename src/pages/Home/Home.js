import React, {useEffect, useState} from 'react';
import './Home.css';
import SearchBox from '../SearchBox/SearchBox';
import api from '../../api/index';
import Spinner from '../../utility/Spinner/Spinner';
import City from '../../utility/City/City';

const Home = () => {   
    
    const [cities, setSities] = useState([])
    

    useEffect( () => {

        api.getRecommendedCities().then((res)=>{
            setSities(res.data);
        });
       

    },[]);

     
    if (cities.length===0){
        return (<Spinner/>);
    }

    const recommendedCities = cities.map((item, index)=>{
    
        return (
            <div className='col s3'>
                <City city={item} key={index}/>
            </div>
            
        )
    
    });

    return(
           
    <div className='container-fluid'>
    <div className='row'>
        <div className='home col s12'>
            <div className='upper-fold'>
               <SearchBox/>
            </div>

        </div>
        {recommendedCities}
    </div>

    </div>
    );
}  


export default Home;