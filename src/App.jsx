import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardLayout from './Layout/DashboardLayout'
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import Profile from './pages/Profile'
import Notification from './pages/Notification'
import Setting from './pages/Setting'

function App() {
  

  return (
    <>
      <Routes>
        <Route element={<DashboardLayout />} >
          <Route path='/'              element={<Dashboard/>}/>
          <Route path='/user'          element={<User />} />
          <Route path='/profile'       element={<Profile/>} />
          <Route path='/notification'  element={<Notification />} />
          <Route path='/Setting'       element={<Setting />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
