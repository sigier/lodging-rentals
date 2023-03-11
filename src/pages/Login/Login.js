import React from 'react';
import './Login.css';
import { bindActionCreators } from 'redux';
import openAModal from '../../actions/openAModal';
import { connect } from 'react-redux';
import Signup from './Signup';



const Login = (props) => {

    return(
        <div className="login-form">
            <form >
                <button className="facebook-login">Connect With Facebook</button>
                <button className="google-login">Connect With Google</button>
                <div className="login-or center">
                    <span>or</span>
                    <div className="or-divider"></div>
                </div>
                <input type="text" className="browser-default" placeholder="Email address" />
                <input type="password" className="browser-default" placeholder="Password" />
                <button className="sign-up-button">Login</button>
                <div className="divider"></div>
                <div>Don't have an account? <span onClick={()=>props.openAModal("open", <Signup/>)}>Sign up</span></div>
            </form>
        </div>
    )
};

const mapDispatchToProps = (dispatcher) => {
    return bindActionCreators({
        openAModal: openAModal
    }, dispatcher)
};


export default connect(null, mapDispatchToProps)(Login);