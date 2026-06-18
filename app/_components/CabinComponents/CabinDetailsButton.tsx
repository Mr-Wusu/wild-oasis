"use client"
// import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

function CabinDetailsButton  ({id}:{id:string})  {
  const router = useRouter()
  
  function handleReservationDetails(){
    // /cabins/${id}
    // const { data: session } = await authClient.getSession();
    // if(!session) router.push("/auth/sign-in")
    router.push(`/cabins/${id}`);
    
  }
 return (
   <button
     onClick={handleReservationDetails}
     className="w-full py-3 px-5 inline-block text-center text-xs font-semibold tracking-wider uppercase text-primary-200 hover:bg-primary-7 hover:text-primary-1 transition-all duration-300 outline-none"
   >
     Details & reservation &rarr;
   </button>
 );
};

export default CabinDetailsButton;
