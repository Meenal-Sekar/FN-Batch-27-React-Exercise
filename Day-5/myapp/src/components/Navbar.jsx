import React from 'react'

const Navbar = () => {

  return (
    <>
        <nav className='bg-blue-600 text-white flex justify-between items-center p-3 '>
            <h1 className="text-xl font-bold ms-2">Samsung</h1>
            <ul className='flex gap-6'>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>

    </>
  )
}

export default Navbar