"use client"
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

const sliderData = [
  {
    Heading: "Homemade Tradition,",
    subHeading: "Crafted for Everyday Living",
    src: "/images/landing/shidori-hero-1.png",
    headingColor: "text-[#efe5b9]",
    subHeadingColor: "text-[#efe5b9]",
  },
  {
    Heading: "Celebrate with Shidori’s Nutritious Ladoos ",
    subHeading: "a sweet that loves you back",
    src: "/images/landing/shidori-hero-2.png",
    headingColor: "text-[#461F16]",
    subHeadingColor: "text-[#461F16]",
    
  },
];

export default function HeroBanner() {
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
  
    const plugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: false })
    );

  return (
    <div className="relative h-[50vh] md:h-screen flex items-center justify-center bg-[#e7d1b2]">
      <Carousel
        className="w-full h-[50vh] md:h-full"
        opts={{
          loop: true,
        }}
        setApi={setApi}
       plugins={[plugin.current]}
      >
        <CarouselContent className=" h-[50vh] md:h-full">
          {sliderData.map((slide, idx) => (
            <CarouselItem key={idx} className="flex justify-center items-center h-full">
              <div className="w-full h-full flex flex-col items-center">
                <div className="relative w-full h-screen flex items-center justify-center">
                  <Image
                    src={slide.src}
                    alt={slide.Heading}
                    fill
                    className="object-cover "
                    priority={idx === 0}
                  />
                  {/* Text at top center */}
                  <div className="absolute top-0 left-0 w-full flex flex-col items-center pt-12 md:pt-20 z-10">
                    <h2
                      className={`text-center text-2xl md:text-5xl font-serif font-semibold drop-shadow-lg ${slide.headingColor}`}
                    >
                      {slide.Heading}
                    </h2>
                    <p
                      className={`text-center text-lg md:text-3xl mt-2 font-light drop-shadow ${slide.subHeadingColor}`}
                    >
                      {slide.subHeading}
                    </p>
                  </div>
                  {/* Overlay for darken effect */}
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" /> */}
      </Carousel>
      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full cursor-default ml-2 ${current - 1 === index ? "bg-brand" : "bg-gray-200"}`}
          />
        ))}
      </div>
    </div>
  );
}
