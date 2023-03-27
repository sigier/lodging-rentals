import React, { useEffect, useState } from 'react';
import './Success.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faLongArrowAltRight);
import api from '../../api';
import Spinner from '../../utility/Spinner/Spinner';


const PaymentSuccess = (props) => {

    const [userData, setUserData] = useState({});
    const [reservation, setReservation] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const stripeToken = props.match.params.stripeToken;
        const token = props.auth.token;
        const data = {stripeToken, token};
        api.completePayment(data).then((res) =>{
            setUserData(res.data.reservationDetails);
            setReservation(res.data.userData);
            setLoading(false);
        });
   
    });


    if(loading){
        return(<Spinner/>);
    }
    

    return(
        <div className='reservation-success row'>
            <h1 className='col m12 center'>Start packing!</h1>
            <div className='resv-details col s8 offset-s2'>
                <div className='confirmed col m12 row'>
                    <div>
                        <FontAwesomeIcon icon="long-arrow-alt-right" size="1x" color='#ED0000'/>Confirmed:
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
