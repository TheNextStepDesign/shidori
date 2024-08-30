import { H1, Paragraph } from "@/components/typography/Typography";



export default function Mobile() {
  return (
    <div className="flex flex-col p-5  md:hidden" >
      <H1 className={'text-center pb-5'} >
        made with Love
      </H1>
      <Paragraph className={'pt-5 border-t border-black'} >
        We are a goodness brand that strives for spreading the joy through good food. Filling the gap between today’s fast pace nutrition available in the market. Shidori is our effort to share the goodness of mother’s hand 
      </Paragraph>

    </div>
  )
}
