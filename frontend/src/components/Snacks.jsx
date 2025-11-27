import React from 'react'
import Button from './ui/Button'

const Snacks = ({openForm}) => {
    const openFormHandler = ()=>{    
    openForm();
  }

    return (
        <section className='w-full h-full bg-[#CA0000] relative '>

            <div className='absolute left-15 top-[70%] h-52 w-52 opacity-5 rotate-45'>
                <img src="/icon.svg" className='w-full h-full' alt="" />
            </div>
            <div className='absolute right-20 top-[10%] h-96 w-96 opacity-5 -rotate-45'>
                <img src="/icon.svg" className='w-full h-full' alt="" />
            </div>

            <div className='w-full flex flex-col items-center pb-14'>
                <div className='w-[60%]  flex flex-col justify-center items-center'>
                    <h2 className='text-9xl poppins-semibold text-center tracking-tighter text-white'>Samosa’s Tasty Snacks</h2>
                    <p className='w-[65%] mt-2 text-xl poppins-light text-center text-[#FFCA15]'>A delicious mix of fun and flavor, hand-picked games and tasty bites served hot and fresh. Pick your challenge, grab your snacks, and turn every moment into something worth savoring.</p>
                </div>
                <div className='w-full mt-10 flex justify-center items-center relative'>
                    <img src="/samosa.jpg" className='h-58 w-96 rounded-2xl' alt="" />
                </div>
                <div className='mt-10'>
                <Button text={"View our menu"} color={"#FFCA15"} textColor={"#000"} />
                </div>
            <div className='w-[60%] bg-[#FFCA15] flex flex-col justify-center items-center  mt-20 mb-10 rounded-2xl p-10 shadow-lg'>
                <h2 className='text-7xl text-center poppins-semibold'>Your next game night awaits</h2>
                <p className='mt-5 text-2xl mb-10'>Stop planning and start playing. Reserve your table now and bring your crew</p>
                 <Button text={"Book a table"} color={"#CA0000"} textColor={"#fff"} clickHandler={openFormHandler} />
            </div>
            </div>

        </section>
    )
}

export default Snacks

//#FFCA15
//#E8BD2D