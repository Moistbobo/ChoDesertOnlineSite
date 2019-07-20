import React from 'react';
import './mainpage.css';
import Post from "../Post/Post";
import SiteContents from '../../assets/SiteContents';
import DamageCalculator from "../DamageCalculator/DamageCalculator";

const MainPage = props => {

    const postContents = SiteContents.map((post) => {
        return (
            <Post title={post.title}>
                <div dangerouslySetInnerHTML={{__html: post.contents}}/>
            </Post>
        )
    });
    return (
        <div className='container'>
            <div className='MainPage'>
                {postContents}
            </div>
            <div className='SideBar'>
                <DamageCalculator/>
            </div>
        </div>

    )
};

export default MainPage;
