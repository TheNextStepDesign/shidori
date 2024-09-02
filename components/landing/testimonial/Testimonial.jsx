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

const testimonials = [
    {
        name:"Manisha Shah",
        img:"/images/landing/testimonial.webp",
        designation:"CEO, Mom to be, Mumbai",
        message:`llicitudin a libero. Mauris bibendum sit amet erat in rhoncus. Aenean at rhoncus lorem, ac mattis velit. Aliquam sed mattis dolor. Vestibulum ac urna a ex sagittis efficitur. Mauris consequat leo eu lacus pharetra, bibendum fermentum ante ultrices. Vestibulum nec fermentum neque. Nunc ut gravida velit. Nam lobortis turpis sit amet lacinia tincidunt.`
    },
    {
        name:"Shalaka Vivek Gokhale ",
        img:"/images/landing/testimonial2.webp",
        designation:"Co-Founder and Director Propmates international Pvt Ltd, Pune",
        message:`Shidori name itself talks a lot.<br/><br/>I am regular customer of multigrain ladu’s they are very delicious , highly nutritious with just the right amount of sweetness (no artificial sweetener). And made out of pure Ghee.<br/><br/>Packing also really nice ..😊😊`
       
    },
    {
        name:"Khushi Kamboj",
        img:"/images/landing/testimonial3.webp",
        designation:"Mountaineer",
        message:`For 12 years of climbing in the Sahyadri and Himalayas, I never carried food from home, preferring local fare despite my family’s insistence. A few years ago, Kalpana Kaki urged me to try her Shidori ladoos. Reluctant at first, I was surprised by how delicious and energizing they were, filled with dry fruits and free from sugar. Now, they’re a must-have for my expeditions—and my entire family is hooked!`
    }
    
  ]

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
        {testimonials.map((items, index) => (
          <CarouselItem key={index} className="md:basis-1/3 h-[580px] md:h-[480px]">

            <TestimonialCard data={items} />

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
      {testimonials.map((_, index) => (
          index % 3 === 0 && (
              <button
                  key={index}
                  className={`md:h-2 md:w-2 md:rounded-full md:cursor-default md:ml-2 ${Math.floor((current - 1) / 3) === Math.floor(index / 3) ? "md:bg-accent" : "md:bg-gray-200"}`}
              />
          )
      ))}
  </div>

    {/* indicator-mobile */}

    <div className="block md:hidden py-2 text-center text-sm">
        
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full cursor-default ml-2 ${current - 1 === index ? "bg-accent" : "bg-gray-200"} `}
          />
        ))}
        
    </div>

    </Body>
  )
}
