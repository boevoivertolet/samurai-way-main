import React from 'react';
import c from './MyPosts.module.css';
import Post from './post/Post';
import post from './post/Post';


let posts = [
    {id: 1, text: 'Hi', likesCount: 1},
    {id: 2, text: 'Yo', likesCount: 12},
    {id: 3, text: 'Hello', likesCount: 123},
    {id: 4, text: 'Shalom', likesCount: 1234},
    {id: 5, text: 'oops', likesCount: 12345},
    {id: 6, text: 'vertolet', likesCount: 123456}
]

const MyPosts = (props: any) => {
   let postsElements =posts.map((p)=><Post message={p.text} likeCount={p.likesCount}/>)

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