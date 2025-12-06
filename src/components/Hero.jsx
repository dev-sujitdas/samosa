import React, { useState } from 'react'
import Button from './ui/Button'
import { FaChess } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { useScroll, motion, resolveElements } from "motion/react"
import BookingForm from './features/BookingForm';


const heroContent = [
    {
        icon: <FaChess />,
        title: "Board Game Cafe",
        para: (
            <>
                A playful zone filled with strategy, laughter,
                <br />and unforgettable game nights.
            </>
        ),
    },
    {
        icon: <ImSpoonKnife />,
        title: "Snacks & Fun Bites",
        para: (
            <>
                Fuel your moves with fresh,
                <br />
                crispy bites made for sharing and winning.
            </>
        ),
    },
];

const responsiveHeight = () => {
    const width = window.innerWidth;
    if (width >= 1290) return "18rem";
    if (width >= 1024 && width < 1290) return "15rem";
}

const imgs = [
    { url: "/img1.jpg", size: "18vw", top: "5%", left: "50%", rotate: "0deg", isActive: false },
    { url: "/img2.jpg", size: "18vw", top: "15%", left: "61%", rotate: "18deg", isActive: false },
    { url: "/img3.jpg", size: "18vw", top: "15%", left: "38%", rotate: "-20deg", isActive: false },
    { url: "/pizza.jpg", size: "12vw", top: "45%", left: "45%", rotate: "-12deg", isActive: false },
    { url: "/samosa.jpg", size: "12vw", top: "45%", left: "55%", rotate: "12deg", isActive: false },
];


const Hero = ({ openForm }) => {
    const [images, setimages] = useState(imgs);
    const { scrollYProgress } = useScroll()

    scrollYProgress.on("change", (value) => {
        const showImages = (arr) => {
            setimages(prev => (
                prev.map((item, index) => (
                    arr.indexOf(index) === -1
                        ? { ...item, isActive: false }
                        : { ...item, isActive: true }
                ))
            ))
        }
        switch (Math.floor(value * 100)) {
            case 0:
                showImages([]);
                break;
            case 1:
                showImages([0]);
                break;
            case 2:
                showImages([0, 1]);
                break;
            case 3:
                showImages([0, 1, 2]);
                break;
            case 4:
                showImages([0, 1, 2, 3]);
                break;
            case 5:
                showImages([0, 1, 2, 3, 4]);
                break;
        }
    });

    const openFormHandler = () => {
        openForm();
    }


    return (
        <section className='w-full h-screen p-5 md:p-12 2xl:p-14 color-primary flex flex-col justify-between relative'>
            <div className='top lg:w-[70%] xl:w-[55%] flex justify-between mt-20'>
                <h1 className='text-4xl lg:text-7xl xl:text-7xl 2xl:text-8xl poppins-bold text-[#F6A230] tracking-tighter'>Every move comes with samosas.</h1>
            </div>

            <div className='middle w-full h-full relative hidden xl:block'>
                {images.map((img, index) => img.isActive && (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.7, y: 30 }}
                        animate={{ opacity: 1, scale: [0.7, 1.1, 1], y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.15,
                            ease: "easeInOut",
                        }}
                        className="absolute xl:w-48 2xl:w-62 rounded-xl overflow-hidden shadow-xl -translate-x-1/2"
                        style={{
                            left: img.left,
                            top: img.top,
                            // width: img.size,
                            height: img.size,
                            rotate: img.rotate
                        }}
                    >
                        <img src={img.url} className="w-full h-full object-cover rounded-xl" />
                    </motion.div>

                ))}
            </div>

            <div className='bottom w-full flex justify-between'>
                <div className="w-1/2 hidden lg:block">
                    {heroContent.map((item, index) => (
                        <div key={index} className="flex gap-5 items-center xl:mt-3 2xl:mt-5">
                            <h2 className="xl:text-4xl 2xl:text-5xl text-white">{item.icon}</h2>
                            <div className="">
                                <h2 className="xl:text-lg 2xl:text-xl text-white poppins-semibold ">
                                    {item.title}
                                </h2>
                                <p className="poppins-regular text-zinc-300 xl:text-sm 2xl:text-base">
                                    {item.para}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='right flex items-end lg:w-[50%] xl:w-[40%] 2xl:w-[30%] h-full'>
                    <div>
                        <h2 className='text-white text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl poppins-light  uppercase mb-4 xl:mb-3 2xl:mb-5'>Dive into a world of board games, chrispy bites, and endless laughter.</h2>
                        <Button text={"Book a table"} color={"#F6A230"} clickHandler={openFormHandler} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero