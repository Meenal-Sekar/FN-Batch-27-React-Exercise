//component  -> individual javascript  function
//2 types of component   1. function component 2. class component
// npm run dev((to run the applicaiton))
//  rafce   2.rcc  (replace---> hooks)
//<></>   fragement

import React from 'react'
import './App.css'
import Firstcomponent from './Firstcomponent'
const App = () =>
   {

    //we have inclde js here

    function sample()
    {
       alert('Welcome to react world')
    }

    let sample2=()=>
    {
        let t1=document.getElementById('t1').value;
        alert(`your name is ${t1}`)
    }

  return (
    <>
        <header>
              <h1> I am a developer</h1>
        </header>

        <div>
            <h2>I am a Coder</h2>
            <button onClick={sample}>login</button>
            <input type='text' id='t1' placeholder='enter your name'/>
            <button onClick={sample2}>Get my name</button>
        </div>
        <Firstcomponent/>
    </>
    
  )
}

export default App