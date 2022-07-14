import React from 'react';
import "./Suggestion.css";
import Body from "./Body/Body";

function Suggestion(props) {
    return (
        <div className="suggestions_container">
            <div className="suggestions_header">Suggestions for you</div>
            <Body/>
        </div>
    );
}

export default Suggestion;