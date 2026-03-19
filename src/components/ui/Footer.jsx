import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ openForm }) => {

  return (
    <footer className="w-full color-primary relative  border-t border-[#E8BD2D] overflow-hidden">
      <div className="w-full flex xl:flex-row flex-col md:p-5 lg:px-14 py-7 ">
        <div className="xl:w-[20%] 2xl:w-[35%] w-full py-5 px-5 lg:px-0 z-10 flex justify-between">
          <div>
            <div className="flex  items-center gap-2">
              <img src="/images/logo2-bg.webp" className='h-16 w-42 md:h-20 md:w-52' />
            </div>
            <div className="mt-10">
              <h3 className="text-zinc-50">
                Grote Gracht 40
                Maastricht, <br /> 6211 SX
                Maastricht
              </h3>
            </div>
          </div>   
            
        </div>
        
        <div className="xl:w-[80%] 2xl:w-[65%] w-full p-5 flex lg:flex-row flex-col lg:gap-10 xl:gap-10 2xl:gap-30 justify-between z-10">
             <div className="map h-full w-62 rounded-2xl shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2518.9311076028644!2d5.688105!3d50.85096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0e975bb5006df%3A0x5950eef848765a34!2sDr.%20%26%20Dr.%20Samosa!5e0!3m2!1sen!2sus!4v1773942270226!5m2!1sen!2sus"
              className="h-full w-full rounded-2xl border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr & Dr Samosa"
            ></iframe>
          </div>
          
          <div className=" mt-5 lg:mt-0">
            <h2 className="poppins-bold text-xl mb-4 text-[#FFCA15]">
              EXPLORE
            </h2>
            <div className='space-y-2'>
              <h3 onClick={openForm} className="text-zinc-200 poppins-medium cursor-pointer hover:text-[#FFCA15] transition-all">Book Table</h3>
              <Link to="/boardgame"><h3 className="text-zinc-200 poppins-medium cursor-pointer my-2 hover:text-[#FFCA15] transition-all">Our Games</h3></Link>
              <Link to="/ourmenu"><h3 className="text-zinc-200 poppins-medium cursor-pointer my-2 hover:text-[#FFCA15] transition-all">Our Menus</h3></Link>
              <a href="https://samosa.odoo.com"><h3 className="text-zinc-200 poppins-medium cursor-pointer my-2 hover:text-[#FFCA15] transition-all">Book Event</h3></a>
              {/* <h3 className="text-zinc-200 poppins-medium cursor-pointer">Our Menus</h3> */}
              {/* <h3 className="text-zinc-200 poppins-medium cursor-pointer">Contact Us</h3> */}
            </div>
          </div>
          <div className="">
            <h2 className="poppins-bold text-xl mb-4 mt-5 md:mt-0 text-[#FFCA15]">
              CONNECT
            </h2>
            <div className='space-y-2'>
              <a href="https://www.instagram.com/samosa_maastricht?igsh=MTFzbjFrZHQwczZudw==" target='_blank'>
                <h3 className="text-zinc-200 poppins-medium cursor-pointer hover:text-[#FFCA15] transition-all">Instagram</h3>
              </a>
              <h3 className="text-zinc-200 poppins-medium mt-2 cursor-pointer hover:text-[#FFCA15]">
                <a href="mailto:ndn.foods.maastricht@gmail.com">Get in touch</a>
              </h3>
              <br />
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScrx1SrPdjV5gel9tEpghthNvobwaMRRgOl1XNx_Erni_L7iQ/viewform"
                className='px-3 py-2 rounded-full bg-[#F6A230] poppins-semibold hover:bg-amber-50 duration-300'
              >Request a Game</a>

            </div>
          </div>
          <div className="mt-5 lg:mt-0">
            <h2 className="poppins-bold text-xl mb-4 mt-5 md:mt-0 text-[#FFCA15]">
              Timings
            </h2>
            <div className='space-y-2'>

              <h3 className="text-zinc-200 poppins-medium cursor-pointer">
                Mon/Tue: 16:00 to 22:00
              </h3>
              <h3 className="text-zinc-200 poppins-medium cursor-pointer">
                Wed-Sun: 12:00 to 22:00
              </h3>

            </div>
          </div>
         
        </div>
      </div>

      <div className="w-full color-secondry mt-2 px-5 lg:px-14 py-2">
        <div className=" flex lg:flex-row flex-col justify-between items-center">
          <div className="text-black text-sm md:text-base poppins-medium text-center">
            <h3>Copyright © 2025 rollwithsamosa.com</h3>
          </div>
          <h2 className='poppins-semibold text-center text-sm md:text-base hidden xl:block'>Crafted with ❤️ by <a href="https://gravityglobal.in">Gravity Global Solution</a></h2>
          <div className="flex gap-5 text-sm md:text-base text-black poppins-medium mt-2 md:">
            <Link to={"privacy"}><h3>Privacy Policy</h3></Link>
            <Link to={"terms"}><h3>Terms & Condition</h3></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer