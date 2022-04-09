import React from 'react';
import c from './Profileinfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={c.img}
                     src='https://memepedia.ru/wp-content/uploads/2020/10/ljagushonok-pepe-bet.jpg'/>
            </div>
            <div className={c.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;