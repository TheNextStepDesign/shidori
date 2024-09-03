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

import FeaturedCard from "./FeaturedCard";
import Body from "@/components/Body";

const data = [
  {
    title: "Khapli Wheat Laddoo",
    description: "Ghee, dry-fruits, jaggery and love!",
    image: "/images/landing/products/tumbnails/1.webp",
    gallary:["/images/landing/products/tumbnails/1.webp","/images/landing/products/tumbnails/2.webp"],
    button: "View all >",
    ingredients:"Gond and Dates | Mixed Dry fruit | Khapli Wheat"
  },
  {
    title: "Green Chilli Pickle",
    description: "Ghee, dry-fruits, jaggery and love!",
    image: "/images/landing/products/tumbnails/2.webp",
    gallary:["/images/landing/products/tumbnails/1.webp","/images/landing/products/tumbnails/2.webp"],
    button: "View all >",
    ingredients:"Gond and Dates | Mixed Dry fruit | Khapli Wheat"
  },
  {
    title: "7 Seeds Nutri-Bar",
    description: "Ghee, dry-fruits, jaggery and love!",
    image: "/images/landing/products/tumbnails/3.webp",
    gallary:["/images/landing/products/tumbnails/1.webp","/images/landing/products/tumbnails/2.webp"],
    button: "View all >",
    ingredients:"Gond and Dates | Mixed Dry fruit | Khapli Wheat"
  },
  {
    title: "Dry Fruits Laddoo",
    description: "Ghee, dry-fruits, jaggery and love!",
    image: "/images/landing/products/tumbnails/4.webp",
    gallary:["/images/landing/products/tumbnails/1.webp","/images/landing/products/tumbnails/2.webp"],
    button: "View all >",
    ingredients:"Gond and Dates | Mixed Dry fruit | Khapli Wheat"
  },
];

export default function Featured() {
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
    <Body>
      <Carousel setApi={setApi}
      //  plugins={[plugin.current]} 
       className="w-full">
        <CarouselContent>
          {data.map((items, index) => (
            <CarouselItem key={index}>
              <FeaturedCard data={items} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      {/* indicator */}
      
      <div className="py-2 text-center text-sm text-muted-foreground ">
        
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full cursor-default ml-2 ${current - 1 === index ? "bg-accent" : "bg-gray-200"}`}
          />
        ))}
      </div>
    </Body>
  );
}
