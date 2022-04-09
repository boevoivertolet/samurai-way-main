import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./Myposts/Profileinfo/Profileinfo";


const Profile = () => {
    return (
        <div className={c.content}>
           <ProfileInfo/>
            <MyPosts myposts = 'My Posts'/>
        </div>
    )
}

export default Profile;