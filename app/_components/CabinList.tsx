import CabinCard from "./CabinCard";
import { Cabin } from "@/generated/prisma";
import { getCabins } from "@/lib/authService";
import { unstable_noStore as noStore } from "next/cache";
// import Filter from "./Filter";

async function CabinList({ filter }: { filter: string }) {
  noStore();
  const cabins: Cabin[] = await getCabins();

  let displayedCabins: Cabin[];

  if (filter === "small") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity < 3);
  } else if (filter === "medium") {
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 3 && cabin.maxCapacity < 6,
    );
  } else if (filter === "large") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 6 && cabin.maxCapacity <= 12);
  } else {
    displayedCabins = cabins;
  }

  if (!cabins.length) return null;
  return (
    <>
      
      <div
        className="
          grid grid-cols-1 gap-6
          lg:grid-cols-2 lg:gap-8 lg:w-fit lg:mx-auto
          min-[1200px]:grid-cols-3 min-[1200px]:w-full min-[1200px]:mx-0
        "
      >
        {displayedCabins.map((cabin) => (
          <div
            key={cabin.id}
            className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <CabinCard cabin={cabin} />
          </div>
        ))}
      </div>
    </>
  );
}

export default CabinList;
