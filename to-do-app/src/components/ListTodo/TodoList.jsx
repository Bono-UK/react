import React from "react";

const List = ({ todo , setTodo }) => {

    function deleteTodo(id) {
    const newTodo = [...todo].filter(item => item.id!=id)
      setTodo(newTodo)
    }
  
    function statusTodo(id) {
      const newTodo = [...todo].filter(item =>{
        if (item.id === id) {
          item.status = !item.status
        }
        return item
      })
        setTodo(newTodo)
    }
  const editTodo = () => {
    
  }

  return (
  <div>
    { 
      todo.map(item => (
        <div key={item.id}>
      <div>{item.title}</div>
      <button onClick={() => deleteTodo(item.id)}>удолить</button>
      <button onClick={() => statusTodo(item.id)}>закрить / открить</button>
      <button onClick={() => editTodo(item.id)}>редактиривать</button>

       </div>
    ))}
  </div>

)}



export default List ;
