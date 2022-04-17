import React from 'react';
import c from './Message.module.css'


export const Message = (props: any) => {
    return (<div className={c.dialog}>{props.message}</div>
    )

}
