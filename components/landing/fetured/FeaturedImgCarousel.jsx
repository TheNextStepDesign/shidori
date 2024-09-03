"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function FeaturedImgCarousel({gallary}) {

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );

  return (
    <div className="w-full  md:w-1/2">
        <Carousel 
        plugins={[plugin.current]} 
       className="">
        <CarouselContent>
          {gallary.map((img, index) => (
            <CarouselItem key={index}>
              <div className="w-full    md:h-[580px]" >
                <Image src={img} height={330} width={640}  alt="featured-img" className="w-full h-full object-cover rounded-t-xl md:rounded-l-3xl md:rounded-tr-none" />
            </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </div>
  )
}
