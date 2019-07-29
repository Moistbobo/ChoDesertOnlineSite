import React from "react";
import './Post.css';

const Post = props => {
    return (
        <div
        className={"PostCard"}>
            <div
            className={"PostCardBody"}>
                <h1>{props.title}</h1>
            </div>
            <div
            className={"PostCardBody"}>
                {props.children}
            </div>
        </div>
    )
};

export default Post;
