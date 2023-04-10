import React, {useEffect, useState} from 'react';
import './Account.css';
import { connect } from 'react-redux'
import Booking from './Booking';
import AccountSidebar from './AccountSideBar';
import ChangePassword from './ChangePassword';
import { Route } from 'react-router-dom';
import api from '../../api';
import moment from 'moment';


const Account = (props) =>{

    const[pastBookings, setPastBookings]=useState([]);
    const[futureBookings, setFutureBookings]=useState([]);

    useEffect(() => {       

        const data = {
            token: props.auth.token
        };

        api.getBookings(data).then((res)=>{
            let past = [];
            let future = [];

            res.data.forEach(booking => {
                const today = moment();
                const checkout = moment(booking.checkOut);
                const diffDays = checkout.diff(today,"days");
                if(diffDays<0){
                    past.push(booking);
                }else{
                    future.push(booking);
                }
            });

            setPastBookings(past);
            setFutureBookings(future)
        });
 
    });
    


    return (
        <div className='account container-fluid'>
            <AccountSidebar/>
            <div className='row'>
                <div className='col s8 offset-s3'>
                    <Route exact path="/account" render={()=>
                        <h1>Choose component</h1>
                    }/>
                    <Route exact path="/account/reservations/confirmed">
                        <Booking type="upcoming" bookings={futureBookings} token={props.auth.token}/>
                    </Route>
                    <Route exact path="/account/reservations/past">
                        <Booking type="past" bookings={pastBookings}/>
                    </Route>
                    <Route exact path="/account/change-pass" component={ChangePassword}/>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return{
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(Account);