import React from 'react';
import c from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = (props: any) => {
    let postsData = [
        {id: 1, text: 'Hi', likesCount: 1},
        {id: 2, text: 'Yo', likesCount: 12},
        {id: 3, text: 'Hello', likesCount: 123},
        {id: 4, text: 'Shalom', likesCount: 1234},
        {id: 5, text: 'oops', likesCount: 12345},
        {id: 6, text: 'vertolet', likesCount: 123456}
    ]

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
                <Post message={postsData[0].text} likeCount={postsData[0].likesCount}/>
                <Post message={postsData[1].text} likeCount={postsData[1].likesCount}/>
                <Post message={postsData[2].text} likeCount={postsData[2].likesCount}/>
            </div>

        </div>);
}

export default MyPosts;