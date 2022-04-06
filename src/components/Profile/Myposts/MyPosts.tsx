import React from 'react';
import c from './MyPosts.module.css';
import Post from "./post/Post";


const MyPosts = (props: any) => {
    return (
        <div>
            {props.myposts}
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={c.posts}>
                <Post message="Hi, how are you?" likecounts='123'/>
                <Post message="It's my firs post" likecounts='2346'/>
                <Post message="It's my second post" likecounts='12345123'/>

            </div>

        </div>);
}

export default MyPosts;