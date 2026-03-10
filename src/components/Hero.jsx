import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { MdArrowOutward } from "react-icons/md";

const img2 = [
    { url: "/images/img1.jpg", size: "25vw", sizelg: "12vw", top: "32%", left: "20%", rotate: "-10deg", isActive: false },
    { url: "/images/img2.jpg", size: "25vw", sizelg: "12vw", top: "22%", left: "30%", rotate: "-7deg", isActive: false },
    { url: "/images/img3.jpg", size: "25vw", sizelg: "12vw", top: "19%", left: "40%", rotate: "-5deg", isActive: false },
    { url: "/images/img4.jpg", size: "25vw", sizelg: "12vw", top: "19%", left: "50%", rotate: "0deg", isActive: false },
    { url: "/images/img5.jpg", size: "25vw", sizelg: "12vw", top: "19%", left: "60%", rotate: "5deg", isActive: false },
    { url: "/images/img6.jpg", size: "25vw", sizelg: "12vw", top: "22%", left: "70%", rotate: "7deg", isActive: false },
    { url: "/images/img7.jpg", size: "25vw", sizelg: "12vw", top: "32%", left: "80%", rotate: "12deg", isActive: false },
]

const Hero = ({ openForm }) => {
    const [isLarge, setIsLarge] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartAnimation(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const resizeHandler = () => setIsLarge(window.innerWidth > 1024);

        resizeHandler();

        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    const openFormHandler = () => openForm();
    const redirectHandler = () => window.location.href = "https://samosa.odoo.com/";

    return (
        <div className='w-full h-dvh md:h-screen p-5 md:p-12 2xl:p-14 color-primary flex flex-col justify-between'>
            <div className='h-full max-w-600 mx-auto flex flex-col justify-evenly items-center'>
                <div className='wifull lg:w-[80%] mt-12'>
                    <h1 className='text-[2.35rem] md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[7.5rem] poppins-bold text-[#F6A230] tracking-tighter leading-12 md:leading-none text-center'>Every move comes with samosas.</h1>
                </div>
                <div className='images2 middle relative w-full h-[30%] lg:h-[40%]'>
                    {img2.map((image, index) => {
                        const baseName = image.url;

                        return (
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
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={startAnimation ? { scale: 1, opacity: 1 } : {}}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 20,
                                    delay: index * 0.08
                                }}
                            >
                                <img
                                    src={`${baseName}`}
                                    srcSet={`${baseName}, ${baseName}`}
                                    sizes="(min-width: 1024px) 12vw, 25vw"
                                    alt=""
                                    className="w-full h-full object-cover rounded-xl"
                                    decoding="async"
                                />
                            </motion.div>
                        );
                    })}
                </div>
                <div className='w-full lg:w-[70%] xl:w-1/2'>
                    <h2 className='text-white text-2xl md:text-3xl 2xl:text-4xl poppins-light mb-4 xl:mb-3 2xl:mb-5 text-center'>Dive into a world of board games, crispy bites, and endless laughter.</h2>
                </div>
                <div className='flex md:flex-row flex-col gap-5'>
                    <button onClick={openFormHandler} className='px-6 py-2 bg-[#F6A230] rounded-full text-base md:text-xl 2xl:text-2xl poppins-regular flex justify-between items-center gap-2 cursor-pointer'>Book a Table <MdArrowOutward className='text-2xl ' /></button>
                    <button onClick={redirectHandler} className='px-6 py-2 bg-amber-50 rounded-full text-base md:text-xl 2xl:text-2xl poppins-regular flex justify-between items-center gap-2 cursor-pointer'>Register Event <MdArrowOutward className='text-2xl ' /></button>
                </div>
            </div>
        </div>
    )
}

export default Hero
