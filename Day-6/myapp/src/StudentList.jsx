import React, { useState } from 'react'

import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'bootstrap';
const StudentList = () => 
    {

    const [students,setStudents] = useState([
    "Arun",
    "Meena",
    "Rahul",
    "Divya",
    "Karthik"]);

    

  return (
    <>
     <div>
      <ul >

        {students.map((s1,index)=>
            (
                <li key={index}>{s1}</li>
            ))
        }
      </ul>
      <h1>{faFacebook}Facebook</h1>
      <h1>{faTwitter}Twitter</h1>

      <button type='button' className='btn btn-primary'>Registration</button>
    </div>


    </>
  )
}

export default StudentList