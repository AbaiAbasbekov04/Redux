import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumberAction, clearListAction } from "../../redux/actions/actions";
import Master from "../../components/master/master";

export default function NumberPage() {
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.numbers.list);
  const sum = useSelector((state) => state.numbers.sum)

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleAddNumber = () => {
    const newNumber = parseInt(number, 10);
    if (!isNaN(newNumber)) {
      dispatch(addNumberAction(newNumber));
      setNumber("");
    }
  };

  const handleClearList = () => {
    dispatch(clearListAction());
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={handleNumberChange}
        placeholder="Введите число"
      />
      <div>
        <button onClick={handleAddNumber}>Add</button>
        <button onClick={handleClearList}>Clear</button>
      </div>
      <p>Сумма: {sum}</p>
      {list.map((item, index) => 
        <Master key={index} masterNum={item}/>
      )}
    </div>
  );
}