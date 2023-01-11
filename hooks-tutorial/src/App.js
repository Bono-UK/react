import React, { useEffect, useState } from "react";
import useInput from "./hooks/useInput";
import useFetch from "./hooks/useFetch";
import useTheme from "./hooks/useTheme";
import "./app.css";

function App() {
    const inp = useInput ("hello world" , true)
    
  const { data, loading, error } = useFetch('https://www.reddit.com/r/news.json')

  const { theme, toggleTheme} = useTheme()

  if(loading) return 'Loading ...'

  if(error) {
    console.log('error', error);
    return null
    }
  return (
    <div className={`App ${theme}` }>
    <button onClick={toggleTheme}> toggle theme</button>
    <form> 
      <input {...inp} />
    {inp.error && <span style={{color: "red"}}>{inp.error}</span>}
    </form>

    {JSON.stringify(data && data.dist)}
    </div>
  );
}

export default App;
