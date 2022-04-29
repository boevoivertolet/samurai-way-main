import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from 'react';







export let  rerenderEntireTree = (state: any, addPost: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state ={state} addPost ={addPost}/>
    </BrowserRouter>, document.getElementById('root')
);

}


