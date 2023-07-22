import reducer, { initialState } from "../../redux/reducer";
import { useReducer } from "react";


export const Calculates = () => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const handleNum1 = (event) => {
        dispatch({type: "SET_NUM1", payload: event.target.value})
    }
    const handleNum2 = (event) => {
        dispatch({type: "SET_NUM2", payload: event.target.value})
    }
    const Pilus = () => {
        dispatch({type: "PIL"})
    }
    const Minus = () => {
        dispatch({type: "MIN"})
    }
    const Multiply = () => {
        dispatch({type: "MUL"})
    }
    const Divide = () => {
        dispatch({type: "DIVI"})
    }

    return (
        <div>
            <h1>{state.result}</h1>
            <div>
                <input onChange={handleNum1} type="number" value={state.num1}></input>
                <input onChange={handleNum2} type="number" value={state.num2}></input>
            </div>
            <div>
                <button onClick={Pilus}>+</button>
                <button onClick={Minus}>-</button>
                <button onClick={Multiply}>*</button>
                <button onClick={Divide}>/</button>
            </div>
        </div>
    )

}