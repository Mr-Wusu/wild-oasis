import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import { ClipLoader } from "react-spinners";
import Filter from "../_components/Filter";

// export const revalidate = 15;
interface CabinPageProps {
  searchParams: {
    capacity: string;
  };
}

export default async function Cabins({ searchParams }: CabinPageProps) {
  const params = await searchParams;
  const filter = params?.capacity ?? "all";
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
      <Filter/>
      <Suspense
        fallback={
          <div className="flex flex-col h-full items-center justify-center text-primary-10">
            <ClipLoader
              color="#D92D2C"
              size={40}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        }
        key={filter}
      >
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
