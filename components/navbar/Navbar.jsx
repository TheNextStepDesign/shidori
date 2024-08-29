"use client"
import React, { useState } from 'react';
import HambergerIcon from './icons/hamberger.svg';
import closeIcon from './icons/close.svg';

import { NavItemsMob, NavItemsWeb } from './Navitems';


import Image from 'next/image';
import MovingText from './MovingText';
import { Social } from './Social';
import { LogoNav } from './Logo';


export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (

  <div>
      <MovingText/>
    <div className='py-2 px-2 md:px-10 text-white relative' >
    
      <div className='flex justify-between items-center'>
          <NavItemsWeb/>
          <LogoNav/>
          <Social/>

          <div className="block md:hidden p-5" onClick={()=>{setToggle(!toggle)}} >
            {
              toggle?<Image src={closeIcon} alt="close Icon" className='w-5' />:<Image src={HambergerIcon} alt="hamberger Icon" className='w-5' />
            }
          </div>
      </div>

      <div 
        className={`block md:hidden w-full left-0 text-white absolute bg-brand 
                    overflow-hidden transition-all duration-300 ease-in-out
                    origin-top ${toggle ? 'max-h-screen' : 'max-h-0'}`}
      >
        {/* <div 
          className={`transform transition-transform duration-300 ease-in-out
                      ${toggle ? 'translate-y-0' : '-translate-y-full'}`}
        > */}
          <NavItemsMob/>
        {/* </div> */}
      </div>
    </div>
    </div>
  )
}

