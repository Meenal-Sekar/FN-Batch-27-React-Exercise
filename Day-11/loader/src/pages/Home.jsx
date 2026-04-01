import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () =>
 {
const[id,setId]=useState();
const navigate=useNavigate();
const handleSubmit=(e)=>
{
    e.preventDefault();
     navigate(`/users/${id}`);
     console.log(id);
}

  return(
    
    <div className="p-5">

      <h1 className="text-xl font-bold">Home Page</h1>

      <h1>Welcome to User Info Hub 👋</h1>
  <p>
    Explore and manage user details effortlessly! This application allows you to 
    fetch, view, and analyze user information in a simple and interactive way.
  </p>

  <p>
    🔍 Click on the Users section to view the complete list of users.<br/>
    📄 Select any user to see detailed information instantly.
  </p>

  <p>
    Built with modern web technologies, this app demonstrates real-time data 
    fetching, routing, and dynamic UI updates.
  </p>

    <form onSubmit={handleSubmit}>

         <input
          type="number"
          placeholder="Enter User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border p-2"
        />

         <button className="bg-blue-500 text-white px-4 py-2 ml-2">
          Get User
        </button>
        

    </form>

    </div>
    
    )

}

export default Home