import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {


function sample()
{
let t1= document.getElementById('t1').value
let t2=document.getElementById('t2').value

let uname="meenal";
let password=12345;

if(t1 == uname && t2 == password)
{
    alert('login successful')
}
else
{
    alert('Login denied')
}

}

  return (
  <>
  
        <h1>Login Form</h1>
        <br/>
        <input type='text' id='t1' placeholder='Enter your Username'/>
        <br/>
        <input type='password' id='t2' placeholder='Enter your Password'/>
        <br/>
        <button type='button' onClick={sample} className='btn btn-primary'>Login</button>
  
  </>
  )
}

export default Home