import { VStacks } from "@/components/layout/Stacks"




export default function BottomHero() {
    const imgUrl = '/images/landing/bottomHero.png'
  return (

    <div className="relative" >

        <div className="h-[600px]  brightness-[0.7]" style={{backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}} >
            
        </div>
        <VStacks className={'gap-2 max-w-[300px] absolute top-10 left-2.5 md:left-10'} >
                <h2 className={'text-white text-h2'} >
                Wholesome goodness now at your fingertips
                </h2>
                <a href="https://wa.me/c/919822668020" target="blank" >
                <button className="bg-white hover:bg-brandhover hover:text-white text-black font-semibold  w-[140px] px-5 py-2.5 rounded-2xl" >
                    Shop Now
                </button>
                </a>
        </VStacks>  
    </div>
  )
}
