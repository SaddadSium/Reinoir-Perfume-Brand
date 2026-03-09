"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SHOP", href: "/shop" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    //Fixing Navbar
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between px-8 py-4 bg-black/40 backdrop-blur-xl border border-[#c59d5f]/40 rounded-full w-full max-w-5xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 drop-shadow-md"
        >
          {/* Logo Image */}
          <img
            src="/images/logo.png"
            alt="REINOIR Logo"
            className="h-8 md:h-10 w-auto"
          />
          {/* Brand Text */}
          <span className="text-2xl md:text-3xl font-bold tracking-[0.1em] text-[#c59d5f] font-[family-name:var(--font-playfair)] hidden sm:block">
            REINOIR
          </span>
        </Link>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-bold tracking-widest transition-all duration-300 group
                  ${isActive ? "text-[#c59d5f]" : "text-[#ebdcb7] hover:text-[#c59d5f]"}
                `}
              >
                {link.name}

                {/* Hover & Active Underline Animation */}
                <span
                  className={`absolute -bottom-2 left-1/2 h-[2px] bg-[#c59d5f] transition-all duration-300 -translate-x-1/2 shadow-[0_0_8px_rgba(197,157,95,0.8)]
                  ${isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}
                `}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-[#c59d5f] cursor-pointer hover:scale-110 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
}
