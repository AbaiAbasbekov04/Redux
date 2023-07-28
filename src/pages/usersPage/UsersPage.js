import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction } from "../../redux/actions/actions";
// import { fetchUserOneAction } from "../../redux/actions/actions";
import User from "./User";
import More from "./More";

export default function UsersPage() {

    const dispatch = useDispatch()
    const {users} = useSelector(state => state.usersReducer)

    const getUsers = () => {
        dispatch(fetchUsersAction())        
    }

    return (
        <div>
            <ul>
                <More/>
            </ul>
            <button onClick={getUsers}>get users</button>
            {users.map(user => <User userInfo={user}/>)}
        </div>
    )
}
