import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";


const Profile = () => {
    return (
        <div className={c.content}>
            <div>
                <img className={c.img}
                    src='https://sport-marafon.ru/upload/iblock/0bb/0859-001.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts myposts = 'My Posts'/>
        </div>
    )
}

export default Profile;