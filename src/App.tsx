import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import { Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';


export type AppPropsType = {
    state: {
        profilePage: { posts: PostsProps[], newPostText: string }
        dialogsPage: { messages: MessagesProps[], dialogs: DialogsProps[] }
    },
    addPost: (postMessage: string) => void
    updateNewPostText: (newText:string) => void
}


export type MessagesProps = {
    id: number
    text: string
}
export type DialogsProps = {
    id: number
    name: string
}
export type PostsProps = {
    id: number
    text: string
    likesCount: number
}


const App = (props: AppPropsType) => {

    return (


        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.dialogsPage}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <Dialogs
                    state={props.state.dialogsPage}/>}/>
                <Route path="/profile" render={() => <Profile
                    updateNewPostText={props.updateNewPostText}
                    profilePage={props.state.profilePage}
                    addPost={props.addPost}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;