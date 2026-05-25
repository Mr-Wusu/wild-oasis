"use client"
import Link from "next/link";
import Logo from "../Logo";
import { useHomePage } from "@/contexts/homePageContext";

function NavbarClient  ()  {
  const { isHomePage, isScrolled } = useHomePage();
 return (
   <header
     className={`shadow-xs padding-x py-2.5 flex justify-between fixed w-full z-50 ${isHomePage && !isScrolled ? "shadow-primary-2 bg-transparent text-primary-4" : "shadow-primary-10 bg-amber-50 text-primary-10"}`}
   >
     <Logo />

     <ul className="flex items-center space-x-3.5 text-xl  font-josefineSans">
       <li>
         <Link
           href="/cabins"
           className="cursor-pointer p-2 focus:ring-2 ring-primary-9 focus:outline-none focus:rounded-sm"
         >
           Cabins
         </Link>
       </li>
       <li>
         <Link
           href="/about"
           className="cursor-pointer p-2 focus:ring-2 ring-primary-9 focus:outline-none focus:rounded-sm"
         >
           About
         </Link>
       </li>
       <li>
         <Link
           href="/account"
           className="cursor-pointer p-2 focus:ring-2 ring-primary-9 focus:outline-none focus:rounded-sm"
         >
           Account
         </Link>
       </li>
       <li>
         <Link
           href="/guests"
           className="cursor-pointer p-2 focus:ring-2 ring-primary-9 focus:outline-none focus:rounded-sm"
         >
           Guest area
         </Link>
       </li>
     </ul>
   </header>
 );
};

export default NavbarClient;
