import React from 'react'
import {Header,Footer}  from './component'
import {Outlet} from 'react-router'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout