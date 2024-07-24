import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function Layout() {
  return (
    
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <div className="max-w-screen-xl mx-auto px-4">
    <Outlet/>
        </div>
        </main>
      <Footer />
    </div>
   
  )
}

export default Layout