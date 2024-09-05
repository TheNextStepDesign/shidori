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
    name:"Nutri-Bar",
    gallary:["/images/landing/products/nutribar/1.webp","/images/landing/products/nutribar/2.webp"],
    singleData:[
      {
        title:"7 Seeds Nutri-Bar",
        description:"Boost your energy with Shidori’s 7 Seeds Nutri-Bar! Packed with dates, nuts, and seven nutrient-rich seeds, this homemade bar is your perfect on-the-go snack. Enjoy the wholesome goodness of quality ingredients with no added preservatives in every bite."
      },
      {
        title:"Chocolate Nutri-Bar",
        description:"Satisfy your sweet cravings with Shidori’s Chocolate Nutri-Bar! Blending the richness of chocolate with nutritious nuts and seeds, this homemade bar is a delightful treat. Perfect for a guilt-free indulgence anytime, with no added preservatives"
      }
  ],
    button: "View all >",
    
  },
  {
    name:"Laddoo",
    gallary:["/images/landing/products/laddoos/1.webp","/images/landing/products/laddoos/2.webp","/images/landing/products/laddoos/3.webp"],
    singleData:[
      {
        title:"Dink/Gondh Laddoo",
        description:"Experience the traditional goodness of Shidori’s Gondh Laddoo! Made with premium ingredients like gondh, nuts, and jaggery, these laddoos are a nourishing snack. Handcrafted with love in limited batches and free from any added preservatives for an authentic homemade flavor."
      },
      {
        title:"Dry Fruits Laddoo",
        description:"Indulge in the rich flavors of Shidori’s Dry Fruits Laddoo! Packed with dates, nuts, and jaggery, these laddoos are a powerhouse of taste and nutrition. Handcrafted in small batches without any added preservatives, ensuring you get the best homemade goodness."
      },
      {
        title:"Khapli Wheat Laddoo",
        description:"Enjoy the wholesome taste of Shidori’s Khapli Wheat Laddoo! Crafted with khapli wheat, nuts, and ghee, these laddoos are a perfect blend of nutrition and taste. Relish the homemade quality and goodness with no added preservatives in every bite."
      }
    ],
    button: "View all >",
    
  },
  {
    name:"Pickle",
    gallary:["/images/landing/products/pickles/1.webp","/images/landing/products/pickles/2.webp","/images/landing/products/pickles/3.webp","/images/landing/products/pickles/4.webp","/images/landing/products/pickles/5.webp"],
    singleData:[
      {
        title:"Red Chilli Thecha",
        description:"Spice up your meals with Shidori’s Red Chilli Thecha! This handmade condiment bursts with fiery red chillies, garlic, and traditional spices. Perfect for adding a burst of authentic heat and flavor to any dish."
      },
      {
        title:"Mango Pickle",
        description:"Savor the essence of Shidori’s Mango Pickle! Made from juicy mangoes and aromatic spices, this pickle brings a delightful mix of sweet and spicy to your plate. Enjoy the authentic homemade flavor in every bite."
      },
      {
        title:"Mainmula Pickle",
        description:"Enjoy the tangy taste of Shidori’s Mainmula Pickle! Made with handpicked raw minemool pieces and seasoned with traditional spices, this homemade pickle delivers a savory and spicy kick that enhances any meal."
      },
      {
        title:"Lemon Pickle (Crush)",
        description:"Brighten your palate with Shidori’s Lemon Pickle! Crafted with sweet and tangy lemons mixed with a blend of spices, this delightful homemade pickle pairs perfectly with any dish for a fresh and vibrant taste."
      },
      {
        title:"Green Chilli Pickle",
        description:"Add zest to your meals with Shidori’s Green Chilli Pickle! Handmade with fresh green chillies and aromatic spices, this bold and tangy pickle adds a true homemade touch to your favorite dishes."
      }
    ],
    button: "View all >",
    
  }
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
        <div className="hidden md:block" >
        <CarouselPrevious />
      </div>
      <div className="hidden md:block" >
        <CarouselNext />
      </div>
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
