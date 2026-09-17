"use client";

import { useState } from "react";
import {
  Star,
  ChevronDown,
  ThumbsUp,
  MessageSquare,
  Clock3,
  Award,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const reviews = [
  {
    initials: "AD",
    name: "Amelia van Dijk",
    company: "Dutch Spice Imports",
    product: "Turmeric Powder · 500 MT",
    deal: "DL-1042",
    rating: 5,
    date: "Sep 2, 2026",
    review:
      "Excellent product quality and documentation. The shipment arrived on schedule and communication remained clear throughout the order.",
    tags: ["Quality", "On-time delivery", "Communication"],
  },
  {
    initials: "OA",
    name: "Omar Al-Farsi",
    company: "Gulf Harvest Trading",
    product: "Premium Basmati Rice · 800 MT",
    deal: "DL-0987",
    rating: 5,
    date: "Aug 18, 2026",
    review:
      "A dependable supplier with consistent quality. Their team handled our revised packaging requirement professionally.",
    tags: ["Reliable", "Packaging"],
  },
  {
    initials: "KN",
    name: "Klara Neumann",
    company: "Nordic Foods GmbH",
    product: "Black Pepper · 150 MT",
    deal: "DL-0914",
    rating: 4,
    date: "Jul 29, 2026",
    review:
      "Good quality and responsive support. Final dispatch was slightly later than the initial estimate, but updates were timely.",
    tags: ["Responsive", "Product quality"],
  },
];

const ratingBreakdown = [
  { rating: 5, count: 116, width: "91%" },
  { rating: 4, count: 20, width: "16%" },
  { rating: 3, count: 4, width: "4%" },
  { rating: 2, count: 2, width: "2%" },
  { rating: 1, count: 0, width: "0%" },
];

const reviewFilters = ["All", "5 stars", "4 stars", "With comment"];

export default function ReputationPage() {
  const [period, setPeriod] = useState("All time");
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="min-h-screen bg-[#faf9fc]">
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-[28px] font-bold text-[#1d1d1f]">
              Reputation & Reviews
            </h1>
            <p className="mt-1 text-[13px] text-[#777]">
              How verified buyers rate your business
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-md border border-[#dedde3] bg-white px-4 py-2 text-[13px] font-medium text-[#444] hover:bg-[#f7f7f8]"
          >
            {period}
            <ChevronDown size={15} />
          </button>
        </div>

        <div className="mb-5 grid grid-cols-[220px_1fr] overflow-hidden rounded-md bg-[#101828]">
          <div className="flex flex-col items-center justify-center border-r border-white/20 px-5 py-6">
            <div className="text-[36px] font-bold leading-none text-white">
              4.8
            </div>

            <div className="mt-3 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={17}
                  className="fill-[#f59e0b] text-[#f59e0b]"
                />
              ))}
            </div>

            <p className="mt-2 text-[11px] text-[#cbd5e1]">
              142 verified reviews
            </p>
          </div>

          <div className="flex flex-col justify-center gap-2.5 px-6 py-5">
            {ratingBreakdown.map((item) => (
              <div
                key={item.rating}
                className="flex items-center gap-3"
              >
                <span className="w-3 text-[11px] font-semibold text-[#e2e8f0]">
                  {item.rating}
                </span>

                <Star
                  size={14}
                  className="shrink-0 fill-[#f59e0b] text-[#f59e0b]"
                />

                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#475569]">
                  <div
                    className="h-full rounded-full bg-[#f59e0b]"
                    style={{ width: item.width }}
                  />
                </div>

                <span className="w-7 text-right text-[11px] text-[#cbd5e1]">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-5 grid grid-cols-3 gap-4">
          <div className="rounded-md border border-[#e5e3e9] bg-white p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#ecfdf3]">
              <ThumbsUp size={19} className="text-[#12b76a]" />
            </div>

            <p className="mt-4 text-[24px] font-bold text-[#222]">96%</p>

            <p className="mt-1 text-[12px] font-medium tracking-wide text-[#777]">
              POSITIVE
            </p>
          </div>

          <div className="rounded-md border border-[#e5e3e9] bg-white p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#eef2ff]">
              <MessageSquare size={19} className="text-[#5546e8]" />
            </div>

            <p className="mt-4 text-[24px] font-bold text-[#222]">98%</p>

            <p className="mt-1 text-[12px] font-medium tracking-wide text-[#777]">
              RESPONSE
            </p>
          </div>

          <div className="rounded-md border border-[#e5e3e9] bg-white p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#fff7d6]">
              <Clock3 size={19} className="text-[#d98b00]" />
            </div>

            <p className="mt-4 text-[24px] font-bold text-[#222]">2.4h</p>

            <p className="mt-1 text-[12px] font-medium tracking-wide text-[#777]">
              AVG. REPLY
            </p>
          </div>
        </div>

        <div className="mb-5 rounded-md border border-[#e5e3e9] bg-white p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#fff7d6]">
                <Award size={22} className="text-[#d98b00]" />
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#777]">
                  Reputation Level
                </p>

                <h2 className="mt-1 text-[20px] font-bold text-[#222]">
                  Top Supplier
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-1.5 rounded-md bg-[#e9faf3] px-3 py-1.5 text-[12px] font-semibold text-[#059669]">
              <TrendingUp size={16} />
              Excellent
            </div>
          </div>

          <p className="mt-4 text-[13px] leading-5 text-[#777]">
            You rank in the top 8% of verified suppliers in your category.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <div className="flex items-center gap-2 rounded-md border border-[#e2e0e6] bg-[#f8fafc] px-3 py-2">
              <ShieldCheck size={16} className="text-[#12b76a]" />
              <span className="text-[12px] font-medium text-[#444]">
                Trade Verified
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-md border border-[#e2e0e6] bg-[#f8fafc] px-3 py-2">
              <Clock3 size={16} className="text-[#5546e8]" />
              <span className="text-[12px] font-medium text-[#444]">
                Fast Responder
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-md border border-[#e2e0e6] bg-[#f8fafc] px-3 py-2">
              <Award size={16} className="text-[#d98b00]" />
              <span className="text-[12px] font-medium text-[#444]">
                Quality Leader
              </span>
            </div>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[18px] font-semibold text-[#222]">
            Buyer reviews
          </h2>

          <span className="text-[12px] text-[#888]">
            Showing {reviews.length}
          </span>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {reviewFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-3 py-1.5 text-[11px] font-medium transition ${
                activeFilter === filter
                  ? "border-[#222] bg-[#222] text-white"
                  : "border-[#dedde3] bg-white text-[#555]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.deal}
              className="rounded-md border border-[#e5e3e9] bg-white p-5"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717] text-[12px] font-bold text-white">
                    {review.initials}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[14px] font-semibold text-[#222]">
                        {review.name}
                      </h3>

                      <ShieldCheck
                        size={15}
                        className="fill-[#ecfdf3] text-[#12b76a]"
                      />
                    </div>

                    <p className="mt-1 text-[12px] text-[#777]">
                      {review.company}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className={
                          star <= review.rating
                            ? "fill-[#f59e0b] text-[#f59e0b]"
                            : "text-[#f59e0b]"
                        }
                      />
                    ))}
                  </div>

                  <p className="mt-1 text-[11px] text-[#999]">
                    {review.date}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-md bg-[#f5f6f7] px-4 py-3">
                <span className="text-[13px] font-semibold text-[#222]">
                  {review.product}
                </span>

                <span className="text-[12px] font-medium text-[#555]">
                  {review.deal}
                </span>
              </div>

              <p className="mt-4 text-[13px] leading-5 text-[#555]">
                {review.review}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {review.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#ecfdf3] px-3 py-1 text-[11px] font-medium text-[#159966]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 border-t border-[#e5e3e9] pt-4">
                <button
                  type="button"
                  className="mx-auto flex items-center gap-2 text-[12px] font-medium text-[#444]"
                >
                  <MessageSquare size={15} />
                  Reply to review
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-md border border-[#6254e8] bg-[#eef2ff] p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white">
              <SparklesIcon />
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wide text-[#5546e8]">
                Mesh AI Summary
              </p>

              <h2 className="mt-1 text-[18px] font-bold text-[#222]">
                Buyers value quality and communication
              </h2>

              <p className="mt-2 text-[13px] leading-5 text-[#555]">
                “Product quality” appears in 71% of positive reviews.
                Improving dispatch estimates could lift your score further.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SparklesIcon() {
  return (
    <div className="relative flex h-7 w-7 items-center justify-center text-[#5546e8]">
      <span className="text-[27px] leading-none">✧</span>
      <span className="absolute right-0 top-0 text-[12px] font-bold">
        +
      </span>
    </div>
  );
}