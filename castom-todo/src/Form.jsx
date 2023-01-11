import React,{ useState } from "react";

const Form = ({ addTask }) => {
  const [userValue, setUserValue] = useState("")
  
  const handleChange = (e) => {
    setUserValue(e.target.value)
  }
  
  const handleSabmit = (e) => {
    e.preventDefault()
    addTask(userValue)//oreginal item
    setUserValue("")
  }

   return(
    <form onSubmit={handleSabmit}>
    <input
    type="text"
    value={userValue}
    onChange={handleChange}
    />
     

    
    </form>
  )
}

export default Form ;
