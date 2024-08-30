"use client";
import { Center } from "@/components/layout/Stacks";
import { H1, H2 } from "@/components/typography/Typography";
import { useEffect, useRef } from "react";

export default function StoryQuote() {
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const scrolled = window.scrollY;
                const speed = 0.5; // Adjust this value to change parallax speed
                parallaxRef.current.style.backgroundPositionY = `calc(50% + ${scrolled * speed}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div>

        <div 
            ref={parallaxRef} 
            className="bg-cover bg-center bg-no-repeat bg-fixed  h-[150px] sm:h-[250px] md:h-[350px] relative hidden md:block "
            style={{ 
                backgroundImage: "url('/images/landing/featured_img.png')",
            }}
            >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <Center className={'relative z-10 h-full flex-col gap-3 sm:gap-5 text-white px-4 sm:px-6 md:px-8'}>
                <H1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    " You don't need to be gluten-free to love XOV."
                </H1>
                <H2 className="text-lg sm:text-xl md:text-2xl">
                    xo, Valerie
                </H2>
            </Center>
        </div>
        <div 
            className="bg-cover bg-center bg-no-repeat h-[200px] max-w-[1200px] relative md:hidden"
            style={{ 
                backgroundImage: "url('/images/landing/featured_img.png')",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <Center className="relative z-10 h-full flex-col gap-3 sm:gap-5 text-white px-4 sm:px-6 md:px-8">
                <H1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    " You don't need to be gluten-free to love XOV. "
                </H1>
                <H2 className="text-lg sm:text-xl md:text-2xl">
                    xo, Valerie
                </H2>
            </Center>
        </div>
    </div>
  );
}
