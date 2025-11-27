import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Button = ({ text, color, textColor, clickHandler }) => {
  return (
    <div onClick={clickHandler} className={`w-fit px-2 py-2 flex justify-between items-center rounded-full shadow-lg cursor-pointer hover:shadow-xl group `}
      style={{ backgroundColor: color }}
    >
      <h2 className='text-xl poppins-medium ml-2 mr-4' style={{ color: textColor }}>{text}</h2>
      <div className='h-10 w-10 rounded-full bg-zinc-100 shadow-md flex justify-center items-center group-hover:rotate-45 duration-300'>
        <MdArrowOutward className='text-xl ' />
      </div>
    </div>
  )
}

export default Button