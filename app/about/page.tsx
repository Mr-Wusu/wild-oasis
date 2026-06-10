import Image from "next/image";
import Link from "next/link";
import about1 from "@/public/about-1.jpg";
import about2 from "@/public/about-2.jpg";

import { Suspense } from "react";
import TotalCabins from "../_components/TotalCabins";

// export const revalidate = 86400;

export default async function About() {

  return (
    <div
      className="grid grid-cols-1 gap-y-16 text-base items-center px-6 pt-26 font-josefineSans text-primary-10
                    sm:px-10 sm:py-24 sm:text-lg
                    md:grid-cols-6 md:gap-x-10 md:gap-y-14 md:px-12
                    lg:gap-x-15 lg:gap-y-20 lg:px-16 lg:py-28"
    >
      {/* Text Block 1 */}
      <div className="md:col-span-3 lg:col-span-3">
        <h1 className="text-3xl mb-6 text-accent-400 font-medium sm:text-4xl sm:mb-10">
          Welcome to The Wild Oasis
        </h1>
        <div className="space-y-5 sm:space-y-7">
          <p>
            Where nature&lsquo;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&lsquo;s not just about the luxury
            cabins. It&lsquo;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <div>
            Our <Suspense fallback={<span className="mr-1">loading...</span>}><TotalCabins/></Suspense> luxury cabins provide a cozy base, but the real
            freedom and peace you&lsquo;ll find in the surrounding mountains.
            Wander through lush forests, breathe in the fresh air, and watch the
            stars twinkle above from the warmth of a campfire or your hot tub.
          </div>
          <p>
            This is where memorable moments are made, surrounded by
            nature&lsquo;s splendor. It&lsquo;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      {/* Image Block 1 */}
      <div className="relative h-64 w-full sm:h-80 md:col-span-3 md:h-96 lg:col-span-3 lg:h-99">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-primary-3/10 to-primary-5/10 z-40 pointer-events-none" />
        <Image
          src={about1}
          alt="Family sitting around a fire pit"
          fill
          className="object-cover"
          placeholder="blur"
        />
      </div>

      {/* Text Block 2 */}
      <div className="md:col-span-3 md:col-start-4 lg:col-span-3 lg:col-start-4 order-1 md:order-0">
        <h1 className="text-3xl mb-6 text-accent-400 font-medium sm:text-4xl sm:mb-10">
          Managed by our family since 1962
        </h1>
        <div className="space-y-6 sm:space-y-8">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&lsquo;ve maintained the essence of The Wild
            Oasis, blending the timeless beauty of the mountains with the
            personal touch only a family business can offer. Here, you&lsquo;re
            not just a guest; you&lsquo;re part of our extended family. So join
            us at The Wild Oasis soon, where tradition meets tranquility, and
            every visit is like coming home.
          </p>
        </div>
      </div>

      {/* Image Block 2 */}
      <div className="relative h-64 w-full sm:h-80 md:col-span-3 md:h-96 lg:col-span-3 lg:h-105 order-2 md:order-0 md:row-start-2">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-primary-3/10 to-primary-5/10 z-40 pointer-events-none" />
        <Image
          fill
          src={about2}
          alt="Family that manages The Wild Oasis"
          className="object-cover"
          placeholder="blur"
        />
      </div>

      {/* Centered / Aligned Link Element */}
      <div className="col-span-1 md:col-span-6 flex justify-center items-start h-full">
        <Link
          href="/cabins"
          className="inline-block mt-2 bg-accent-500 px-6 py-3 text-primary-10 hover:text-primary-8 text-base font-semibold hover:bg-accent-600 transition-all sm:mt-4 sm:px-8 sm:text-lg"
        >
          Explore our luxury cabins
        </Link>
      </div>
    </div>
  );
}
