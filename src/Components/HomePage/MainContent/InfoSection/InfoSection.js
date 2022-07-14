import React from 'react';
import "./InfoSection.css";
import {Avatar} from "@mui/material";


// import "../../../../images/pp3.jpeg";
function InfoSection(props) {
    return (
        <div>
            <div className="infoSection_container">
                <Avatar className="infoSection_avatar" src="../../../../images/pp3.jpeg"/>
                <div className="infoSection_content">
                    <div className="infoSection_username">Saint_rowgow</div>
                    <div className="infoSection_description">Description</div>
                </div>
            </div>
        </div>
    );
}

export default InfoSection;