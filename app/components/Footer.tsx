import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-[#c59d5f]/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-[family-name:var(--font-playfair)] text-[#c59d5f] tracking-widest font-bold mb-2 drop-shadow-lg">
            REINOIR
          </h2>
          <p className="text-[#ebdcb7]/60 text-xs tracking-[0.2em] uppercase">
            Luxury in Presence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <Link
            href="/"
            className="text-[#ebdcb7]/80 hover:text-[#c59d5f] text-sm uppercase tracking-widest transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[#ebdcb7]/80 hover:text-[#c59d5f] text-sm uppercase tracking-widest transition-colors"
          >
            About
          </Link>
          <Link
            href="/shop"
            className="text-[#ebdcb7]/80 hover:text-[#c59d5f] text-sm uppercase tracking-widest transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className="text-[#ebdcb7]/80 hover:text-[#c59d5f] text-sm uppercase tracking-widest transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-[#c59d5f]/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#ebdcb7]/40 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} REINOIR. All rights reserved.
        </p>
        <p className="text-[#ebdcb7]/40 text-xs tracking-widest uppercase">
          Dhaka, Bangladesh
        </p>
      </div>
    </footer>
  );
}
