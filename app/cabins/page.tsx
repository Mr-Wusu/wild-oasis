import CabinCard from "@/app/_components/CabinCard";
import { Cabin } from "@/generated/prisma";
import { getCabins } from "@/lib/authService";

export default async function Cabins() {
  const cabins: Cabin[] = await getCabins();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-24 text-primary-10 font-josefineSans animate-fadeIn">
      {/* Header */}
      <header className="max-w-3xl mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-accent-400 mb-4 tracking-tight">
          Our Luxury Cabins
        </h1>
        <p className="text-primary-200 text-base sm:text-lg leading-relaxed">
          Cozy yet luxurious cabins, located right in the heart of the Italian
          Dolomites. Imagine waking up to beautiful mountain views, spending
          your days exploring the dark forests around, or just relaxing in your
          private hot tub under the stars. Enjoy nature&apos;s beauty in your
          own little home away from home. The perfect spot for a peaceful, calm
          vacation. Welcome to paradise.
        </p>
      </header>

      {/* Grid
          < 1024px  → 1 column,  cards full width, stacked
          1024px+   → 2 columns, cards fixed 464×269, grid shrinks to fit and centers
          1200px+   → 3 columns, cards fill their cells, vertical layout
      */}
      {cabins.length > 0 ? (
        <div
          className="
          grid grid-cols-1 gap-6
          lg:grid-cols-2 lg:gap-8 lg:w-fit lg:mx-auto
          min-[1200px]:grid-cols-3 min-[1200px]:w-full min-[1200px]:mx-0
        "
        >
          {cabins.map((cabin) => (
            <div
              key={cabin.id}
              className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CabinCard cabin={cabin} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-primary-900/10 rounded-lg border border-dashed border-primary-200/20">
          <p className="text-primary-200 text-lg">
            No cabins found at the moment. Please check back later!
          </p>
        </div>
      )}
    </div>
  );
}
