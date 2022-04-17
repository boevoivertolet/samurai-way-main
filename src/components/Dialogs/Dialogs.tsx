import React from 'react';
import {NavLink} from 'react-router-dom';
import c from './Dialogs.module.css'


let dialogs = [
    {id: 1, name: 'Ibragim'},
    {id: 2, name: 'Muhammad'},
    {id: 3, name: 'Xattab'},
    {id: 4, name: 'Osama'},
    {id: 5, name: 'Djohar'},
    {id: 6, name: 'Suleyman'}
]
let messages = [
    {id: 1, text: 'Hi'},
    {id: 2, text: 'Yo'},
    {id: 3, text: 'Hello'},
    {id: 4, text: 'Shalom'},
    {id: 5, text: 'oops'},
    {id: 6, text: 'vertolet'}
]



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

    let messagesElements = messages.map(m => <Message message={m.text}/>)

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    /*  [
          <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>,
          <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>,
          <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>,
      ]
  */


    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {/*  <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>
                <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>
                <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>
                <DialogItem name={dialogs[3].name} id={dialogs[3].id}/>
                <DialogItem name={dialogs[4].name} id={dialogs[4].id}/>
                <DialogItem name={dialogs[5].name} id={dialogs[5].id}/>
*/}
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
                {/*  <Message message={messages[0].text}/>
                <Message message={messages[1].text}/>
                <Message message={messages[2].text}/>
                <Message message={messages[3].text}/>
                <Message message={messages[4].text}/>
                <Message message={messages[5].text}/>*/}
            </div>
        </div>
    )

}