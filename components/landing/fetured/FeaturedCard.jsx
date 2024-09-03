import { Base, H3 } from "@/components/typography/Typography";
import Image from "next/image";
import FeaturedImgCarousel from "./FeaturedImgCarousel";


export default function FeaturedCard({data}) {
    const {title,description,image,button,ingredients,gallary} = data
  return (
    
        <div className="bg-white rounded-xl flex flex-col md:flex-row md:rounded-3xl " >
        
            {/* <div className="w-full h-[330px] md:w-1/2 md:h-[580px]" >
                <Image src={image} height={330} width={640}  alt="featured-img" className="w-full h-full object-cover rounded-t-xl md:rounded-l-3xl md:rounded-tr-none" />
            </div> */}
            <FeaturedImgCarousel gallary={gallary} />
            <div className="w-full md:w-1/2 flex flex-row justify-center items-center relative">
            
                <div className="p-3 pb-10 md:pb-0 md:pl-5  flex flex-col gap-2 md:gap-5" >
                    <H3 className={'text-h2'} >
                        {title}
                    </H3>
                    <Base className={'md:text-paragraph md:font-normal'} >
                        {description}
                    </Base>
                    <H3>
                        {ingredients}
                    </H3>
                    
                    <a href="https://wa.me/c/919822668020" target="blank" >
                    <button className="bg-brand hover:bg-brandhover w-32  flex-shrink-1 py-2  rounded-xl text-white text-base font-light" >
                        {button}
                    </button>
                    </a>
                    

                    
                </div>

                   
                

            </div>

            
        </div>
    
  )
}
