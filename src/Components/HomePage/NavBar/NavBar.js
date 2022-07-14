import React, {useEffect, useState} from 'react';
import "./NavBar.css";
import {Avatar, Grid} from "@mui/material";
import insta_logo from "../../../images/logo.png";
import home_logo from "../../../images/home.svg";
import message_logo from "../../../images/message.svg";
import find_logo from "../../../images/find.svg";
import react_logo from "../../../images/love.svg";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../firebase";
import {AVATAR_PATH, avatarUrl, setAvatarUrl} from "../../../Utils/CustomConstants";
import {getAvatar, postRequestOptions} from "../../../Utils/Utils";
import {AvatarPayload} from "../../../Payload/avatar.payload";

function NavBar(props) {
    const curUser = JSON.parse(localStorage.getItem("user"));
    const [isDropdown, setDropdown] = useState(false);
    // const [avatar, setAvatar] = useState("");

    const loadAvatar = () => {

        // console.log(curUser.uid);
        // let temp = getAvatar(curUser.uid);
        // console.log(temp);
        // // setAvatar(getAvatar(curUser.uid));
        // setAvatar(temp);
        getAvatar(curUser.uid);
    }

    useEffect(() => {
        loadAvatar();
    }, [avatarUrl]);

    const pointerEnter = () => {
        setDropdown(true);
    }
    const pointerLeave = () => {
        setDropdown(false);
    }

    const uploadAvatar = (event) => {
        let image = event.target.files[0];
        if (image === null || image === undefined) return;

        const imageRef = ref(storage, `avatars/${image.name + Math.random() * 1000}`);
        const uploadTask = uploadBytesResumable(imageRef, image);
        uploadTask.on('state_changed',
            (snapshot) => {
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    let avatarPayload = new AvatarPayload(
                        curUser.uid,
                        downloadURL
                    )

                    fetch(AVATAR_PATH, postRequestOptions(avatarPayload))
                        .then(response => response.json())
                        .then(data => {
                            console.log(data)
                            // profiler = downloadURL;
                            loadAvatar();
                        })
                        .catch(error => console.log(error));
                });
            })
    }

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div>
            <div className="navBar_barContent">
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={3}>
                        <img className="navBar_instaLogo" src={insta_logo} alt="Instagram Logo" width="105px"/>
                    </Grid>
                    <Grid item xs={3}>
                        <input className="navBar_searchBar" type="text" placeholder="Search"/>
                    </Grid>
                    <Grid item xs={3} display="flex">
                        <img src={home_logo} alt="" className="navBar_logo" onClick={()=>{setAvatarUrl("")}}/>
                        <img src={message_logo} alt="" className="navBar_logo"/>
                        <img src={find_logo} alt="" className="navBar_logo"/>
                        <img src={react_logo} alt="" className="navBar_logo"/>
                        <div className="navBar_dropdown" onPointerEnter={pointerEnter} onPointerLeave={pointerLeave}>
                            <Avatar src={avatarUrl} style={{maxHeight: "25px", maxWidth: "25px"}}
                                    className="navBar_logo"/>
                            {isDropdown &&
                                <ul className="navBar_select">
                                    <li>
                                        <label htmlFor="inputAvatar"  className="navBar_select_greenText">Avatar</label>
                                        <input type="file" id="inputAvatar" onChange={uploadAvatar}
                                               style={{display: "none"}}/>
                                    </li>
                                    <li onClick={logout} className="navBar_select_redText">Logout</li>
                                </ul>
                            }
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default NavBar;