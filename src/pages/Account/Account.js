import React from 'react';
import './Account.css';
import { connect } from 'react-redux'
import Booking from './Booking';
import AccountSidebar from './AccountSideBar';
import ChangePassword from './ChangePassword';
import { Route } from 'react-router-dom';


const Account = () =>{
    return (
        <div className='account container-fluid'>
            <AccountSidebar/>
            <div className='row'>
                <div className='col s8 offset-s3'>
                    <Route exact path="/account" render={()=>
                        <h1>Choose component</h1>
                    }/>
                    <Route exact path="/account/reservations/confirmed" component={Booking}/>
                    <Route exact path="/account/reservations/past" component={Booking}/>
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