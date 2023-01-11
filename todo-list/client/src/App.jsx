import React from "react";
import ToDoItem from "./conponents/ToDoItem";
import "./index.css"
function App() {
  return(
    <div className="site__wrapper">
        <h1>TO-DO LIST</h1>
      <div className="addTask__wrapper">
        <input type="text" placeholder="write Task"/>
        <button>Add task</button>
    </div>
    <ToDoItem/>
    </div>

  )
}

export default App ;
