import React, { useState, useEffect, useRef } from 'react'
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
import Bubble from './components/ui/Bubble'
import { Link, Route, Routes } from 'react-router-dom'
import BoardGame from './pages/BoardGame'
import ContactUs from './pages/ContactUS'


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef();
  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  useEffect(() => {
    scrollRef.current = new LocomotiveScroll({ smooth: true });

    return () => scrollRef.current.destroy();
  }, []);

  return (
    <div >
      <Navbar openForm={openForm} />
      <Routes>
        <Route path='/' element={
          <div className='max-w-600 mx-auto overflow-hidden relative'>
            <Hero openForm={openForm} />
            <Events />
            <Games />
            <CTA openForm={openForm} />
            <Marquee />
            <Snacks openForm={openForm} />
            <Bubble />
          </div>
        } />
        <Route path='/boardgame' element={<BoardGame />} />        
        <Route path='/contactUs' element={<ContactUs />} />
      </Routes>
      <Footer />
      {isOpen && <BookingForm closeForm={closeForm} />}
    </div>
  )
}

export default App