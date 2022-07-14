import React from 'react';
import "./Login.css";
import insta_logo from "../../../images/logoinsta.png";
import fb_sm_logo from "../../../images/fb.png";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";


function Login(props) {
    return (
        <div className="loginPage_login">
            <img className="loginPage_logo" src={insta_logo} alt=""/>
            <div className="loginPage_signin">
                {
                    props.isLogin ? <Signin/> : <Signup/>
                }
                <div className="loginPage_orDiv">
                    <div className="loginPage_dividor"></div>
                    <div className="loginPage_or">OR</div>
                    <div className="loginPage_dividor"></div>
                </div>
                <div className="loginPage_fb">
                    <img src={fb_sm_logo} alt="fb logo" width="15px" style={{marginRight: "5px"}}/>
                    Log in with Facebook
                </div>
                <div className="loginPage_forgotpw">Forgot password?</div>
            </div>
        </div>);
}

export default Login;