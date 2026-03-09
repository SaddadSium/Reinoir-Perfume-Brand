export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-32 lg:py-40">
      {/* Top Section: Our Story & Identity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Image */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-[#c59d5f]/30 group">
          <img
            src="/images/abcv.jpg"
            alt="Perfume Creation"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-widest text-[#c59d5f] uppercase font-[family-name:var(--font-playfair)] drop-shadow-lg">
            Our Story
          </h1>
          <div className="w-24 h-[2px] bg-[#c59d5f] mb-10 shadow-[0_0_8px_rgba(197,157,95,0.6)]"></div>

          <p className="text-lg md:text-xl text-[#ebdcb7] mb-10 leading-relaxed font-light drop-shadow-md">
            Reinoir is a luxury lifestyle house established in 2026,
            specializing in high-performance fragrances and sophisticated
            living. Defined by the philosophy of "Quiet Luxury," the brand
            rejects loud branding in favor of meticulous craftsmanship and an
            enigmatic presence. Our signature is the ability to balance power
            with grace, embodied in our flagship scent, Spice.
          </p>

          <div className="border-l-2 border-[#c59d5f] pl-6 py-2 space-y-8 mt-4">
            {/* Brand Slogan */}
            <div className="space-y-2">
              <p className="text-[#c59d5f] text-xs font-bold tracking-[0.3em] uppercase">
                Brand Slogan
              </p>
              <h2 className="text-2xl md:text-3xl text-[#ebdcb7] font-[family-name:var(--font-playfair)] italic tracking-wide drop-shadow-md">
                "Luxury in Presence."
              </h2>
            </div>

            {/* Aesthetic Identity */}
            <div className="space-y-2">
              <p className="text-[#c59d5f] text-xs font-bold tracking-[0.3em] uppercase">
                Aesthetic Identity
              </p>
              <p className="text-base md:text-lg text-[#ebdcb7]/80 font-light tracking-widest leading-relaxed uppercase">
                Minimalist, high-contrast, <br className="hidden lg:block" />{" "}
                and deeply sophisticated.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Mission & Vision */}
      <section className="mt-32 lg:mt-40">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[0.15em] text-[#c59d5f] uppercase font-[family-name:var(--font-playfair)] drop-shadow-lg">
            Mission & Vision
          </h2>
          <div className="w-24 h-[2px] bg-[#c59d5f] mx-auto mt-6 shadow-[0_0_8px_rgba(197,157,95,0.6)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission Box */}
          <div className="group bg-black/20 backdrop-blur-md border border-[#c59d5f]/30 rounded-2xl p-10 md:p-14 hover:shadow-[0_10px_30px_rgba(197,157,95,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-16 h-16 text-[#c59d5f] mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
            <h3 className="text-2xl md:text-3xl font-bold text-[#c59d5f] mb-6 font-[family-name:var(--font-playfair)] tracking-widest uppercase">
              Mission
            </h3>
            <p className="text-lg md:text-xl text-[#ebdcb7]/80 leading-relaxed font-light drop-shadow-md">
              To curate the invisible layers of your identity through olfactory
              masterpieces and refined lifestyle essentials. We are dedicated to
              the art of precision—blending global standards of luxury with a
              proprietary edge that commands a room without saying a word.
            </p>
          </div>

          {/* Vision Box */}
          <div className="group bg-black/20 backdrop-blur-md border border-[#c59d5f]/30 rounded-2xl p-10 md:p-14 hover:shadow-[0_10px_30px_rgba(197,157,95,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-16 h-16 text-[#c59d5f] mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h3 className="text-2xl md:text-3xl font-bold text-[#c59d5f] mb-6 font-[family-name:var(--font-playfair)] tracking-widest uppercase">
              Vision
            </h3>
            <p className="text-lg md:text-xl text-[#ebdcb7]/80 leading-relaxed font-light drop-shadow-md">
              To become the premier global symbol of "Quiet Luxury," redefining
              how the modern individual experiences elegance. We envision a
              future where REINOIR is not just a brand, but a legacy of
              sophisticated living that bridges the gap between raw power and
              refined beauty.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
