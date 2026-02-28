import React from 'react'
import Button from './ui/Button'

const CTA = ({openForm}) => {
  const openFormHandler = () => {
        console.log("form open")
        openForm()
    }

  return (
    <section className='cta w-full h-screen color-secondry relative flex xl:flex-row flex-col'>
        <div className='w-full xl:w-1/2 h-1/2 xl:h-full relative'>
            <img src="/images/group.jpg" className='w-full h-full object-cover ' />
            {/* <div className='absolute top-0 left-0 w-full h-full bg-[#00000031]'></div> */}
        </div>
        <div className='w-full xl:w-1/2 h-1/2 xl:h-full p-5 md:p-10 flex flex-col justify-end'>
            <h2 className='cta-title text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl poppins-medium tracking-tighter'>Reserve your table in seconds</h2>
            <p className='cta-para md:text-xl 2xl:text-2xl tracking-tighter w-full 2xl:w-1/2 mt-5 mb-5'>Pick your date, choose your table, and lock in your game night. 
                No hassle, no waiting. Just you, your friends, and the games you love.</p>
            
            <Button text={"Book a table"} color={"#2F4A2C"} textColor={"#fff"} clickHandler={openFormHandler} />
        </div>
    </section>
  )
}

export default CTA