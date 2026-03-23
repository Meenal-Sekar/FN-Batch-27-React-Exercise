import React from 'react'
import './App.css'
import UserList from './components/UserList'
import Navbar from './components/Navbar'
const App = () => {
  
  function title(a1)
  {
   alert(a1)
  }
  return (
    <>
      <Navbar a2={title}/>
      <UserList/>
      
    </>
  )
}

export default App