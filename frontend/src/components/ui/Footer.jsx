import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#CA0000] relative  border-t border-[#E8BD2D]">
      <div className="w-full flex lg:flex-row flex-col px-14 py-7 ">
        <div className="lg:w-1/2 w-full py-5 px-5 lg:px-0 z-10">
          <div className="flex  items-center gap-2">
            <img src="/logo.png" className='h-20 w-fit' />
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
            <h3 className="text-zinc-200 poppins-medium">Book Table</h3>
            <h3 className="text-zinc-200 poppins-medium">Our Games</h3>
            <h3 className="text-zinc-200 poppins-medium">Our Menus</h3>
            <h3 className="text-zinc-200 poppins-medium">Contact Us</h3>
            </div>
          </div>
          <div className="">
            <h2 className="poppins-bold text-xl mb-4 text-[#FFCA15]">
              CONNECT
            </h2>
            <div className='space-y-2'>
            <h3 className="text-zinc-200 poppins-medium">Instagram</h3>
            <h3 className="text-zinc-200 poppins-medium">Facebook</h3>
            <h3 className="text-zinc-200 poppins-medium">Twiter</h3>
            
            </div>
          </div>
          <div className="">
            <h2 className="poppins-bold text-xl mb-4 text-[#FFCA15]">
              SUPPORT
            </h2>
            <div className='space-y-2'>
            <h3 className="text-zinc-200 poppins-medium">Get in touch</h3>
            <h3 className="text-zinc-200 poppins-medium">Reservations</h3>
            <h3 className="text-zinc-200 poppins-medium">Help center</h3>
            
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FFCA15] mt-2 px-14 py-2">
        <div className=" flex lg:flex-row flex-col justify-between items-center">
          <div className="text-black poppins-medium">
            <h3>Copyright © 2025 rollwithsamosa.com - All Rights Reserved.</h3>
          </div>
          <div className="flex gap-5 text-black poppins-medium">
            <h3>Privacy Policy</h3>
            <h3>Terms & Condition</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer