import { Base } from "../typography/Typography";

export default function MovingText() {
  const textItems = ["| home-made", "pure-veg", "wholesome", "yummy ."];
  const spacedText = textItems.join("   |   ");
  
  return (
    <div className="bg-accent overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {[...Array(30)].map((_, index) => (
          <Base key={index} className="inline-block">
            {spacedText}
          </Base>
        ))}
      </div>
      <div className="inline-block animate-marquee2">
        {[...Array(30)].map((_, index) => (
          <Base key={index} className="inline-block">
            {spacedText}
          </Base>
        ))}
      </div>
    </div>
  )
}
