import { types } from "../types";

const initialState = {
    value: '',
    users: []
}

export default function usersRaducer(state = initialState, action) {
    switch(action.type) {
        case types.VALUE:
            return {...state, value: action.payload}
        case types.ADD_USER:
            return {...state, users: [...state.users, action.payload]}
        case types.DELETE_USER:
            return {...state, users: []}
        
            

        default: return state   
    }
}