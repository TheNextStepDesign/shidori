"use client"

import {Stack, VStacks } from "@/components/layout/Stacks";
import { Paragraph } from "@/components/typography/Typography";
import Image from "next/image";
import callIcon from './icons/callIcon.svg';
import emailIcon from './icons/emailIcon.svg';
import pinIcon from './icons/pinIcon.svg';
import Body from "@/components/Body";
import { SocialContacts } from "@/components/navbar/Social";
import Link from "next/link";
import { useState } from "react";


export default function ContactUs() {
  return (
    <div>
        <div 
            className="bg-cover bg-center bg-no-repeat min-h-[85vh] relative "
            style={{ 
                backgroundImage: "url('/images/landing/contact_img.webp')",
            }}
            >
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>
            
    
            <Body>
                
        
               
                    <Stack className={'relative z-10 px-5 py-5 gap-5 md:gap-0 md:py-24 md:px-5 md:items-start md:justify-between  '} >
            
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
        icon: callIcon,
        info: "+91 98226 68020",
        href: "tel:+919822668020"
    },
    {
        icon: pinIcon,
        info: "KP Food and Products. 2113. E Ward, Behind Akanksha appt.  Nimbalkar Colony. Kawla Naka. Kolhapur, MH 416004"
    },
    {
        icon: emailIcon,
        info: "info@shidori.in",
        href: "mailto:info@shidori.in?subject=Website%20Inquiry%20Regarding."
    }
]

function ContactInfoLabel() {
    return (
        <VStacks className={'relative z-10 justify-around md:h-[350px]'}>
            <h1 className="md:pl-5 text-white text-h1 underline">
                Contact Us
            </h1>
            <VStacks className={'gap-5'}>
                {
                    data.map((item, index) => (
                        <Stack key={index} className={'gap-5'}>
                            <div className="bg-opacity-30 backdrop-blur-lg shadow-lg bg-black p-2 w-fit rounded-full">
                                {item.href ? (
                                    <Link href={item.href}>
                                        <Image src={item.icon} alt="icon" />
                                    </Link>
                                ) : ( 
                                    <Image src={item.icon} alt="icon" />
                                )}
                            </div>
                            <Paragraph className={'text-white max-w-[480px]'}>
                                {item.href ? (
                                    <Link href={item.href} className="hover:underline">
                                        {item.info}
                                    </Link>
                                ) : (
                                    item.info
                                )}
                            </Paragraph>
                        </Stack>
                    ))
                }
            </VStacks>
            <SocialContacts />
        </VStacks>
    )
}



const ContactForm = () => {
	
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
       
      };

      
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            alert('Email sent successfully!');
            setFormData({ name: '', email: '', mobile: '', message: '' });
          } else {
            console.error('API Error:', data.error);
            alert(`Failed to send email: ${data.error}`);
          }
        } catch (error) {
            console.error('Fetch Error:', error);
            alert('An error occurred while sending the email. Please try again.');
          }
      };
      

    //   const handleSubmit =  (event) => {
        
    //     console.log(formData, 'tesr')
    //   }

	return (
		<div className="p-5 relative z-10 w-full md:w-[550px] bg-opacity-30 backdrop-blur-lg shadow-lg bg-black rounded-xl" >
		    <form className=""  onSubmit={handleSubmit}>
    			<div className="mb-4">
    				<input
                        required
    					type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
    					className="min-h-[48px] leading-[48px] bg-[#F2F6FD]  border border-transparent rounded-xl focus:outline-none focus:border focus:border-brand w-full px-5"
    					placeholder="Enter Name"
    				/>
    			</div>
    			<div className="mb-4">
    				<input
                        required
    					type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
    					className="min-h-[48px] leading-[48px] bg-[#F2F6FD]  border border-transparent rounded-xl focus:outline-none focus:border focus:border-brand w-full px-5"
    					placeholder="Enter Email"
    				/>
    			</div>
                <div className="mb-4">
    				<input
                        required
    					type="number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
    					className="min-h-[48px] leading-[48px] bg-[#F2F6FD]  border border-transparent rounded-xl focus:outline-none focus:border focus:border-brand w-full px-5"
    					placeholder="Enter Mobile Number"
    				/>
    			</div>
    			<div className="mb-4">
    				<textarea
    					name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
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





