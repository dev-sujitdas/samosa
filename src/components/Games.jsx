import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";
import { games } from "../data/gameData";
import { FaDiceFive, FaChessKnight, FaStar } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { HiMiniUsers } from "react-icons/hi2";
import { RxLapTimer } from "react-icons/rx";
import Button from "./ui/Button";

const floatImages = [
    { url: "/float-images/dice2.png", top: "50%", left: "85%", sizeHeight: "10rem", sizeWidth: "10rem", rotation: "5deg" },
    { url: "/float-images/puzzle-piece.png", top: "25%", left: "10%", sizeHeight: "15rem", sizeWidth: "15rem", rotation: "0deg" },
    { url: "/float-images/chess-piece.png", top: "90%", left: "75%", sizeHeight: "15rem", sizeWidth: "7.2rem", rotation: "-40deg" },
    { url: "/float-images/chess-game2.png", top: "75%", left: "10%", sizeHeight: "20rem", sizeWidth: "8.5rem", rotation: "20deg" },
];

const Games = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.5 });
    const controls = useAnimation();
    const [isMobile, setIsMobile] = useState(false);
    // const [randomGames, setRandomGames] = useState([]);

    // useEffect(() => {
    //     const shuffled = [...games].sort(() => Math.random() - 0.5);
    //     setRandomGames(shuffled);
    // }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView]);

    const difficultyToStars = (level) => {
        switch (level.toLowerCase()) {
            case "easy": return 1;
            case "medium": return 2;
            case "expert": return 3;
            default: return 0;
        }
    };

    useEffect(() => {
        const media = window.matchMedia("(max-width: 768px)");

        const handleChange = () => setIsMobile(media.matches);

        handleChange();
        media.addEventListener("change", handleChange);

        return () => media.removeEventListener("change", handleChange);
    }, []);


    return (
        <section ref={containerRef} className="w-full h-full color-primary relative overflow-hidden">
            <div className="lg:block hidden">
                {floatImages.map((img, index) => {

                    // Parallax effect → each image moves differently
                    const yMove = useTransform(
                        scrollYProgress,
                        [0, 1],
                        [0, -(index + 1) * 120]
                    );

                    return (
                        <motion.img
                            key={index}
                            src={img.url}
                            className="absolute drop-shadow-xl z-777"
                            style={{
                                top: img.top,
                                left: img.left,
                                width: img.sizeWidth,
                                height: img.sizeHeight,
                                rotate: img.rotation,
                                y: yMove,
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={controls}
                            variants={{
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        type: "spring",
                                        damping: 8,
                                        stiffness: 120,
                                        delay: index * 0.25,
                                    },
                                },
                            }}
                        />
                    );
                })}
            </div>


            <div className="games w-full h-full flex flex-col items-center p-5 md:p-14 mb-10 relative">
                <div className="w-[95%] 2xl:w-[60%] mt-10 flex flex-col justify-center items-center z-50">
                    <h2 className="text-4xl md:text-7xl lg:text-8xl 2xl:text-9xl poppins-semibold text-center tracking-tighter text-white">Samosa’s Game Basket</h2>
                    <p className="w-full md:w-[65%] mt-2 md:text-xl poppins-light text-center text-[#FFCA15]">
                        A crunchy collection of games served fresh for your table. Choose your challenge,
                        pair it with snacks, and turn any moment into a memory worth replaying.
                    </p>
                </div>

                <div className='absolute left-15 top-[70%] h-52 w-52 opacity-10 rotate-45 md:block hidden'>
                    <FaDiceFive className='w-full h-full' />
                </div>
                <div className='absolute right-20 top-[10%] h-96 w-96 opacity-10 -rotate-45'>
                    <FaChessKnight className='w-full h-full' />
                </div>

                <div className="game-list w-full md:w-full xl:w-[70%] relative mt-10 p-2 md:p-0 md:mt-20 mb-10 flex justify-center flex-wrap gap-5">
                    {games.slice(0, isMobile ? 4 : 12).map((g, i) => (
                        <div key={i} className="w-96 md:w-80 p-2 bg-zinc-100 flex gap-2 justify-between rounded-xl">
                            <div className="w-20">
                                <img src={g.icon} className="w-16 h-16 rounded-xl object-cover" />
                            </div>
                            <div className="w-full flex flex-col justify-between">
                                <h3 className="josefin-bold text-base">{g.name}</h3>
                                <div className="flex items-center justify-between">
                                    <div id="player" className="w-1/3 flex justify-center items-center gap-1 border-r border-zinc-300 ">
                                        <HiMiniUsers className="text-zinc-600" />
                                        <span>{g.players[0]} - {g.players[g.players.length - 1]}</span>
                                    </div>
                                    <div id="duration" className="w-1/3 flex justify-center items-center gap-1 border-r border-zinc-300 ">
                                        <RxLapTimer className="text-zinc-600" />
                                        <span>{g.duration}</span>
                                    </div>
                                    <div id="stars" className='w-1/3 flex justify-center items-center gap-1'>
                                        {(() => {
                                            const difficultyValue = Array.isArray(g.difficulty)
                                                ? g.difficulty[0].difficulty : typeof g.difficulty === "object"
                                                    ? g.difficulty.difficulty : g.difficulty;
                                            return Array.from({ length: difficultyToStars(difficultyValue?.toLowerCase() || "") })
                                                .map((_, index) => (<GiBrain key={index} className="star text-zinc-600" />));
                                        })()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Button text={"Browse more"} color={"#F6A230"} textColor={"#000"} link="/boardgame" />
            </div>
        </section>
    );
};

export default Games;
