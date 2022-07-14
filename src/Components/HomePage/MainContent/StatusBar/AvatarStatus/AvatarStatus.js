import React from 'react';
import "./AvatarStatus.css"
import {Avatar} from "@mui/material";

function AvatarStatus(props) {
// function AvatarStatus({src}) {
    // const src = props.info.src;
    // console.log(src);

    return (
        <div className="statusBar_avatarStatus_main">
            {/*{console.log(props.info.image)}*/}
            {/*{console.log(props.info)}*/}
            <Avatar className="statusBar_avatarStatus_avatar" src={props.info.src}/>
            {/*<Avatar className="statusBar_avatarStatus_avatar" sx={*/}
            {/*    {backgroudImage: `url(${props.info.src})`}*/}
            {/*}/>*/}
            {/*<Avatar className="statusBar_avatarStatus_avatar" img={props.info.src}/>*/}
            {/*<Avatar className="statusBar_avatarStatus_avatar" src={src}/>*/}
            {/*<Avatar className="statusBar_avatarStatus_avatar" src={props.info.src.toString()||iasd} />*/}
            {/*<Avatar className="statusBar_avatarStatus_avatar" src={props.imagess}/>*/}
            {/*<Avatar className="statusBar_avatarStatus_avatar" src={props.info.toString()}/>*/}
            <div className="statusBar_avatarStatus_text">{props.info.username}</div>
            {/*<div className="statusBar_avatarStatus_text">props.info.username</div>*/}
            {/*<Avatar className="statusBar_avatarStatus_avatar" src={info.src.toString()||iasd} />*/}
            {/*<div className="statusBar_avatarStatus_text">{info.username}</div>*/}
        </div>
    );
}

export default AvatarStatus;