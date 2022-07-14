import React from 'react';
import "./Post.css";
import Header from "./Header/Header";
import PostImage from "./PostImage/PostImage";
import Analytics from "./Analytics/Analytics";
import CommentSection from "./Comment/CommentSection";

function Post(props) {
    return (
        <div className="feed_post_container">
            <Header post={props.post}/>
            <PostImage postPath={props.post.postPath}/>
            <Analytics likeCount={props.post.likeCount}/>
            <CommentSection postId={props.post.postId}/>
        </div>
    );
}

export default Post;