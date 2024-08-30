import { Stack, VStacks } from "@/components/layout/Stacks";
import { H3, Paragraph } from "@/components/typography/Typography";


import Image from "next/image";

export default function TestimonialCard() {
  return (
    <VStacks className="w-full p-2.5 bg-customgray rounded-xl md:max-w-[600px]" >

        <Stack className={'gap-2.5 md:items-end'} >
            <div className="w-[200px]" >
                <Image width={200} height={200} src="/images/landing/testimonial.png" alt="testimonial-img" className="w-full h-full rounded-xl" />
            </div>
            <VStacks className="gap-2.5" >
                <H3>Manisha Shah</H3>
                <Paragraph>
                    CEO, Mom to be, Mumbai
                </Paragraph>
            </VStacks>

        </Stack>

        <Paragraph>
            llicitudin a libero. Mauris bibendum sit amet erat in rhoncus. Aenean at rhoncus lorem, ac mattis velit. Aliquam sed mattis dolor. Vestibulum ac urna a ex sagittis efficitur. Mauris consequat leo eu lacus pharetra, bibendum fermentum ante ultrices. Vestibulum nec fermentum neque. Nunc ut gravida velit. Nam lobortis turpis sit amet lacinia tincidunt.
        </Paragraph>

    </VStacks>
  )
}
