import React from 'react';
import "./Asking.css";


function Asking(props) {
    return (
        <div className="loginPage_signupOption">
            {
                props.isLogin ?
                    <div className="loginPage_signupOption_item">Don't have an account? <span
                        style={{fontWeight: "bold", color: "#0395f6"}}
                        onClick={props.changeLogin}
                    >Sign up</span></div> :
                    <div className="loginPage_signupOption_item">Have an account? <span
                        style={{fontWeight: "bold", color: "#0395f6"}}
                        onClick={props.changeLogin}>Sign in</span></div>
            }
        </div>
    );
}

export default Asking;