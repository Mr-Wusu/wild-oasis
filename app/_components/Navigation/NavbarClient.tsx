"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import { useHomePage } from "@/contexts/homePageContext";

const navLinks = [
  { href: "/cabins", label: "Cabins" },
  { href: "/about", label: "About" },
  { href: "/account", label: "Account" },
  { href: "/guests", label: "Guest Area" },
];

function NavbarClient() {
  const { isHomePage, isScrolled } = useHomePage();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isTransparent = isHomePage && !isScrolled;

  return (
    <>
      {/* ─── Main Header ─────────────────────────────────────────────────────── */}
      <header
        className={`
          fixed w-full z-50 px-4 md:px-8 py-3 md:py-2.5
          flex items-center justify-between
          transition-all duration-300
          ${
            isTransparent
              ? "bg-transparent text-primary-4 shadow-none"
              : "bg-amber-50 text-primary-10 shadow-sm shadow-primary-10"
          }
        `}
      >
        <Logo />

        {/* ── Desktop Nav ───────────────────────────────────────────────────── */}
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

        {/* ── Hamburger Button (mobile only) ───────────────────────────────── */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className={`
            md:hidden flex flex-col justify-center items-center
            w-10 h-10 gap-1.5 rounded-sm z-60
            focus:outline-none focus:ring-2 ring-primary-9
            transition-colors duration-200
            ${isTransparent && !menuOpen ? "text-primary-4" : "text-primary-10"}
          `}
        >
          {/* Three bars that morph into an X */}
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

      {/* ─── Mobile Drawer Overlay ───────────────────────────────────────────── */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`
          md:hidden fixed inset-0 z-40 bg-primary-950/60 backdrop-blur-sm
          transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        aria-hidden="true"
      />

      {/* ─── Mobile Drawer Panel ─────────────────────────────────────────────── */}
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
        {/* Decorative accent line */}
        <span className="block w-10 h-0.5 bg-accent-500 mb-8" />

        <ul className="flex flex-col gap-1 font-josefineSans">
          {navLinks.map(({ href, label }, index) => (
            <li
              key={href}
              style={{
                transitionDelay: menuOpen ? `${index * 60 + 80}ms` : "0ms",
              }}
              className={`
                transition-all duration-300
                ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
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
                {/* Active indicator dot */}
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

        {/* Bottom decoration */}
        <div className="mt-auto">
          <span className="block w-6 h-0.5 bg-accent-500/40 mb-2" />
          <span className="block w-12 h-0.5 bg-accent-500/20" />
        </div>
      </nav>
    </>
  );
}

export default NavbarClient;
