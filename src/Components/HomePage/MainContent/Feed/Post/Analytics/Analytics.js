import React from 'react';
import "./Analytics.css";

import love from "../../../../../../images/love.svg";
import comment from "../../../../../../images/comment.svg";
import share from "../../../../../../images/share.svg";

function Analytics(props) {
    return (
        <div>
            <div style={{marginLeft: "10px"}}>
                <img src={love} alt="" className="feed_post_reactImg"/>
                <img src={comment} alt="" className="feed_post_reactImg"/>
                <img src={share} alt="" className="feed_post_reactImg"/>
            </div>
            <div className="feed_post_likes">{props.likeCount} likes</div>
        </div>
    );
}

export default Analytics;