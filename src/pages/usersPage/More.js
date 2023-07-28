import React from "react";
import { useSelector } from "react-redux";

export default function More() {

    const Mores = useSelector((state) => state.usersReducer.more)

    return(
        <div>
            {Mores ? (
            <ul>
                <li>name:  {Mores.name}</li>
                <li>adres:  {Mores.address.street}</li>
                <li>email:  {Mores.email}</li>
                <li>userName:  {Mores.username}</li>
           </ul>
            )
            :
            (
                <p>Пока нет никого</p>
            )}  
        </div>
    )
}