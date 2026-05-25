"use client";
import Image from "next/image";
import Link from "next/link";
import { useHomePage } from "@/contexts/homePageContext";

function Logo() {
    const { isHomePage, isScrolled } = useHomePage();
  return (
    <Link href="/" className="flex items-center gap-2 z-10 focus:ring-2 focus:rounded-sm ring-primary-9 focus:outline-none px-2">
      <Image
        src="/logo.png"
        height="50"
        width="50"
        alt="The Wild Oasis logo"
        loading="eager"
      />
      <span
        className={`text-3xl font-semibold  font-logo tracking-wider  ${isHomePage && !isScrolled ? " text-primary-4" : "text-primary-10"}`}
      >
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
