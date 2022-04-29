import React from 'react';
import c from './Profile.module.css';
import MyPosts from './Myposts/MyPosts';
import ProfileInfo from './Myposts/Profileinfo/Profileinfo';
import {PostsProps} from '../../App';




type ProfilePropsType ={

    profilePage:{
        posts: PostsProps[]
        newPostText: string
    }
    addPost: (postMessage: string) => void
}


const Profile = (props: ProfilePropsType) => {

    return (
        <div className={c.content}>
            <ProfileInfo/>
            <MyPosts
                newPostText={props.profilePage.newPostText}
                posts={props.profilePage.posts}
                mypPosts={'My POSTS'}
                addPost={props.addPost}/>
        </div>
    )
}

export default Profile;