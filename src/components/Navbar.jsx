import { Bell, Moon, Search, X } from 'lucide-react'
import React from 'react'
import profile from '../assets/profile.png'

const Navbar = () => {
  return (
   <div className='p-5 flex justify-between items-center shadow'>
    <div className='flex gap-4'>
      <div className='flex border-gray-300 justify-center border rounded-md items-center w-45 lg:w-85 transition-all ease-in-out'>
        <Search size={19} className='w-9 text-gray-600 '/>
        <input 
        type="text"
        placeholder='Search ...'
        className='  font-[15px] text-gray-600 py-3 focus:outline-0 w-full' />
        <X size={19} className='w-9 text-gray-600 cursor-pointer'/>
      </div>
      <button className='btn border-0 p-6 rounded bg-[#7367f0] text-white cursor-pointer  '>Search</button>
    </div>
    <div className='flex justify-center gap-7 mr-12'>
      <div className='flex gap-2'>
        <button className='hover:bg-gray-200 p-3  rounded-full cursor-pointer'>
        <Moon size={25} className= 'text-gray-600'/>
      </button>
      <button className='relative bg-gray-200 hover:bg-gray-100 p-3 rounded-full cursor-pointer'>
        <Bell size={25} className= 'text-gray-600'/>
        <span className= ' absolute bg-red-500 w-3 h-3  top-0  right-0 rounded-full'></span>
      </button>
      </div>
      <button className=" relative  outline-[#7367f0] outline-2 outline-offset-3 rounded-full cursor-pointer">
        <img
          src={profile}
          alt="Profile"
          className=" w-12 h-12 rounded-full object-cover shrink-0"
        />
        <span className= ' absolute bg-success w-3 h-3 outline-3 outline-white bottom-0  right-0 rounded-full'></span>
      </button>
    </div>
   </div>
  )
}

export default Navbar
