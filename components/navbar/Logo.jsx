import Image from 'next/image'
import logoIconNav from './icons/logo.svg'
import logoIconFooter from './icons/logofooter.svg'
import Link from 'next/link'

export  function LogoNav() {
  return (
    <Link href={'/'} >
      <Image 
        src={logoIconNav} 
        alt="Logo Icon" 
        className='w-24 md:w-full'
      />
    </Link>
  )
}

export  function LogoFooter(){
  return (
    <Link href={'/'} >
      <Image src={logoIconFooter} alt="logo Icon" className='w-[140px] md:w-full' />
    </Link>
  )
}
