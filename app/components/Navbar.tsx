"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#c59d5f]/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-[family-name:var(--font-playfair)] text-[#c59d5f] tracking-widest font-bold drop-shadow-lg"
        >
          REINOIR
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-[#ebdcb7] hover:text-[#c59d5f] text-sm uppercase tracking-widest transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[#ebdcb7] hover:text-[#c59d5f] text-sm uppercase tracking-widest transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/shop"
            className="text-[#ebdcb7] hover:text-[#c59d5f] text-sm uppercase tracking-widest transition-colors font-medium"
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className="text-[#ebdcb7] hover:text-[#c59d5f] text-sm uppercase tracking-widest transition-colors font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-[#c59d5f] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1a0103] border-b border-[#c59d5f]/30 absolute w-full shadow-2xl">
          <div className="flex flex-col px-6 py-6 space-y-6 text-center">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-[#ebdcb7] hover:text-[#c59d5f] text-base uppercase tracking-widest font-bold"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-[#ebdcb7] hover:text-[#c59d5f] text-base uppercase tracking-widest font-bold"
            >
              About
            </Link>
            <Link
              href="/shop"
              onClick={() => setIsOpen(false)}
              className="text-[#ebdcb7] hover:text-[#c59d5f] text-base uppercase tracking-widest font-bold"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-[#ebdcb7] hover:text-[#c59d5f] text-base uppercase tracking-widest font-bold"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
