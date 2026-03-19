// App.jsx
import React, { useState, useEffect, useRef, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
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
const Hero = React.lazy(() => import('./components/Hero'));
const Events = React.lazy(() => import("./components/Events"));
const Games = React.lazy(() => import("./components/Games"));
const BoardGame = React.lazy(() => import("./pages/BoardGame"));
const Contact = React.lazy(() => import("./pages/Contact"));
const OurMenu = React.lazy(() => import("./pages/OurMenu"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const Terms = React.lazy(() => import("./pages/Terms"));

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [heroReady, setHeroReady] = useState(false); 
  const scrollRef = useRef(null);
  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);
  
  const ric = typeof window !== 'undefined' && (window.requestIdleCallback || ((fn) => setTimeout(fn, 200)));
  const ricCancel = typeof window !== 'undefined' && (window.cancelIdleCallback || clearTimeout);
  
  useEffect(() => {
    if (!heroReady) return;
    if (typeof window === 'undefined') return;

    let idleHandle = null;
    let loco = null;

    const init = () => {
      try {        
        const el = document.querySelector('[data-scroll-container]') || document.body;
        loco = new LocomotiveScroll({
          el,
          smooth: true,
          // option: multiplier: 1,
        });
        scrollRef.current = loco;
      } catch (err) {        
        console.warn('Locomotive init failed', err);
      }
    };

    idleHandle = ric ? ric(init) : init();

    const onResize = () => loco ;
    window.addEventListener('resize', onResize);

    return () => {
      if (idleHandle && ricCancel) ricCancel(idleHandle);
      window.removeEventListener('resize', onResize);
      if (loco && loco.destroy) {
        try { loco.destroy(); } catch (e) {/*ignore*/ }
      }
      scrollRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroReady]);

  // Replace fixed 2s timer: wait for heroReady, then end loader quickly (you can adjust min delay)
  useEffect(() => {
    if (!heroReady) return;
    const minHideDelay = 300; // give a short min delay to avoid flicker
    const t = setTimeout(() => setIsLoading(false), minHideDelay);
    return () => clearTimeout(t);
  }, [heroReady]);

  // optional: manual low-priority work after first paint (not required)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Any non-critical initialization can go in requestIdleCallback
    const idle = ric ? ric(() => { /* e.g. init analytics, non-blocking polyfills */ }) : null;
    return () => { if (idle && ricCancel) ricCancel(idle); };
  }, []);

  return (
  <div>
    <Suspense fallback={<Loader isLoading={isLoading} />}>
      <Navbar openForm={openForm} />

      <Routes>
        <Route
          path="/"
          element={
            <div className="max-w-600 mx-auto overflow-hidden relative" data-scroll-container>
              <Hero openForm={openForm} onReady={() => setHeroReady(true)} />
              <Events />
              <Games />
              <CTA openForm={openForm} />
              <Marquee />
              <Snacks openForm={openForm} />
              <Bubble />
            </div>
          }
        />
        <Route path="/boardgame" element={<BoardGame />} />
        <Route path="/ourmenu" element={<OurMenu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer openForm={openForm} />
      {isOpen && <BookingForm closeForm={closeForm} />}
    </Suspense>

    {/* Loader overlay */}
    {isLoading && <Loader isLoading={isLoading} />}
  </div>
)
}

export default App