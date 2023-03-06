import React from 'react';
import './City.css';

const City = (props) => {
    const {cityName, image, price } = props.city;
    return(
        <div className='city col s12'>
            <div className='image'>
                <img src={image} alt={cityName}></img>
            </div>
            <div className='city-name'>{cityName}</div>
            <div className='price'>${price}/day</div>
        </div>
    );
}

export default City;