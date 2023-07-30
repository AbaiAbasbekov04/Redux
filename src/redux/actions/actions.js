import { types } from "../types";

function preloaderOn () {
    return {
        type: types.PRELOADER_ON
    }
}
function preloaderOff () {
    return {
        type: types.PRELOADER_OFF
    }
}



export function addUserAction (user) {
    return async function (dispatch) {
        dispatch(preloaderOn())

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users/', options)
  
        if(response.status === 201) {
            dispatch(preloaderOff())
        }
        else if (response.status === 404) {
            dispatch(preloaderOn())
        }
    }
}




function user_name(users) {
    return {
        type: types.USER_NAME,
        payload: users,
    }
}

export function addUserDateAction() {
    
    return async function (dispatch) {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users/')
        const date = await response.json()
        dispatch(user_name(date))
    }
}