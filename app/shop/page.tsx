"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const products = [
  {
    id: 4,
    name: "REINIOR ELIPSE",
    price: "30 ml - BDT 815/- | 10 ml - BDT 285/-",
    specialty: "Sharp & Wind",
    description:
      "A burst of peppery freshness that feels like a clean slate. It is the scent of a man who is grounded but possesses an untamed spirit.",
    journey: {
      top: "Zesty Calabrian Citrus and Crushed Black Pepper.",
      heart: "Wild Lavender, Geranium, and Earthy Minerals.",
      base: "Warm Ambroxan, Vetiver, and Sun-Dried Woods.",
    },
    personality: "The Rebel, The Raw Energy, The Signature.",
    image: "/images/P4.jpg",
    gallery: ["/images/cvp41.jpg", "/images/cvp42.jpg", "/images/cvp43.jpg"],
  },
  {
    id: 1,
    name: "REINIOR SPICE",
    price: "30 ml - BDT 780/- | 10 ml - BDT 275/-",
    specialty: "Sweet Yet Spicy",
    description:
      "The scent of a deal being closed. A luminous trail of gold and smoke. For those who leave an impression before they say a word.",
    journey: {
      top: "Crystalline Saffron, Spiced Bergamot, and a hint of Sun-Ripened Nectar.",
      heart: "Ethereal White Jasmine and Rich Amberwood.",
      base: "Toasted Birch, Noble Musk, and Rare Resins.",
    },
    personality: "The Leader, The Ambition, The Command.",
    image: "/images/P1.jpg",
    gallery: ["/images/cvp11.jpg", "/images/cvp12.jpg", "/images/cvp13.jpeg"],
  },
  {
    id: 2,
    name: "REINIOR OCEAN BLUE",
    price: "30 ml - BDT 710/- | 10 ml - BDT 265/-",
    specialty: "Fresh & Chilled",
    description:
      " A deep dive into the Ocean. The scent of a sun-drenched escape, bottled. A nostalgic yet timeless aquatic scent that focuses on deep sea freshness and citrus",
    journey: {
      top: "Chilled Exotic Fruits and Sparkling Mandarin.",
      heart: "Deep Sea Accords, Saltwater Mist, and Soft Petals.",
      base: "Golden Tonka Bean, Smooth Rosewood, and Clean Musk.",
    },
    personality: "The Adventurer, The Serenity, The Cool.",
    image: "/images/P2.jpg",
    gallery: ["/images/cvp21.jpg", "/images/cvp22.jpg", "/images/cvp23.jpeg"],
  },
  {
    id: 3,
    name: "REINIOR FLORAL",
    price: "30 ml - BDT 710/- | 10 ml - BDT 245/-",
    specialty: "Floral & Elegant",
    description:
      "Dew-covered petals and creamy sandalwood. An optimistic, passionate and romantic embrace that lingers like a soft memory.",
    journey: {
      top: "Bright Citrus Zest and Dewy Peony.",
      heart: "Rare Osmanthus, Damask Rose, and Fresh Greenery.",
      base: "Creamy Sandalwood, Patchouli, and Soft Amber.",
    },
    personality: "The Elite, The Muse, The Optimist, The Grace.",
    image: "/images/P3.jpg",
    gallery: ["/images/cvp31.jpg", "/images/cvp32.jpg", "/images/cvp33.jpeg"],
  },
];

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    if (selectedProduct) {
      setActiveImage(selectedProduct.image);
    }
  }, [selectedProduct]);

  return (
    <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 lg:py-40">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-[0.15em] text-[#c59d5f] uppercase font-[family-name:var(--font-playfair)] drop-shadow-lg">
          Our Collection
        </h1>
        <div className="w-24 h-[2px] bg-[#c59d5f] mx-auto mt-6 shadow-[0_0_8px_rgba(197,157,95,0.6)]"></div>
        <p className="mt-6 text-[#ebdcb7]/80 text-lg font-light tracking-wide">
          Discover our exclusive range of premium fragrances.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative flex flex-col bg-black/20 backdrop-blur-md border border-[#c59d5f]/30 rounded-xl overflow-hidden shadow-xl hover:shadow-[0_10px_30px_rgba(197,157,95,0.15)] hover:-translate-y-2 transition-all duration-500"
          >
            <div className="relative w-full aspect-square overflow-hidden border-b border-[#c59d5f]/30 bg-[#1a0103]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>

              <button
                onClick={() => setSelectedProduct(product)}
                className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-full text-[#ebdcb7] opacity-0 group-hover:opacity-100 border border-[#c59d5f]/50 hover:bg-[#c59d5f] hover:text-[#240104] transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg"
                title="Quick View"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 flex flex-col flex-grow items-center text-center">
              <h2 className="text-2xl font-bold text-[#c59d5f] mb-1 font-[family-name:var(--font-playfair)] tracking-wide">
                {product.name}
              </h2>
              <p className="text-sm text-[#ebdcb7]/60 italic mb-6 font-light">
                {product.specialty}
              </p>

              <div className="mt-auto flex flex-col items-center justify-center gap-4 w-full pt-2">
                <div className="text-sm md:text-base font-semibold text-[#ebdcb7] font-[family-name:var(--font-playfair)] tracking-wider flex flex-col gap-1">
                  {product.price.split(" | ").map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="w-auto whitespace-nowrap border border-[#c59d5f] text-[#ebdcb7] px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#c59d5f] hover:text-[#240104] transition-all duration-300"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-sm transition-opacity">
          <div className="relative w-full max-w-5xl bg-gradient-to-br from-[#240104] to-[#1a0103] border border-[#c59d5f]/40 rounded-2xl shadow-[0_0_40px_rgba(197,157,95,0.2)] flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in duration-300 h-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-50 bg-black/40 hover:bg-[#c59d5f] text-[#c59d5f] hover:text-[#240104] rounded-full p-2 transition-colors border border-[#c59d5f]/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="w-full md:w-1/2 relative border-r border-[#c59d5f]/20 flex flex-col bg-[#1a0103] overflow-hidden">
              <div className="relative flex-1 w-full min-h-[250px] md:min-h-0 bg-[#0a0001]">
                <img
                  src={activeImage}
                  alt={selectedProduct.name}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0103] to-transparent opacity-30 pointer-events-none"></div>
              </div>
              <div className="flex space-x-4 p-4 md:p-6 justify-center bg-[#1a0103] border-t border-[#c59d5f]/20 shrink-0 z-10 relative">
                {selectedProduct.gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === img
                        ? "border-[#c59d5f] shadow-[0_0_10px_rgba(197,157,95,0.5)] scale-105"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`thumbnail-${index}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-start overflow-y-auto custom-scrollbar">
              <p className="text-[#c59d5f] tracking-widest uppercase text-xs font-semibold mb-2">
                {selectedProduct.specialty}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#c59d5f] mb-6 font-[family-name:var(--font-playfair)] tracking-wide leading-tight">
                {selectedProduct.name}
              </h2>

              <div className="w-16 h-[1px] bg-[#c59d5f]/50 mb-6 shrink-0"></div>

              <p className="text-[#ebdcb7]/80 text-lg font-light leading-relaxed mb-8">
                {selectedProduct.description}
              </p>

              <div className="mb-8 space-y-4 border-t border-[#c59d5f]/20 pt-6">
                <h3 className="text-[#c59d5f] font-[family-name:var(--font-playfair)] text-xl tracking-wider mb-4">
                  The Olfactory Journey
                </h3>

                <div className="text-sm md:text-base font-light text-[#ebdcb7]/80 leading-relaxed space-y-3">
                  <p>
                    <strong className="text-[#c59d5f] font-medium tracking-wide">
                      Top Notes, The First Impression:{" "}
                    </strong>
                    {selectedProduct.journey?.top}
                  </p>
                  <p>
                    <strong className="text-[#c59d5f] font-medium tracking-wide">
                      Heart Notes, The Soul of the Scent:{" "}
                    </strong>
                    {selectedProduct.journey?.heart}
                  </p>
                  <p>
                    <strong className="text-[#c59d5f] font-medium tracking-wide">
                      Base Notes, The Lingering Memory:{" "}
                    </strong>
                    {selectedProduct.journey?.base}
                  </p>
                </div>
              </div>

              <div className="mb-8 border-t border-[#c59d5f]/20 pt-6">
                <p className="text-sm md:text-base font-light text-[#ebdcb7]/80 leading-relaxed">
                  <strong className="text-[#c59d5f] font-medium tracking-wide">
                    The Personality:{" "}
                  </strong>
                  {selectedProduct.personality}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between mt-auto pt-6 border-t border-[#c59d5f]/20 gap-4 shrink-0">
                <div className="flex flex-col gap-1">
                  {selectedProduct.price.split(" | ").map((line, i) => (
                    <span
                      key={i}
                      className="text-xl md:text-2xl font-bold text-[#ebdcb7] font-[family-name:var(--font-playfair)] tracking-wider"
                    >
                      {line}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/contact?product=${encodeURIComponent(
                    selectedProduct.name,
                  )}`}
                  onClick={() => setSelectedProduct(null)}
                  className="shrink-0 whitespace-nowrap bg-[#c59d5f] text-[#240104] px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#ebdcb7] transition-all duration-300 shadow-[0_0_15px_rgba(197,157,95,0.4)]"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
