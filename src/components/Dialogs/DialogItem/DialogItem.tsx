import React from 'react';
import {NavLink} from 'react-router-dom';
import c from './DialogItem.module.css'



type DialogItemPropsType ={
    id: number
    name: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={c.dialog + '' + c.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

}