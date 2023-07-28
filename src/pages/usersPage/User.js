import React from "react";
import { useDispatch } from "react-redux";
import { fetchUserOneAction } from "../../redux/actions/actions";

export default function User({userInfo}) {

    const dispatch = useDispatch()

    const getOneUser = (event) => {
        dispatch(fetchUserOneAction (event.target.value))
    }

    return (
        <ul>
            <li>name: {userInfo.name}</li>
            <li>email: {userInfo.email}</li>
            <li>
                <button value={userInfo.id} onClick={getOneUser}>get more</button>
            </li>
        </ul>
    )
}
