import { H1 } from "@/components/typography/Typography";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="relative">
      <div className="h-[550px] bg-gray-400">
        {/* web image */}

        <Image
          src="/images/landing/webHero.jpg"
          alt="heroWeb"
          width={1280}
          height={550}
          className="hidden md:block  h-full w-full object-cover object-center"
        />

        {/* mobile image */}

        <Image
          src="/images/landing/mobHero.jpg"
          alt="heroMob"
          width={390}
          height={550}
          className="md:hidden  h-full w-full object-cover object-center"
        />
      </div>

      {/* web text */}
      <h1
        className={
          "hidden md:block absolute top-10 left-1/2 transform -translate-x-1/2 text-accent text-h1 font-semibold"
        }
      >
        Homemade - wholesome - tassty potly of goodness.
      </h1>

      {/* mob text */}

      <h1
        className={
          "md:hidden absolute top-3 left-3 text-accent text-h1 font-semibold "
        }
      >
        <p>Homemade</p>
        <p>wholesome</p>
        <p>tassty potly of goodness.</p>
      </h1>
    </div>
  );
}
