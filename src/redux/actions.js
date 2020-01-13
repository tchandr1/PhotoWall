import {database} from '../database/config'

//removeAction
// Actions are javascript objects


export function startAddingPost(post){
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then(() => {
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error);
        })

    }

}

export function startLoadingPost(){
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot) =>{
            let posts = []
            snapshot.forEach((childSnapshot)=>{
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        }).catch((error) => {
            console.log(error);
        })
    }
}

export function startRemovingPost(index,firebaseId){
    return (dispatch) => {
        return database.ref(`posts/${firebaseId}`).remove().then(()=>{
            dispatch(removePost(index))
        }).catch((error) => {
            console.log(error);
        })
    }

}

export function startAddingComment(comment, firebaseId){
    return (dispatch) =>{
        return database.ref('comment/'+firebaseId).push(comment).then(() => {
            dispatch(addComment(comment,firebaseId))
        }).catch((error) => {
            console.log(error);
        })
    }
}

export function startLoadingComments(){
    return (dispatch) => {
        return database.ref('comment').once('value').then((snapshot)=>{
            let comments = {}
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            console.log('actions startLoadingComments')
            console.log(comments)
            dispatch(loadComments(comments))
        }).catch((error) => {
            console.log(error);
        })
    }
}

export function removePost(index){
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPost(post){
    return {
        type: 'ADD_POST',
        post
    }
}

export function addComment(comment, postId){
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadPosts(posts){
    return {
        type: 'LOAD_POST',
        posts
    }
}

export function loadComments(comments){
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}