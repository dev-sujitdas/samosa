import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Button = ({ text, color, textColor, clickHandler, backgroundColor }) => {
  return (
    <div onClick={clickHandler} className={`cta-button w-fit px-2 py-2 flex justify-between items-center rounded-full shadow-lg cursor-pointer hover:shadow-xl group z-50`}
      style={{ backgroundColor: color }}
    >
      <h2 className='text-base md:text-lg 2xl:text-xl poppins-medium ml-2 mr-4' style={{ color: textColor }}>{text}</h2>
      <div className='round h-8 w-8 md:h-10 md:w-10 rounded-full bg-zinc-100 shadow-md flex justify-center items-center group-hover:rotate-45 duration-300'
      style={{background: backgroundColor}}
      >
        <MdArrowOutward className='text-xl ' />
      </div>
    </div>
  )
}

export default Button