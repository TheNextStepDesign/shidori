import { Base } from "../typography/Typography";

export default function MovingText() {
  const text = "home-made | pure-veg | wholesome | yummy | ";
  
  return (
    <div className="bg-accent overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {[...Array(30)].map((_, index) => (
          <Base key={index} className="inline-block">
            {text}
          </Base>
        ))}
      </div>
      <div className="inline-block animate-marquee2">
        {[...Array(30)].map((_, index) => (
          <Base key={index} className="inline-block">
            {text}
          </Base>
        ))}
      </div>
    </div>
  )
}