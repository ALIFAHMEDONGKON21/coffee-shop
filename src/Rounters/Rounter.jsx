import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Layout from "../LayOut/Layout";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashborad from "../Pages/Dashborad";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/Home",
          element: <Home></Home>,
        },
        {
          path: "/Coffees",
          element: <Coffees></Coffees>,
        },
        {
          path: "/Dashborad",
          element: <Dashborad></Dashborad>,
        },
      ]
    },
  ]);

  export default router;