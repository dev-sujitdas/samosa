import React, { useState, useEffect, useRef, Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Loader from "./components/ui/Loader";
import Navbar from "./components/ui/Navbar";
import CTA from "./components/CTA";
import Marquee from "./components/Marquee";
import Snacks from "./components/Snacks";
import Footer from "./components/ui/Footer";
import BookingForm from "./components/features/BookingForm";
import Bubble from "./components/ui/Bubble";

import LocomotiveScroll from "locomotive-scroll";
import FallbackLoader from './components/ui/FallbackLoader';

// Lazy only pages
const Hero = React.lazy(()=>import('./components/Hero'));
const Events = React.lazy(()=>import("./components/Events"));
const Games = React.lazy(()=>import("./components/Games"));
const BoardGame = React.lazy(() => import("./pages/BoardGame"));
const Contact = React.lazy(() => import("./pages/Contact"));
const OurMenu = React.lazy(() => import("./pages/OurMenu"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const Terms = React.lazy(()=>import("./pages/Terms"));

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef();
  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  useEffect(() => {
    scrollRef.current = new LocomotiveScroll({ smooth: true });
    return () => scrollRef.current.destroy();
  }, []);

  useEffect(() => {
    const loadApp = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    loadApp();
  }, []);

  return (
    <div>
      {isLoading ? (<Loader isLoading={isLoading} />) : (
        <Suspense fallback={<FallbackLoader/>}>
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
            <Route path='/ourmenu' element={<OurMenu />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/terms' element={<Terms/>} />
          </Routes>
          <Footer openForm={openForm} />
          {isOpen && <BookingForm closeForm={closeForm} />}
        </Suspense>
      )}
    </div>
  )
}

export default App