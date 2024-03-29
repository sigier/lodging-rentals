import React, { useEffect, useState } from 'react';
import api from '../../api';
import './FullVenue.css';
import Point from './Point';
import { connect } from 'react-redux';
import openAModal from '../../actions/openAModal';
import { bindActionCreators } from 'redux';
import Login from '../Login/Login';
import moment from 'moment';
import swal from 'sweetalert';
import stripeLoader from '../../Stripe/scriptLoader';

const FullVenue = (props) => {

    const [fullVenue, setFullVenue] = useState({});
    const [points, setPoints] = useState([]);
    
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');



    const id = props.match.params.id;

    useEffect(()=>{ 
        
        const promises = [
            api.getVenueById(id),
            api.getPoints()
    
        ]; 

        Promise.all(promises).then(data =>{
            setFullVenue(data[0].data); 
            setPoints(data[0].data.points.split(',').map((item,index)=>{
                return(<Point key={index} pointDescription={data[1].data} point={item} /> )
            }));
        });

    },[id]);

    const changeNumberOfGuests = (e)=>{setNumberOfGuests( e.target.value)};
    const changeCheckIn = (e)=>{setCheckIn( e.target.value)};
    const changeCheckOut = (e)=>{setCheckOut( e.target.value)};

    const reserveNow = (e) => {
        const startDayMoment = moment(checkIn);
        const endDayMoment = moment(checkOut);
        const diffDays = endDayMoment.diff(startDayMoment,"days");

          

        if(diffDays < 1){
            swal({
                title: "Put check-out before check-in date!",
                icon:"error"
            });
        }else if(isNaN(diffDays) || diffDays===0){
            swal({
                title: "Select valid dates!",
                icon:"error"
            });
        }else{
            const priceNight = fullVenue.priceNight;
            const total = priceNight*diffDays;
            stripeLoader.then();

            const data  = {
                venueData: fullVenue,
                totalPrice: total,
                diffDays,
                pricePerNight: priceNight,
                checkIn,
                checkOut,
                token: props.auth.token,
                numberOfGuests: numberOfGuests,
                currency: 'USD',
            };
            const stripeKey = process.env.REACT_APP_STRIPE_KEY;
            const stripe = window.Stripe(stripeKey);
            const sessionItem = api.createStripeSession(data).then();
            stripe.redirectToCheckout({
                sessionId: sessionItem.data.id,
            }).then((result)=>{
                console.log(result);
            });

        }
    }
    

    return(
        <div className='row single-venue'>
            <div className='col s12 center'>
                <img src={fullVenue.imageUrl} alt='venue'/>
            </div>

            <div className='col s8 location-details offset-s2'>
                <div className='col s8 left-details'>
                    <div className='location'>{fullVenue.location}</div>
                    <div className='title'>{fullVenue.title}</div>
                    <div className='guests'>Max  guests: {fullVenue.guests}</div>

                    <div className='divider'></div>
                    {points}
                    <div className='details'>{fullVenue.details}</div>
                    <div className='amenities'>{fullVenue.amenities}</div>
                </div>

                <div className='col s4 right-details'>
                    <div className='price-per-day'>$ {fullVenue.pricePerNight} <span>per day</span></div>
                    <div className='rating'>{fullVenue.rating}</div>

                    <div className='col s6'>
                        Check-In
                        <input type='date' onChange={changeCheckIn} value={checkIn}/>
                    </div>

                    <div className='col s6'>
                        Check-Out
                        <input type='date' onChange={changeCheckOut} value={checkOut} />
                    </div>

                    <div className='col s12'>
                        <select className='browser-default' onChange={changeNumberOfGuests } value={numberOfGuests}  >
                            <option value='1'> 1 Guest</option>
                            <option value='2'> 2 Guests</option>
                            <option value='3'> 3 Guests</option>
                            <option value='4'> 4 Guests</option>
                            <option value='5'> 4 Guests</option>
                        </select>
                    </div>

                    <div className='col s12'>
                        { props.auth.token ?                            
                          <button onClick={reserveNow} className='btn red accent-2'>Reserve</button> :
                          <div>Please,  <span className='text-link' onClick={()=>{props.openNavBarModal('open', <Login/>)}}>Log in </span>
                          for reservation</div>  
                        }   
                    </div>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        showModal: openAModal
    },dispatch);
};



export default connect(mapStateToProps, mapDispatchToProps)(FullVenue);