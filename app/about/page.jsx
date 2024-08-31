import Spacing from "@/components/layout/Spacing"
import StoryBottomHero from "@/components/story/storyBottomHero/StoryBottomHero"
import StoryHero from "@/components/story/storyHero/StoryHero"
import StoryQuote from "@/components/story/storyQuote/StoryQuote"

export const metadata = {
    title: "Story",
    description: "Shidori story page",
}


export default function story() {
  return (
    <main>
      <StoryHero/>
       <Spacing/>
       <StoryQuote/>
       <Spacing/>
       <StoryBottomHero/>
       <Spacing/>
    </main>
  )
}
