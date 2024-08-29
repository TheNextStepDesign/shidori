import Image from "next/image";

export default function HeroBanner() {
    return (
      <div className="h-[550px] bg-gray-400" >
  
        {/* web image */}
  
        <Image src="/images/landing/heroWeb.png" alt="heroWeb" width={1280} height={550}    className="hidden md:block  h-full w-full object-cover object-center" /> 
  
        {/* mobile image */}
  
        <Image src="/images/landing/heroMob.png" alt="heroMob" width={390} height={550}     className="md:hidden  h-full w-full object-cover object-center" />
      </div>
    )
  }