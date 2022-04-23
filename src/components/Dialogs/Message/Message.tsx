import React from 'react';
import c from './Message.module.css';


type MessagePropsType ={
    message: string
}

export const Message = (props: MessagePropsType) => {
    return (<div className={c.dialog}>{props.message}</div>
    )

}
