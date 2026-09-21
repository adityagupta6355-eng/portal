"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/common/BackButton";
import {
  Sparkles,
  Building2,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Target,
  Share2,
  Package,
} from "lucide-react";

type SegmentType = "All" | "Sellers" | "Requirements" | "Products";

interface MatchItem {
  id: string;
  type: "seller" | "product" | "requirement";
  typeLabel: string;
  hasVerifiedCheck?: boolean;
  matchScore: number;
  title: string;
  subtitle: string;
  location: string;
  image?: string;
  aiInsight: string;
  partnerId: string;
  partnerName: string;
  productName: string;
}

const matchItems: MatchItem[] = [
  {
    id: "match-1",
    type: "seller",
    typeLabel: "SUPPLIER PROFILE",
    hasVerifiedCheck: true,
    matchScore: 96,
    title: "Indus Agro Exports",
    subtitle: "Rice, spices and agricultural commodities",
    location: "Mumbai, India",
    aiInsight: "Verified capacity and strong delivery history",
    partnerId: "indus",
    partnerName: "Indus Agro Exports",
    productName: "Premium Basmati Rice",
  },
  {
    id: "match-2",
    type: "product",
    typeLabel: "MATCHES YOUR PRODUCT",
    hasVerifiedCheck: false,
    matchScore: 94,
    title: "Premium Basmati Rice",
    subtitle: "500 MT monthly · Grade A · CIF",
    location: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80",
    aiInsight: "Product grade, capacity and lead time align",
    partnerId: "basmati",
    partnerName: "Punjab Basmati Mills",
    productName: "Premium Basmati Rice",
  },
  {
    id: "match-3",
    type: "requirement",
    typeLabel: "MATCHES YOUR REQUIREMENT",
    hasVerifiedCheck: true,
    matchScore: 92,
    title: "Eastern Harvest Co.",
    subtitle: "Rice, coffee and processed foods",
    location: "Ho Chi Minh City, Vietnam",
    aiInsight: "Competitive pricing and export-market fit",
    partnerId: "eastern",
    partnerName: "Eastern Harvest Co.",
    productName: "Black Pepper",
  },
  {
    id: "match-4",
    type: "product",
    typeLabel: "MATCHING SELLER PRODUCT",
    hasVerifiedCheck: false,
    matchScore: 91,
    title: "Organic Cardamom Pods",
    subtitle: "Food grade · Organic certified · MOQ 2 MT",
    location: "Kerala, India",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&q=80",
    aiInsight: "Matches your preferred quality, origin and order volume",
    partnerId: "cardamom",
    partnerName: "Malabar Spices Consortium",
    productName: "Organic Cardamom Pods",
  },
  {
    id: "match-5",
    type: "requirement",
    typeLabel: "BUYER REQUISITION",
    hasVerifiedCheck: true,
    matchScore: 88,
    title: "Dutch Spice Imports B.V.",
    subtitle: "Requires 500 MT Alleppey Turmeric per quarter",
    location: "Rotterdam, Netherlands",
    aiInsight: "Prompt payment history with verified escrow capability",
    partnerId: "dutch",
    partnerName: "Dutch Spice Imports B.V.",
    productName: "Turmeric Powder (Alleppey Finger)",
  },
];

export default function MatchAIPage() {
  const router = useRouter();
  const [activeSegment, setActiveSegment] = useState<SegmentType>("All");

  const filteredItems = matchItems.filter((item) => {
    if (activeSegment === "All") return true;
    if (activeSegment === "Sellers") return item.type === "seller";
    if (activeSegment === "Requirements") return item.type === "requirement";
    if (activeSegment === "Products") return item.type === "product";
    return true;
  });

  const getBannerText = () => {
    switch (activeSegment) {
      case "Sellers":
        return "Verified suppliers and exporters vetted for quality compliance and export capacity.";
      case "Requirements":
        return "Active buyer requisitions and RFQs with verified purchasing budgets.";
      case "Products":
        return "Commodity listings with high specification, volume, and pricing compatibility.";
      default:
        return "A combined view of your strongest seller, product and requirement matches.";
    }
  };

  const handleConnect = (partnerId: string) => {
    router.push(`/supplier/message?chat=${partnerId}`);
  };

  const handleViewProfile = (id: string) => {
    router.push(`/supplier/opportunities/${id}`);
  };

  return (
    <div className="w-full space-y-6">
      {/* Back Button */}
      <div>
        <BackButton label="Back to Dashboard" fallbackHref="/supplier" />
      </div>

      {/* Top Banner Card */}
      <div className="relative overflow-hidden rounded-2xl bg-[#0d1424] p-6 sm:p-8 text-white shadow-md">
        <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-indigo-600/30 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5546e8] text-white shadow-sm mb-4">
            <Share2 size={20} className="rotate-90" />
          </div>

          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            TRADEMATCHLY INTELLIGENCE
          </p>

          <h1 className="mt-1.5 text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Your best trade matches
          </h1>

          <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
            We continuously compare profiles, products and requirements to surface the strongest opportunities for your business.
          </p>

          {/* 3 Stats Bar */}
          <div className="mt-6 grid grid-cols-3 rounded-xl border border-white/10 bg-white/5 py-3.5 px-4 text-center divide-x divide-white/10">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">24</p>
              <p className="mt-0.5 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                ACTIVE MATCHES
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">94%</p>
              <p className="mt-0.5 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                TOP SCORE
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">6</p>
              <p className="mt-0.5 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                NEW TODAY
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Segment Tabs */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {(["All", "Sellers", "Requirements", "Products"] as SegmentType[]).map(
            (segment) => (
              <button
                key={segment}
                type="button"
                onClick={() => setActiveSegment(segment)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                  activeSegment === segment
                    ? "bg-[#5546e8] text-white shadow-xs"
                    : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                {segment}
              </button>
            )
          )}
        </div>
      </div>

      {/* Segment Context Banner */}
      <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-4 text-xs text-indigo-950 flex items-center gap-2.5">
        <Sparkles size={16} className="text-indigo-600 shrink-0" />
        <span>{getBannerText()}</span>
      </div>

      {/* Matches List */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs transition hover:shadow-md"
          >
            {/* Top row: Type Label + Match Badge */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {item.typeLabel}
              </span>
              <span className="rounded-full bg-indigo-50 border border-indigo-200 px-3 py-1 text-xs font-bold text-indigo-700">
                {item.matchScore}% MATCH
              </span>
            </div>

            {/* Middle row: Image/Avatar + Title + Location */}
            <div className="flex items-start gap-4">
              {item.image ? (
                <div className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100 border border-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              ) : (
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 font-bold text-lg border border-indigo-200">
                  {item.title.charAt(0)}
                </div>
              )}

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  {item.hasVerifiedCheck && (
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  )}
                </div>

                <p className="mt-0.5 text-xs text-slate-600">
                  {item.subtitle}
                </p>

                <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                  <MapPin size={13} />
                  <span>{item.location}</span>
                </p>
              </div>
            </div>

            {/* AI Insight Box */}
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-100 p-3 text-xs text-slate-600">
              <Sparkles size={14} className="text-indigo-600 shrink-0" />
              <span>{item.aiInsight}</span>
            </div>

            {/* Bottom Actions */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => handleViewProfile(item.partnerId)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-indigo-600 transition"
              >
                <span>{item.type === "product" ? "Seller profile →" : "View profile →"}</span>
              </button>

              <button
                type="button"
                onClick={() => handleConnect(item.partnerId)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#5546e8] px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-600 transition shadow-xs"
              >
                <span>Connect</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
            <p className="text-sm font-medium text-slate-600">
              No matching items found in this segment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

