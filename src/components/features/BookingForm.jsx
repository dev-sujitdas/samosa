import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

const BookingForm = ({ closeForm }) => {

  return (
    <section className='fixed top-0  w-full h-dvh flex justify-center items-center z-999 bg-[#2F4A2C] backdrop-blur-md '>      
      <div className='w-full h-full flex flex-col justify-center items-center relative'>
        <div className='w-[12%] flex justify-end xl:justify-start absolute right-5 md:right-7 top-1 bg-[#2F4A2C] p-2'>
        <button onClick={closeForm} className='rounded-full p-2 bg-white text-black font-bold  text-xl shadow-lg hover:scale-105 cursor-pointer'><IoClose /></button>
        </div>
        <iframe
          src="https://samosa.odoo.com/book/074e5367"
          style={{ width: '100%', height: '100vh', border: 0 }}
        />
      </div>
    </section>
  )
}

export default BookingForm