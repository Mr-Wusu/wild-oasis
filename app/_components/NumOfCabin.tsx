import { getCabins } from "@/lib/authService";

// export const revalidate = 15;

async function NumOfCabin  ()  {
    const cabins = await getCabins();
    const totalNumOfCabins = cabins.length;
 return <span className="mr-1.5">{totalNumOfCabins}</span>;
};

export default NumOfCabin;
