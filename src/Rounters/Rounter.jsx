import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Layout from "../LayOut/Layout";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashborad from "../Pages/Dashborad";
import CoffeeCards from "../components/CoffeeCards";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/Home",
          element: <Home></Home>,
          loader:()=>fetch('/categories.json'),
          children:[
            { 
              path:'/Home',
              element:<CoffeeCards></CoffeeCards>,
              loader:()=>fetch('/coffees.json')

            },
            {
              path:'category/:category',
              element:<CoffeeCards></CoffeeCards>,
              loader:()=>fetch('/coffees.json')

            },
          ]
          
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