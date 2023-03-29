import React from 'react';
import './Account.css';
import { connect } from 'react-redux'
import Booking from './Booking';
import AccountSidebar from './AccountSideBar';
import ChangePassword from './ChangePassword';


const Account = () =>{
    return (
        <div className='account container-fluid'>
            <AccountSidebar/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return{
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(Account);