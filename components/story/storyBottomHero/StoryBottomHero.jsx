import Body from "@/components/Body";
import { Stack, VStacks } from "@/components/layout/Stacks";
import { H2, Paragraph } from "@/components/typography/Typography";


export default function StoryBottomHero() {
  return (
    <Body>
        <Stack className={'md:flex-row-reverse bg-white p-2.5 gap-5  md:p-5  md:justify-between md:items-center rounded-xl md:rounded-2xl'} >

            <div className='w-full md:max-w-[600px] h-[350px] md:h-[530px] lg:h-[525px] bg-gray-400 rounded-xl' >
            {/* Image here */}
            </div>

            <VStacks className={'w-full md:max-w-[500px]'} >
                <H2>
                    Our Story
                </H2>
                <Paragraph>
                    Founded by Mrs. Kalpana Patil, a dedicated
                    homemaker and mother, Shidori began as K.P. Foods. With a passion for cooking and a love for kitchen experiments, Mrs. Patil started selling her products after friends and family began requesting them more frequently. Having previously managed a feed factory for her father before marriage, she seized the opportunity to take her culinary skills to a commercial level.
                </Paragraph>
                <Paragraph>
                    In a short time, through word-of-mouth publicity alone, she was shipping her products all over India and to local farmers markets. Mrs. Patil is very particular about the ingredients she uses and ensures the consistency of her products. Now, K.P.
                    Foods has evolved into Shidori, so everyone can
                    savor the taste of homemade goodness and
                    nutrition all over the globe.
                </Paragraph>
            </VStacks>

        </Stack>
    </Body>
  )
}
