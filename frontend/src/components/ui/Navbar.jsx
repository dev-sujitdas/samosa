import React from 'react'
import { FiMenu } from "react-icons/fi";

//text-[#FFCA15]
const Navbar = () => {
  return (
    <nav className='w-full max-w-600 mx-auto px-16  bg-[#CA0000] fixed top-0 z-999'>
      <div className='flex justify-between items-center border-b py-8 border-[#a116167e]'>
      <div><img className='h-12 w-fit' src="/logo.png" alt="" /></div>
      <div><h2 className='flex items-center gap-1 text-[#FFCA15] text-2xl poppins-semibold cursor-pointer'><FiMenu />MENU</h2></div>
      </div>
    </nav>
  )
}

export default Navbar