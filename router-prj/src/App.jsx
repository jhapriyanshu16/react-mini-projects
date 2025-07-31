import React, { useState } from 'react'

import './App.css'
import {Home,About,Contact,Param}  from './component'
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from './Layout'


// const router = createBrowserRouter([
//   { path: "/", element: <div> <Header/><Home/> </div> },
//   { path: "/about", element: <div> <Header/> <About/> </div>},
//   { path: "/contact",element: <div> <Header/> <Contact/> </div>},
//   { path: "/user/:id",element: <div> <Header/> <Param/></div>}
// ]);

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path:"user/:id",
        element : <Param/>
      }
    ]
  }
])


function App() {

  return (
    <>
    <RouterProvider router= {router}/>
    </>
  )
}

export default App
