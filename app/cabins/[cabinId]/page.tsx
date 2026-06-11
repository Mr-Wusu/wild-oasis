import { notFound } from "next/navigation";
import {
  getCabinById,
  getBookedDatesByCabinId,
  getSettings,
} from "@/lib/authService";
import { UsersIcon, MapPinIcon } from "@heroicons/react/24/solid";
import BackArrow from "@/app/_components/BackArrow";
import { Suspense } from "react";
import LazyImage from "@/app/_components/LazyImage";
import ImageSkeleton from "@/app/_components/ImageSkeleton";
import DateSelector from "@/app/_components/DateSelector";

type Props = {
  params: { cabinId: string };
};

export default async function CabinPage({ params }: Props) {
  const { cabinId } = params;
  const [cabin, bookedDatesResult, settings] = await Promise.all([
    getCabinById(cabinId),
    getBookedDatesByCabinId(cabinId),
    getSettings(),
  ]);

  if (!cabin) {
    notFound();
  }

  const bookedDates: Date[] = Array.isArray(bookedDatesResult)
    ? bookedDatesResult
    : [];

  const { name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="max-w-7xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8  md:py-16 lg:py-20 md:pt-20 font-josefineSans text-primary-10 flex flex-col lg:gap-6 items-center justify-center ">
      <div
        className="
        flex flex-col shadow-md shadow-primary-3 max-w-md w-[85vw] mx-auto gap-4.5  rounded-sm border          md:max-w-3xl md:w-[90vw] h-145 border-primary-800 
        md:flex-row md:gap-10 md:items-start
        lg:max-w-4xl bg-primary-950 md:h-100 lg:h-98     
        lg:gap-12
        min-:gap-16
        bg-primary-1 relative
      "
      >
        <BackArrow />
        <div
          className="
          relative h-64 w-full shrink-0 overflow-hidden
          
          md:h-full md:w-1/2 md:max-w-lg
          lg:h-full
          
        "
        >
          <Suspense fallback={<ImageSkeleton />}>
            <LazyImage name={name} image={image} />
          </Suspense>
        </div>

        <div className="flex flex-col grow px-5 pb-8 md:px-0 md:pr-8 md:py-8 lg:pr-12 lg:py-10">
          <h1
            className="text-3xl font-semibold text-accent-500 tracking-wide mb-3
                         sm:text-4xl
                         md:text-2xl md:mb-2
                         lg:text-3xl lg:mb-3
                         min-:text-4xl"
          >
            {name}
          </h1>

          <div className="flex gap-10">
            <div className="flex flex-col mb-6 md:mb-5 md:gap-2.5">
              <div className="flex gap-2 items-center">
                <UsersIcon className="h-5 w-5 text-primary-600 shrink-0 md:h-4 md:w-4" />
                <p className="text-lg text-primary-200 md:text-base">
                  For up to <span className="font-bold text-primary-10">
                    {maxCapacity}
                  </span> guests
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <MapPinIcon className="h-5 w-5 text-primary-600 shrink-0 md:h-4 md:w-4" />
                <p className="text-lg text-primary-200 md:text-base">
                  Italian Dolomites
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-end mb-8 md:mb-6">
              {discount > 0 ? (
                <>
                  <span className="text-3xl font-bold text-accent-400 md:text-2xl lg:text-3xl">
                    ${regularPrice - discount}
                  </span>
                  <div>
                    <span className="text-xl line-through md:text-lg lg:text-xl">
                      ${regularPrice}
                    </span>
                    <span className="text-primary-200 text-base md:text-sm">
                      /night
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <span className="text-3xl font-bold text-accent-400 md:text-2xl lg:text-3xl">
                    ${regularPrice}
                  </span>
                  <span className="text-primary-200 text-base md:text-sm">
                    /night
                  </span>
                </>
              )}
            </div>
          </div>
          <div>
            <div className="mb-8 md:mb-6">
              <h2 className="text-xl font-semibold text-accent-400 mb-1 md:text-lg md:mb-2">
                About this cabin
              </h2>
              <p className="text-base leading-relaxed text-primary-200 md:text-sm lg:text-base ">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl">Reserve {name} today. Pay on arrival</h1>
        <DateSelector settings={settings} cabin={cabin} bookedDates={bookedDates} />
      </div>
    </div>
  );
}
