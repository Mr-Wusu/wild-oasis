import { getCabinById } from "@/lib/authService";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { notFound } from "next/navigation";

// PLACEHOLDER DATA

type PageProps = {
  params: {
    cabinId: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { cabinId } = await params;
  const cabin = await getCabinById(cabinId);
  if (!cabin) {
    notFound(); // import { notFound } from "next/navigation"
  }

  const {  name, maxCapacity, image, description } =
    cabin;

  return (
    <div className="max-w-6xl mx-auto pt-28 text-primary-10 ">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image src={image} alt={`Cabin ${name}`} fill/>
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-5xl mb-5 bg-primary-950 p-6 pb-1 w-[150%]">
            {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10 font-josefineSans">{description}</p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg font-josefineSans">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg font-josefineSans">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg font-josefineSans">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="-mt-11">
        <h2 className="text-5xl font-semibold text-center font-josefineSans">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
