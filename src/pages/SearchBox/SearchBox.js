import React from 'react';
import './SearchBox.css';
import { useState } from 'react';

const SearchBox = (props) => {

 const {location, setLocation} = useState('');
 const {inCheck, setInCheck} = useState('');
 const {outCheck, setOutCheck} = useState('');
 const {guest, setGuest} = useState(0);

const changeLocation = (e) => {
    setLocation(e.target.value);
}


const changeInCheck = (e) => {
    setInCheck(e.target.value);
}

const changeOutCheck = (e) => {
    setOutCheck(e.target.value);
}

const changeGuest = (e) => {
    setGuest(e.target.value);
}

const search = (e) => {
    e.preventDefault();
    props.history.push(`search/${location}`)
}

return(
    <div className="home-search-box col m4">
    <h1>Book unique places with us</h1>
    
    <form onSubmit={search} className="search-box-form">
        <div className="col m12">
            <div className="form-label">Where</div>
            <div className="input-field" id="where">
                <input className="browser-default" onChange={changeLocation} placeholder="Anywhere" value={location} type="text" />
            </div>
        </div>

        <div className="col m6">
            <div className="form-label">Check-In</div>
            <div className="input-field" id="check-in">
                <input className="browser-default" onChange={changeInCheck} value={inCheck} type="date" />
            </div>
        </div>
        <div className="col m6">
            <div className="form-label">Check-Out</div>
            <div className="input-field" id="check-in">
                <input className="browser-default" onChange={changeOutCheck} value={outCheck} type="date" />
            </div>
        </div>
        <div className="col m12">
            <div className="form-label">Guests</div>
            <div className="input-field" id="where">
                <input className="browser-default" onChange={changeGuest} placeholder="Number of guests" value={guest} type="number" />
            </div>
        </div>
        <div className="col m12 submit-btn">
            <div className="input-field" id="submit-btn">
                <input className="btn-large waves-effect waves-light red accent-2" type="submit" />
            </div>
        </div>


    </form>
</div>
)

}



export default SearchBox;