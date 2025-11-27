import React from 'react'
import { FaChess } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { RiDrinksFill } from "react-icons/ri";

const Marquee = () => {
    const text = [
        { name: "GAMES", icon: <FaChess />, margin: "12px" },
        { name: "FOOD", icon: <FaBowlFood />, margin: "24px" },
        { name: "DRINKS", icon: <RiDrinksFill />, margin: "24px" }
    ];

    return (
        <section className='w-full h-full bg-[#CA0000] relative'>
            <div className='w-full py-20'>
            <div className='marquee_track flex flex-nowrap whitespace-nowrap will-change-transform'>
                <div className='marquee_list flex whitespace-nowrap gap-10'>
                    {[...text, ...text].map((t, i) => (
                        <h2 key={i} className='text-[10rem] poppins-black items-start flex gap-5 text-[#FFCA15] mr-5'>
                            <span style={{ margin: t.margin }}>{t.icon}</span>
                            <span>{t.name}</span>
                        </h2>
                    ))}
                </div>
            </div>
            </div>
        </section>
    )
}

export default Marquee 