import React, {useEffect, useRef, useState} from 'react';
import "./CommentSection.css";
import {COMMENT_PATH} from "../../../../../../Utils/CustomConstants";
import {postRequestOptions} from "../../../../../../Utils/Utils";
import {CommentPayload} from "../../../../../../Payload/comment.payload";
import Comment from "./Item/Comment";


function CommentSection(props) {
    const postCommentsPath = COMMENT_PATH + props.postId;
    const [listComment, setListComment] = useState([]);
    const input = useRef();

    const loadAllComments = () => {
        fetch(postCommentsPath)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setListComment(data);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        loadAllComments();
    }, [])

    const submitComment = (event) => {
        if (event.key === "Enter") {
            let comment = event.currentTarget.value;
            if (comment) {
                fetch(COMMENT_PATH, postRequestOptions(new CommentPayload(
                    Math.floor(Math.random() * 1000000).toString(),
                    JSON.parse(localStorage.getItem("user")).uid,
                    props.postId,
                    new Date().getTime(),
                    comment)))
                    .then(response => response.json())
                    .then(data => {
                        // console.log(data);
                        // event.currentTarget.value = "61";
                        // event.target = "";
                        loadAllComments();
                        // setTimeout(input.current.value = "",500000);
                        input.current.value = "";
                    })
                    .catch(error => console.log(error));
            }
            // loadAllComments();
        }
    }

    return (
        <div>
            <div>
                {
                    listComment.map((comment) => {
                        return <Comment key={comment.commentId} comment={comment}/>
                    })
                }
            </div>
            <div>
                <input className="feed_post_commentBox" ref={input} onKeyDown={submitComment} type="text"
                       placeholder="Write a comment..."/>
            </div>
        </div>

    );
}

export default CommentSection;