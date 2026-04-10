import React from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Success from './pages/Success'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This will render Home / Cart */}
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // 👈 common layout
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path:"/cart",
        element:<Cart/>
      },
       {
        path:"/success",
        element:<Success/>
       },
    
    ]
  }
]);




function App()
{
   return <RouterProvider router={router} />;

}

export default App