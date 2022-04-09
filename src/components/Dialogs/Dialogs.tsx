import React from "react";
import {NavLink} from "react-router-dom";
import c from './Dialogs.module.css'


const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={c.dialog + '' + c.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

}

const Message = (props: any) => {
    return (<div className={c.dialog}>{props.message}</div>
    )

}

export const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <DialogItem name='Ibragim' id='1'/>
                <DialogItem name='Muhammad' id='2'/>
                <DialogItem name='Xattab' id='3'/>
                <DialogItem name='Osama' id='4'/>
                <DialogItem name='Suleyman' id='5'/>
                <DialogItem name='Saddam' id='6'/>
                <DialogItem name='Hadji' id='7'/>
                <DialogItem name='Djohar' id='8'/>
            </div>
            <div className={c.messages}>
                <Message message='Hi'/>
                <Message message='Yo'/>
                <Message message='Hello'/>
                <Message message='Shalom'/>

            </div>
        </div>
    )

}