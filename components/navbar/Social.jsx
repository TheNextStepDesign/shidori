import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '../typography/Icons'

const items = [
  {
    icon:FacebookIcon ,
    path: "https://www.facebook.com/share/RddmC9RLvijuv3bk/?mibextid=qi2Omg",
  },
  {
    icon: InstagramIcon,
    path: "https://www.instagram.com/shidori_bykp?igsh=cHk3b3FkM3VtdTQz",
  },
  {
    icon: WhatsAppIcon,
    path: "https://wa.me/c/919822668020",
  } 
];
//https://wa.me/919822668020?text=Hii,
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
};

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
};

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
