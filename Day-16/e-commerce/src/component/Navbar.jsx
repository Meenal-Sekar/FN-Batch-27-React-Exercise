import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-blue-800 text-white p-3">

      <Link to="/" className="mr-4">Home</Link>
      <Link to="/cart" className="mr-4">Cart</Link>
      
     
    </div>
  );
}

export default Navbar