"use client"

import {Stack, VStacks } from "@/components/layout/Stacks";
import { Paragraph } from "@/components/typography/Typography";
import Image from "next/image";
import callIcon from './icons/callIcon.svg';
import emailIcon from './icons/emailIcon.svg';
import pinIcon from './icons/pinIcon.svg';
import { useState } from "react";
import Body from "@/components/Body";
import { SocialContacts, SocialFooter } from "@/components/navbar/Social";


export default function ContactUs() {
  return (
    <div>
        <div 
            className="bg-cover bg-center bg-no-repeat min-h-[85vh] relative "
            style={{ 
                backgroundImage: "url('/images/landing/featured_img.png')",
            }}
            >
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>
            
    
            <Body>
                
        
               
                    <Stack className={'relative z-10 px-5 py-5 gap-5 md:py-24 md:px-5 md:items-start md:ustify-between '} >
            
                        <ContactInfoLabel/>
                        <ContactForm/>
            
                    </Stack>
    
                    
                
            </Body>
    
    
    
    
        </div>
        
    </div>
  )
}


const data = [
    {
        icon:callIcon,
        info:"+234 813 999 9999"
    },
    {
        icon:pinIcon,
        info:"lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
    },
    {
        icon:emailIcon,
        info:"shidori@email.com"
    }
]

function ContactInfoLabel(){
   

    return (
        <VStacks  className={'justify-around  h-[350px]'} >
            <h1 className=" relative z-10  md:pl-5 text-white text-h1 underline" >
                Contact Us
            </h1>
            <VStacks className={' relative z-10 gap-5 '} >
                {
                    data.map((item, index)=>(<Stack key={index} className={'gap-5'} >
                                <div className="bg-opacity-30 backdrop-blur-lg shadow-lg bg-black w-fit p-2  rounded-full" >
                                    <Image src={item.icon} alt="icon"   />
                                </div>
                                <Paragraph className={'text-white'} >
                                    {item.info}
                                </Paragraph>
                            </Stack>)
                        )
                }
            </VStacks>
            <SocialContacts   />
        </VStacks>
    )
}


const ContactForm = () => {
	

	const handleSubmit = (event) => {
		event.preventDefault();

		
	};

	return (
		<div className="p-5 relative z-10 w-full md:w-[550px] bg-opacity-30 backdrop-blur-lg shadow-lg bg-black rounded-xl" >
		    <form className=""  onSubmit={handleSubmit}>
    			<div className="mb-4">
    				<input
    					type="text"
    					className="min-h-[48px] leading-[48px] bg-[#F2F6FD]  border border-transparent rounded-xl focus:outline-none focus:border focus:border-brand w-full px-5"
    					placeholder="Enter Name"
    				/>
    			</div>
    			<div className="mb-4">
    				<input
    					type="email"
    					className="min-h-[48px] leading-[48px] bg-[#F2F6FD]  border border-transparent rounded-xl focus:outline-none focus:border focus:border-brand w-full px-5"
    					placeholder="Enter Email"
    				/>
    			</div>
    			<div className="mb-4">
    				<textarea
    					name="message"
    					className="min-h-[48px] leading-[48px] bg-[#F2F6FD]  border border-transparent rounded-xl focus:outline-none focus:border focus:border-brand w-full px-5"
    					placeholder="Enter Message"
    					rows="4"
    				></textarea>
    			</div>
    			<div className="text-start">
    				<button
    					type="submit"
    					className="bg-accent hover:bg-opacity-90 text-black px-8 py-3 rounded-xl mb-4"
    				>
    					Submit
    				</button>
    			</div>
    		</form>
		</div>
	);
};





