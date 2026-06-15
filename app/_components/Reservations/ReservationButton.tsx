"use client"

import { useReservation } from "@/contexts/ReservationContext";

function ReservationButton ()  {
  const {range} = useReservation()
  console.log(range); 
   
  const showButton = range === undefined ? true: false;
  
 return (
   <button
     className="bg-primary-7 text-primary-1 ml-auto px-2.5 py-1.5 rounded-sm cursor-pointer hover:bg-primary-6 transition-colors duration-200 ease-out disabled:bg-primary-5"
     type="submit"
     disabled={showButton}
   >
     Reserve now
   </button>
 );
};

export default ReservationButton;
