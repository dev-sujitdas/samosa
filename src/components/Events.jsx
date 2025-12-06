import React from 'react'
import Button from './ui/Button'

const marquees = [
    { url: "/img1.jpg", rotation: "", title: "", para: "" },
    { url: "/img2.jpg", rotation: "", title: "", para: "" },
    { url: "/img3.jpg", rotation: "", title: "", para: "" },
    { url: "/img4.jpg", rotation: "", title: "", para: "" },
    { url: "/img5.jpg", rotation: "", title: "", para: "" },
    { url: "/img6.jpg", rotation: "", title: "", para: "" },
    { url: "/img7.jpg", rotation: "", title: "", para: "" },
    { url: "/img8.jpg", rotation: "", title: "", para: "" },
];
//bg-[#CA0000]
const Events = () => {    

    return (
        <section className='w-full h-full color-primary flex flex-col justify-between relative'>
            <div className='w-full mt-10 p-5 md:p-14'>
                <h3 className='text-end text-sm md:text-xl uppercase poppins-bold tracking-tight text-[#FFCA15]'>Roll Dice, Break Snacks, Make Memories</h3>
                <div className='w-full md:w-[85%] mt-5'>
                    <h2 className='text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl poppins-medium tracking-tighter text-white'>Serving Playful Bites and Playful Nights.</h2>
                </div>
            </div>
            <div className='marquee_track flex flex-nowrap whitespace-nowrap will-change-transform'>
                <div className='marquee_list flex whitespace-nowrap gap-10 mt-10 md:mt-20'>
                    {[...marquees, ...marquees].map((image, index) => (
                        <div key={index} className='w-70 md:w-80 h-100 md:h-120  shadow-md overflow-hidden rounded-2xl'>
                            <img src={image.url} className='w-full h-full object-cover rounded-2xl hover:scale-110 duration-300' />
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full mt-20 md:mt-30 p-5 md:p-12 2xl:p-14'>
                <div className='w-full flex lg:flex-row flex-col justify-between'>
                    <div className='w-[80%] md:w-[70%] lg:w-1/2'>
                        <h2 className='text-white text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl poppins-regular tracking-tighter'>Where every bite comes with a roll of the dice</h2>
                    </div>
                    <div className='w-full md:w-[70%] lg:w-[45%] 2xl:w-[40%] mt-5 lg:mt-0'>
                        <h4 className='poppins-light xl:text-xl 2xl:text-2xl text-[#FFCA15]'>Since opening our doors, we've hosted countless game nights, created lasting friendships,
                            and served hundrards of plates of samosa. These numbers tell our story.</h4>
                    </div>
                </div>
                <div className='event-container w-full flex lg:flex-row flex-col justify-between gap-5 xl:gap-10 mt-20'>
                    <div className='left lg:w-[28%] xl:w-[25%] h-58 lg:h-120 flex flex-col justify-between p-5 rounded-2xl border border-[#FFCA15] '>
                        <h2 className='text-6xl md:text-7xl lg:text-6xl xl:text-8xl 2xl:text-9xl poppins-bold text-white tracking-tighter'>100+</h2>
                        <div>
                            <h3 className='text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl text-[#FFCA15] poppins-semibold tracking-tighter'>Games in stock</h3>
                            <p className='text-base 2xl:text-lg poppins-light text-amber-50 mt-2'>From rare finds to crowd favorites</p>
                        </div>
                    </div>
                    <div className='middle w-full lg:w-[42%] h-120 flex flex-col justify-between'>
                        <div className='flex h-[49%] justify-between '>
                            <div className='image w-[49%] h-full rounded-2xl overflow-hidden'>
                                <img src="/img4.jpg" className='w-full h-full object-cover rounded-2xl hover:scale-110 duration-300' />
                            </div>
                            <div className='content w-[49%] h-full flex flex-col justify-between p-5 rounded-2xl border border-[#FFCA15] '>
                                <h2 className='text-5xl md:text-6xl lg:text-5xl xl:text-7xl 2xl:text-8xl  poppins-bold text-white tracking-tighter'>20</h2>
                                <div>
                                    <h3 className='text-2xl text-[#FFCA15] poppins-semibold tracking-tighter'>Tables ready</h3>
                                    <p className='text-base poppins-light text-amber-50 mt-2'>Waiting for your next game night</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex h-[49%] justify-between '>
                            <div className='content w-[49%] h-full flex flex-col justify-end p-5 rounded-2xl border border-[#FFCA15] '>
                                <div>
                                    <h3 className='text-2xl xl:text-3xl 2xl:text-4xl text-[#FFCA15] poppins-semibold tracking-tighter'>Tasty samosas</h3>
                                    <p className='text:sm sm:text-base 2xl:text-lg poppins-light text-amber-50 mt-2'>Waiting for your next bite</p>
                                </div>
                            </div>
                            <div className='image w-[49%] h-full rounded-2xl overflow-hidden'>
                                <img src="/samosa.jpg" className='w-full h-full object-cover rounded-2xl hover:scale-110 duration-300' />
                            </div>
                        </div>

                    </div>
                    <div className='right lg:w-[28%] xl:w-[25%] h-58 lg:h-120 flex flex-col justify-between p-5 rounded-2xl border border-[#FFCA15] '>
                        <h2 className='text-6xl md:text-7xl lg:text-6xl xl:text-8xl 2xl:text-9xl  poppins-bold text-white tracking-tighter'>500+</h2>
                        <div>
                            <h3 className='text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl text-[#FFCA15] poppins-semibold tracking-tighter'>Happy players</h3>
                            <p className='text-base 2xl:text-lg poppins-light text-amber-50 mt-2'>Who've made memories here</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Events