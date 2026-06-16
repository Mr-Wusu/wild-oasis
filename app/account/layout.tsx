import SideNavigation from "@/app/_components/Reservations/SideNavigation";
import { Metadata } from "next";
import { ReactNode } from "react";
// import { getSession } from "@/lib/auth-getSession";
// import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "The Wild Oasis",
  description:
    "This is the account related specifics!",
};


async function layout({children}: {children: ReactNode})  {
  
 return (
 <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
  <SideNavigation/>
  {children}
 </div>
 )
};

export default layout;
