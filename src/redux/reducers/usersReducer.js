import { types } from "../types";

const initialState ={
    users: [],
    more: null,
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_USERS:
            return {...state, users: action.payload}
        case types.GET_MORE:
            return {...state, more: action.payload}
        default: return state    
    }
}
