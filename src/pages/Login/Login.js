import React, {useState} from 'react';
import './Login.css';
import { bindActionCreators } from 'redux';
import openAModal from '../../actions/openAModal';
import { connect } from 'react-redux';
import Signup from './Signup';
import api from '../../api';
import swal from 'sweetalert';
import signAction from '../../actions/signAction';


const Login = (props) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const changeEmail = (e)=>setEmail(e.target.value);
    const changePassword = (e)=>setPassword(e.target.value);



    const handleTokenData = (data) => {

        switch(data.msg){
            case "noEmail":
                swal({
                    title: "Email has to be provided!",
                    icon: "error",
                  })      
                break;
            case "badPass":
                swal({
                    title: "Invalid email/password",
                    text: "Not found.",
                    icon: "error",
                  });
                break;
            case "loggedIn":
                swal({
                    title: "Success!",
                    icon: "success",
                  });
                props.registerAction(data); 
                break;   
            default:
                break;
 
        }

    };


    const submitLogin = (e) => {
        e.preventDefault();
        api.logIn({email, password}).then(res=>handleTokenData(res.data));
     };
 

    return(
        <div className="login-form">
            <form onSubmit={submitLogin}>
                <button className="facebook-login">Connect With Facebook</button>
                <button className="google-login">Connect With Google</button>
                <div className="login-or center">
                    <span>or</span>
                    <div className="or-divider"></div>
                </div>
                <input type="text" onChange={changeEmail} className="browser-default" placeholder="Email address" />
                <input type="password" onChange={changePassword} className="browser-default" placeholder="Password" />
                <button className="sign-up-button">Login</button>
                <div className="divider"></div>
                <div>Don't have an account? <span className='pointer' onClick={()=>props.openAModal("open", <Signup/>)}>Sign up</span></div>
            </form>
        </div>
    )
};

const mapDispatchToProps = (dispatcher) => {
    return bindActionCreators({
        openAModal: openAModal,
        registerAction: signAction
    }, dispatcher)
};


export default connect(null, mapDispatchToProps)(Login);