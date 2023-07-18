import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

function ContactsPage () {

    const dispatch = useDispatch()
    const contactTitle = useSelector(state => state.contactTitle)

    const [InputValue, setInputValue] = useState('')


    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'WITH_PARAMS',
            payload: InputValue || contactTitle
        })
        setInputValue('')
    }

    return (
        <div>
            <h1>{contactTitle}</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={InputValue}
                onChange={handleChange}
                placeholder="Введитне тут!!!"
                />
                <button type="submit">add</button>
            </form>
            <p>____________________________</p>
        </div>
    )
}

export default ContactsPage; 