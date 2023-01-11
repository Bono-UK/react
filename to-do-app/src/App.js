import React, {useState} from "react";
import MyHeader from "./components/Header/MyHeader";
import AddTodo from "./components/AddTodo/AddTodo";
import  List  from "./components/ListTodo/TodoList";

function App() {
  const [todo, setTodo] = useState([
{
  id:1,
  title: "first todo",
  status: true
},
{
  id:2,
  title: "thind todo",
  status: true
},

{
  id:3,
  title: "second todo",
  status: false
},


  ])

  return (
    <div className="App">
    <MyHeader/>
    <AddTodo  todo={todo} setTodo={setTodo}/>
    <List todo={ todo } setTodo={ setTodo }/>
    </div>
  );
}

export default App;
