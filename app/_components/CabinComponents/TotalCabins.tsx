import { getCabins } from "@/lib/authService";
async function TotalCabins  ()  {
    const cabins = await getCabins();
    const totalCabins = cabins.length;
 return <span className="mr-1.5">{totalCabins}</span>;
};

export default TotalCabins;
