import { useEffect, useState } from 'react'
import './css/Layout.css'

import { Outlet } from 'react-router'
import {Header} from './components/header/Header'
import { BottomNav } from './components/bottomNav/BottomNav'

import Formulario from './pages/formulario/Form'

function Layout() {



  return (
    <>
    <Header />
   
     {/* <Outlet /> */}
     <Formulario />
     <BottomNav />
    </>
  )
}

export default Layout
