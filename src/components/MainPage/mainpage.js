import React from 'react';
import './mainpage.css';
import Post from "../Post/Post";
import SiteContents from '../../assets/SiteContents';
import DamageCalculator from "../DamageCalculator/DamageCalculator";
import MessageBox from "../MessageBox/MessageBox";

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
                <h1 style={{textAlign:'center', background:'rgba(255,255,255,0.4)'}}>CHO DESERT ONLINE</h1>
                {postContents}
            </div>
            <div className='SideBar'>
                <DamageCalculator/>
                <MessageBox/>
            </div>
        </div>

    )
};

export default MainPage;
