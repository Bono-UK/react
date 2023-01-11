import React, {useState} from "react";
import Form from "./Form";
import Todo from "./todo";

const App = () => {
  const [todos, setTodos] = useState([]);

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const addTask = (userValue) => {
    if (userValue) {
      const newItem = {
        id: Math.random().toString(36).substring(2,9),
        task: userValue,
      }
      console.log(newItem);
      setTodos([...todos, newItem])
    }
  }



  return(
    <div className="App">
      <h1>{todos.length}</h1>
      <Form addTask={addTask}/>    
      {todos.map((todo) => {
        return(
          <Todo 
          key={todos.id} 
          todo={todo}  
          removeTodo={removeTodo}
          /> 
        )
      } )}
    </div>
  )
}

export default App ;
