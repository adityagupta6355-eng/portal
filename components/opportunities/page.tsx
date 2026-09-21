"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/common/BackButton";
import {
  Search,
  Filter,
  Bookmark,
  BookmarkCheck,
  Building2,
  MapPin,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Package,
  Layers,
  FileText,
} from "lucide-react";

interface OpportunityItem {
  id: string;
  title: string;
  company: string;
  location: string;
  quantity: string;
  match: string;
  category: string;
  type: "Recommended" | "New" | "Saved";
  image?: string;
  budget?: string;
  incoterms?: string;
  leadTime?: string;
}

const opportunitiesData: OpportunityItem[] = [
  {
    id: "turmeric-powder",
    title: "Turmeric Powder (Alleppey Finger)",
    company: "Dutch Spice Imports B.V.",
    location: "Rotterdam, Netherlands",
    quantity: "500 MT / quarter",
    match: "95%",
    category: "Spices",
    type: "Recommended",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80",
    budget: "USD 1,350 / MT",
    incoterms: "CIF Rotterdam",
    leadTime: "25 days",
  },
  {
    id: "premium-basmati-rice",
    title: "Premium Basmati Rice (1121 Steam)",
    company: "Al-Khaleej Grain Imports",
    location: "Dubai, UAE",
    quantity: "500 MT / month",
    match: "94%",
    category: "Grains & Cereals",
    type: "Recommended",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
    budget: "USD 890 / MT",
    incoterms: "CIF Jebel Ali",
    leadTime: "15 days",
  },
  {
    id: "organic-soybean",
    title: "Organic Non-GMO Soybean",
    company: "EuroGrain Trading BV",
    location: "Rotterdam, Netherlands",
    quantity: "250 MT / month",
    match: "91%",
    category: "Oilseeds & Pulses",
    type: "Recommended",
    image:
      "https://images.unsplash.com/photo-1599909533730-f9d5b5f9c2b8?w=600&q=80",
    budget: "USD 620 / MT",
    incoterms: "FOB Mumbai",
    leadTime: "30 days",
  },
  {
    id: "black-pepper",
    title: "Black Pepper (Tellicherry 550GL)",
    company: "Eastern Harvest Co.",
    location: "Ho Chi Minh City, Vietnam",
    quantity: "200 MT / quarter",
    match: "91%",
    category: "Spices",
    type: "Recommended",
    image:
      "https://images.unsplash.com/photo-1509351631165-9e6c0f0f6e8f?w=600&q=80",
    budget: "USD 4,800 / MT",
    incoterms: "CIF Cat Lai",
    leadTime: "20 days",
  },
  {
    id: "organic-cardamom",
    title: "Organic Green Cardamom (8mm Bold)",
    company: "Nordic Spice Import AB",
    location: "Stockholm, Sweden",
    quantity: "25 MT / order",
    match: "92%",
    category: "Spices",
    type: "New",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
    budget: "USD 18,500 / MT",
    incoterms: "CIF Gothenburg",
    leadTime: "14 days",
  },
  {
    id: "cumin-seeds",
    title: "Cumin Seeds (Singapore 99% Clean)",
    company: "Global Foods Pvt. Ltd.",
    location: "London, UK",
    quantity: "100 MT",
    match: "88%",
    category: "Seeds",
    type: "New",
    image:
      "https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=600&q=80",
    budget: "USD 3,200 / MT",
    incoterms: "CIF Felixstowe",
    leadTime: "25 days",
  },
  {
    id: "coriander-seeds",
    title: "Coriander Seeds (Eagle Whole)",
    company: "Euro Foods Wholesale",
    location: "Berlin, Germany",
    quantity: "50 MT",
    match: "86%",
    category: "Seeds",
    type: "New",
    budget: "USD 1,650 / MT",
    incoterms: "CIF Hamburg",
    leadTime: "20 days",
  },
  {
    id: "green-coffee-beans",
    title: "Green Coffee Beans (Arabica Plantation A)",
    company: "Levant Roasters Trading",
    location: "Beirut, Lebanon",
    quantity: "75 MT",
    match: "89%",
    category: "Beverages & Agro",
    type: "New",
    budget: "USD 4,200 / MT",
    incoterms: "CIF Beirut",
    leadTime: "30 days",
  },
];

const tabs = ["All", "Recommended", "New", "Saved"] as const;

export default function OpportunitiesPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [savedItems, setSavedItems] = useState<string[]>(["turmeric-powder"]);

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleViewRequirement = (id: string) => {
    router.push(`/supplier/opportunities/${id}`);
  };

  const filteredOpportunities = opportunitiesData.filter((opp) => {
    // Tab filter
    if (activeTab === "Saved") {
      if (!savedItems.includes(opp.id)) return false;
    } else if (activeTab !== "All") {
      if (opp.type !== activeTab) return false;
    }

    // Category filter
    if (selectedCategory !== "All" && opp.category !== selectedCategory) {
      return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        opp.title.toLowerCase().includes(q) ||
        opp.company.toLowerCase().includes(q) ||
        opp.location.toLowerCase().includes(q) ||
        opp.category.toLowerCase().includes(q)
      );
    }

    return true;
  });

  const categories = [
    "All",
    "Spices",
    "Grains & Cereals",
    "Oilseeds & Pulses",
    "Seeds",
    "Beverages & Agro",
  ];

  return (
    <div className="w-full space-y-6">
      {/* Header & Back Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="mb-2">
            <BackButton label="Back to Dashboard" fallbackHref="/supplier" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Opportunities
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            AI-matched buyer requisitions and active export demands for your business.
          </p>
        </div>

        {/* Action Link to Match AI */}
        <button
          type="button"
          onClick={() => router.push("/supplier/match-ai")}
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-50 border border-indigo-200 px-4 py-2 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 transition shadow-xs self-start sm:self-auto"
        >
          <Sparkles size={15} className="text-indigo-600" />
          <span>View Match AI Intelligence →</span>
        </button>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-3">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto">
          {tabs.map((tab) => {
            const count =
              tab === "All"
                ? opportunitiesData.length
                : tab === "Saved"
                ? savedItems.length
                : opportunitiesData.filter((i) => i.type === tab).length;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
                  activeTab === tab
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span>{tab}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    activeTab === tab
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Category Select */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="relative flex-1 sm:w-64">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search commodity, buyer, city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white py-1.5 pl-9 pr-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-hidden"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 focus:border-indigo-500 focus:outline-hidden"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "All" ? "All Categories" : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Opportunities Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredOpportunities.map((opp) => (
          <div
            key={opp.id}
            onClick={() => handleViewRequirement(opp.id)}
            className="group relative cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition hover:shadow-md hover:border-slate-300 flex flex-col justify-between"
          >
            <div>
              {/* Top Header: Image (ONLY if present) + Category + Match Pill */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  {/* Image ONLY shown if present! */}
                  {opp.image ? (
                    <div className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
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
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 font-bold border border-indigo-100">
                      <Package size={22} className="text-indigo-600" />
                    </div>
                  )}

                  <div className="min-w-0">
                    <span className="inline-block rounded bg-indigo-50 border border-indigo-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-indigo-700 mb-1">
                      {opp.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition truncate">
                      {opp.title}
                    </h3>
                    <p className="flex items-center gap-1.5 text-xs text-slate-600 truncate mt-0.5">
                      <Building2 size={13} className="text-slate-400 shrink-0" />
                      <span>{opp.company}</span>
                    </p>
                  </div>
                </div>

                {/* Match Pill & Bookmark */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                    {opp.match} Match
                  </span>
                  <button
                    type="button"
                    onClick={(e) => toggleSave(opp.id, e)}
                    className="rounded-lg p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 transition"
                    title="Save opportunity"
                  >
                    {savedItems.includes(opp.id) ? (
                      <BookmarkCheck size={16} className="text-indigo-600 fill-indigo-600" />
                    ) : (
                      <Bookmark size={16} />
                    )}
                  </button>
                </div>
              </div>

              {/* Requirement Details Grid */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <div className="rounded-lg bg-slate-50 border border-slate-100 p-2.5">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Volume Required</p>
                  <p className="text-xs font-bold text-slate-900 mt-0.5">{opp.quantity}</p>
                </div>

                <div className="rounded-lg bg-slate-50 border border-slate-100 p-2.5">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Target Budget</p>
                  <p className="text-xs font-bold text-slate-900 mt-0.5">{opp.budget || "Market Rate"}</p>
                </div>

                <div className="col-span-2 sm:col-span-1 rounded-lg bg-slate-50 border border-slate-100 p-2.5">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Terms / Lead</p>
                  <p className="text-xs font-bold text-slate-900 mt-0.5 truncate">
                    {opp.incoterms || opp.leadTime || "CIF"}
                  </p>
                </div>
              </div>

              {/* Destination Location */}
              <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
                <MapPin size={13} className="text-slate-400 shrink-0" />
                <span>Destination: <strong className="text-slate-700">{opp.location}</strong></span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-indigo-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                View Full Requisition →
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/supplier/message?chat=${encodeURIComponent(opp.id)}`);
                }}
                className="rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-slate-800 transition shadow-xs"
              >
                Contact Buyer
              </button>
            </div>
          </div>
        ))}

        {filteredOpportunities.length === 0 && (
          <div className="col-span-full rounded-2xl border border-slate-200 bg-white p-12 text-center">
            <p className="text-sm font-semibold text-slate-700">No opportunities found</p>
            <p className="mt-1 text-xs text-slate-500">
              Try adjusting your search or tab filters to discover buyer requisitions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}