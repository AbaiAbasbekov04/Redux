const initialState = {
    title: 'old title',
    aboutTitle: 'old About title',
    contactTitle: ''
}


export default function reducer (state = initialState, action) {


    if (action.type === 'CHANGE_TITLE') {
        return{...state, title: 'New title'}
    }

    else if (action.type === 'CHANGE_ABOUT_TITLE') {
        return{ ...state, aboutTitle: 'New about title'}
    }

    else if (action.type === 'WITH_PARAMS') {
        return{ ...state, contactTitle: action.payload}
    }

    else if (action.type === 'INPUT_TITLE') {
        return{ ...state, title: action.payload}
    }

    return state
}   