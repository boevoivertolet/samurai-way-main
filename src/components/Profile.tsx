import React from 'react';
import c from './Profile.module.css';


const Profile = () => {
    return <div className={c.content}>
        <div>
            <img
                src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
        </div>
        <div>
            ava + description
        </div>
        <div className={c.posts}>
            My posts
            <div>
                New post
            </div>
            <div className={c.item}>
                <div className={c.item}>
                    post 1
                </div>
                <div className={c.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;