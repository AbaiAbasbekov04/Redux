export const initialState = {
    menu: false,
    value: '',
    users: [],
    num1: '',
    num2: '',
    result: 0,
}

export default function reducer (state = initialState, action) {

    if(action.type === 'CHANGE_TITLE') {
        return {...state, title: 'hello geeks'}
    }
    else if(action.type === 'HANDLE_MENU') {
        return {...state, menu: !state.menu}
    }
    else if(action.type === 'VALUE') {
        return {...state, value: action.payload}
    }
    else if(action.type === 'ADD_USER') {
        return {...state, users: [...state.users, action.payload], value: ""}
    }
    else if(action.type === 'DELETE_ALL') {
        return {...state, users: [], value: ''}
    }
    else if(action.type === 'SET_NUM1') {
        return {...state, num1: action.payload }    
    }
    else if(action.type === 'SET_NUM2') {
        return {...state, num2: action.payload }
    }
    else if(action.type === 'PIL') {
        return {...state, result: parseFloat(state.num1) + parseFloat(state.num2)}
    }
    else if(action.type === 'MIN') {
        return {...state, result: parseFloat(state.num1) - parseFloat(state.num2)}
    }
    else if(action.type === 'MUL') {
        return {...state, result: parseFloat(state.num1) * parseFloat(state.num2)}
    }
    else if(action.type === 'DIVI') {
        return {...state, result: parseFloat(state.num1) / parseFloat(state.num2)}
    }

    return state
}