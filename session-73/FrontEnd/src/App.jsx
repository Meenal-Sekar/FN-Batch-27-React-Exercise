import React, { useState } from 'react'
import axios from 'axios'
import './App.css'
function App() 
{




  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    location: ""
  });
   const [loginData, setLoginData] = useState({
    username: "",
    password: ""
    
  });


  const handleRegister = async () => {

  const res = await axios.post(
    "http://localhost:5000/register",
    registerData
  );

  alert(res.data.message);
};

const handleLogin=async()=>
{
    const res = await axios.post(
    "http://localhost:5000/login",
    loginData
    );
    alert(res.data.message);

     if(res.data.token)
      {
    localStorage.setItem("token", res.data.token);
  }
 
}



  return (
   <>

    <div style={{ padding: "20px" }} className='main-container'>

      
    <form className='form-box'>
      <h2>Register</h2>

       <input
        type="text"
        placeholder="Username"
        onChange={(e) =>
          setRegisterData({
            ...registerData,
            username: e.target.value
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setRegisterData({
            ...registerData,
            password: e.target.value
          })
        }
      />
      <input
        type="text"
        placeholder="Location"
        onChange={(e) =>
          setRegisterData({
            ...registerData,
            location: e.target.value
          })
        }
      />

       <br /><br />

      <button onClick={handleRegister}>
        Register
      </button>
    </form>

    <form className='form-box'>
        <h2>Login</h2>

       <input
        type="text"
        placeholder="Username"
        onChange={(e) =>
          setLoginData({
            ...loginData,
            username: e.target.value
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setLoginData({
            ...loginData,
            password: e.target.value
          })
        }
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </form>





{/* <input type='text' placeholder='uname' value={username} 
onChange={(e)=> setRegisterData(e.target.value)}/> */}

    </div>
   </>
  )
}

export default App