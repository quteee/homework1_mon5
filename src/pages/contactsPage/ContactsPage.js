import React from "react";
import {useState} from "react";
import {useDispatch, useSelector,} from "react-redux";

function ContactsPage () {
  const dispatch = useDispatch()
  const title = useSelector(state => state.contactTitle)
  const count = useSelector(state => state.count)
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleAdd = () => {
    dispatch({
      type: "UPDATE_TITLE",
      payload: input,
    });
    setInput("");
  };


  const withParams = () => {
    dispatch({
      type: "WITH_PARAMS",
      payload: 'hello geeks'
    })
  }


  const increment = () => {
    dispatch({
      type: 'INCREMENT'
    })
  }
  const decrement = () => {
    dispatch({
      type: 'DECREMENT'
    })
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={withParams}>change title with params</button>
      <h1>---------------</h1>
      <input type="text" value={input} onChange={handleChange}/>
      <button onClick={handleAdd}>add</button>
      <h1>---------------</h1>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
    </div>
  )
}
export default ContactsPage