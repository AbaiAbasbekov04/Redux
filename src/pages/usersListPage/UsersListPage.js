import React from "react";
import User from "./user";
import { addUserDateAction } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";


export default function UsersListPage() { 
    const dispatch = useDispatch()

    function clickUser () {
        dispatch(addUserDateAction())
    }

    return (
        <table class="table">
            <button onClick={clickUser}>Покозать список</button>
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Имя</th>
                <th scope="col">Фамилия</th>
                <th scope="col">адрес</th>
                <th scope="col">веб сайт</th>
                </tr>
            </thead>
        <User/>
        </table>
    )
}