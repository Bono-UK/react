import React, { useState } from "react";
import uuid from "uuid";

const AddTodo = ({ setTodo, todo }) => {

  const [value, setValue] = useState("")
  
  const saveTodo = () => {
    setTodo([
      {
        id: uuid.v4,
        title: value,
        status: true
      }
    ])
    setValue("")
  }

  return (
    <div>
    <input type="text" placeholder="ввидите задачу" value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={saveTodo}>сохронить</button>
    </div>
  )
}



export default AddTodo ;
