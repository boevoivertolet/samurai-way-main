import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={c.img}
                     src='https://memepedia.ru/wp-content/uploads/2020/10/ljagushonok-pepe-bet.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts myposts='My Posts'/>
        </div>
    )
}

export default Profile;