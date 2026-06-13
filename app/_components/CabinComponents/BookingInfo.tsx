import { getCabinById } from "@/lib/authService";

async function BookingInfo({cabinId}: {cabinId: string})  {
  const cabin = await getCabinById(cabinId);
 return (
   <div className="w-full lg:w-2/5 bg-primary-2 h-fit rounded-md overflow-hidden self-end">
     <h3 className="w-full bg-primary-3 text-primary-8 px-7 py-1.5">
       Logged in as
     </h3>
     <form action="" className="px-7 py-5 flex flex-col gap-5">
       <div className="flex flex-col gap-1">
         <label htmlFor="guests">How many guests?</label>
         <select
           className="w-fit py-1 px-0.5 focus:outline-none border focus:ring rounded-sm bg-primary-1"
           aria-label="Number of guests"
           id="guests"
         >
           {Array.from({ length: cabin?.maxCapacity ?? 0 }, (_, i) => (
             <option key={i + 1} value={i + 1}>
               {i + 1}
             </option>
           ))}
         </select>
       </div>
       <div className="flex flex-col gap-1">
         <label htmlFor="info">Anything we should know about your stay?</label>
         <textarea
           className="bg-primary-1 focus:outline-none border p-1.5 rounded-sm focus:ring"
           rows={4}
           name="info"
           id="info"
         ></textarea>
       </div>
       <div className="flex">
         <p>Start by selecting dates</p>
         <button
           className="bg-primary-6 text-primary-1 ml-auto px-2.5 py-1.5 rounded-sm cursor-pointer hover:bg-primary-5 transition-colors duration-200 ease-out"
           type="submit"
         >
           Reserve now
         </button>
       </div>
     </form>
   </div>
 );
};

export default BookingInfo;
