import React, { useState } from 'react'
import { games } from '../data/gameData'
import { FaDiceFive } from "react-icons/fa6";
import { FaChessKnight } from "react-icons/fa";

const Games = () => {
    const [game, setGame] = useState(games)
    return (
        <section className='w-full h-full bg-[#CA0000] relative overflow-hidden'>
            <div className='games w-full h-full flex flex-col items-center p-14'>
                <div className='w-[60%] mt-10 flex flex-col justify-center items-center'>
                    <h2 className='text-9xl poppins-semibold text-center tracking-tighter text-white'>Samosa’s Game Basket</h2>
                    <p className='w-[65%] mt-2 text-xl poppins-light text-center text-[#FFCA15]'>A crunchy collection of games served fresh for your table. Choose your challenge,
                        pair it with snacks, and turn any moment into a memory worth replaying.</p>
                </div>

                <div className='absolute left-15 top-[70%] h-52 w-52 opacity-5 rotate-45'>
                    <FaDiceFive className='w-full h-full' />
                </div>
                <div className='absolute right-20 top-[10%] h-96 w-96 opacity-5 -rotate-45'>
                    <FaChessKnight className='w-full h-full' />                    
                </div>
               
                <div className='game-list w-[70%] h-175 bg-[#ebbf2e] rounded-2xl relative mt-10 mb-30 shadow-xl overflow-x-hidden overflow-y-auto'>
                    <div className='w-full px-6 py-4 sticky top-0 bg-[#ebbf2e] '>
                        <div className='w-full px-6 py-2 flex justify-between items-center bg-[#b99725] rounded-2xl'>
                        <div className='w-130 '>
                                <h3 className='poppins-semibold text-xl text-white'>Name</h3>
                            </div>
                            <div className='w-20'>
                                <h3 className='poppins-semibold text-xl text-white'>Players</h3>
                            </div>
                            <div className='w-24'>
                                <h3 className='poppins-semibold text-xl text-white'>Difficulty</h3>
                            </div>
                            <div className='w-24 '>
                                <h3 className='poppins-semibold text-xl text-white'>Duration</h3>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full px-8 py-2'>
                    {game.map((g, i) => (
                        <div key={i} className='p-5 w-full bg-amber-100 rounded-2xl shadow-xl mb-3 flex justify-between items-center '>
                            <div className='w-130 '>
                                <h3 className='poppins-semibold text-xl'>🎲 {g.name}</h3>
                            </div>
                            <div className='w-20 flex justify-center'>
                                <h3 className='poppins-regular text-lg'>{g.players[0]} - {g.players[g.players.length - 1]}</h3>
                            </div>
                            <div className='w-24 flex justify-center  p-1 bg-gray-200 rounded-2xl shadow-md'>
                                <h3 className='poppins-medium text-lg'>{g.difficulty}</h3>
                            </div>
                            <div className='w-24 flex justify-center p-1 bg-zinc-100 rounded-2xl shadow-md'>
                                <h3 className='poppins-medium text-lg'>{g.duration}</h3>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Games