import React, { useEffect, useState } from 'react';
import './Success.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faLongArrowAltRight);
import api from '../../api';
import Spinner from '../../utility/Spinner/Spinner';
import {Link} from 'react-router-dom';


const PaymentSuccess = (props) => {

    const [userData, setUserData] = useState({});
    const [reservation, setReservation] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const stripeToken = props.match.params.stripeToken;
        const token = props.auth.token;
        const data = {stripeToken, token};
        api.completePayment(data).then((res) =>{
            setReservation(res.data.reservationDetails);
            setUserData(res.data.userData);
            setLoading(false);
        });
   
    });


    if(loading){
        return(<Spinner/>);
    }
    
    const rd = reservation;   
    const vd = rd.venueData;
    
    return(
        <div className="reservation-success row">
                <h1 className="col m12 center">Start and Pack!</h1>
                <div className="resv-details col s8 offset-s2">
                    <div className="confirmed col m12 row">
                        <FontAwesomeIcon icon="long-arrow-alt-right" size="1x" color="#ED0000" />Confirmed: {rd.diffDays} nights in {vd.location}         
                        <div className="header-text">
                            <div>Booked by: {props.auth.email}</div>
                            <div>{moment().format('MMMM Do, YYYY')}</div>
                        </div>
                    </div>
                    <div className="confirmed-detail row">
                        <div className="col m5">
                            <div className="bordered col">
                                <div className="col m12 upper">
                                    <div className="left">Check in</div><div className="right">Check out</div>
                                </div>
                                <div className="col m12 lower">
                                    <div className="left">{moment(rd.checkIn).format('MMM Do, YYYY')}</div><div className="right">{moment(rd.checkOut).format('MMM Do, YYYY')}</div>
                                </div>
                                <div className="col m12 title-text">
                                    {vd.title}
                                </div>  
                                <div className="col m12 details">
                                    {vd.details}
                                </div>  
                            </div>
                        </div>


                        <div className="col m7">
                            <div className="bordered col">
                                <div className="col m12 upper charges">
                                    <div className="charges-text col m12">Charges</div>
                                    <div className="row col m12">
                                        <div className="left">${rd.pricePerNight} x {rd.diffDays} days</div>
                                        <div className="right">${rd.totalPrice}</div>
                                    </div>
                                    <div className="row col m12">
                                        <div className="left">Discount</div>
                                        <div className="right">$0</div>
                                    </div>                                
                                    <div className="row col m12 total">
                                        <div className="left">TOTAL</div>
                                        <div className="right">${rd.totalPrice}</div>
                                    </div>
                                </div>
                                <div className="col m12 row">To modify your reservation in the future, visit the link <Link to="/account">account page</Link>.</div>
                                <div className="col m12 resv-image"><img src={vd.imageUrl} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

function mapStateToProps(state){
    return{
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(PaymentSuccess);
