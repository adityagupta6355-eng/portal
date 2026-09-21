"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, X } from "lucide-react";
import BackButton from "@/components/common/BackButton";

export default function CreateProductPage() {
  const router = useRouter();

  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="space-y-4">
      <div>
        <BackButton label="Back to Products" fallbackHref="/supplier/products" />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">

      
        <div className="flex items-start justify-between border-b border-[#eceaf0] px-6 py-5">

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Product basics
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Add a new commodity or product listing to your catalog.
            </p>
          </div>

          <button
            onClick={() => router.push("/supplier/products")}
            className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={18} />
          </button>

        </div>

       
        <div className="border-b border-[#eceaf0] px-6 py-4">

          <div className="mb-2 flex items-center justify-between">

            <span className="text-[11px] font-semibold text-[#6355d9]">
              STEP 1 OF 3
            </span>

            <span className="text-[11px] text-gray-500">
              33%
            </span>

          </div>

          <div className="h-1 overflow-hidden rounded-full bg-gray-100">

            <div
              className="h-full rounded-full bg-[#7567e8]"
              style={{ width: "33%" }}
            />

          </div>

        </div>

        
        <div className="px-6 py-6">

          <h2 className="text-[18px] font-bold text-[#171827]">
            Product basics
          </h2>

          <p className="mt-1 text-[13px] text-gray-500">
            Tell buyers exactly what you supply.
          </p>

          <div className="mt-6 space-y-5">

           
            <div>

              <label className="mb-2 block text-[11px] font-semibold text-gray-600">
                PRODUCT NAME <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="e.g. Premium Basmati Rice"
                className="w-full rounded-md border border-[#e2e0e6] px-3 py-2.5 text-[13px] text-gray-700 outline-none placeholder:text-gray-400 focus:border-[#7567e8]"
              />

            </div>

           
            <div>

              <label className="mb-2 block text-[11px] font-semibold text-gray-600">
                PRIMARY CATEGORY <span className="text-red-500">*</span>
              </label>

              <div className="flex flex-wrap gap-2">

                {[
                  "Food & Agriculture",
                  "Industrial Equipment",
                  "Textiles",
                  "Metals",
                ].map((item) => (

                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-md border px-3 py-2 text-[12px] font-medium transition ${
                      category === item
                        ? "border-[#7567e8] bg-[#f1efff] text-[#6355d9]"
                        : "border-[#e2e0e6] bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>

           
            <div>

              <label className="mb-2 block text-[11px] font-semibold text-gray-600">
                SUBCATEGORY <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="e.g. Rice"
                className="w-full rounded-md border border-[#e2e0e6] px-3 py-2.5 text-[13px] text-gray-700 outline-none placeholder:text-gray-400 focus:border-[#7567e8]"
              />

            </div>

           
            <div>

              <label className="mb-2 block text-[11px] font-semibold text-gray-600">
                COUNTRY OF ORIGIN <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="e.g. India"
                className="w-full rounded-md border border-[#e2e0e6] px-3 py-2.5 text-[13px] text-gray-700 outline-none placeholder:text-gray-400 focus:border-[#7567e8]"
              />

            </div>

           
            <div>

              <label className="mb-2 block text-[11px] font-semibold text-gray-600">
                DESCRIPTION <span className="text-red-500">*</span>
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={1000}
                rows={6}
                placeholder="Describe quality, specifications, packaging, and buyer benefits."
                className="w-full resize-none rounded-md border border-[#e2e0e6] px-3 py-2.5 text-[13px] text-gray-700 outline-none placeholder:text-gray-400 focus:border-[#7567e8]"
              />

              <div className="mt-1 flex justify-end">
                <span className="text-[11px] text-gray-400">
                  {description.length}/1000
                </span>
              </div>

            </div>

          </div>

        </div>

       
        <div className="flex justify-end border-t border-[#eceaf0] px-6 py-4">
          <button
            type="button"
            onClick={() => router.push("/supplier/products/pricing")}
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-8 text-sm font-semibold text-white hover:bg-slate-800 shadow-sm transition"
          >
            Next: Pricing
            <ArrowRight size={16} />
          </button>
        </div>

      </div>

    </div>
  );
}