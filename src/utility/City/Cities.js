import React from 'react';
import City from './City';
import Slider from '../Slider/Slider';

const Cities = (props) => {
    
    const cities = props.cities.map((item, index) => {
          return (
                <div key={index} className='col s3'>
                <City city={item} />
                </div> 
            ) 
        });   
        
    return (
        <div className='cities-wrapper'>
            <h1 className='main-header-text'>{props.header}</h1>
            <Slider elements={cities}/>
        </div>
       
    )
     
}

export default Cities;