import React from 'react'
import { FiMenu } from "react-icons/fi";

//text-[#FFCA15]
const Navbar = () => {
  return (
    <nav className='navbar w-full max-w-600 mx-auto px-5 md:px-12 lg:px-16  bg-[#2f4a2c52] backdrop-blur-2xl fixed top-0 z-999'>
      <div className='flex justify-between items-center border-b py-4 border-[#16a1557e]'>
      <div><img className='h-10 lg:h-16 w-fit' src="/logo2-bg.png" alt="" /></div>
      <div><h2 className='flex items-center gap-1 text-[#FFCA15] text-xl md:text-2xl poppins-semibold cursor-pointer'><FiMenu />MENU</h2></div>
      </div>
    </nav>
  )
}

export default Navbar