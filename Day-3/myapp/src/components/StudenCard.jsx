import React from 'react'
import '../components/StudentCard.css'
function StudenCard(props)
{
    return (
        <>
        <div className="card">
        <h2>{props.name}</h2>
        <h2>{props.uname}</h2>
        
        <p>------------------</p>
        <p>Course: {props.course}</p>
        <p>Score: {props.score}</p>
        <p>Status: {props.score >= 50 ? "Pass" : "Fail"}</p>
        </div>

        </>

    
  );

}

export default StudenCard


