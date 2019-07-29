import React from "react";
import './Post.css';

const Post = props => {
    return (
        <div
        className={"PostCard"}>
            <h1 className={"PostCardBody"}>{props.title}</h1>
            <div
            className={"PostCardBody"}>
                {props.children}
            </div>
        </div>
    )
};

export default Post;
