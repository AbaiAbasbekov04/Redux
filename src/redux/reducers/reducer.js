import { combineReducers } from "redux"
// import titleReducer from "./titleReducer"
// import usersRaducer from "./usersReducer"
import numbersReducer from "./masterReducer"

export const rootReducer = combineReducers({
    // titleReducer,
    // usersRaducer,
    numbers: numbersReducer
})