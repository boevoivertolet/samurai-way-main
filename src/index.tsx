import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';





let posts = [
    {id: 1, text: 'Hi', likesCount: 1},
    {id: 2, text: 'Yo', likesCount: 12},
    {id: 3, text: 'Hello', likesCount: 123},
    {id: 4, text: 'Shalom', likesCount: 1234},
    {id: 5, text: 'oops', likesCount: 12345},
    {id: 6, text: 'vertolet', likesCount: 123456}
]
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


ReactDOM.render(
    <App posts={posts}
         dialogs={dialogs}
         messages={messages}

    />,
    document.getElementById('root')
);