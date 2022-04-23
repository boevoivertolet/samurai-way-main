import React from 'react';
import c from './Post.module.css';


type PostType = {
    message: string
    likeCount: number
}


const Post = (props: PostType) => {
    return (
        <div>
            <div className={c.item}>
                <img
                    src="https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg"
                    alt="x"/>
                {props.message}

                <div>
                    <button><span>like</span></button>
                    <span>{props.likeCount}</span>
                </div>


            </div>
        </div>);
}

export default Post;