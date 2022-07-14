import React from 'react';
import "./Body.css";
import {Avatar} from "@mui/material";

function Body(props) {
    return (
        <div className="suggestions_body">
            <div className="suggestions_friend">
                <Avatar className="suggestions_img"/>
                <div className="suggestions_username">friend1</div>
            </div>
            <div className="suggestions_friend">
                <Avatar className="suggestions_img"/>
                <div className="suggestions_username">friend1</div>
            </div>
            <div className="suggestions_friend">
                <Avatar className="suggestions_img"/>
                <div className="suggestions_username">friend1</div>
            </div>
        </div>
    );
}

export default Body;