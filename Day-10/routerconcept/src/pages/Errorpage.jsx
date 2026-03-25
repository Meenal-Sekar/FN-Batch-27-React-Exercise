import React from 'react'
import { Link } from 'react-router-dom'
const Errorpage = () => {
  return (
   <>
    <div className='text-center'>
      
       <h1 className="text-4xl text-red-600 font-bold">
        Page Not Found
      </h1>

      <p className="mt-3 text-gray-600">
        Something went wrong
      </p>
       <h3><Link to="/">Go to Home</Link> </h3>
    </div>

   </>
  )
}

export default Errorpage