"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Info } from "lucide-react";
import BackButton from "@/components/common/BackButton";

export default function PricingPage() {
  const router = useRouter();

  const [currency, setCurrency] = useState("USD");
  const [unit, setUnit] = useState("MT");
  const [priceFrom, setPriceFrom] = useState("850");
  const [priceTo, setPriceTo] = useState("920");
  const [minOrder, setMinOrder] = useState("500");
  const [available, setAvailable] = useState("2500");
  const [leadTime, setLeadTime] = useState("10–14 days");

  return (
    <div className="space-y-4">
      <div>
        <BackButton label="Back to Step 1" fallbackHref="/supplier/products/create" />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
        {/* Progress Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-wider text-[#4f46e5]">
              STEP 2 OF 3
            </span>
            <span className="text-xs font-bold text-[#4f46e5]">
              67%
            </span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-[#4f46e5] transition-all duration-300"
              style={{ width: "67%" }}
            />
          </div>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Pricing & supply
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Set clear commercial terms for potential buyers.
          </p>
        </div>

        {/* Form Body */}
        <div className="space-y-6 w-full">
          {/* Currency */}
          <div>
            <label className="mb-2.5 block text-xs font-bold tracking-wider text-slate-700 uppercase">
              CURRENCY
            </label>
            <div className="flex flex-wrap gap-2.5">
              {["USD", "EUR", "INR"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCurrency(item)}
                  className={`flex h-10 min-w-[90px] items-center justify-center rounded-full border px-5 text-xs font-semibold transition ${
                    currency === item
                      ? "border-[#101827] bg-[#101827] text-white shadow-xs"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {currency === item && <Check size={14} className="mr-1.5" />}
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-bold tracking-wider text-slate-700 uppercase">
                PRICE FROM <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="850"
                value={priceFrom}
                onChange={(e) => setPriceFrom(e.target.value)}
                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold tracking-wider text-slate-700 uppercase">
                PRICE TO
              </label>
              <input
                type="text"
                placeholder="920"
                value={priceTo}
                onChange={(e) => setPriceTo(e.target.value)}
                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition"
              />
            </div>
          </div>

          {/* Quantity Unit */}
          <div>
            <label className="mb-2.5 block text-xs font-bold tracking-wider text-slate-700 uppercase">
              QUANTITY UNIT
            </label>
            <div className="flex flex-wrap gap-2.5">
              {["MT", "kg", "Units", "Litres"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setUnit(item)}
                  className={`flex h-10 min-w-[80px] items-center justify-center rounded-full border px-5 text-xs font-semibold transition ${
                    unit === item
                      ? "border-[#101827] bg-[#101827] text-white shadow-xs"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {unit === item && <Check size={14} className="mr-1.5" />}
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Minimum Order & Available */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-bold tracking-wider text-slate-700 uppercase">
                MINIMUM ORDER <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="500"
                value={minOrder}
                onChange={(e) => setMinOrder(e.target.value)}
                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold tracking-wider text-slate-700 uppercase">
                AVAILABLE CAPACITY
              </label>
              <input
                type="text"
                placeholder="2500"
                value={available}
                onChange={(e) => setAvailable(e.target.value)}
                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition"
              />
            </div>
          </div>

          {/* Lead Time */}
          <div>
            <label className="mb-2 block text-xs font-bold tracking-wider text-slate-700 uppercase">
              LEAD TIME
            </label>
            <input
              type="text"
              placeholder="e.g. 10–14 days"
              value={leadTime}
              onChange={(e) => setLeadTime(e.target.value)}
              className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition"
            />
          </div>

          {/* Notice Info Box */}
          <div className="flex items-center gap-3 rounded-lg border border-indigo-100 bg-indigo-50/70 px-4 py-3 text-xs text-slate-700">
            <Info size={18} className="shrink-0 text-[#4f46e5]" />
            <p>
              Buyers will see this offer as <span className="font-semibold text-slate-900">{currency} {priceFrom}–{priceTo}</span> per <span className="font-semibold text-slate-900">{unit}</span>.
            </p>
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200">
          <button
            type="button"
            onClick={() => router.push("/supplier/products/create")}
            className="flex h-11 items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <button
            type="button"
            onClick={() => router.push("/supplier/products/specifications")}
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-8 text-sm font-semibold text-white hover:bg-slate-800 shadow-sm transition"
          >
            Next: Specifications
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}