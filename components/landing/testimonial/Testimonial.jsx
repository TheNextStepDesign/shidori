"use client";
import * as React from "react";

import TestimonialCard from "./TestimonialCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Body from "@/components/Body";
import { H1, H2 } from "@/components/typography/Typography";

export default function Testimonial() {
    const [api, setApi] = React.useState();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);
  
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
  return (
    <Body>
      <h3  className={'text-white text-h1 font-semibold mb-2.5 text-center md:text-left '} >Our patrons</h3>
    <Carousel
      opts={{
        align: "start",
      }}
      setApi={setApi}
      
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3">

            <TestimonialCard/>

          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block" >
        <CarouselPrevious />
      </div>
      <div className="hidden md:block" >
        <CarouselNext />
      </div>
    </Carousel>

    {/* indicator-web */}
      
    <div className="hidden md:block md:py-2 md:text-center md:text-sm">
        
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`md:h-2 md:w-2 md:rounded-full md:cursor-default md:ml-2 ${current -1 === index ? "md:bg-accent" : "md:bg-gray-200"} `}
          />
        ))}

    </div>

    {/* indicator-mobile */}

    <div className="block md:hidden py-2 text-center text-sm">
        
        {Array.from({ length: count+1 }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full cursor-default ml-2 ${current - 1 === index ? "bg-accent" : "bg-gray-200"} `}
          />
        ))}
        
    </div>

    </Body>
  )
}
