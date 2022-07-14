import React, {useState} from 'react';
import "./Signin.css";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../firebase";

function Signin(props) {
    const [state, setState] = useState({
        emailId: "",
        password: ""
    });

    // const URL = "http://localhost:8080/user";
    //
    // const options = (payload) => {
    //     return {
    //         method: "POST",
    //         headers: {ContentType: "application/json"},
    //         body: JSON.stringify(payload)
    //     }
    // }


    const login = () => {
        // localStorage.setItem("user", "admin");
        // window.location.reload();


        signInWithEmailAndPassword(auth, state.emailId, state.password)
            .then((userCredential) => {
                const user = userCredential.user;
                // let userPayload = new UserPayload(
                //     "userId",
                //     "username",
                //     "name",
                //     "avatar"
                // )

                // const requestOptions = {
                //     method: "POST",
                //     headers: {ContentType: "application/json"},
                //     body: JSON.stringify(userPayload)
                // }


                // fetch("http://localhost:8080/user", requestOptions)
                //     .then(response => response.json)
                //     .then(data => {
                //         console.log(data);
                //     })
                //     .catch(error => {
                //         console.log(error);
                //     });


                localStorage.setItem("user", JSON.stringify(user));
                window.location.reload();

                // fetch(URL, options(userPayload))
                //     .then(response => response.json)
                //     .then(data => {
                //         console.log(data);
                //     })
                //     .catch(error => {
                //         console.log(error);
                //     });
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });


        // fetch(URL, options(new UserPayload(
        //     "userId",
        //     "username",
        //     "name",
        //     "avatar"
        // )))
        //     .then(response => response.json)
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    }

    // const setStateOnChangingValue = (event) => {
    //     setState({...state, emailId: event.currentTarget.value});
    // }

    return (
        <div>
            <input className="loginPage_input"
                   onChange={(event) => {
                       setState({...state, emailId: event.currentTarget.value});
                   }}
                   placeholder="Phone number, username or email" type="text"/>
            <input className="loginPage_input"
                   onChange={(event) => {
                       setState({...state, password: event.currentTarget.value});
                   }}
                   placeholder="Password" type="password"/>
            <button className="login_button" onClick={login}>Log In</button>
        </div>);
}

export default Signin;
