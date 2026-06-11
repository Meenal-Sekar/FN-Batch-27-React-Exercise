import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;