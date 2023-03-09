import React from 'react';
import './Venue.css';
import { Link } from 'react-router-dom';

const Venue = (props) => {
    
    const { id, title, location, pricePerNight, imageUrl, rating } = props.venue;
    return(
        <div className="venue col s9">
            <Link to={`/venue/${id}`}>
                <div className="image">
                    <img src={imageUrl} alt={location}/>
                </div>
                <div className="location-stars">
                    <span className="location">{location}</span>
                    <span className="rating right"><i className="material-icons">star</i>{rating}</span>
                </div>
                <div className="title">${title}</div>
                <div className="price-per-night">${pricePerNight}/night</div>
                
            </Link>
        </div>
        )
}

export default Venue;