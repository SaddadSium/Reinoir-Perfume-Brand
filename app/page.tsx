"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const specialProducts = [
  {
    id: 1,
    name: "REINOIR COLLECTION",
    desc: "Explore The Luxury In Presence",
    image: "/images/c1.jpg",
  },
  {
    id: 2,
    name: "REINOIR SPICE",
    desc: "The Proprietary signature.",
    image: "/images/c2.jpg",
  },
  {
    id: 3,
    name: "REINOIR OCEAN BLUE",
    desc: "Infinite Horizons.",
    image: "/images/c5.jpg",
  },
  {
    id: 4,
    name: "REINOIR ECLIPSE",
    desc: "Wildly Refined.",
    image: "/images/c4.jpg",
  },
  {
    id: 5,
    name: "REINIOR FLORAL",
    desc: "A velvet-soft bouquet.",
    image: "/images/c3.jpg",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % specialProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="w-full flex flex-col items-center min-h-screen px-4 md:px-8 pt-32 lg:pt-40 pb-10">
      <div className="relative w-full max-w-7xl h-[65vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-[#c59d5f]/20 bg-black">
        {specialProducts.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* ⚠️ Fixed for Mobile Quality */}
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center"
              priority={index === 0}
              quality={100}
              unoptimized={true}
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1a0103]/90 via-[#1a0103]/50 to-transparent flex flex-col justify-end md:justify-center px-8 md:px-20 pb-28 md:pb-0 text-left z-20">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-[0.15em] uppercase text-[#c59d5f] font-[family-name:var(--font-playfair)] drop-shadow-2xl">
                  {product.name}
                </h2>
                <div className="w-16 h-[2px] bg-[#c59d5f]/70 mb-6"></div>
                <p className="text-base md:text-xl mb-10 font-light text-[#ebdcb7]/90 drop-shadow-md tracking-widest leading-relaxed">
                  {product.desc}
                </p>
                <Link
                  href="/shop"
                  className="inline-block border border-[#c59d5f] text-[#ebdcb7] bg-black/20 backdrop-blur-sm px-10 py-4 rounded-full font-bold tracking-widest hover:bg-[#c59d5f] hover:text-[#240104] transition-all duration-500 uppercase text-xs md:text-sm"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
          {specialProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#c59d5f] w-8"
                  : "bg-[#ebdcb7]/40 hover:bg-[#ebdcb7]/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Brand Identity Section */}
      <section className="w-full max-w-4xl mx-auto mt-28 mb-16 px-6 text-center flex flex-col items-center justify-center space-y-12 text-[#ebdcb7]">
        <p className="text-[#c59d5f] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
          Brand Slogan
        </p>
        <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] italic tracking-wide">
          "Luxury in Presence."
        </h2>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#c59d5f] to-transparent opacity-60"></div>
        <p className="text-lg md:text-2xl font-light tracking-widest uppercase opacity-80">
          Minimalist, high-contrast, and deeply sophisticated.
        </p>
      </section>
    </main>
  );
}
