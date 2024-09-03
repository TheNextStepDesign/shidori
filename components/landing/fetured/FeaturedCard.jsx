"use client"
import { Base, H3 } from "@/components/typography/Typography";
import Image from "next/image";
import FeaturedImgCarousel from "./FeaturedImgCarousel";
import { useEffect, useState } from "react";


export default function FeaturedCard({data}) {
    const [index,  setIndex] = useState(0);

    useEffect(() => {
        setIndex(1)
    }, [])
    
    const {button,singleData,gallary} = data
    
  return (
    
        <div className="bg-white rounded-xl flex flex-col md:flex-row md:rounded-3xl " >
        
            {/* <div className="w-full h-[330px] md:w-1/2 md:h-[580px]" >
                <Image src={image} height={330} width={640}  alt="featured-img" className="w-full h-full object-cover rounded-t-xl md:rounded-l-3xl md:rounded-tr-none" />
            </div> */}
            <FeaturedImgCarousel gallary={gallary} setIndex={setIndex} />
            <div className="w-full md:w-1/2 flex flex-row justify-center items-center relative ">
            
                <div className="p-3 pb-10 md:pb-0 md:pl-10  flex flex-col gap-2 md:gap-5" >
                    <H3 className={'text-h2'} >
                        
                    {singleData[index-1]?.title || '7 Seeds Nutri-Bar'}
                    </H3>
                    <Base className={'md:text-paragraph md:font-normal'} >
                    {singleData[index-1]?.description || 'Boost your energy with Shidori’s 7 Seeds Nutri-Bar! Packed with dates, nuts, and seven nutrient-rich seeds, this homemade bar is your perfect on-the-go snack. Enjoy the wholesome goodness of quality ingredients with no added preservatives in every bite.'}
                    </Base>
                    
                    
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
