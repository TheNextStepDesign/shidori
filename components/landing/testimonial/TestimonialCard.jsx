import { Stack, VStacks } from "@/components/layout/Stacks";
import { H3, Paragraph } from "@/components/typography/Typography";


import Image from "next/image";

export default function TestimonialCard({data}) {
    const {name,designation,message,img} = data
    const paragraphs = message.split("<br/><br/>");
  return (
    <VStacks className="w-full p-2.5 bg-customgray rounded-xl md:max-w-[600px] h-full" >

        <Stack className={'gap-2.5 md:justify-between md:items-end'} >
            <div className="w-full h-[300px] md:h-[200px]" >
                <Image width={200} height={200} src={img} alt="testimonial-img" className="w-full h-full rounded-xl object-cover" />
            </div>
            <VStacks className="gap-2.5 w-full " >
                <H3>{name}</H3>
                
                <Paragraph >
                    {designation}
                </Paragraph>
            
            </VStacks>

        </Stack>

        {paragraphs.map((paragraph, index) => (
                    <Paragraph key={index}>
                        {paragraph}
                    </Paragraph>
        ))}

    </VStacks>
  )
}
