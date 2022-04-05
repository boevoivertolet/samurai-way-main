import React from 'react';
import c from './Post.module.css';


const Post = () => {
    return (
        <div>
            <div className={c.item}>
                <img
                    src="https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg"
                    alt="x"/>
                post 1
                <div>
                    <button><span>Like</span></button>
                </div>


            </div>
        </div>);
}

export default Post;