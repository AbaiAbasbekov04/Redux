import React from "react";
import { useSelector } from "react-redux";

export default function User() {    

    const users = useSelector((state) => state.userDateReducer.users)
    return (
        <tbody>
            {users.map((user, index) => (

                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.address.street}</td>
                    <td>{user.website}</td>
                </tr>
            ))}
        </tbody>
    )
}