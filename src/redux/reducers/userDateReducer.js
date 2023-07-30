import { types } from "../types";


const initialState = {
    users: []
}

export default function userDateReducer(state = initialState, action) {
    switch (action.type) {
        case types.USER_NAME:
            return {...state, users: action.payload}
        default: return state    
    }
}