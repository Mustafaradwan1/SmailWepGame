import React from 'react';
import Home from './compons/Home/Home';
import Layout from './compons/Layout/Layout';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import { Browser } from './compons/Browser/Browser';
import { Details } from './compons/Details/Details';


export default function App() {
  let router = createHashRouter([
    {path:'',element:<Layout/>,children:[
      {path:"",element:<Home/>},
      {path:"Home",element:<Home/>},
      {path:"Browser",element:<Browser/>},
      {path:"Details",element:<Details/>}
    ]}
  ])
  return <>
  <RouterProvider router={router}></RouterProvider>
  </>
}
