import { types } from "../types";

const initialState = {
    list: [],
    sum: 0
}

export default function numbersReducer(state = initialState, action) {
    switch (action.type) {
      case types.ADD_NUMBER:
        const newNumber = parseInt(action.payload, 10);
        if (!isNaN(newNumber)) {
          const newList = [...state.list, newNumber];
          const newSum = state.sum + newNumber
          return { ...state, list: newList, sum: newSum };
        }
        return state;

      case types.CLEAR_LIST:
        return { ...state, list: [], sum: 0};

      default: return state;
    }
  };