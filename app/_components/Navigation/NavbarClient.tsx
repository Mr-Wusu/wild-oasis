"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import { useHomePage } from "@/contexts/homePageContext";
import { IoMdArrowDropdown } from "react-icons/io";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { ClipLoader } from "react-spinners";

const navLinks = [
  { href: "/cabins", label: "Cabins" },
  { href: "/about", label: "About" },
  { href: "/account", label: "Account" },
  { href: "/guests", label: "Guest Area" },
];

const staggerDelays = [
  "delay-[80ms]",
  "delay-[140ms]",
  "delay-[200ms]",
  "delay-[260ms]",
] as const;

function NavbarClient() {
  const { isHomePage, isScrolled } = useHomePage();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const { data: session, isPending, refetch } = authClient.useSession();
  console.log(session, isPending);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (menuOpen) setMenuOpen(false);
  }

  useEffect(() => {
  if (pathname === "/account" || pathname === "/cabins") {
    refetch();
  }
}, [pathname, refetch]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isTransparent = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={`
          fixed w-full z-50 px-4 md:px-8 py-3 md:py-2.5
          flex items-center justify-between
          transition-all duration-300
          ${
            isTransparent
              ? "bg-transparent text-primary-3 shadow-none"
              : "bg-primary-1 text-primary-10 shadow-sm shadow-primary-10"
          }
        `}
      >
        <Logo />

        <ul className="hidden md:flex items-center space-x-1 text-xl font-josefineSans">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`
                  relative px-3 py-2 rounded-sm
                  transition-colors duration-200
                  focus:ring-2 ring-primary-9 focus:outline-none focus:rounded-sm
                  after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px
                  after:scale-x-0 after:transition-transform after:duration-300
                  hover:after:scale-x-100
                  ${
                    isTransparent
                      ? "hover:text-accent-400 after:bg-accent-400"
                      : "hover:text-accent-600 after:bg-accent-600"
                  }
                  ${pathname === href ? "after:scale-x-100 font-semibold" : ""}
                `}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        {session ? (
          <div className="flex">
            {session.user.image ? (
              <div className="h-10 w-10 rounded-full relative overflow-hidden">
                <Image
                  alt={`${session.user.firstname}'s profile photo`}
                  src={session.user.image}
                  fill
                />
              </div>
            ) : (
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary-5 text-primary-1 cursor-pointer">
                {`${session.user.name[0]}${session.user.name.split(" ")[1][0]}`}
              </div>
            )}

            <div className="rounded-full h-5 w-5 bg-primary-5 border-2 border-primary-1 self-end -ml-3.5 mt-6 cursor-pointer text-primary-1">
              <IoMdArrowDropdown className="h-4 w-4" />
            </div>
          </div>
        ) : isPending ? (
          <ClipLoader
            color="#D92D2C"
            size={23}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <Link href="/auth/sign-in" className="bg-primary-8 px-2.5 py-1.5 font-josefineSans text-lg text-primary-1 rounded-sm shadow-sm shadow-black/10 hover:bg-primary-7 transition-colors duration-300 ease-in-out">Sign in</Link>
        )}

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          type="button"
          className={`
    md:hidden flex flex-col justify-center items-center
    w-10 h-10 gap-1.5 rounded-sm z-60
    focus:outline-none focus:ring-2 ring-primary-9
    transition-colors duration-200
    ${isTransparent && !menuOpen ? "text-primary-4" : "text-primary-10"}
  `}
        >
          <span
            className={`
              block h-0.5 w-6 rounded-full bg-current
              transition-all duration-300 origin-center
              ${menuOpen ? "translate-y-2 rotate-45" : ""}
            `}
          />
          <span
            className={`
              block h-0.5 w-6 rounded-full bg-current
              transition-all duration-300
              ${menuOpen ? "opacity-0 scale-x-0" : ""}
            `}
          />
          <span
            className={`
              block h-0.5 w-6 rounded-full bg-current
              transition-all duration-300 origin-center
              ${menuOpen ? "-translate-y-2 -rotate-45" : ""}
            `}
          />
        </button>
      </header>

      <div
        onClick={() => setMenuOpen(false)}
        className={`
          md:hidden fixed inset-0 z-40 bg-primary-950/60 backdrop-blur-sm
          transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        aria-hidden="true"
      />

      <nav
        aria-label="Mobile navigation"
        className={`
          md:hidden fixed top-0 right-0 h-full w-72 z-50
          bg-amber-50 text-primary-10
          flex flex-col pt-24 pb-10 px-8
          shadow-2xl shadow-primary-950
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <span className="block w-10 h-0.5 bg-accent-500 mb-8" />

        <ul className="flex flex-col gap-1 font-josefineSans">
          {navLinks.map(({ href, label }, index) => (
            <li
              key={href}
              className={`
                transition-all duration-300
                ${
                  menuOpen
                    ? `opacity-100 translate-x-0 ${staggerDelays[index]}`
                    : "opacity-0 translate-x-6 delay-[0ms]"
                }
              `}
            >
              <Link
                href={href}
                className={`
                  flex items-center gap-3 py-3 text-2xl tracking-wide
                  border-b border-primary-800/20
                  transition-colors duration-200
                  hover:text-accent-600 hover:pl-1
                  focus:outline-none focus:text-accent-600
                  ${pathname === href ? "text-accent-600 font-semibold" : ""}
                `}
              >
                <span
                  className={`
                    w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0
                    transition-opacity duration-200
                    ${pathname === href ? "opacity-100" : "opacity-0"}
                  `}
                />
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <span className="block w-6 h-0.5 bg-accent-500/40 mb-2" />
          <span className="block w-12 h-0.5 bg-accent-500/20" />
        </div>
      </nav>
    </>
  );
}

export default NavbarClient;
