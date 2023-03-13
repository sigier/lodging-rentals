import React, { useState } from 'react';
import './Login.css';
import SignUpInputs from './SignUpInputs';
import { bindActionCreators } from 'redux';
import openAModal from '../../actions/openAModal';
import { connect } from 'react-redux';
import Login from './Login';

const Signup = (props) => {

    const signIt = () => {
        setLowerPart(<SignUpInputs changeEmail={changeEmail} changePassword={changePassword} />)
    }
    const [lowerPart, setLowerPart] = useState(<button type='button'   onClick={signIt} className="sign-up-button">Sign up with email</button> );
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const changeEmail = (e)=>setEmail(e.target.value);
    const changePassword = (e)=>setPassword(e.target.value);

    const submitLogin = (e) => {
        e.preventDefault();

     };
 
        
  

    return (
        <div className="login-form">
                <form onSubmit={submitLogin} >
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect With Google</button>
                    <div className="login-or center">
                        <span>or</span>
                        <div className="or-divider"></div>
                    </div>
                    {lowerPart}
                    <div className="divider"></div>
                    <div>Already have an account? <span className='pointer' onClick={()=>props.openAModal("open", <Login/>)}>Log in</span></div>

                </form>
            </div>

    )

};

const mapDispatchToProps = (dispatcher) => {
    return bindActionCreators({
        openAModal: openAModal
    }, dispatcher)
};


export default connect(null, mapDispatchToProps)(Signup);
 