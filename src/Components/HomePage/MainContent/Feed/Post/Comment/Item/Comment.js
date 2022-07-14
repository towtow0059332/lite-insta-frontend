import React from 'react';
import "./Comment.css";

function Comment(props) {
    return (
        <div className="feed_post_comment">{props.comment.username}: {props.comment.comment}</div>
    );
}

export default Comment;