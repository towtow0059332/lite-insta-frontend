import React from 'react';
import "./Header.css"
import {Avatar} from "@mui/material";
import {avatarUrl} from "../../../../../../Utils/CustomConstants";

function Header(props) {
    // const getAvatar = (userId) => {
    //     const userURL = USER_PATH + userId;
    //     let avatarURL = "";
    //     fetch(userURL)
    //         .then(response => response.json())
    //         .then(data => {
    //             // console.log(data);
    //             avatarURL = data.profileImageUrl;
    //         })
    //         .catch(error => console.log(error));
    //     return avatarURL;
    // }
    // const [avatar, setAvatar] = useState("");
    //
    // const loadAvatar=()=>{
    //     // setAvatar(getAvatar(props.post.userId));
    //     getAvatar(props.post.userId);
    // }
    //
    // useEffect(() => {
    //     loadAvatar();
    // }, []);

    return (
        <div className="feed_post_header">
            <Avatar className="feed_post_avatar" src={avatarUrl}/>
            <div>
                <div className="feed_post_username">{props.post.username}</div>
                <div className="feed_post_timestamp">{props.post.date.toString()}</div>
            </div>
        </div>
    );
}

export default Header;