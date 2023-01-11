import React from "react";

const Todo = ({ todo, removeTodo }) => {
  return(
    <div key={todo.id}> 
       <div>{todo.task}</div>
    <div style={{cursor: "pointer"}} onClick={() => removeTodo(todo.id)}>
    X
    </div>
    </div>
  )
}

export default Todo ;
