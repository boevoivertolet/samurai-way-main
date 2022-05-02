import React from 'react';
import c from './MyPosts.module.css';
import Post from './post/Post';
import {PostsProps} from '../../../App';


type MyPostsPropsType = {
    posts: PostsProps[]
    mypPosts: string
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText:string) => void
}


const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map((p) => <Post key={p.id} message={p.text} likeCount={p.likesCount}/>)
    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef()
    //let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPostHandler = () => {

        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text)
            newPostElement.current.value = ''
        }
    }
    let onPostChange = () => {
        let text = newPostElement.current?.value
        // @ts-ignore
        props.updateNewPostText();


    }


    return (
        <div className={c.postsBlock}>
            <h3>{props.mypPosts}</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>

                <button onClick={addPostHandler}>Add post</button>
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