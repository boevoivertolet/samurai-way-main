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
        <div className={c.dialogsItems}>
            <span ><img className={c.img} src="https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg" /></span>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

}