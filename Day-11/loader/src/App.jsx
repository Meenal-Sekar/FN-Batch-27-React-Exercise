import React from 'react'
import './App.css'

import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Service from './pages/Service'
import Users,{userLoader} from './pages/Users'
import Product from './pages/Product'
import UserDefault from './pages/UserDefault'


function Layout()
{
   return (
    <>
      <Navbar />
      <Outlet /> {/* This will render Home / Users/service  */}
    </>
  );

}

const router=createBrowserRouter([
  {
      path:"/",
      element:<Layout/>,

      children:[
        {
          index:true,
          element:<Home/>

        },
        {
        path:"/merin",
        element:<Product/>
       },
       {
        path:"/service",
        element:<Service/>
      },

        {
          path:"/users",
          element:<UserDefault/>
        },
        {
          path:"/users/:id",
          element:<Users/>,
          loader:userLoader
        }
      ]
  }
])




function App()
{
  return  <RouterProvider router={router}/>
}

export default App