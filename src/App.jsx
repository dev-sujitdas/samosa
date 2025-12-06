import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/ui/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import LocomotiveScroll from 'locomotive-scroll';
import Games from './components/Games'
import CTA from './components/CTA'
import Marquee from './components/Marquee'
import Snacks from './components/Snacks'
import Footer from './components/ui/Footer'
import BookingForm from './components/features/BookingForm'



const App = () => {
  useEffect(() => {
  const scroll = new LocomotiveScroll();
  return () => scroll.destroy();
}, []);

  const [isOpen, setIsOpen] = useState(false)

  const openForm = ()=> setIsOpen(true);
  const closeForm = ()=> setIsOpen(false);
  
  return (
    <div className='max-w-600 mx-auto overflow-hidden relative'>    
    <Navbar/>
    <Hero openForm={openForm}/>
    <Events/>  
    <Games/>    
    <CTA openForm={openForm}/> 
    <Marquee/>
    <Snacks openForm={openForm}/>
    <Footer/>    
    {isOpen && <BookingForm closeForm={closeForm}/>}
    </div>
  )
}

export default App