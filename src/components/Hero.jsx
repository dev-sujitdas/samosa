import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MdArrowOutward } from "react-icons/md"

const img = [
    { url: "/images/img1.webp", size: "25vw", sizelg: "12vw", top: "32%", left: "20%", rotate: "-10deg" },
    { url: "/images/img2.webp", size: "25vw", sizelg: "12vw", top: "22%", left: "30%", rotate: "-7deg" },
    { url: "/images/img3.webp", size: "25vw", sizelg: "12vw", top: "19%", left: "40%", rotate: "-5deg" },
    { url: "/images/img4.webp", size: "25vw", sizelg: "12vw", top: "19%", left: "50%", rotate: "0deg" },
    { url: "/images/img5.webp", size: "25vw", sizelg: "12vw", top: "19%", left: "60%", rotate: "5deg" },
    { url: "/images/img6.webp", size: "25vw", sizelg: "12vw", top: "22%", left: "70%", rotate: "7deg" },
    { url: "/images/img7.webp", size: "25vw", sizelg: "12vw", top: "32%", left: "80%", rotate: "12deg" },
]

const Hero = ({ openForm, onReady }) => {

    const [isLarge, setIsLarge] = useState(false)
    const [startAnimation, setStartAnimation] = useState(false)

    // Detect screen size
    useEffect(() => {
        const media = window.matchMedia("(min-width: 1024px)")
        const handler = (e) => setIsLarge(e.matches)

        setIsLarge(media.matches)

        media.addEventListener("change", handler)
        return () => media.removeEventListener("change", handler)
    }, [])

   // Preload images first
      useEffect(() => {

        const preloadImages = img.map((img) => {
          return new Promise((resolve) => {
            const image = new Image()
            image.src = img.url
            image.onload = resolve
            image.onerror = resolve
          })
        })

        Promise.all(preloadImages).then(() => {
          requestAnimationFrame(() => {
            setStartAnimation(true)
            onReady()
          })
        })

      }, [onReady])

    const openFormHandler = () => openForm()
    const redirectHandler = () => window.location.href = "https://samosa.odoo.com/"

    return (
        <div className='w-full h-dvh md:h-screen p-5 md:p-12 2xl:p-14 color-primary flex flex-col justify-between overflow-hidden'>

            <div className='h-full max-w-600 mx-auto flex flex-col justify-evenly items-center'>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: startAnimation ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                    className='w-full lg:w-[80%] mt-12'
                >
                    <h1 className='text-[2.35rem] md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[7.5rem] poppins-bold text-[#F6A230] tracking-tighter leading-12 md:leading-none text-center'>
                        Every move comes with samosas.
                    </h1>
                </motion.div>

                <div className='images2 middle relative w-full h-[30%] lg:h-[40%]'>

                    {img.map((image, index) => (

                        <motion.div
                            key={index}
                            className="absolute rounded-xl overflow-hidden shadow-xl -translate-x-1/2"
                            style={{
                                left: image.left,
                                top: image.top,
                                height: isLarge ? image.sizelg : image.size,
                                width: isLarge ? image.sizelg : image.size,
                                rotate: image.rotate
                            }}
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={startAnimation ? { scale: 1, opacity: 1 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                                ease: "easeOut"
                            }}
                        >
                            <img
                                src={image.url}
                                sizes="(min-width: 1024px) 12vw, 25vw"
                                alt=""
                                className="w-full h-full object-cover rounded-xl"
                                decoding="async"
                                loading="eager"
                            />
                        </motion.div>

                    ))}

                </div>

                <div className='w-full lg:w-[70%] xl:w-1/2'>
                    <h2 className='text-white text-2xl md:text-3xl 2xl:text-4xl poppins-light mb-4 xl:mb-3 2xl:mb-5 text-center'>
                        Dive into a world of board games, crispy bites, and endless laughter.
                    </h2>
                </div>

                <div className='flex md:flex-row flex-col gap-5'>
                    <button onClick={openFormHandler} className='px-6 py-2 bg-[#F6A230] rounded-full text-base md:text-xl 2xl:text-2xl poppins-regular flex items-center gap-2 cursor-pointer'>
                        Book a Table <MdArrowOutward className='text-2xl' />
                    </button>

                    <button onClick={redirectHandler} className='px-6 py-2 bg-amber-50 rounded-full text-base md:text-xl 2xl:text-2xl poppins-regular flex items-center gap-2 cursor-pointer'>
                        Register Event <MdArrowOutward className='text-2xl' />
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Hero