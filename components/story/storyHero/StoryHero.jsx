import Body from "@/components/Body";
import { Stack, VStacks } from "@/components/layout/Stacks";
import { H2, Paragraph } from "@/components/typography/Typography";


export default function StoryHero() {
  return (
    <Body>
        <Stack className={'bg-white p-2.5 gap-5  md:p-5  md:justify-between md:items-center rounded-xl md:rounded-2xl'} >

            <div className='w-full md:max-w-[600px] h-[350px] md:h-[450px] bg-gray-400 rounded-xl' >
            {/* Image here */}
            </div>

            <VStacks className={'w-full md:max-w-[500px]'} >
                <H2>
                    Our Name
                </H2>
                <Paragraph>
                Shidori, a name as evocative as its meaning. Just as a tiffin is lovingly wrapped in cloth, our brand encapsulates the essence of tradition and care. ‘Shidori’ signifies the delicate unfolding of flavors, a journey back to the roots of homemade nourishment. It’s not just a name; it’s an experience, where every fold tells a story and every bite is a taste of heartfelt heritage.
                </Paragraph>
            </VStacks>

        </Stack>
    </Body>
  )
}
