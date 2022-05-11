let rerenderEntireTree =(state: any)=> {
    console.log('state changed');
}


export type RootStateType ={
    state:{
        profilePage:profilePageType
        dialogsPage:dialogsPageType
    }
    addPost: (postMessage: string) => void
}


export type profilePageType = {
    posts: PostsProps[]
    newPostText: string
}

export type dialogsPageType = {
    messages: MessagesProps[]
    dialogs: DialogsProps[]
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


let state = {
    profilePage: {
        posts: [
            {id: 1, text: 'Hi', likesCount: 1},
            {id: 2, text: 'Yo', likesCount: 12},

        ],
        newPostText: ''


    },
    dialogsPage: {
        messages: [
            {id: 1, text: 'Hi'},
            {id: 2, text: 'Yo'},
            {id: 3, text: 'Hello'},
            {id: 4, text: 'Shalom'},
            {id: 5, text: 'oops'},
            {id: 6, text: 'vertolet'}
        ],
        dialogs: [
            {id: 1, name: 'Ibragim'},
            {id: 2, name: 'Muhammad'},
            {id: 3, name: 'Xattab'},
            {id: 4, name: 'Osama'},
            {id: 5, name: 'Djohar'},
            {id: 6, name: 'Suleyman'}
        ],

    }


}
export const addPost = () => {
    let newPost = {
        id: 5,
        text: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText ='';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const subscribe = (observer:any) => {
    rerenderEntireTree =observer;

}

export default state;