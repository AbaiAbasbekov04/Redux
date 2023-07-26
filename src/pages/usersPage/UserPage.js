import React, {useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsersAction, changeInputAction, deleteAction } from "../../redux/actions/actions";
import User from "../../components/user/User";

export default function UsersPage() {

    const {value, users} = useSelector(state => state.usersRaducer)
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value))
    }

    const addUser = () => {
        dispatch(addUsersAction(value));
        dispatch(changeInputAction(''))
        inputRef.current.value = ""
    }

    const DeleteAll = () => {
        dispatch(deleteAction())
    }

    return (
        <div>
            <div>
                <input ref={inputRef} type="text" placeholder="name"onChange={changeInput} ></input>
            </div>
            <button onClick={addUser}>add</button>
            <button onClick={DeleteAll}>delete all</button>


            {users.map((users, idx) => <User key={idx} userName={users} />)}
        </div>
    )
}

