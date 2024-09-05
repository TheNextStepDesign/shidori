"use client"
import React, { useEffect, useRef, useState } from 'react';
import HambergerIcon from './icons/hamberger.svg';
import closeIcon from './icons/close.svg';
import { usePathname } from 'next/navigation'
import { NavItemsMob, NavItemsWeb } from './Navitems';


import Image from 'next/image';
import MovingText from './MovingText';
import { Social } from './Social';
import { LogoNav } from './Logo';
import Headroom from 'react-headroom';


export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  const navbarRef = useRef(null);
  const pathname = usePathname()
  const [pinned, setPinned] = useState(true)

  const handlePin = () => {
    setPinned(true)
  }

  const handleUnpin = () => {
    setPinned(false)
  }

  const handleToggle = ()=>{
    setToggle(!toggle)
  }

  useEffect(()=>{
    if(toggle){
      handleToggle()
    }
  },[pathname])


  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && toggle) {
        setToggle(false);
      }
    }
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggle]);

  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      if (toggle) {
        mainContent.style.opacity = '0.3';
        mainContent.style.pointerEvents = 'none';
      } else {
        mainContent.style.opacity = '1';
        mainContent.style.pointerEvents = 'auto';
      }
    }
  }, [toggle]);


  return (
  <div className='relative z-40' ref={navbarRef} >

  <MovingText/>
  <Headroom  onPin={handlePin} onUnpin={handleUnpin}>
    <div className={`py-1 px-2 md:px-10 text-white  relative  bg-brand`} >
    
      <div className='flex justify-between items-center'>
          <NavItemsWeb/>
          <LogoNav/>
          <Social/>

          <div className="block md:hidden p-5" onClick={handleToggle} >
            {
              toggle?<Image src={closeIcon} alt="close Icon" className='w-5' />:<Image src={HambergerIcon} alt="hamberger Icon" className='w-5' />
            }
          </div>
      </div>

      <div 
        className={`block md:hidden w-full bg-accent backdrop-blur-lg opacity-90 shadow-lg left-0 text-brand absolute 
          overflow-hidden transition-all duration-300 ease-in-out z-40
          origin-top ${toggle ? 'max-h-screen' : 'max-h-0'}`}
      >
      <NavItemsMob/>
    </div>
    </div>
    </Headroom>
    
    </div>
  )
}

