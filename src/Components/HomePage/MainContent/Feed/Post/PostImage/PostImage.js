import React from 'react';
// import postimage from "../../../../../../images/post.jpg";

function PostImage(props) {
    return (
        <div>
            <img src={props.postPath} alt="" width="615px"/>
        </div>
    );
}

export default PostImage;