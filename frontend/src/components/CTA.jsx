import React from 'react'
import Button from './ui/Button'

const CTA = ({openForm}) => {
  const openFormHandler = () => {
        console.log("form open")
        openForm()
    }

  return (
    <section className='w-full h-screen bg-[#FFCA15] relative flex'>
        <div className='w-1/2 h-full relative'>
            <img src="/img10.jpg" className='w-full h-full object-cover ' />
            <div className='absolute top-0 left-0 w-full h-full bg-[#00000031]'></div>
        </div>
        <div className='w-1/2 h-full p-10 flex flex-col justify-end'>
            <h2 className='text-8xl poppins-medium tracking-tighter'>Reserve your table in seconds</h2>
            <p className='text-2xl tracking-tighter w-[75%] mt-5 mb-5'>Pick your date, choose your table, and lock in your game night. 
                No hassle, no waiting. Just you, your friends, and the games you love.</p>
            
            <Button text={"Book a table"} color={"#CA0000"} textColor={"#fff"} clickHandler={openFormHandler} />
        </div>
    </section>
  )
}

export default CTA