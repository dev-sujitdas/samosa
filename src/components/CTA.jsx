import React, {useState, useEffect} from 'react'
import Button from './ui/Button'

const CTA = ({openForm}) => {
    const [isTab, setIsTab] = useState(false);
  const openFormHandler = () => {        
        openForm()
    }

     useEffect(() => {        
        const mediaTab = window.matchMedia("(width:1024px) and (height:600px)");
        const update = () => {          
          setIsTab(mediaTab.matches);
        };    
        update();            
        mediaTab.addEventListener("change", update);
    
        return () => {          
          mediaTab.removeEventListener("change", update);
        };
      }, []);

  return (
    <section className={`cta w-full h-screen color-secondry relative flex xl:flex-row ${isTab ? 'flex-row' : 'flex-col'} `}>
        <div className={`w-full xl:w-1/2 h-1/2 xl:h-full relative ${isTab && 'w-1/2 h-full'}`}>
            <img src="/images/group.webp" className='w-full h-full object-cover ' />            
        </div>
        <div className={`w-full xl:w-1/2 ${isTab && 'w-1/2 h-full'} h-1/2 xl:h-full p-5 md:p-10 flex flex-col justify-end`}>
            <h2 className='cta-title text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl poppins-medium tracking-tighter'>Reserve your table in seconds</h2>
            <p className='cta-para md:text-xl 2xl:text-2xl tracking-tighter w-full 2xl:w-1/2 mt-5 mb-5'>Pick your date, choose your table, and lock in your game night. 
                No hassle, no waiting. Just you, your friends, and the games you love.</p>
            
            <Button text={"Book a table"} color={"#2F4A2C"} textColor={"#fff"} clickHandler={openFormHandler} />
        </div>
    </section>
  )
}

export default CTA