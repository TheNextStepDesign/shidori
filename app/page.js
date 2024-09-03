import BottomHero from "@/components/landing/bottomHero/bottomHero";
import Featured from "@/components/landing/fetured/Featured";
import HeroBanner from "@/components/landing/heroBanner/HeroBanner";
import HeroContent from "@/components/landing/heroContent/HeroContent";
import Testimonial from "@/components/landing/testimonial/Testimonial";
import Spacing from "@/components/layout/Spacing";



export const metadata = {
  title: "Shidori",
  description: "Shidori page description",
};

export default function Home() {
  return (
    <main  >
      <HeroBanner/>
      <Spacing/>
      <HeroContent/>
      <Spacing/>
      <Featured/>
      <Spacing/>
      <Testimonial/>
      <Spacing/>
      <BottomHero/>
    </main>
  )
}
