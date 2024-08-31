import { H2, Paragraph } from '@/components/typography/Typography'
import poitionIcon from './icon/poition.svg'
import Image from 'next/image'

export default function Web() {
  return (
    <div className="hidden md:py-5 lg:py-0 md:flex md:flex-row md:items-center md:gap-5" >
        <div>
            <Image src={poitionIcon} alt="poition-icon" className='w-[200px]' />
        </div>
        <div className='md:flex md:flex-row md:items-center md:gap-5 ' >
            <H2 className={'w-[75px]'} >
                made with love
            </H2>
            <div className='pl-5 border-l border-black' >
                <Paragraph className={'max-w-[668px]'} >
                We are a goodness brand that strives for spreading the joy through good food. Filling the gap between today’s fast paced generation that wants to be nourished but has to settle for subpar, tasteless, processed nutrition available in the market. Shidori is our effort to share the goodness of mother’s hand packaged in jars. Our products are made from specially sourced high grade ingredients, abundant of  pure Ghee and whole lotta love!
                </Paragraph>
            </div>
        </div>
    </div>
  )
}
