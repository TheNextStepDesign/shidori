
import Web from "./Web";
import Mobile from "./Mobile";
import Body from "@/components/Body";

export default function HeroContent() {
  return (
    <div className='-mt-[120px] sm:-mt-[13%] md:-mt-[10%] lg:-mt-[10%] xl:-mt-[6%] ' >
    <Body>
        <div className="bg-white opacity-90 rounded-xl md:rounded-3xl" >
        <Web />
        <Mobile />
        </div>
    </Body>
    </div>
  )
}
