import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Cabin } from "@/generated/prisma";
import { getBlurDataURL } from "@/lib/cloudinary";

type CabinCardProps = {
  cabin: Cabin;
};

function CabinCard({ cabin }: CabinCardProps) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div
      className="
      flex flex-col max-w-100
      sm:flex-row sm:max-w-115 mx-auto sm:h-55
      lg:w-116 lg:h-63
      min-[1200px]:flex-col min-[1200px]:w-full min-[1200px]:h-auto
      border border-primary-800 bg-primary-950 overflow-hidden rounded-sm
      group transition-all duration-300 hover:border-primary-700
    "
    >
      <div
        className="
        relative h-50 w-full shrink-0 overflow-hidden
        sm:h-auto sm:w-53
        lg:w-48 lg:h-full
        min-[1200px]:w-full min-[1200px]:h-40
      "
      >
        <Image
          src={image}
          alt={`Cabin ${name}`}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 180px, 33vw"
          placeholder="blur"
          blurDataURL={getBlurDataURL(image)}
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col grow justify-between overflow-hidden pt-2">
        <div className="pt-4 pb-3 px-5 flex flex-col grow justify-center">
          <h3 className="text-accent-500 font-semibold text-lg md:text-xl lg:text-2xl mb-1 tracking-wide ">
            {name}
          </h3>

          <div className="flex gap-2 items-center mb-3">
            <UsersIcon className="h-4 w-4 text-primary-600 shrink-0" />
            <p className="text-base text-primary-200">
              For up to{" "}
              <span className="font-bold text-primary-10">{maxCapacity}</span>{" "}
              guests
            </p>
          </div>

          <div className="flex gap-2 items-baseline mb-3 mt-auto lg:ml-5">
            {discount > 0 ? (
              <>
                <span className="text-xl font-light text-primary-10 ">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-medium text-sm text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl font-light text-primary-10 ">
                ${regularPrice}
              </span>
            )}
            <span className="text-sm text-primary-300">/ night</span>
          </div>
        </div>

        <div className="border-t border-primary-800 text-right">
          <a
            href={`/cabins/${id}`}
            className="w-full py-3 px-5 inline-block text-center text-xs font-semibold tracking-wider uppercase text-primary-200 hover:bg-accent-600 hover:text-primary-950 transition-all duration-300"
          >
            Details & reservation &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
