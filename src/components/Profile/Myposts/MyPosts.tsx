import React from 'react';
import c from './MyPosts.module.css';
import Post from './post/Post';
import {PostsProps} from '../../../App';

type MyPostsPropsType = {
    posts: PostsProps[]
    myposts: string
}


const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map((p) => <Post message={p.text} likeCount={p.likesCount}/>)

    return (
        <div className={c.postsBlock}>
            <h3>{props.myposts}</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>

                <button>Add post</button>
            </div>
            <div className={c.posts}>
                {postsElements}
                {/*<Post message={posts[0].text} likeCount={posts[0].likesCount}/>
                <Post message={posts[1].text} likeCount={posts[1].likesCount}/>
                <Post message={posts[2].text} likeCount={posts[2].likesCount}/>*/}
            </div>

        </div>);
}

export default MyPosts;