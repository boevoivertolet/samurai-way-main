import React from 'react';
import c from './Profile.module.css';
import MyPosts from './Myposts/MyPosts';
import ProfileInfo from './Myposts/Profileinfo/Profileinfo';
import {PostsProps} from '../../App';




type ProfilePropsType ={
    posts: PostsProps[]
    addPost: (postMessage: string) => void
}


const Profile = (props: ProfilePropsType) => {

    return (
        <div className={c.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} myposts={'My POSTS'} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;