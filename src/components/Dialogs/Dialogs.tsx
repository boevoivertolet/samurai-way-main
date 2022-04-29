import React from 'react';
import c from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsProps, MessagesProps} from '../../App';





type DialogsPropsType ={

    state: {
        messages: MessagesProps[]
        dialogs: DialogsProps[]
    }
}




export const Dialogs = (props:DialogsPropsType ) => {

    let messagesElements = props.state.messages.map((m) => <Message message={m.text}/>);

    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
            </div>
        </div>
    )

}