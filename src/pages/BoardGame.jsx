import React, { useEffect } from 'react'
import { games } from "../data/gameData";
import { FaDiceFive, FaChessKnight, FaStar } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { RxLapTimer } from "react-icons/rx";
import { Navigate, useNavigate } from 'react-router-dom';

const BoardGame = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);  
  const navigate = useNavigate();
  const difficultyToStars = (level) => {
    switch (level.toLowerCase()) {
      case "easy": return 1;
      case "medium": return 2;
      case "expert": return 3;
      default: return 0;
    }
  };

  const handleNavigate = ()=>{
    navigate(-1)
  }

  return (
    <section className='w-full flex flex-col justify-center items-center h-full p-5 lg:p-14'>
      <div className='w-full flex justify-center items-center mt-20'>
        <h2 className='text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl poppins-medium tracking-tighter text-white'>Our Games</h2>
      </div>
      <div className='w-full lg:w-[80%] flex flex-start mt-10'>
        <h3 className='text-zinc-400 text-xl underline poppins-regular'><span onClick={handleNavigate} className='text-blue-300 cursor-pointer'>Home</span>/Boardgame</h3>
      </div>
      <div className='w-full lg:w-[80%] mx-auto h-full flex flex-wrap justify-center gap-10  mt-10'>
        {games.map((g, i) => (
          <div key={i} className="w-96 md:w-80 p-2 bg-zinc-100 flex gap-2 justify-between rounded-xl">
            <div className="w-20">
              <img
                src={g.icon || g.default}
                alt={g.name}
                loading="lazy"
                className="w-16 h-16 rounded-xl object-cover"
                onError={(e) => {
                  if (e.currentTarget.src !== g.default) {
                    e.currentTarget.src = g.default;
                  }
                }}
              />

            </div>
            <div className="w-full flex flex-col justify-between">
              <h3 className="josefin-bold text-base capitalize">{g.name}</h3>
              <div className="flex items-center justify-between">
                <div className="flex justify-center items-center gap-1 pr-2 border-r border-zinc-300">
                  <HiMiniUsers className="text-zinc-600" />
                  <span>{g.players[0]} - {g.players[g.players.length - 1]}</span>
                </div>
                <div className="flex justify-center items-center gap-1 pr-2 border-r border-zinc-300">
                  <RxLapTimer className="text-zinc-600" />
                  <span>{g.duration}</span>
                </div>
                <div className='w-18 flex items-center gap-1'>
                  {(() => {
                    const difficultyValue = Array.isArray(g.difficulty)
                      ? g.difficulty[0].difficulty : typeof g.difficulty === "object"
                        ? g.difficulty.difficulty : g.difficulty;
                    return Array.from({ length: difficultyToStars(difficultyValue?.toLowerCase() || "") })
                      .map((_, index) => (<FaStar key={index} className="text-zinc-600" />));
                  })()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BoardGame