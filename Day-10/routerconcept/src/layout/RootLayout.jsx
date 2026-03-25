import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
// A special component used to display child pages inside the layout.
const RootLayout = () => {
  return (
    
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-6">
        <Outlet />
      </div>

    </div>



  )
}

export default RootLayout