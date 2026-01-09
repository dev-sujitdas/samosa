import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const OurMenu = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const navigate = useNavigate();
    const handleNavigate = () => navigate(-1);
    return (
        <section className='min-h-screen w-full flex flex-col items-center h-full p-5 lg:p-14 overflow-hidden'>
            <div className='w-full flex justify-center items-center mt-20'>
                <h2 className='text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl poppins-medium tracking-tighter text-white'>Our Menus</h2>
            </div>
            <div className='w-full lg:w-[80%] flex flex-col md:flex-row justify-between mt-10'>
                <h3 className='text-zinc-400 text-xl poppins-regular'><span onClick={handleNavigate} className='text-[#F6A230] cursor-pointer'>Home</span>/Our Menu</h3>               
            </div>
                <div className='mt-10  flex flex-col justify-center items-center relative rounded-2xl overflow-hidden'>
                    <img src="/images/menu.jpg" alt="" className='rounded-2xl' />
                    <div className='absolute w-full h-full top-0 left-0 bg-[#9693933b] backdrop-blur-xl z-50 rounded-2xl flex justify-center items-center'>
                        <h2 className='text-3xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl poppins-bold'>Comming Soon</h2>
                    </div>
                </div>
        </section>
    )
}

export default OurMenu