"use client";

import Link from "next/link";
import {
  Plus,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Globe2,
  CheckCircle2,
  Star,
  Package,
  Building2,
  MapPin,
  Clock,
  TriangleAlert,
  CreditCard,
  FileText,
  Handshake,
  Home,
  Briefcase,
  User,
  ExternalLink,
  ChevronRight,
  Bell,
  Send,
} from "lucide-react";

const matchingPartners = [
  {
    initials: "IA",
    name: "Indus Agro Exports",
    id: "indus",
    location: "Mumbai, India",
    match: "96%",
    trust: "94/100",
    capacity: "12K MT",
    response: "98%",
    category: "Rice, spices & agricultural commodities",
    tags: ["Verified capacity", "Strong delivery record"],
  },
  {
    initials: "EH",
    name: "Eastern Harvest Ltd.",
    id: "eastern",
    location: "Ho Chi Minh City, Vietnam",
    match: "91%",
    trust: "91/100",
    capacity: "8K MT",
    response: "95%",
    category: "Rice, coffee & agricultural products",
    tags: ["Competitive pricing", "Verified supplier"],
  },
];

const newOpportunities = [
  {
    id: "basmati",
    title: "Premium Basmati Rice",
    requirement: "Req: 500 MT / Month",
    location: "Dubai, UAE",
    match: "93% Match",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80",
  },
  {
    id: "soybean",
    title: "Organic Soybean",
    requirement: "Req: 250 MT / Month",
    location: "Rotterdam, NL",
    match: "91% Match",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&q=80",
  },
  {
    id: "cardamom",
    title: "Organic Cardamom Pods",
    requirement: "Req: 1,200 kg / Month",
    location: "Riyadh, KSA",
    match: "89% Match",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=300&q=80",
  },
  {
    id: "pepper",
    title: "Black Pepper (Tellicherry)",
    requirement: "Req: 200 MT / Month",
    location: "Hamburg, Germany",
    match: "88% Match",
    image:
      "https://images.unsplash.com/photo-1599909533730-f9d5b5f9c2b8?w=300&q=80",
  },
];

const recentActivities = [
  {
    id: "act-1",
    title: "Submitted quote for RFQ-2026-892",
    time: "2 HOURS AGO",
    color: "bg-indigo-600",
  },
  {
    id: "act-2",
    title: "Buyer AgriCorp Global viewed your profile",
    time: "YESTERDAY, 14:30",
    color: "bg-slate-300",
  },
  {
    id: "act-3",
    title: "Verification documents approved",
    time: "SEP 03, 09:15",
    color: "bg-emerald-600",
  },
  {
    id: "act-4",
    title: "New negotiation terms received from Alappay Fingers Ltd.",
    time: "3 DAYS AGO",
    color: "bg-amber-500",
  },
];

export default function SupplierDashboard() {
  return (
    <div className="w-full space-y-6 pb-20 lg:pb-8">
      {/* ========================================================
          1. TOP WORKSPACE GREETING & STATUS PILL (Matching Image 4.24.02 PM)
          ======================================================== */}
      <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#5547E8]">
            YOUR WORKSPACE
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-0.5">
            Good morning, Sarah
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Here is what needs your attention today.
          </p>
        </div>

        {/* Setup Needed Pill */}
        <div className="self-start sm:self-center">
          <Link
            href="/supplier/register"
            className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50/80 px-3 py-1.5 text-xs font-bold text-amber-800 shadow-2xs hover:bg-amber-100 transition"
          >
            <Clock size={14} className="text-amber-600" />
            <span>Setup needed</span>
          </Link>
        </div>
      </section>

      {/* ========================================================
          2. ACTION CENTER CARD (Amber card from Image 4.24.02 PM)
          ======================================================== */}
      <section className="rounded-2xl border border-[#FDE6C8] bg-[#FFF9F0] p-4 sm:p-5 shadow-xs space-y-3.5">
        {/* Header */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
            <TriangleAlert size={17} />
          </div>
          <div>
            <h2 className="text-xs sm:text-sm font-bold text-slate-900">
              Action center
            </h2>
            <p className="text-[11px] text-slate-500">
              Complete these items to improve account visibility.
            </p>
          </div>
        </div>

        {/* Item 1: Complete your company profile */}
        <Link
          href="/supplier/register"
          className="group flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-2xs transition hover:border-amber-200 hover:shadow-xs"
        >
          <div className="flex items-start gap-3 min-w-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E5] text-[#D97706]">
              <Building2 size={20} />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-800 transition truncate">
                Complete your company profile
              </h3>
              <p className="text-[11px] text-slate-500 leading-normal mt-0.5 line-clamp-2">
                Add your business identity and operating details to unlock marketplace features.
              </p>
              <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-[#D97706] group-hover:underline">
                <span>Continue setup</span>
                <ChevronRight size={13} />
              </span>
            </div>
          </div>
          <ArrowRight
            size={16}
            className="text-amber-500 group-hover:translate-x-0.5 transition shrink-0"
          />
        </Link>

        {/* Item 2: 1 product awaiting verification */}
        <Link
          href="/supplier/products"
          className="group flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-2xs transition hover:border-amber-200 hover:shadow-xs"
        >
          <div className="flex items-start gap-3 min-w-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF8E6] text-[#B45309]">
              <Package size={20} />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-800 transition truncate">
                1 product awaiting verification
              </h3>
              <p className="text-[11px] text-slate-500 leading-normal mt-0.5 line-clamp-2">
                Pending products remain hidden from buyers until the review is complete.
              </p>
              <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-[#D97706] group-hover:underline">
                <span>View products</span>
                <ChevronRight size={13} />
              </span>
            </div>
          </div>
          <ArrowRight
            size={16}
            className="text-amber-500 group-hover:translate-x-0.5 transition shrink-0"
          />
        </Link>
      </section>

      {/* ========================================================
          3. PROFILE COMPLETION CARD (Card from Image 4.24.02 PM)
          ======================================================== */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
        {/* Header with 78% */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600">
              <CreditCard size={20} />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                Profile completion
              </h2>
              <p className="text-xs text-slate-500">
                Unlock more qualified matches
              </p>
            </div>
          </div>

          <span className="text-base sm:text-lg font-extrabold text-[#5547E8]">
            78%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-[#5547E8] transition-all duration-500"
            style={{ width: "78%" }}
          />
        </div>

        {/* 3 Metrics: New matches, Active RFQs, Deals closed */}
        <div className="grid grid-cols-3 divide-x divide-slate-100 pt-2 text-center">
          {/* 12 New Matches */}
          <div className="px-2">
            <div className="flex items-center justify-center gap-1.5">
              <Sparkles size={16} className="text-[#5547E8]" />
              <span className="text-lg sm:text-xl font-extrabold text-slate-900">
                12
              </span>
            </div>
            <p className="text-[11px] font-medium text-slate-500 mt-0.5">
              New matches
            </p>
          </div>

          {/* 8 Active RFQs */}
          <div className="px-2">
            <div className="flex items-center justify-center gap-1.5">
              <FileText size={16} className="text-amber-500" />
              <span className="text-lg sm:text-xl font-extrabold text-slate-900">
                8
              </span>
            </div>
            <p className="text-[11px] font-medium text-slate-500 mt-0.5">
              Active RFQs
            </p>
          </div>

          {/* 6 Deals closed (+2 this week) */}
          <div className="px-2">
            <div className="flex items-center justify-center gap-1.5">
              <Handshake size={16} className="text-emerald-600" />
              <span className="text-lg sm:text-xl font-extrabold text-slate-900">
                6
              </span>
            </div>
            <p className="text-[11px] font-medium text-slate-500 mt-0.5">
              Deals closed
            </p>
            <p className="text-[10px] font-bold text-emerald-600 mt-0.5">
              +2 this week
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. ACTION BUTTONS (+ Add Product & Verify Docs)
          ======================================================== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link
          href="/supplier/products/create"
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0D1B33] px-4 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-slate-800 transition"
        >
          <Plus size={16} />
          <span>Add Product</span>
        </Link>

        <Link
          href="/supplier/verification"
          className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs sm:text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 transition"
        >
          <ShieldCheck size={16} className="text-slate-600" />
          <span>Verify Docs</span>
        </Link>
      </section>

      {/* ========================================================
          5. MATCHING SELLERS / SOURCING SECTION (From Image 4.24.02 PM)
          ======================================================== */}
      <section className="space-y-3.5 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-[#5547E8]">
              <Sparkles size={16} />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Matching Sellers
              </h2>
              <p className="text-xs text-slate-500">
                Selected for your sourcing profile
              </p>
            </div>
          </div>

          <Link
            href="/supplier/match-ai"
            className="text-xs font-bold uppercase tracking-wider text-[#5547E8] hover:text-indigo-800 transition"
          >
            VIEW ALL
          </Link>
        </div>

        {/* Mesh AI Callout Banner */}
        <div className="flex items-start gap-2.5 rounded-xl border border-[#D3E2FF] bg-[#EEF4FF] p-3 text-xs text-slate-800 shadow-2xs">
          <Sparkles size={16} className="text-indigo-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-semibold text-indigo-950">Mesh AI</strong> found 3 high-confidence suppliers based on category, capacity, location, and trust.
          </p>
        </div>

        {/* Partner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {matchingPartners.map((partner) => (
            <div
              key={partner.name}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4 transition hover:shadow-md"
            >
              {/* Partner Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0e1626] text-sm font-bold text-white shadow-xs">
                    {partner.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-base font-bold text-slate-900 truncate">
                        {partner.name}
                      </h3>
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    </div>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
                      <MapPin size={12} className="text-slate-400" />
                      <span>{partner.location}</span>
                    </p>
                  </div>
                </div>

                {/* Match Badge */}
                <div className="text-right shrink-0">
                  <span className="inline-block text-base font-extrabold text-[#027a48] leading-none">
                    {partner.match}
                  </span>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#027a48] mt-0.5">
                    MATCH
                  </p>
                </div>
              </div>

              {/* Category Pill */}
              <div className="flex items-center gap-1.5 rounded-xl bg-slate-50 border border-slate-100 px-3 py-2 text-xs text-slate-700">
                <Building2 size={14} className="text-slate-500 shrink-0" />
                <span className="truncate font-medium">{partner.category}</span>
              </div>

              {/* 3 Metrics: Trust, Capacity, Response */}
              <div className="grid grid-cols-3 rounded-xl border border-slate-100 bg-slate-50/50 p-3 text-center divide-x divide-slate-200/60">
                <div className="px-1">
                  <div className="flex items-center justify-center gap-1 text-xs font-bold text-slate-900">
                    <Star size={13} className="text-emerald-500 fill-emerald-500" />
                    <span>{partner.trust}</span>
                  </div>
                  <p className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                    TRUST
                  </p>
                </div>

                <div className="px-1">
                  <div className="flex items-center justify-center gap-1 text-xs font-bold text-slate-900">
                    <Package size={13} className="text-indigo-600" />
                    <span>{partner.capacity}</span>
                  </div>
                  <p className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                    CAPACITY
                  </p>
                </div>

                <div className="px-1">
                  <div className="flex items-center justify-center gap-1 text-xs font-bold text-slate-900">
                    <MessageSquare size={13} className="text-amber-500" />
                    <span>{partner.response}</span>
                  </div>
                  <p className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                    RESPONSE
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {partner.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-[11px] font-semibold text-emerald-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-1">
                <Link
                  href={`/supplier/opportunities/${partner.id}`}
                  className="flex-1 flex h-10 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-800 hover:bg-slate-50 transition shadow-xs"
                >
                  <span>View Profile</span>
                  <ArrowRight size={13} />
                </Link>

                <Link
                  href={`/supplier/message?chat=${partner.id}`}
                  className="flex-1 flex h-10 items-center justify-center gap-1.5 rounded-xl bg-[#0f172a] text-xs font-semibold text-white hover:bg-slate-800 transition shadow-xs"
                >
                  <MessageSquare size={13} />
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          6. NEW OPPORTUNITIES (Retained for Desktop & Extended View)
          ======================================================== */}
      <section className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
            New Opportunities
          </h2>
          <Link
            href="/supplier/opportunities"
            className="text-xs font-bold uppercase tracking-wider text-[#5547E8] hover:text-indigo-800 transition"
          >
            VIEW ALL
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {newOpportunities.map((opp) => (
            <Link
              key={opp.id}
              href="/supplier/opportunities"
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-xs transition hover:shadow-md hover:border-slate-300"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  {opp.image ? (
                    <div className="h-14 w-14 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shrink-0">
                      <img
                        src={opp.image}
                        alt={opp.title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  ) : (
                    <div className="h-14 w-14 flex items-center justify-center rounded-xl border border-slate-200 bg-indigo-50 text-indigo-700 shrink-0">
                      <Package size={22} />
                    </div>
                  )}

                  <span className="rounded-md border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700 shrink-0">
                    {opp.match}
                  </span>
                </div>

                <h3 className="mt-3 text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition">
                  {opp.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  {opp.requirement}
                </p>
              </div>

              <div className="mt-3 border-t border-slate-100 pt-2.5 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1 font-medium">
                  <MapPin size={12} className="text-slate-400" />
                  {opp.location}
                </span>
                <ArrowRight
                  size={14}
                  className="text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================================
          7. RECENT ACTIVITY TIMELINE
          ======================================================== */}
      <section className="space-y-3 pt-2">
        <h2 className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
          Recent Activity
        </h2>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <div className="space-y-4">
            {recentActivities.map((act, index) => (
              <div key={act.id} className="relative flex items-start gap-3.5">
                {index < recentActivities.length - 1 && (
                  <div className="absolute left-[6px] top-[14px] bottom-[-16px] w-0.5 bg-slate-200" />
                )}

                <div
                  className={`mt-1 h-3.5 w-3.5 shrink-0 rounded-full ${act.color} ring-4 ring-white`}
                />

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-slate-800">
                    {act.title}
                  </p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {act.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          8. MOBILE BOTTOM NAVIGATION BAR (Matching Image 4.24.02 PM)
          Visible only on screens < lg (mobile & tablet)
          ======================================================== */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex h-16 items-center justify-around border-t border-slate-200 bg-white/95 backdrop-blur-md px-2 lg:hidden shadow-lg">
        {/* Dashboard (Active) */}
        <Link
          href="/supplier"
          className="flex flex-col items-center justify-center gap-1 text-[#5547E8]"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50">
            <Home size={18} />
          </div>
          <span className="text-[10px] font-bold">Dashboard</span>
        </Link>

        {/* Match */}
        <Link
          href="/supplier/match-ai"
          className="flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-slate-800 transition"
        >
          <Sparkles size={18} />
          <span className="text-[10px] font-medium">Match</span>
        </Link>

        {/* Opps */}
        <Link
          href="/supplier/opportunities"
          className="flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-slate-800 transition"
        >
          <Briefcase size={18} />
          <span className="text-[10px] font-medium">Opps</span>
        </Link>

        {/* RFQs */}
        <Link
          href="/supplier/rfqs"
          className="flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-slate-800 transition"
        >
          <FileText size={18} />
          <span className="text-[10px] font-medium">RFQs</span>
        </Link>

        {/* Profile */}
        <Link
          href="/supplier/profile"
          className="flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-slate-800 transition"
        >
          <User size={18} />
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </nav>
    </div>
  );
}