import React from 'react';
import './NavBar.css';
import { Link, useLocation } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openAModal from '../../actions/openAModal';
import Login from '../../pages/Login/Login';
 import Signup from '../../pages/Login/Signup';


const  NavBar = (props) => {
    const {pathname} = useLocation();
    
    let navColor = pathname === '/' ? "transparent" : "black";


    return(
            
             
                <div className='container-fluid nav'>
                    <div className='row'>
                        <nav className={navColor}>
                            <div className='nav-wrapper'>
                                <Link to="/" className='left'>Lodging</Link>
                                <ul id='nav-mobile' className='right'>
                                    <li><Link to="/">English</Link></li>
                                    <li><Link to="/">$ USD</Link></li>
                                    <li><Link to="/">Become a host</Link></li>
                                    <li><Link to="/">Help</Link></li>
                                    <li onClick={()=>{props.openNavBarModal('open', <Signup/>)}}>Sign in </li>
                                    <li onClick={()=>{props.openNavBarModal('open', <Login/>)}}>Log in </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
              
    );
}

const mapDispatchToProps = (dispatcher) => {
    return bindActionCreators({
        openNavBarModal: openAModal
    }, dispatcher)
};


export default connect(null, mapDispatchToProps)(NavBar);