import React,{ useState } from "react";
import ToDoItem from "./component/ToDoItem";
import "./app.css"

const App = () => { 
  

  return (
  <div className="site_wrapper">
    <h1>To Do List</h1>
      <div className="addTask_wrapper">
        <input type="text" placeholder="write you task"/>
        <button>add ToDo</button>
      </div>
    <ToDoItem/> 
  </div>
  )
}

export default App ; 
