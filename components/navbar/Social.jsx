import instagramIcon from './icons/instagram.svg'
import xIcon from './icons/x.svg'
import linkedInIcon from './icons/linkedIn.svg'

import instagramIcon1 from './icons/instagram1.svg'
import xIcon1 from './icons/x1.svg'
import linkedInIcon1 from './icons/linkedIn1.svg'

import Image from 'next/image';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '../typography/Icons'

const items = [
  {
    icon:FacebookIcon ,
    icon1:xIcon1 ,
    path: "#",
  },
  {
    icon: InstagramIcon,
    icon1: instagramIcon1,
    path: "#",
  },
  {
    icon: WhatsAppIcon,
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
            <item.icon color='white' width="30" height="31" />
          </a>)
        }
    </div>
  )
}

export  function SocialContacts() {
  return (
    <div className='flex flex-row  gap-8 w-[274px] md:pl-5'>
        {
            items.map((item,index)=><a
            key={index}
            href={item.path}
            target="blank"
            className="cursor-pointer bg-opacity-30 backdrop-blur-lg shadow-lg bg-black p-2 rounded-full"
          >
            <item.icon color={'#FBD71C'} width="30" height="31" />
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
            <item.icon  width="30" height="31" />
          </a>)
        }
    </div>
  )
}
