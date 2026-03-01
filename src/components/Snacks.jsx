import React, { useRef, useEffect } from "react";
import {
  motion,
  motionValue,
  useTransform,
  useScroll,
  useInView,
  useAnimation,
  animate as fmAnimate,
} from "framer-motion";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

const floatImages = [
  { url: "/float-images/bowl.png", top: "12%", left: "15%", size: "15VW", rotation: "-20deg" },
  { url: "/float-images/samosa.png", top: "10%", left: "70%", size: "25VW", rotation: "40deg" },
  { url: "/float-images/samosa.png", top: "50%", left: "5%", size: "20VW", rotation: "-20deg" },
  { url: "/float-images/drink.png", top: "70%", left: "75%", size: "32VW", rotation: "5deg" },
];

const Snacks = ({ openForm }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5 });
  const controls = useAnimation();

  // scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create a motionValue for each image's idle float (separate from parallax)
  const yFloatRefs = useRef(floatImages.map(() => motionValue(0)));
  // Keep references to running animation controls so we can stop them on unmount
  const runningAnimsRef = useRef([]);

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  // cleanup on unmount: stop any running idle animations
  useEffect(() => {
    return () => {
      runningAnimsRef.current.forEach((anim) => {
        try {
          anim?.stop?.();
        } catch (e) {
          /* ignore */
        }
      });
      runningAnimsRef.current = [];
    };
  }, []);

  // start floating for specific index (called on image load)
  // const startFloating = (index) => {
  //   // avoid starting twice
  //   if (runningAnimsRef.current[index]) return;

  //   const mv = yFloatRefs.current[index];
  //   if (!mv) return;

  //   // animate the motionValue with keyframes (no spring) — loops forever
  //   const anim = fmAnimate(mv, [0, -8, 0], {
  //     duration: 3,
  //     easing: "easeInOut",
  //     repeat: Infinity,
  //   });

  //   runningAnimsRef.current[index] = anim;
  // };

  return (
    <section ref={containerRef} className="w-full h-full color-primary relative">
      <div className="hidden xl:block">
        {floatImages.map((img, index) => {
        // parallax motion value derived from scroll progress
        // const yParallax = useTransform(scrollYProgress, [0, 1], [0, -(index + 1) * 120]);

        // // combined value: parallax + idle float
        // const yCombined = useTransform([yParallax, yFloatRefs.current[index]], ([p, f]) => p + f);
         const yMove = useTransform(scrollYProgress,[0, 1],[0, -(index + 1) * 120] );

        return (
          <motion.img
            key={index}
            src={img.url}
            // when image loads, start the idle float animation (separate motionValue)
            // onLoad={() => startFloating(index)}
            className="absolute drop-shadow-xl z-777"
            style={{
              top: img.top,
              left: img.left,
              height: img.size,
              rotate: img.rotation,
              // use the composed y value (parallax + float)
              y: yMove,
              // allow the pop-in spring to control scale/opacity via `controls`
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={controls}
            variants={{
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  damping: 8,
                  stiffness: 120,
                  delay: index * 0.25,
                },
              },
            }}
            alt={`float-${index}`}
            draggable={false}
          />
        );
      })}
      </div>
      
      {/* decorative icons */}
      <div className="absolute left-15 top-[50%] h-42 w-42 xl:h-80 xl:w-80 opacity-10 rotate-45 lg:block hidden">
        <img src="/icon.svg" className="w-full h-full" alt="" />
      </div>
      <div className="absolute right-20 top-[10%] h-52 w-52 xl:h-96 xl:w-96 opacity-10 -rotate-45 lg:block hidden">
        <img src="/icon.svg" className="w-full h-full " alt="" />
      </div>

      {/* content */}
      <div className="snacks-container w-full flex flex-col items-center lg:pb-14 py-12">
        <div className="w-[85%] xl:w-[65%] flex flex-col justify-center items-center z-50">
          <h2 className="text-4xl md:text-7xl lg:text-8xl 2xl:text-9xl poppins-semibold text-center tracking-tighter text-[#F6A230]">Samosa’s Tasty Snacks</h2>
          <p className="w-full md:w-[60%] mt-2 md:text-xl poppins-light text-center text-zinc-100">
            A delicious mix of fun and flavor, hand-picked games and tasty bites served hot and fresh.
          </p>
        </div>

        <div className="samosa-plate w-full mt-10 flex justify-center items-center relative">
          <img src="/images/samosa-plate.png" className=" h-48 w-80 md:h-80 md:w-120 lg:h-100 lg:w-142 xl:h-132 xl:w-182 rounded-2xl" alt="" />
        </div>

        <div className="mt-10">          
          <Button text={"View our menu"} color={"#F6A230"} textColor={"#000"} link={"/ourmenu"} />          
        </div>

        <div className="w-[80%] md:w-[75%] 2xl:w-[60%] color-secondry flex flex-col justify-center items-center mt-10 md:mt-20 md:mb-10 rounded-2xl p-5 lg:p-10 shadow-lg z-50">
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center poppins-semibold">Your next game night awaits</h2>
          <p className="mt-5 text-base md:text-xl lg:text-2xl mb-5 md:mb-10 text-center">Stop planning and start playing. Reserve your table now.</p>
          <Button text={"Book a table"} color={"#2F4A2C"} textColor={"#fff"} clickHandler={openForm} />
        </div>
      </div>
    </section>
  );
};

export default Snacks;
