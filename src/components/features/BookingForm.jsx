import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

const BookingForm = ({ closeForm }) => {

  return (
    <section className='fixed top-0  w-full h-dvh flex justify-center items-center z-999 bg-[#31303054] backdrop-blur-md '>      
      <div className='w-full h-full flex flex-col justify-center items-center relative'>
        <div className='w-1/2 flex justify-end absolute right-3 top-2 bg-[#ececec]'>
        <button onClick={closeForm} className='rounded-full p-2 bg-white text-black font-bold  text-xl shadow-lg hover:scale-105 cursor-pointer'><IoClose /></button>
        </div>
        <iframe
          src="https://samosa.odoo.com/book/book-a-table"
          style={{ width: '100%', height: '100vh', border: 0 }}
        />
      </div>
    </section>
  )
}

export default BookingForm