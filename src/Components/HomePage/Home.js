import React, {useEffect} from 'react';
import "./Home.css";
import NavBar from "./NavBar/NavBar";
import MainContent from "./MainContent/MainContent";
import {getAvatar} from "../../Utils/Utils";

function Home(props) {
    const userId = JSON.parse(localStorage.getItem("user")).uid.toString();
    // useEffect(() => {
    //     console.log("Home.useEffect()");
    //     const temp = JSON.parse(localStorage.getItem("user")).uid.toString();
    //     console.log(temp);
    //     let url = getAvatar(temp);
    //     console.log(url);
    //     setAvatarUrl(url);
    //     console.log(avatarUrl);
    // }, []);

    useEffect(() => {
        getAvatar(userId);
    }, [])

    return (
        <div>
            <NavBar/>
            <MainContent/>
        </div>
    );
}

export default Home;