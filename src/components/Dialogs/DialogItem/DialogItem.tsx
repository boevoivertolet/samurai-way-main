import React from 'react';
import {NavLink} from 'react-router-dom';
import c from './DialogItem.module.css'


export const DialogItem = (props: any) => {
    let path = '/dialogItem/' + props.id;
    return (
        <div className={c.dialog + '' + c.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

}