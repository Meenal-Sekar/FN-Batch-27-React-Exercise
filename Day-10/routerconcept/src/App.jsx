
import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from "./layout/RootLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Student,{studentsLoader} from "./pages/Student";
import Errorpage from './pages/Errorpage';

import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Errorpage/>,

    children: [

      {
        path: "/",
        element: <Home />
      },

      {
        path: "/about",
        element: <About />
      },

      {
        path: "/students",
        element: <Student />,
        loader:studentsLoader,
       
      }

    ]
  }
]);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App

