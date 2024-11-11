import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Layout from "../LayOut/Layout";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashborad from "../Pages/Dashborad";
import CoffeeCards from "../components/CoffeeCards";
import Coffedetails from "../Pages/Coffedetails";



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
          loader:()=>fetch('/coffees.json')
        },
        {
          path: "/Dashborad",
          element: <Dashborad></Dashborad>,
          loader:()=>fetch('/coffees.json')
        },
        {
          path: "/card/:id",
          element: <Coffedetails></Coffedetails>,
          loader:()=>fetch('/coffees.json')

        },

       
      ]
    },
  ]);

  export default router;