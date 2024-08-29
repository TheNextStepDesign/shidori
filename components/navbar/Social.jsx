import instagramIcon from './icons/instagram.svg'
import xIcon from './icons/x.svg'
import linkedInIcon from './icons/linkedIn.svg'

import instagramIcon1 from './icons/instagram1.svg'
import xIcon1 from './icons/x1.svg'
import linkedInIcon1 from './icons/linkedIn1.svg'

import Image from 'next/image';

const items = [
  {
    icon:xIcon ,
    icon1:xIcon1 ,
    path: "#",
  },
  {
    icon: instagramIcon,
    icon1: instagramIcon1,
    path: "#",
  },
  {
    icon: linkedInIcon,
    icon1: linkedInIcon1,
    path: "#",
  }
  
];

export  function Social() {
  return (
    <div className='hidden md:flex md:flex-row md:justify-end gap-8 lg:w-[274px] '>
        {
            items.map((item,index)=><a
            key={index}
            href={item.path}
            target="blank"
            className="cursor-pointer"
          >
            <Image src={item.icon} alt="social-icon-navbar" />
          </a>)
        }
    </div>
  )
}

export function SocialFooter() {
  return (
    <div className='flex flex-row gap-8'>
        {
            items.map((item,index)=><a
            key={index}
            href={item.path}
            target="blank"
            className="cursor-pointer"
          >
            <Image src={item.icon1} alt="social-icon-footer" />
          </a>)
        }
    </div>
  )
}
