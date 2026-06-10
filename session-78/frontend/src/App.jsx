import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Service from "./pages/Service";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";
import Records from "./pages/Records";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  );
}

const router = createBrowserRouter([
  {
     path:"/",
      element:<Layout/>,
  
      children:[
        {
          index:true,
          element:<Home/>

        },

            {
                path: "/register",
                element: <Register />,
            },

            {
                path: "/login",
                element: <Login />,
            },

            {
                path: "/service",
                element: (
                <UserRoute>
                    <>
                  
                    <Service />

                    </>
                </UserRoute>
                ),
            },
            

            {
                path: "/dashboard",
                element: (
                <AdminRoute>
                    <>
                    
                    <Dashboard />
                    </>
                </AdminRoute>
                ),
            },
              {
                path: "/records",
                element: (
                <AdminRoute>
                    <>
                  
                  
                    <Records/>
                    </>
                </AdminRoute>
                ),
            },
]}])
;

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;