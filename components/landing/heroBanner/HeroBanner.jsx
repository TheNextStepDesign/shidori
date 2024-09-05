
import Image from "next/image";

export default function HeroBanner() {
    return (
      <div className="relative" >

      <div className="h-[550px] bg-gray-400" >
  
        {/* web image */}
  
        <Image src="/images/landing/test2.jpg" alt="heroWeb" width={1280} height={550}    className="hidden md:block  h-full w-full object-cover object-center" /> 
  
        {/* mobile image */}
  
        <Image src="/images/landing/test3.jpg" alt="heroMob" width={390} height={550}     className="md:hidden  h-full w-full object-cover object-center" />
      </div>
        <h1 className={'hidden md:block absolute top-[5%] left-[5%] md:top-[47%] md:left-[10%] text-accent text-h1 font-semibold p-2.5'} >
          <span>Celebrate Ganpati guilt free</span> <br></br> with Shidori!
        </h1>
        <h1 className={'md:hidden absolute top-[5%] left-[5%] text-accent text-h1 font-semibold p-2.5'} >
          Celebrate <br></br> Ganpati guilt free <br></br> with Shidori!
        </h1>
      </div>
    )
  }