import { combineReducers } from "redux";
import preloaderReducer from "./preloaderReducer";
import userDateReducer from "./userDateReducer";

export const rootReducer = combineReducers({
    preloaderReducer,
    userDateReducer
})