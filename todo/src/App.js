import React, { useState } from 'react'; 
import Todo from "./Todo";
import TodoForm from './TodoForm';
import "./index.css"

function App() {
  const [todos, setTodods] = useState([]);


  const addTask = (userInput) => {
      if (userInput) {
        const newItem = {
          id: Math.random().toString(36).substring(2,9),//2,9
          task: userInput,
          //complete: false
        }
        console.log(newItem);
        setTodos([...todos, newItem])
      }
  }

  const removeTask = (id) => {
     setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  /* const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? {...todo, complete: !todo.complete } : {...todo }
      )
    ])
  }*/
                                            
  return (
    <div className="App">
  <header>
    <h1>список задач: {todos.length}</h1>
  </header>
    <TodoForm addTask={addTask}/>
    {todos.map((todo) => {
      return ( 
      <Todo
        todo={todo}
        key={todos.id}
       // handleToggle={handleToggle}
        removeTask={removeTask}
        />
      )
    })}
    </div>
  );
}

export default App;
