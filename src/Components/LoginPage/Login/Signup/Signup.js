import React, {useState} from 'react';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../firebase";
import {UserPayload} from "../../../../Payload/user.payload";
import {LOCAL_PATH} from "../../../../Utils/CustomConstants";

function Signup(props) {
    const [state, setState] = useState({
        emailId: "",
        name: "",
        username: "",
        password: ""
    });

    const URL = LOCAL_PATH + "user";

    const options = (payload) => {
        return {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        }
    }

    const onChangingMail = (event) => {
        setState({...state, emailId: event.currentTarget.value});
    }


    const signup = () => {
        // createUserWithEmailAndPassword(auth, state.emailId, state.password)
        //     .then(userCredential => {
        //         const user = userCredential.user;
        //
        //     })
        //     .catch(error => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //     });

        // auth.createUserWithEmailAndPassword(state.emailId, state.password)
        //     .then(userCredential => {
        //         const user = userCredential.user;
        //
        //     })
        //     .catch(error => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //     });


        createUserWithEmailAndPassword(auth, state.emailId, state.password)
            .then(userCredential => {
                const user = userCredential.user;
                fetch(URL, options(new UserPayload(
                    user.uid,
                    state.username,
                    state.name,
                    ""
                )))
                    .then(response => response.json)
                    .then(data => {
                        // console.log(data);
                        localStorage.setItem("user", JSON.stringify(user));
                        window.location.reload();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
            });


        // let user = {
        //     userId: "userId",
        //     username: "username",
        //     name: "name",
        //     avatar: "avatar"
        // }
        // console.log(options(user));

        // fetch(URL, {
        //     method: "POST",
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         "userId": "userId",
        //         "username": "username",
        //         "realName": "name",
        //         "profileImageUrl": "avatar"
        //     })
        // })
        //     .then(response => response.json)
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

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

    return (
        <div>
            <input className="loginPage_input" onChange={onChangingMail} placeholder="Mobile number or email"
                   type="text"/>
            <input className="loginPage_input"
                   onChange={(event) => {
                       setState({...state, name: event.currentTarget.value});
                   }}
                   placeholder="Full name" type="text"/>
            <input className="loginPage_input"
                   onChange={(event) => {
                       setState({...state, username: event.currentTarget.value});
                   }}
                   placeholder="Username" type="text"/>
            <input className="loginPage_input"
                   onChange={(event) => {
                       setState({...state, password: event.currentTarget.value});
                   }}
                   placeholder="Password" type="password"/>
            <button className="login_button" onClick={signup}>Sign Up</button>
        </div>
    );
}

export default Signup;