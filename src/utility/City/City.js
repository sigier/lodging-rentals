import React from 'react';
import './City.css';
import { Link } from 'react-router-dom';

const City = (props) => {
    const {cityName, image, price } = props.city;
    return(
        <div className='city col s12'>
            <Link to={`/city/${cityName}`}>
                <div className='image'>
                    <img src={image} alt={cityName}></img>
                </div>
                <div className='city-name'>{cityName}</div>
                <div className='price'>${price}/day</div>
            </Link>
        </div>
    );
}

export default City;