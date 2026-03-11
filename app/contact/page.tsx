"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const productList = [
  "REINOIR ELIPSE",
  "REINOIR SPICE",
  "REINOIR OCEAN BLUE",
  "REINOIR FLORAL",
];

function OrderForm() {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams.get("product") || "";

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const googleScriptUrl =
        "https://script.google.com/macros/s/AKfycbwS42mf0RWWgtU4YcNUOkO6PM3wW5dl10qYnHMbc0zQgbJd8BkJg5x2h3ryl4441rrY4Q/exec";

      await fetch(googleScriptUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Order failed!", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-[#c59d5f]/10 backdrop-blur-md border border-[#c59d5f]/50 text-[#ebdcb7] p-10 rounded-xl text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <h3 className="text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)] tracking-wider text-[#c59d5f]">
          Order Confirmed! 🎉
        </h3>
        <p className="text-lg font-light tracking-wide mb-6">
          Thank you for your order. We will contact you shortly to arrange
          delivery.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="border-b border-[#c59d5f] text-[#c59d5f] hover:text-[#ebdcb7] transition-colors pb-1 uppercase tracking-widest text-sm font-semibold"
        >
          Place another order
        </button>
      </div>
    );
  }

  return (
    <form
      suppressHydrationWarning={true}
      onSubmit={handleSubmit}
      className="flex flex-col space-y-6 bg-black/20 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-2xl border border-[#c59d5f]/30"
    >
      <h2 className="text-2xl font-bold text-[#c59d5f] mb-4 border-b border-[#c59d5f]/30 pb-4 font-[family-name:var(--font-playfair)] tracking-widest uppercase">
        Delivery Details
      </h2>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[#ebdcb7]/80 mb-2 tracking-widest uppercase"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="Name"
          required
          className="w-full bg-black/30 border border-[#c59d5f]/30 rounded-lg px-4 py-3 text-[#ebdcb7] placeholder-[#ebdcb7]/30 focus:outline-none focus:border-[#c59d5f] focus:ring-1 focus:ring-[#c59d5f] transition-all"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-[#ebdcb7]/80 mb-2 tracking-widest uppercase"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="Phone"
          required
          pattern="[0-9]{11}"
          minLength={11}
          maxLength={11}
          onInvalid={(e) =>
            (e.target as HTMLInputElement).setCustomValidity(
              "Please enter exactly 11 digits.",
            )
          }
          onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
          className="w-full bg-black/30 border border-[#c59d5f]/30 rounded-lg px-4 py-3 text-[#ebdcb7] placeholder-[#ebdcb7]/30 focus:outline-none focus:border-[#c59d5f] focus:ring-1 focus:ring-[#c59d5f] transition-all"
          placeholder="017XXXXXXXX"
        />
        <p className="mt-1 text-[10px] text-[#c59d5f]/60 italic tracking-wider">
          * Must be exactly 11 digits.
        </p>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#ebdcb7]/80 mb-2 tracking-widest uppercase"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="Email"
          required
          className="w-full bg-black/30 border border-[#c59d5f]/30 rounded-lg px-4 py-3 text-[#ebdcb7] placeholder-[#ebdcb7]/30 focus:outline-none focus:border-[#c59d5f] focus:ring-1 focus:ring-[#c59d5f] transition-all"
          placeholder="yourname@gmail.com"
        />
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-[#ebdcb7]/80 mb-2 tracking-widest uppercase"
        >
          Delivery Address
        </label>
        <textarea
          id="address"
          name="Address"
          required
          rows={3}
          className="w-full bg-black/30 border border-[#c59d5f]/30 rounded-lg px-4 py-3 text-[#ebdcb7] placeholder-[#ebdcb7]/30 focus:outline-none focus:border-[#c59d5f] focus:ring-1 focus:ring-[#c59d5f] transition-all"
          placeholder="House, Road, Area, City..."
        ></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label
            htmlFor="product"
            className="block text-sm font-medium text-[#ebdcb7]/80 mb-2 tracking-widest uppercase"
          >
            Product Name
          </label>
          <select
            id="product"
            name="Product"
            defaultValue={prefilledProduct || ""}
            required
            className="w-full bg-black/30 border border-[#c59d5f]/30 rounded-lg px-4 py-3 text-[#ebdcb7] focus:outline-none focus:border-[#c59d5f] focus:ring-1 focus:ring-[#c59d5f] transition-all cursor-pointer"
          >
            <option
              value=""
              disabled
              className="bg-[#240104] text-[#ebdcb7]/50"
            >
              Select a fragrance
            </option>
            {productList.map((product) => (
              <option
                key={product}
                value={product}
                className="bg-[#240104] text-[#ebdcb7]"
              >
                {product}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="size"
            className="block text-sm font-medium text-[#ebdcb7]/80 mb-2 tracking-widest uppercase"
          >
            Bottle Size
          </label>
          <select
            id="size"
            name="Size"
            required
            className="w-full bg-black/30 border border-[#c59d5f]/30 rounded-lg px-4 py-3 text-[#ebdcb7] focus:outline-none focus:border-[#c59d5f] focus:ring-1 focus:ring-[#c59d5f] transition-all cursor-pointer"
          >
            <option
              value=""
              disabled
              selected
              className="bg-[#240104] text-[#ebdcb7]/50"
            >
              Select Size
            </option>
            <option value="10 ML" className="bg-[#240104] text-[#ebdcb7]">
              10 ML
            </option>
            <option value="30 ML" className="bg-[#240104] text-[#ebdcb7]">
              30 ML
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-[#ebdcb7]/80 mb-2 tracking-widest uppercase"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="Quantity"
            min="1"
            defaultValue="1"
            required
            className="w-full bg-black/30 border border-[#c59d5f]/30 rounded-lg px-4 py-3 text-[#ebdcb7] text-center focus:outline-none focus:border-[#c59d5f] focus:ring-1 focus:ring-[#c59d5f] transition-all"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="coupon"
          className="block text-sm font-medium text-[#ebdcb7]/80 mb-2 tracking-widest uppercase flex items-center gap-2"
        >
          Coupon Code{" "}
          <span className="text-xs text-[#c59d5f]/70 normal-case">
            (Optional)
          </span>
        </label>
        <input
          type="text"
          id="coupon"
          name="Coupon"
          className="w-full bg-black/30 border border-[#c59d5f]/30 rounded-lg px-4 py-3 text-[#ebdcb7] placeholder-[#ebdcb7]/30 focus:outline-none focus:border-[#c59d5f] focus:ring-1 focus:ring-[#c59d5f] transition-all uppercase"
          placeholder="ENTER CODE"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full border border-[#c59d5f] text-[#ebdcb7] bg-[#c59d5f]/10 backdrop-blur-sm font-bold tracking-widest text-lg py-4 rounded-lg hover:bg-[#c59d5f] hover:text-[#240104] shadow-[0_0_15px_rgba(197,157,95,0.2)] hover:shadow-[0_0_25px_rgba(197,157,95,0.6)] transition-all duration-500 uppercase mt-8"
      >
        {loading ? "Processing..." : "CONFIRM ORDER"}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 lg:py-40">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-[0.15em] text-[#c59d5f] uppercase font-[family-name:var(--font-playfair)] drop-shadow-lg">
          Contact & Order
        </h1>
        <div className="w-24 h-[2px] bg-[#c59d5f] mx-auto mt-6 shadow-[0_0_8px_rgba(197,157,95,0.6)]"></div>
        <p className="mt-6 text-[#ebdcb7]/80 text-lg font-light tracking-wide">
          Place your order below or reach out to us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="flex flex-col justify-center bg-black/20 backdrop-blur-md p-10 rounded-xl border border-[#c59d5f]/30 shadow-xl h-fit">
          <h2 className="text-3xl font-bold text-[#c59d5f] mb-10 font-[family-name:var(--font-playfair)] tracking-wider">
            Get in Touch
          </h2>

          <div className="space-y-8">
            <div>
              <p className="text-sm text-[#ebdcb7]/60 font-semibold uppercase tracking-widest mb-1">
                Call Us
              </p>
              <a
                href="tel:+8801703554279"
                className="text-2xl font-light text-[#ebdcb7] hover:text-[#c59d5f] transition-colors block"
              >
                +880 1703-554279
              </a>
            </div>

            <div>
              <p className="text-sm text-[#ebdcb7]/60 font-semibold uppercase tracking-widest mb-1">
                Email Us
              </p>
              <a
                href="mailto:reinoirbd@gmail.com"
                className="text-2xl font-light text-[#ebdcb7] hover:text-[#c59d5f] transition-colors block"
              >
                reinoirbd@gmail.com
              </a>
            </div>

            <div className="pt-8 mt-8 border-t border-[#c59d5f]/30">
              <p className="text-sm text-[#ebdcb7]/60 font-semibold uppercase tracking-widest mb-3">
                Opening Hours
              </p>
              <p className="text-lg text-[#ebdcb7]/90 mt-2 font-light tracking-wide">
                Sunday - Saturday: 10:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>

        <div>
          <Suspense
            fallback={
              <div className="text-center py-20 text-[#c59d5f] animate-pulse tracking-widest">
                Loading order form...
              </div>
            }
          >
            <OrderForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
