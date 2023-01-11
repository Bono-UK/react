import React, {useEffect, useState} from 'react';
import './styles/App.css';
import PostForm from "./components/PostForm.jsx"
import PostItem from "./components/PostItem.jsx"
import PostList from "./components/PostList.jsx"




function App() {
        return (
  <div className='App'>
    <PostList/>
  </div>
        )
}

export default App;
