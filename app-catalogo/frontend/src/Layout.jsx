import { useEffect, useState } from 'react'
import './css/Layout.css'

import { Outlet } from 'react-router'
import {Header} from './components/header/Header'
import { BottomNav } from './components/bottomNav/BottomNav'

function Layout() {


  const obtenerDatos = async () => {
    const response = await fetch('http://localhost:3000/api/v1');
    const data = response.json()


    
  }


  useEffect(() => {
    obtenerDatos()
  })


  return (
    <>
    <Header />
     <Outlet />
     <BottomNav />
    </>
  )
}

export default Layout
