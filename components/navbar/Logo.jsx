import Image from 'next/image'
import logoIconNav from './icons/logo.svg'
import logoIconFooter from './icons/logofooter.svg'

export  function LogoNav() {
  return (
    <div className='' >
      <Image 
        src={logoIconNav} 
        alt="Logo Icon" 
        className='w-24 md:w-full'
      />
    </div>
  )
}

export  function LogoFooter(){
  return (
    <div  >
      <Image src={logoIconFooter} alt="logo Icon" className='w-[140px] md:w-full' />
    </div>
  )
}
