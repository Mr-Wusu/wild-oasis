"use client"

import Image from "next/image";

function UpdateProfileForm  ({children}:{children: React.ReactNode})  {
    const countryFlag = "/bg.png";

 return (
   <form className="pt-8 pb-6 px-12 text-lg max-w-3xl mx-auto flex gap-6 flex-col bg-primary-1 rounded-2xl">
     <div className="space-y-2">
       <label className="text-primary-10" htmlFor="fullname">
         Full name
       </label>
       <input
         id="fullname"
         disabled={false}
         className="px-5 py-3 bg-primary-200 bg-white text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 focus:ring-2 focus:ring-primary-9 focus:outline-none"
       />
     </div>

     <div className="space-y-2">
       <label className="text-primary-10" htmlFor="email">
         Email address
       </label>
       <input
         id="email"
         disabled={false}
         className="px-5 py-3 bg-white text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 focus:ring-2 focus:ring-primary-9 focus:outline-none"
       />
     </div>

     <div className="space-y-2">
       <div className="flex items-center justify-between">
         <label className="text-primary-10" htmlFor="nationality">
           Where are you from?
         </label>
         <Image
           src={countryFlag}
           alt="Country flag"
           className="rounded-sm"
           width={30}
           height={55}
           style={{ width: "auto", height: "auto" }}
         />
       </div>

       {children}
       
     </div>

     <div className="space-y-2">
       <label className="text-primary-10" htmlFor="nationalID">
         National ID number
       </label>
       <input
         id="nationalID"
         name="nationalID"
         className="px-5 py-3 bg-white text-primary-800 w-full shadow-sm rounded-sm focus:ring-2 focus:ring-primary-9 focus:outline-none"
       />
     </div>

     <div className="flex justify-end items-center gap-6">
       <button
         className="bg-primary-6 hover:bg-primary-7 duration-300 rounded-md px-8 py-2.5 text-white font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 cursor-pointer"
         type="submit"
       >
         Update profile
       </button>
     </div>
   </form>
 );
};

export default UpdateProfileForm;
