import React, { useState } from 'react'
import './Form.css'
const Form = () => {


  const[name,setName]=useState("ram")
  const[age,setAge]=useState();
  const[city,setCity]=useState("");

   const handleSubmit=()=>
  {
      alert(`The user name is ${name} and the user age is ${age} user is living in ${city}`)
      setName("")
      setAge("")
      setCity("")
  }



    return (
   <>
        <form>
          <label>Enter your Firstname:</label>
          <input type='text' value={name}  onChange={(e)=>setName(e.target.value)}/>

          <label>Enter your Age:</label>
          <input type='number' value={age}  onChange={(e)=>setAge(e.target.value)}/>

           <label>Enter your city:</label>
          <input type='text' value={city}  onChange={(e)=>setCity(e.target.value)}/>

          <button onClick={handleSubmit}>Register</button>

        </form>

   </>
  )
}

export default Form