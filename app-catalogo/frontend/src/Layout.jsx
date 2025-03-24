import { useEffect, useState } from 'react'
import './css/Layout.css'

import { Outlet } from 'react-router'
import {Header} from './components/header/Header'
import { BottomNav } from './components/bottomNav/BottomNav'

function Layout() {



  return (
    <>
    <Header />
   
     <Outlet />
     <BottomNav />
    </>
  )
}

export default Layout
