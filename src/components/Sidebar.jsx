import React from 'react'
import { useState } from 'react';
import logo from '../assets/logo.png';
import{
  LayoutDashboard,
  UserRoundCog,
  User,
  Bell,
  Settings,
  ChevronsRight,
  ChevronRight
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
const NavItems = [
  {
    name : "Dashboard",
    path : "/",
    icon : LayoutDashboard
  },
  {
    name : "User",
    path : "/user",
    icon : User
  },
  {
    name : "Profile",
    path : "/profile",
    icon : UserRoundCog
  },
  {
    name : "Notification",
    path : "/notification",
    icon : Bell
  },
  {
    name : "Setting",
    path : "/setting",
    icon : Settings
  },
  
];

const SideBar = () => {
  const [collapsed , setCollapsed] = useState(true) ;
  return (
    
    <aside className={`relative border-r-1 flex  items-center flex-col border-gray-200 h-screen transition-all duration-300
            ${collapsed ? "w-60":"w-20"}`}>
      <div className='flex items-center justify-between gap-2 mt-4'>
        <div className='w-full flex gap-2 items-center justify-center'>
          <span className={`font-bold text-2xl text-gray-800 ${collapsed ? "block":"hidden"}`}>
            DASHBOARD
          </span>
        </div>
        <button className=' items-center flex justify-center p-1 border-0  rounded-md text-white bg-[#7367f0] cursor-pointer '
              onClick={() => { setCollapsed(!collapsed);}} >
        <ChevronsRight size={30}  className={`transition-transform ${collapsed ? "rotate-180" : ""}`} />
      </button>
      </div>
       <ul className='flex flex-col gap-1 p-3 w-full mt-15 '>
        {
          NavItems.map((item)=>{
            const Icon = item.icon 
            return(
              <NavLink
            key={item.path}
            to={item.path}
            title={item.name}
            className={({isActive}) => `flex  font-medium p-4 justify-start text-gray-700 rounded-lg gap-5 transition-all ease-in-out duration-300 ${ 
              isActive 
              ?"  bg-[#7367f0] text-white"
              :"  hover:bg-gray-200 "
            }`}>
             <Icon />
             {collapsed && <span>{item.name}</span>}
           </NavLink>
            )
          })}
        
       </ul>
     <div className=' absolute w-full border-t-1 border-gray-300 p-4 px-3 bottom-0 flex gap-4 '>
      <div className='bg-gray-200 p-3 rounded-full '>
          <User  className='text-gray-700'/>
      </div>
      <div className={`flex flex-col ${collapsed ? "block": "hidden"}`}>
        <span className=' font-bold'>
          Mon Samnang
        </span>
        <span className='text-gray-600 '>
          Admin
        </span>
      </div>
     </div>
    </aside>
    
  )
}

export default SideBar
