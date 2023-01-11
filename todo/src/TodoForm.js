import { useState } from "react";

function TodoForm ({ addTask }) {
    const [userInput, setUserInput] = useState("")
    
  const handleChange = (e) => {
      setUserInput(e.target.value)
  } 
  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput("")
  }

 // const handleKeypress = (e) => {
   //   if(e.key === "Enter") {
      //  handleSubmit(e)
     // }
 // } onChange={handleChange}  
  return (
    <form onSubmit={handleSubmit}>
      <input 
      type='text'
      value={userInput}
      onChange={handleChange}
      placeholder="ввидите значение"
    />
    <button>Cознить</button>
    </form>
  )
}


export default TodoForm ;
