import React from 'react';
import './index.css';
import state, {addPost, subscribe} from './redux/state';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {updateNewPostText} from './redux/state';







export let  rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state ={state} addPost ={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root')
    );

}




rerenderEntireTree(state);
subscribe(rerenderEntireTree);
