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
        <section className='w-full h-full color-primary '>
            <div className='w-full py-10 lg:py-20 xl:py-30'>
            <div className='marquee_track flex flex-nowrap whitespace-nowrap will-change-transform'>
                <div className='marquee_list flex whitespace-nowrap gap-10 md:gap-20'>
                    {[...text, ...text].map((t, i) => (
                        <h2 key={i} className='text-6xl md:text-[4rem] lg:text-[8rem] xl:text-[9rem] monoton-regular items-end-safe flex gap-10 text-zinc-100 mr-5'>
                            {/* <span style={{ margin: t.margin }}>{t.icon}</span> */}
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