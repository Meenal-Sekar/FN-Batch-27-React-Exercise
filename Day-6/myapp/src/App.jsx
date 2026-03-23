import React,{ useState }  from 'react'
import './App.css'
import Form from './Form'
import StudentList from './StudentList'
const App = () => {




return(

  <>
    <Form/>
    <StudentList/>
    <button type='button' className='btn btn-primary'>Login</button>
    <footer className="bg-body-tertiary text-center text-lg-start ">
  
  <div className="text-center p-3" style={{backgroundColor:"black",color:"white"}}>
    © 2020 Copyright:
    <a href='#' className='text-success'>MdBootstrap.com</a>
  </div>
  
</footer>
  </>
)


}

export default App