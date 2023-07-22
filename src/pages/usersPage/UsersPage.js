import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersList from "../../components/userList/UsersList";

function UsersPage () {
    const value = useSelector(state => state.value)
    const dispatch = useDispatch()

    const changeInput = (event) => {
        dispatch({
            type: 'VALUE',
            payload: event.target.value
        })

    }
    const addUser = () => {
        dispatch({
            type: "ADD_USER",
            payload: value
        })
    }

    const deleteAll = () => {
        dispatch({
            type: "DELETE_ALL"
        })
    }

    return (
        <div>
            <input onChange={changeInput} value={value} placeholder="name"/>
            <button onClick={addUser}>add</button>
            <button onClick={deleteAll}>DeleteAll</button>
            <UsersList/>
        </div>
    )
}

export default UsersPage;