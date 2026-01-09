import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({openForm}) => {

  return (
    <footer className="w-full color-primary relative  border-t border-[#E8BD2D] overflow-hidden">
      <div className="w-full flex lg:flex-row flex-col md:p-5 lg:px-14 py-7 ">
        <div className="lg:w-1/2 w-full py-5 px-5 lg:px-0 z-10">
          <div className="flex  items-center gap-2">
            <img src="/logo2.png" className='h-16 w-42 md:h-20 md:w-52' />
          </div>
          <div className="mt-8 flex gap-5">
            <a href="https://www.facebook.com/qeske.maastricht/">
              <h2 className="text-white text-4xl">
                <i className="ri-facebook-box-fill"></i>
              </h2>
            </a>
            <a href="https://www.linkedin.com/company/qeske/">
              <h2 className="text-white text-4xl">
                <i className="ri-linkedin-box-fill"></i>
              </h2>
            </a>
          </div>
          <div className="mt-3">
            <h3 className="text-zinc-50">
              Grote Gracht 40
              Maastricht, <br /> 6211 SX
              Maastricht
            </h3>
          </div>
        </div>
        <div className="lg:w-1/2 w-full p-5 flex lg:flex-row flex-col gap-10 lg:gap-30 justify-end z-10">    
    
          <div className="">
            <h2 className="poppins-bold text-xl mb-4 text-[#FFCA15]">
              EXPLORE
            </h2>
            <div className='space-y-2'>
            <h3 onClick={openForm} className="text-zinc-200 poppins-medium cursor-pointer">Book Table</h3>
            <Link to="/boardgame"><h3 className="text-zinc-200 poppins-medium cursor-pointer my-2">Our Games</h3></Link>
            <Link to="/ourmenu"><h3 className="text-zinc-200 poppins-medium cursor-pointer my-2">Our Menus</h3></Link>
            {/* <h3 className="text-zinc-200 poppins-medium cursor-pointer">Our Menus</h3> */}
            {/* <h3 className="text-zinc-200 poppins-medium cursor-pointer">Contact Us</h3> */}
            </div>
          </div>
          <div className="">
            <h2 className="poppins-bold text-xl mb-4 text-[#FFCA15]">
              CONNECT
            </h2>
            <div className='space-y-2'>
              <a href="https://www.instagram.com/samosa_maastricht?igsh=MTFzbjFrZHQwczZudw==" target='_blank'>
              <h3 className="text-zinc-200 poppins-medium cursor-pointer">Instagram</h3>
              </a>
            {/* <h3 className="text-zinc-200 poppins-medium cursor-pointer">Facebook</h3>
            <h3 className="text-zinc-200 poppins-medium cursor-pointer">Twiter</h3> */}
            
            </div>
          </div>
          <div className="">
            <h2 className="poppins-bold text-xl mb-4 text-[#FFCA15]">
              SUPPORT
            </h2>
            <div className='space-y-2'>
              
            <h3 className="text-zinc-200 poppins-medium cursor-pointer">
              <a href="mailto:ndn.foods.maastricht@gmail.com">Get in touch</a>
            </h3>
            <h3 className="text-zinc-200 poppins-medium cursor-pointer">Reservations</h3>
            <h3 className="text-zinc-200 poppins-medium cursor-pointer">Help center</h3>
            
            </div>
          </div>
        </div>
      </div>

      <div className="w-full color-secondry mt-2 px-5 lg:px-14 py-2">
        <div className=" flex lg:flex-row flex-col justify-between items-center">
          <div className="text-black text-sm md:text-base poppins-medium text-center">
            <h3>Copyright © 2025 rollwithsamosa.com - All Rights Reserved.</h3>
          </div>
          <div className="flex gap-5 text-sm md:text-base text-black poppins-medium mt-2 md:">
            <h3>Privacy Policy</h3>
            <h3>Terms & Condition</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer