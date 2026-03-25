
import React from 'react'
import { Link } from 'react-router-dom'
function Navbar()
{
    return(

         <nav className="bg-blue-600 text-white p-4 flex justify-between">
      
      <h1 className="font-bold text-xl">Student Directory</h1>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/about" className="hover:text-yellow-300">About</Link>
        <Link to="/students" className="hover:text-yellow-300">Students</Link>
      </div>

        </nav>


    )
}

export default Navbar

