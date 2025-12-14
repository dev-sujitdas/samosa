import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";


const Navbar = ({ openForm }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { menu: "Book Table", link: "", onClick: openForm },
    { menu: "Our Games", link: "", onClick: "" },
    { menu: "Our Menus", link: "", onClick: "" },
    { menu: "Contact Us", link: "", onClick: "" },
  ];

  const clickHandler = () => {
    setIsOpen(prev => !prev);
  };


  const handleMenuClick = (menu) => {
    setIsOpen(false);

    if (menu.onClick) {
      menu.onClick();
      return
    }
  };

  return (
    <nav className='navbar w-full fixed top-0 z-999'>
      <div className='w-full max-w-600 mx-auto px-5 md:px-12 lg:px-16  bg-[#2f4a2c52] backdrop-blur-2xl relative'>
        <div className='flex justify-between items-center border-b py-4 border-[#16a1557e] '>
          <div><img className='h-10 lg:h-16 w-fit' src="/logo2-bg.png" alt="" /></div>
          <div onClick={clickHandler}><h2 className='flex items-center gap-1 text-[#F6A230] text-xl md:text-2xl poppins-semibold cursor-pointer'><FiMenu />MENU</h2></div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", }}
                transition={{ duration: 0.45, ease: "backOut" }}
                className='h-svh md:h-screen w-full md:w-1/2 xl:w-[35%] bg-[#F6A230] absolute top-0 right-0 rounded-2xl p-5 flex flex-col shadow-xl'
              >
                <div className='w-full flex justify-end'>
                  <div onClick={clickHandler} className='h-14 w-14 bg-zinc-100 shadow-lg rounded-full flex justify-center items-center hover:scale-95 duration-300 cursor-pointer'>
                    <h2 className='text-4xl'><MdClose /></h2>
                  </div>
                </div>
                <div className='w-full h-full flex flex-col justify-center items-center gap-10'>
                  {menus.map((menu, index) => (
                    <h2
                      key={index}
                      onClick={() => handleMenuClick(menu)}
                      className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-6 py-4 rounded-full bg-zinc-100 poppins-regular shadow-lg hover:scale-95 duration-300 cursor-pointer'
                    >
                      {menu.menu}
                    </h2>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  )
}

export default Navbar