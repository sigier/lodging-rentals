import React from 'react';
import './Login.css';

const Signup = () => {

    return (
        <div className="login-form">
                <form >
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect With Google</button>
                    <div className="login-or center">
                        <span>or</span>
                        <div className="or-divider"></div>
                    </div>
                    <button className="sign-up-button">Sign up with email</button>
                    <div className="divider"></div>
                    <div>Already have an account? Log in</div>
                </form>
            </div>

    )

};


export default Signup;