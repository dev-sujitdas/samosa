import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdEventAvailable } from "react-icons/md";



const Navbar = ({ openForm }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { label: "Book Table", type: "action", onClick: openForm },
    { label: "Our Games", type: "route", to: "/boardgame" },
    { label: "Our Menus", type: "route", to: "/ourmenu" },
    { label: "Book Event", type: "redirect", to: "" },
  ];


  const clickHandler = () => {
    setIsOpen(prev => !prev);
  };


  const handleMenuClick = (menu) => {
    setIsOpen(false);
    if (menu.type === "action") {
      menu.onClick?.();
    }
    if(menu.type === "redirect"){
      window.location.href = "https://samosa.odoo.com"
    }
  };

  return (
    <nav className='w-full overflow-hidden'>
      <div className='navbar w-full fixed top-0 z-999'>
        <div className='w-full max-w-600 mx-auto px-5 md:px-12 lg:px-16  bg-[#2f4a2c52] backdrop-blur-2xl relative'>
          <div className='flex justify-between items-center border-b py-4 border-[#16a1557e] '>
            <div><a href="/"><img className='h-10 w-28 lg:h-16 lg:w-42 ' src="/images/logo2-bg.png" alt="" /></a></div>
            <div className='flex gap-10 items-center'>
            <a href="https://samosa.odoo.com"><h2 className='text-lg poppins-semibold text-black px-4 py-2 rounded-full bg-white flex items-center gap-2'><MdEventAvailable />Events</h2></a>
            {/* <Button text={"Explore Events"}/> */}
            <div onClick={clickHandler}><h2 className='flex items-center gap-1 text-[#F6A230] text-xl md:text-2xl poppins-semibold cursor-pointer'><FiMenu />MENU</h2></div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", }}
                  transition={{ duration: 0.45, ease: "backOut" }}
                  className='h-dvh md:h-screen w-full md:w-1/2 xl:w-[35%] bg-[#F6A230] absolute top-0 right-0 rounded-2xl p-5 flex flex-col shadow-xl'
                >
                  <div className='w-full flex justify-end'>
                    <div onClick={clickHandler} className='h-14 w-14 bg-zinc-100 shadow-lg rounded-full flex justify-center items-center hover:scale-95 duration-300 cursor-pointer'>
                      <h2 className='text-4xl'><MdClose /></h2>
                    </div>
                  </div>
                  <div className="w-full h-full flex flex-col justify-center items-center gap-10">
                    {menus.map((menu, index) => {
                      const Item = (
                        <motion.h2
                          key={menu.label}
                          initial={{ x: "50%", opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => handleMenuClick(menu)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                          className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-6 py-4 rounded-full bg-zinc-100 shadow-lg cursor-pointer`}
                        >
                          {menu.label}
                        </motion.h2>
                      );

                      if (menu.type === "route") {
                        return (
                          <Link key={menu.label} to={menu.to}>
                            {Item}
                          </Link>
                        );
                      }

                      return Item;
                    })}
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar