
"use client";

import {
  ArrowLeft,
  Clock3,
  Globe2,
  Pencil,
  X,
} from "lucide-react";

export default function ProductDetailsPage() {
  return (
    <div className="min-h-screen bg-[#f7f7fa] text-[#101828]">
      <header className="border-b border-[#e4e7ec] bg-white">
        <div className="mx-auto flex h-[70px] w-full max-w-[1100px] items-center px-6 lg:px-10">
          <button className="rounded-md p-2 transition hover:bg-gray-100">
            <ArrowLeft size={24} />
          </button>

          <h1 className="ml-4 text-[24px] font-bold tracking-tight">
            Product Details
          </h1>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1100px] px-6 py-6 lg:px-10">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-[28px] font-bold tracking-tight sm:text-[32px]">
              Premium Basmati Rice
            </h2>

            <p className="mt-2 text-[14px] text-[#667085]">
              <span className="font-semibold text-[#5546e8]">
                Food &amp; Agriculture
              </span>{" "}
              <span className="mx-2 text-[#d0d5dd]">•</span>
              Rice
            </p>

            <p className="mt-3 flex items-center gap-2 text-[14px] text-[#667085]">
              <Globe2 size={18} />
              Origin: India
            </p>
          </div>

          <section className="rounded-md border border-[#e4e7ec] bg-white px-5 py-5 sm:px-6">
            <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-wide text-[#98a2b3]">
                  Price
                </p>
                <p className="mt-2 text-[20px] font-bold">
                  USD 850–920
                  <span className="ml-1 text-[13px] font-normal text-[#667085]">
                    / MT
                  </span>
                </p>
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-wide text-[#98a2b3]">
                  Minimum order
                </p>
                <p className="mt-2 text-[20px] font-bold">500 MT</p>
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-wide text-[#98a2b3]">
                  Available
                </p>
                <p className="mt-2 text-[20px] font-bold">2,500 MT</p>
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-wide text-[#98a2b3]">
                  Lead time
                </p>
                <p className="mt-2 flex items-center gap-2 text-[20px] font-bold">
                  <Clock3 size={20} />
                  10–14 days
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-md border border-[#e4e7ec] bg-white px-5 py-5 sm:px-6">
            <h3 className="text-[18px] font-semibold">
              About this product
            </h3>

            <p className="mt-3 text-[13px] leading-6 text-[#667085]">
              Premium export-quality product processed under strict quality
              controls. Suitable for international wholesale buyers and
              available with flexible packaging options.
            </p>

            <button className="mt-3 text-[13px] font-semibold text-[#5546e8]">
              Read more
            </button>
          </section>

          <section className="rounded-md border border-[#e4e7ec] bg-white px-5 py-5 sm:px-6">
            <h3 className="text-[18px] font-semibold">
              Key specifications
            </h3>

            <div className="mt-4 divide-y divide-[#e4e7ec]">
              <div className="flex items-center justify-between gap-5 py-4 text-[14px]">
                <span className="text-[#667085]">Variety</span>
                <span className="text-right font-semibold">1121 Steam</span>
              </div>

              <div className="flex items-center justify-between gap-5 py-4 text-[14px]">
                <span className="text-[#667085]">Purity</span>
                <span className="font-semibold">99%</span>
              </div>

              <div className="flex items-center justify-between gap-5 py-4 text-[14px]">
                <span className="text-[#667085]">Packaging</span>
                <span className="text-right font-semibold">25 kg bags</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <div className="border-t border-[#e4e7ec] bg-white">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-3 px-6 py-5 sm:flex-row sm:justify-end lg:px-10">
          <button className="flex h-[52px] items-center justify-center gap-3 rounded-md border border-[#d0d5dd] px-6 text-[14px] font-semibold transition hover:bg-gray-50">
            <X size={20} />
            Unpublish
          </button>

          <button className="flex h-[52px] items-center justify-center gap-3 rounded-md bg-[#111b2c] px-7 text-[14px] font-semibold text-white transition hover:bg-[#1e293b]">
            <Pencil size={20} />
            Edit Product
          </button>
        </div>
      </div>
    </div>
  );
}