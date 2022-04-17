import React from 'react';
import {NavLink} from 'react-router-dom';
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

export const Dialogs = (props: any) => {
    let dialogsData = [
        {id: 1, name: 'Ibragim'},
        {id: 2, name: 'Muhammad'},
        {id: 3, name: 'Xattab'},
        {id: 4, name: 'Osama'},
        {id: 5, name: 'Djohar'},
        {id: 6, name: 'Suleyman'}
    ]
    let messagesData = [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'Yo'},
        {id: 3, text: 'Hello'},
        {id: 4, text: 'Shalom'},
        {id: 5, text: 'oops'},
        {id: 6, text: 'vertolet'}
    ]

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>


            </div>
            <div className={c.messages}>
                <Message message={messagesData[0].text}/>
                <Message message={messagesData[1].text}/>
                <Message message={messagesData[2].text}/>
                <Message message={messagesData[3].text}/>
                <Message message={messagesData[4].text}/>
                <Message message={messagesData[5].text}/>
            </div>
        </div>
    )

}