"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Info } from "lucide-react";

export default function PricingPage() {
  const router = useRouter();

  const [currency, setCurrency] = useState("USD");
  const [unit, setUnit] = useState("MT");

  return (
    <div className="min-h-screen bg-[#f7fafb]">
      <div className="mx-auto w-full max-w-[1100px] px-10 py-10">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[13px] font-bold tracking-[0.08em] text-[#263238]">
            STEP 2 OF 3
          </span>

          <span className="text-[14px] font-bold text-[#5147d9]">
            67%
          </span>
        </div>

        <div className="h-[7px] overflow-hidden rounded-full bg-[#e3e8ec]">
          <div
            className="h-full rounded-full bg-[#5549dc]"
            style={{ width: "67%" }}
          />
        </div>

        <div className="mt-10">
          <h1 className="text-[42px] font-bold leading-tight tracking-[-0.02em] text-[#111827]">
            Pricing & supply
          </h1>

          <p className="mt-2 text-[19px] text-[#59636e]">
            Set clear commercial terms for potential buyers.
          </p>
        </div>

        <div className="mt-10 max-w-[1000px]">
          <div>
            <label className="mb-3 block text-[14px] font-bold tracking-[0.04em] text-[#374151]">
              CURRENCY
            </label>

            <div className="flex gap-3">
              {["USD", "EUR", "INR"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCurrency(item)}
                  className={`flex h-[54px] min-w-[108px] items-center justify-center rounded-full border px-6 text-[15px] font-bold transition ${
                    currency === item
                      ? "border-[#101827] bg-[#101827] text-white"
                      : "border-[#d9dee3] bg-white text-[#46505b] hover:bg-[#f8f9fa]"
                  }`}
                >
                  {currency === item && <Check size={17} className="mr-2" />}
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <label className="mb-3 block text-[14px] font-bold tracking-[0.04em] text-[#374151]">
                PRICE FROM <span className="text-[#111827]">*</span>
              </label>

              <input
                type="text"
                placeholder="850"
                className="h-[68px] w-full rounded-xl border border-[#dce1e5] bg-white px-5 text-[18px] text-[#374151] outline-none placeholder:text-[#a5afb9] focus:border-[#7567e8] focus:ring-2 focus:ring-[#7567e8]/10"
              />
            </div>

            <div>
              <label className="mb-3 block text-[14px] font-bold tracking-[0.04em] text-[#374151]">
                PRICE TO
              </label>

              <input
                type="text"
                placeholder="920"
                className="h-[68px] w-full rounded-xl border border-[#dce1e5] bg-white px-5 text-[18px] text-[#374151] outline-none placeholder:text-[#a5afb9] focus:border-[#7567e8] focus:ring-2 focus:ring-[#7567e8]/10"
              />
            </div>
          </div>

          <div className="mt-8">
            <label className="mb-3 block text-[14px] font-bold tracking-[0.04em] text-[#374151]">
              QUANTITY UNIT
            </label>

            <div className="flex gap-3">
              {["MT", "kg", "Units", "Litres"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setUnit(item)}
                  className={`flex h-[54px] items-center justify-center rounded-full border px-7 text-[15px] font-bold transition ${
                    unit === item
                      ? "border-[#101827] bg-[#101827] text-white"
                      : "border-[#d9dee3] bg-white text-[#46505b] hover:bg-[#f8f9fa]"
                  }`}
                >
                  {unit === item && <Check size={17} className="mr-2" />}
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <label className="mb-3 block text-[14px] font-bold tracking-[0.04em] text-[#374151]">
                MINIMUM ORDER <span className="text-[#111827]">*</span>
              </label>

              <input
                type="text"
                placeholder="500"
                className="h-[68px] w-full rounded-xl border border-[#dce1e5] bg-white px-5 text-[18px] text-[#374151] outline-none placeholder:text-[#a5afb9] focus:border-[#7567e8] focus:ring-2 focus:ring-[#7567e8]/10"
              />
            </div>

            <div>
              <label className="mb-3 block text-[14px] font-bold tracking-[0.04em] text-[#374151]">
                AVAILABLE
              </label>

              <input
                type="text"
                placeholder="2500"
                className="h-[68px] w-full rounded-xl border border-[#dce1e5] bg-white px-5 text-[18px] text-[#374151] outline-none placeholder:text-[#a5afb9] focus:border-[#7567e8] focus:ring-2 focus:ring-[#7567e8]/10"
              />
            </div>
          </div>

          <div className="mt-8">
            <label className="mb-3 block text-[14px] font-bold tracking-[0.04em] text-[#374151]">
              LEAD TIME
            </label>

            <input
              type="text"
              placeholder="e.g. 10–14 days"
              className="h-[68px] w-full rounded-xl border border-[#dce1e5] bg-white px-5 text-[18px] text-[#374151] outline-none placeholder:text-[#a5afb9] focus:border-[#7567e8] focus:ring-2 focus:ring-[#7567e8]/10"
            />
          </div>

          <div className="mt-7 flex items-center gap-3 rounded-xl border border-[#d9e1f4] bg-[#eef3ff] px-5 py-4">
            <Info size={22} className="shrink-0 text-[#5549dc]" />

            <p className="text-[15px] text-[#46505b]">
              Buyers will see this as {currency} — per {unit}.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-[#dfe4e7] bg-white">
        <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-10 py-6">
          <button
            type="button"
            onClick={() => router.push("/supplier/products/create")}
            className="flex h-[58px] items-center gap-3 rounded-xl border border-[#d9dee3] bg-white px-8 text-[16px] font-bold text-[#1f2937] hover:bg-[#f8f9fa]"
          >
            <ArrowLeft size={20} />
            Back
          </button>

          <button
            type="button"
            onClick={() =>
              router.push("/supplier/products/create/specifications")
            }
            className="flex h-[58px] min-w-[310px] items-center justify-center gap-3 rounded-xl bg-[#101827] px-8 text-[16px] font-bold text-white hover:bg-[#1b2638]"
          >
            Next: Specifications
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}