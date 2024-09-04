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
    },
    {
        name:"Rashmi Patil",
        img:"/images/landing/testimonial4.jpeg",
        designation:"Business Women",
        message:`I am Rashmi Patil. While navigating the busy professional life in Mumbai, I found a reference to Kalpana Patil from Kolhapur when looking for something tasty and nutritious, and all my problems were solved. For the past two years, my family and I have been fans of Kalpana Tai’s dry fruit and Khapli wheat laddus. Heartfelt thanks to her for delivering excellent nutrition with great taste. May this service continue forever!`
    },
    {
        name:"Dr. Saroj Shinde",
        img:"/images/landing/testimonial5.jpeg",
        designation:"Janani Hospital, Kolhapur",
        message:`KP products are genuinely authentic and incredibly delicious. Made with the finest ingredients, they offer a perfect blend of taste and nutrition. Whether it’s their wholesome dry fruits or nutritious Khapli wheat laddus, each product reflects a commitment to quality and health. Ideal for all age groups, KP products are a delightful way to enjoy great taste while taking care of your well-being.`
    },
    {
        name:"Dr. Vilas Parekh",
        img:"/images/landing/testimonial7.jpeg",
        designation:"MBBS, DHM, Pune",
        message:`KP products have become a favorite in our household for their exceptional quality and flavor. Every item, from their fresh dry fruits to their nutritious snacks, is made with care and precision, ensuring a delightful taste with every bite. We trust KP for providing a healthy and tasty option that keeps our family energized and satisfied. Truly a perfect blend of tradition and wellness in every product!`
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
          <CarouselItem key={index} className="md:basis-1/3 h-[680px] md:h-[480px]">

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
  {[0, 1, 2].map((index) => (
    <button
      key={index}
      className={`md:h-2 md:w-2 md:rounded-full md:cursor-default md:ml-2 ${
        index === Math.min(Math.floor((current - 1) / 3), 2) ? "md:bg-accent" : "md:bg-gray-200"
      }`}
    />
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
