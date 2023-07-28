import { types } from "../types";

export function changeTitleAction() {
    return {
        type: types.CHANGE_TITLE,
    }
}

export function asyncFunctionAction () {
    return function () {
        setTimeout(() => {
            alert('Hello')
        }, 2000)
    }
}

function getUsersAction (users) {
    return {
        type: types.GET_USERS,
        payload: users
    }
}

export function fetchUsersAction () {

    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}

function getUsersOneAction (more) {
    return {
        type: types.GET_MORE,
        payload: more
    }
}
export function fetchUserOneAction (id) {

    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()   
        dispatch(getUsersOneAction(data))
    }
}

