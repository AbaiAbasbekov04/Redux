import React from "react";
import { useDispatch } from "react-redux";
import Menu from "../../components/menu";


function AboutPage () {

    const dispatch = useDispatch()


    const handleMenu = () => {
        dispatch({
            type: 'HANDLE_MENU'
        })
    }

    return (
        <div>
            <button onClick={handleMenu}>menu</button>
            <Menu/>
        </div>
    )
}

export default AboutPage