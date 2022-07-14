import React, {useEffect, useState} from 'react';
import "./Feed.css";
import uploadImg from "../../../../images/upload.png";
import {storage} from "../../../firebase";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {PostPayload} from "../../../../Payload/post.payload";
import {LOCAL_PATH} from "../../../../Utils/CustomConstants";
import {postRequestOptions} from "../../../../Utils/Utils";
import Post from "./Post/Post";

function Feed(props) {
    const [postList, setPostList] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setUploading] = useState(false);
    const postURL = LOCAL_PATH + "post";

    const loadPosts = () => {
        fetch(postURL)
            .then(response => response.json())
            .then(data => {
                data.forEach((item) => {
                    item.date = new Date(item.timestamp);
                })
                setPostList(data);
            })
    }

    useEffect(() => {
        loadPosts();
    }, []);


    const uploadImage = (event) => {
        console.log("Feed.uploadImage()");
        console.log(event.target);
        console.log(event.target.files[0]);

        let image = event.target.files[0];
        if (image === null || image === undefined) return;

        const imageRef = ref(storage, `images/${image.name + Math.random() * 10000}`);
        const uploadTask = uploadBytesResumable(imageRef, image);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploading(true);
                setUploadProgress(progress);

                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);

                    let post = new PostPayload(
                        Math.floor(Math.random() * 10000000).toString(),
                        JSON.parse(localStorage.getItem("user")).uid,
                        downloadURL,
                        new Date().getTime(),
                        0
                    );

                    fetch(postURL, postRequestOptions(post))
                        .then(response => response.json())
                        .then(data => console.log(data))
                        .catch(error => console.log(error));
                    setUploading(false);
                    setUploadProgress(0);
                    loadPosts();
                });
            })
    }

    return (
        <div>
            <div style={{textAlign: "center"}} className="feed_uploadFile">
                <label htmlFor="file-upload">
                    <img className="feed_uploadIcon" src={uploadImg} alt=""/>
                </label>
                <input onChange={uploadImage} id="file-upload" type="file"/>
                {isUploading &&
                    <div className="feed_progressWrapper">
                        <div className="feed_uploadProgress"
                             style={{width: uploadProgress.toString() + '%'}}></div>
                    </div>
                }
            </div>
            {
                postList.map((post) => {
                    return <Post key={post.postId} post={post}/>;
                })
            }


        </div>
    );
}

export default Feed;