import React from 'react'
import {Link} from 'react-router-dom'


function Navbar()
{
     return (
    <div className="bg-blue-800 text-white p-3">

      <Link to="/" className="mr-4">Home</Link>
      <Link to="/users" className="mr-4">Users</Link>
      <Link to="/merin" className="mr-4">Product</Link>
      <Link to="/service" className="mr-4">Service</Link>
    </div>
  );

}

export default Navbar