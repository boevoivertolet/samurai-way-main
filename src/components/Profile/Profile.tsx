import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";


const Profile = () => {
    return (
        <div className={c.content}>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;