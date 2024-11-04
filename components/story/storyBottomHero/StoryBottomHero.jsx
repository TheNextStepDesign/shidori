import Body from "@/components/Body";
import { Stack, VStacks } from "@/components/layout/Stacks";
import { H2, Paragraph } from "@/components/typography/Typography";
import Image from "next/image";


export default function StoryBottomHero() {
  return (
    <Body>
        <Stack className={'md:flex-row-reverse bg-white p-2.5 gap-5  md:p-5  md:justify-between md:items-center rounded-xl md:rounded-2xl'} >

            <div className='w-full md:max-w-[650px] h-[350px] md:h-[530px] lg:h-[525px]  rounded-xl' >
              {/* temparory dismiss */}
              {/* <Image src={'/images/about/ourStory.JPG'} alt="ourStory" width={600} height={400} className="w-full h-full object-cover"/> */}
              <Image src={'/images/about/temp.png'} alt="ourStory" width={600} height={400} className="w-full h-full object-cover"/>
            </div>

            <VStacks className={'w-full md:max-w-[500px]'} >
                <H2>
                    Our Story
                </H2>
                <Paragraph>
                  Shidori started with Mrs. Kalpana Patil, a homemaker with a passion for cooking and ensuring her children had nutritious, homemade food on the go. She began making wholesome laddus and bars to provide her kids with energy packed snacks for their busy days. The word “Shidori” reflects this tradition—a meal prepared for a journey; simple, nutritious, and long lasting.
                </Paragraph>
                <Paragraph>
                  Originally known as K.P. Foods, the brand quickly grew as word of mouth spread the deliciousness of her creations. Mrs. Patil carefully selects the best quality ingredients to maintain the same high standards in every batch. Today, her son has joined her in this journey, aiming to take it a step further by sharing his mother's homemade goodness with people around the world.
                </Paragraph>
            </VStacks>

        </Stack>
    </Body>
  )
}
