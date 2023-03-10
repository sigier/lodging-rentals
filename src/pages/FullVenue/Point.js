import React from 'react';
import './FullVenue.css';


const Point = (props) => {

    const {text} = props.pointDescription.find(item => item.pointTitle === props.point);


    return(<>
        <div className='point-title'>{props.point}</div>
        <div className='point-desc'>{text}</div>
    
    </>)
};

export default Point;

