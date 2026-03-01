import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useInView } from "framer-motion";
import useCounter from './features/Counter';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";

const instaId = "https://www.instagram.com/reel/DTjRXLviKvE/?igsh=MTZneWliOW4xZmh2dw==";

const marquees = [
    { url: "/images/img1.jpg", tag: "img", title: "Game Night Chronicles", insta: instaId },
    { url: "/images/img2.jpg", tag: "img", title: "Boxes of Joy", insta: instaId },
    { url: "/videos/vid1.mp4", tag: "vid", title: "Strategy Meets Laughter", insta: "https://www.instagram.com/reel/DUEkkgRDHfw/?igsh=MWdzcHI3Z2lsbGpybw==" },
    { url: "/images/img3.jpg", tag: "img", title: "Cards, Drink & Chaos", insta: instaId },
    { url: "/images/img4.jpg", tag: "img", title: "Moments Between Moves", insta: instaId },
    { url: "/videos/vid2.mp4", tag: "vid", title: "The Art of Play", insta: "https://www.instagram.com/reel/DURYGmTgEWl/?igsh=cTlja2lmMXlpZDU3" },
    { url: "/images/img5.jpg", tag: "img", title: "The Winning Table", insta: instaId },
    { url: "/images/img6.jpg", tag: "img", title: "Play Beyond the Board", insta: instaId },
    { url: "/videos/vid3.mp4", tag: "vid", title: "The Strategy Social", insta: "https://www.instagram.com/reel/DU_1GZCiHx9/?igsh=Zzk5OGtxNjE0dm93" },
    { url: "/images/img7.jpg", tag: "img", title: "Roll. Play. Repeat.", insta: instaId },
    { url: "/images/img8.jpg", tag: "img", title: "Think. Laugh. Play.", insta: instaId },
    { url: "/videos/vid4.mp4", tag: "vid", title: "Threads of Joy", insta: "https://www.instagram.com/reel/DVMaCDGgG0M/?igsh=MTFjYWY5MHRwZ3FleA==" },
];

const Events = () => {
    const containerRef = useRef(null);
    const followerContainerRef = useRef(null)
    const mouseRef = useRef(null);
    const followerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.4 });
    const [startCount, setStartCount] = useState(false);


    const games = useCounter(startCount ? 50 : 0, 100, 10);
    const tables = useCounter(startCount ? 0 : 0, 10, 10);
    const players = useCounter(startCount ? 450 : 0, 500, 10);


    useEffect(() => {
        if (isInView) {
            setStartCount(true);
        }
    }, [isInView]);
    const handleMouseMove = (e) => {
        const container = e.currentTarget.getBoundingClientRect();
        const follower = e.currentTarget.querySelector(".mousefollower");

        if (!follower) return;

        const x = e.clientX - container.left - 50;
        const y = e.clientY - container.top - 50;

        gsap.killTweensOf(follower); // 🔥 important

        gsap.to(follower, {
            opacity: 1,
            x,
            y,
            duration: 0.2,
            ease: "power2.out",
        });
    };

    const handleMouseEnter = (e) => {
        const follower = e.currentTarget.querySelector(".mousefollower");
        if (!follower) return;

        gsap.killTweensOf(follower); // 🔥 important

        gsap.fromTo(
            follower,
            { scale: 1, opacity: 0 },
            { opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
        );
    };

    const handleMouseLeave = (e) => {
        const follower = e.currentTarget.querySelector(".mousefollower");
        if (!follower) return;

        gsap.killTweensOf(follower); // 🔥 important

        gsap.to(follower, {
            scale: 0.5,
            opacity: 0,
            duration: 0.2,
        });
    };

    const clickHandler = (url) => {
        if (url) {
            window.open(url, "_blank", "noopener,noreferrer");
        }
    };
    return (
        <section className='w-full h-full color-primary flex flex-col justify-between relative'>
            <div className='w-full mt-10 p-5 md:p-14'>
                <h3 className='text-end text-sm md:text-xl uppercase poppins-bold tracking-tight text-[#FFCA15]'>Roll Dice, Break Snacks, Make Memories</h3>
                <div className='w-full md:w-[85%] mt-10'>
                    <h2 className='text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl poppins-medium tracking-tighter text-white'>Serving Playful Bites and Playful Nights.</h2>
                </div>
            </div>
            <div className='marquee_track flex flex-nowrap whitespace-nowrap will-change-transform'>
                <div className='marquee_list flex whitespace-nowrap gap-10 mt-10 md:mt-30'>
                    {[...marquees, ...marquees].map((item, index) => (
                        <div
                            key={index}
                            ref={followerContainerRef}
                            onMouseMove={handleMouseMove}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => clickHandler(item.insta)}
                            className='card-container w-70 md:w-80 h-100 md:h-120 xl:w-100 xl:h-140  shadow-md overflow-hidden rounded-2xl relative cursor-none'>
                            {item.tag === "img" ?
                                <img src={item.url} className='w-full h-full object-cover rounded-2xl hover:scale-105 duration-300' />
                                :
                                <video ref={mouseRef} src={item.url} autoPlay muted loop className='w-full h-full object-cover' />}
                            <div className='absolute bottom-0 w-full h-[15%] bg-black/30 backdrop-blur-sm flex justify-between items-center'>
                                <div className='w-[70%] h-full flex flex-wrap items-center p-4'>
                                    <h2 className='w-full text-white poppins-light text-base lg:text-xl'>{item.title}</h2>
                                </div>
                                <div className='w-[30%] h-full p-4 flex justify-end items-center'>
                                    <div className='round h-8 w-8 md:h-10 md:w-10 rounded-full bg-zinc-100 shadow-md flex justify-center items-center group-hover:rotate-45 duration-300'
                                    >
                                        <MdArrowOutward className='text-xl ' />
                                    </div>
                                </div>
                            </div>

                            <div ref={followerRef} className="mousefollower absolute top-0 left-0 h-28 w-28 rounded-full bg-black/30 backdrop-blur-sm  flex justify-center items-center opacity-0 pointer-events-none z-999">
                                <h3 className="poppins-medium text-zinc-200 text-sm text-center">View <br /> Instagram</h3>
                            </div>
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
                        <h4 className='poppins-light xl:text-xl 2xl:text-2xl text-[#FFCA15]'>We host game nights, hobby sessions and competitions creating lasting friendships and serve hundreds of plates of samosas. We want to create a community.</h4>
                    </div>
                </div>
                <div ref={containerRef} className='event-container w-full flex lg:flex-row flex-col justify-between gap-5 xl:gap-10 mt-20'>
                    <div className='left lg:w-[28%] xl:w-[25%] h-58 lg:h-120 flex flex-col justify-between p-5 rounded-2xl border border-[#FFCA15] '>
                        <h2 className='text-6xl md:text-7xl lg:text-6xl xl:text-8xl 2xl:text-9xl poppins-bold text-white tracking-tighter'>{games}+</h2>
                        <div>
                            <h3 className='text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl text-[#FFCA15] poppins-semibold tracking-tighter'>Games in stock</h3>
                            <p className='text-base 2xl:text-lg poppins-light text-amber-50 mt-2'>From rare finds to crowd favorites</p>
                        </div>
                    </div>
                    <div className='middle w-full lg:w-[42%] h-120 flex flex-col justify-between'>
                        <div className='flex h-[49%] justify-between '>
                            <div className='image w-[49%] h-full rounded-2xl overflow-hidden'>
                                <img src="/images/table.jpg" className='w-full h-full object-cover object-top rounded-2xl hover:scale-110 duration-300' />
                            </div>
                            <div className='content w-[49%] h-full flex flex-col justify-between p-5 rounded-2xl border border-[#FFCA15] '>
                                <h2 className='text-5xl md:text-6xl lg:text-5xl xl:text-7xl 2xl:text-8xl  poppins-bold text-white tracking-tighter'>{tables}</h2>
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
                                <img src="/images/samosa.jpg" className='w-full h-full object-cover rounded-2xl hover:scale-110 duration-300' />
                            </div>
                        </div>

                    </div>
                    <div className='right lg:w-[28%] xl:w-[25%] h-58 lg:h-120 flex flex-col justify-between p-5 rounded-2xl border border-[#FFCA15] '>
                        <h2 className='text-6xl md:text-7xl lg:text-6xl xl:text-8xl 2xl:text-9xl  poppins-bold text-white tracking-tighter'>{players}+</h2>
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