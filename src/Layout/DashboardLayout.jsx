import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
   <div className="flex min-h-screen">

    {/* Sidebar */}
    <Sidebar />

    {/* Main Section */}
    <div className="flex-1 min-w-0">

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="p-4 md:p-6 lg:p-8">
        <Outlet />
      </main>

    </div>

  </div>

  )
}

export default DashboardLayout
