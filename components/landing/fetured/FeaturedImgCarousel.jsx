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

export default function FeaturedImgCarousel({gallary,setIndex,name}) {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  
  React.useEffect(()=>{
    setIndex(current)
  },[current])
  
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );

  return (
    <div className="w-full  md:w-1/2 relative">
        <Carousel 
        plugins={[plugin.current]} 
        setApi={setApi}
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
      <p  className={'text-paragraph absolute top-5 right-5 bg-accent p-2 rounded-xl font-semibold  md:hidden'} >{name}</p>
    </div>
  )
}
