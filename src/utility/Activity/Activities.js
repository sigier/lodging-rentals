import React from 'react';
import Activity from './Activity';
import './Activity.css';


const Activities = (props) => {
     
    const activities = props.activities.map((item,index) => {
        return (
        <div key={index} className="col s2">
            <Activity activity={item} key={index}/>
        </div>)
    });
    return(
            <div className='activities'>
                <h1 className='main-header-text'>{props.header}</h1>
                {activities}
            </div>
    );
}

export default Activities;