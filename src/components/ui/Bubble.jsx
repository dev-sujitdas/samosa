import React, { useState, useEffect } from "react";
import { useScroll } from "motion/react";
import { FaArrowUp } from "react-icons/fa6";

const Bubble = () => {
  const [isInView, setIsInView] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const scrollBubble = scrollYProgress.on("change", (value) => {
      const scrollPercent = value * 100;

      if (scrollPercent > 13) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    });

    return () => scrollBubble();
  }, [scrollYProgress]);

  const scrollToTop = ()=>{
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <>
      {isInView && (
        <div onClick={scrollToTop}>
          <div className='fixed bottom-5 right-5 flex justify-center items-center w-16 h-16 rounded-full bg-white cursor-pointer z-999 shadow-xl hover:scale-105 duration-300'>
            <h2 className='text-4xl'>
              <FaArrowUp />
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Bubble;
