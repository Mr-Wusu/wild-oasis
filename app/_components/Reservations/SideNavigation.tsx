import Link from "next/link";
import { FaHome, FaCalendarDay, FaUser } from "react-icons/fa";
import SignOutButton from "@/app/_components/Reservations/SignOutButton";
function SideNavigation  ()  {
  const navLinks = [
    {
      name: "Home",
      href: "/account",
      icon: <FaHome className="h-5 w-5 text-primary-10" />,
    },
    {
      name: "Reservations",
      href: "/account/reservations",
      icon: <FaCalendarDay className="h-5 w-5 text-primary-10" />,
    },
    {
      name: "Guest profile",
      href: "/account/profile",
      icon: <FaUser className="h-5 w-5 text-primary-10" />,
    },
  ];

 return (
 <nav className="pt-30 bg-primary-1 pl-8 text-primary-10 shadow-sm shadow-primary-3 border-r border-primary-2">
    <ul className="flex flex-col gap-2 text-lg h-full font-josefineSans">
      {navLinks.map((link)=><li key={link.name}>
        <Link href={link.href}
        className={`py-3 px-5 hover:bg-primary-4 transition-colors flex items-center gap-4 font-semibold text-primary-10 duration-300 focus:ring-2 ring-primary-10 focus:outline-none`}>
          {link.icon}
          {link.name}
        </Link>
      </li>)}
      <li className="mt-16 ">
        <SignOutButton/>
      </li>
    </ul>
 </nav>
 )
};

export default SideNavigation;
