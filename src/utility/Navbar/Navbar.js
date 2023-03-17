import React, {useEffect} from 'react';
import './NavBar.css';
import { Link, useLocation } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openAModal from '../../actions/openAModal';
import Login from '../../pages/Login/Login';
import Signup from '../../pages/Login/Signup';
import { useSelector, useDispatch } from 'react-redux';
import logoutAction from '../../actions/logoutAction';

const  NavBar = (props) => {
    const {pathname} = useLocation();
    
    let navColor = pathname === '/' ? "transparent" : "black";
  
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);

    useEffect(()=>{
        dispatch(openAModal('closed',''));
    },[token,dispatch]);
 


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
                                    {props.auth.email ?
                                    <>                                    
                                    <li>Hello, {props.auth.email}</li>
                                    <li onClick={()=>logOut()} >Logout</li>
                                    </>

                                    :
                                    <>
                                        <li className='login-signup' onClick={()=>{props.openNavBarModal('open', <Signup/>)}}>Sign in </li>
                                        <li className='login-signup' onClick={()=>{props.openNavBarModal('open', <Login/>)}}>Log in </li>
                                    </>
                                    }
                              
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
              
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatcher) => {
    return bindActionCreators({
        openNavBarModal: openAModal,
        logOut:logoutAction
    }, dispatcher)
};


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);