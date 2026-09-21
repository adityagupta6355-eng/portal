"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  MessageSquare,
  CheckCircle2,
  MapPin,
  Star,
  Package,
  Clock,
  Building2,
  Calendar,
  Globe2,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Check,
} from "lucide-react";

interface SellerProfileData {
  initials: string;
  name: string;
  location: string;
  verifiedBadge: string;
  matchScore: string;
  matchReason: string;
  trustScore: string;
  annualCapacity: string;
  responseRate: string;
  overview: string;
  established: string;
  exportMarkets: string;
  completedOrders: string;
  businessType: string;
  category: string;
  capabilities: string[];
  certifications: string[];
  whyMatches: string;
}

const sellerProfiles: Record<string, SellerProfileData> = {
  indus: {
    initials: "IA",
    name: "Indus Agro Exports",
    location: "Mumbai, India",
    verifiedBadge: "Trade Verified Supplier",
    matchScore: "96%",
    matchReason: "Verified capacity · Strong delivery record",
    trustScore: "94/100",
    annualCapacity: "12K MT",
    responseRate: "98%",
    overview:
      "Established international supplier specializing in rice, spices & agricultural commodities. The company serves wholesale buyers with export documentation, flexible shipment terms, and consistent quality control.",
    established: "2012",
    exportMarkets: "18 countries",
    completedOrders: "246",
    businessType: "Manufacturer",
    category: "Rice, spices & agricultural commodities",
    capabilities: [
      "Bulk packaging",
      "Private labeling",
      "Quality inspection",
      "Export documentation",
    ],
    certifications: ["ISO 22000", "HACCP", "GMP", "Export License"],
    whyMatches:
      "Strong alignment across product category, export capacity, verification, market experience, and responsiveness.",
  },
  basmati: {
    initials: "PB",
    name: "Punjab Basmati Mills",
    location: "Amritsar, India",
    verifiedBadge: "Trade Verified Producer",
    matchScore: "92%",
    matchReason: "Matches your grain product line · Direct mill supply",
    trustScore: "92/100",
    annualCapacity: "25K MT",
    responseRate: "95%",
    overview:
      "Integrated rice milling and sorting facility producing export-grade 1121 steam and sella basmati rice for international distribution.",
    established: "2008",
    exportMarkets: "24 countries",
    completedOrders: "512",
    businessType: "Processor & Mill",
    category: "Basmati & non-basmati rice",
    capabilities: [
      "Vacuum packaging",
      "Custom branding",
      "SGS inspection",
      "Phytosanitary clearance",
    ],
    certifications: ["FSSAI", "ISO 22000", "BRC Food", "APEDA Registered"],
    whyMatches:
      "Direct synergy with your rice distribution channels and high export demand in Middle East & EU.",
  },
  eastern: {
    initials: "EH",
    name: "Eastern Harvest Co.",
    location: "Ho Chi Minh City, Vietnam",
    verifiedBadge: "Verified Exporter",
    matchScore: "91%",
    matchReason: "Matches your procurement criteria · Competitive pricing",
    trustScore: "91/100",
    annualCapacity: "8K MT",
    responseRate: "94%",
    overview:
      "Leading agricultural trading house connecting southeast Asian growers with global wholesale spice and commodity buyers.",
    established: "2015",
    exportMarkets: "14 countries",
    completedOrders: "188",
    businessType: "Exporter & Trader",
    category: "Coffee, black pepper & spices",
    capabilities: [
      "Container load shipping",
      "Third-party lab testing",
      "FOB / CIF contracts",
      "Custom packing",
    ],
    certifications: ["HACCP", "VietGAP", "ISO 9001", "Export License"],
    whyMatches:
      "Supplies required commodities at target price points with verified delivery histories.",
  },
  cardamom: {
    initials: "OC",
    name: "Malabar Spices Consortium",
    location: "Idukki, Kerala",
    verifiedBadge: "Verified Estate Producer",
    matchScore: "89%",
    matchReason: "Matches your seller product catalog · Premium grade",
    trustScore: "90/100",
    annualCapacity: "1.2K MT",
    responseRate: "96%",
    overview:
      "Estate-direct green cardamom and black pepper cultivators offering unadulterated high-essential-oil botanical commodities.",
    established: "2010",
    exportMarkets: "12 countries",
    completedOrders: "135",
    businessType: "Producer & Cooperative",
    category: "Organic cardamom, pepper & vanilla",
    capabilities: [
      "Estate grading (8mm bold)",
      "Organic certified packaging",
      "Air freight readiness",
      "Direct lot traceability",
    ],
    certifications: ["USDA Organic", "India Organic", "Spices Board", "ISO 22000"],
    whyMatches:
      "Matches your catalog offerings with verified premium quality grades sought by European buyers.",
  },
  dutch: {
    initials: "DS",
    name: "Dutch Spice Imports B.V.",
    location: "Rotterdam, Netherlands",
    verifiedBadge: "Verified Buyer & Importer",
    matchScore: "88%",
    matchReason: "Active requisition matches your spices · Prompt settlement",
    trustScore: "95/100",
    annualCapacity: "15K MT",
    responseRate: "99%",
    overview:
      "Major European distribution hub sourcing regular monthly shipments of whole and ground spices from certified South Asian suppliers.",
    established: "2004",
    exportMarkets: "EU Distribution (27 states)",
    completedOrders: "640",
    businessType: "Wholesale Importer",
    category: "Bulk spices, turmeric, ginger & cardamom",
    capabilities: [
      "Letter of credit payment",
      "Long-term annual contracts",
      "Rotterdam port clearance",
      "Quality pre-approval",
    ],
    certifications: ["EU Organic", "IFS Broker", "ISO 22000", "Dutch Chamber"],
    whyMatches:
      "Active buyer requisition for 500 MT turmeric matches your export capacity and certification readiness.",
  },
};

export default function MatchAISellerProfilePage() {
  const params = useParams();
  const router = useRouter();

  const id = (params?.id as string) || "indus";
  // Normalize lookup key
  const profileKey =
    id.includes("indus")
      ? "indus"
      : id.includes("basmati") || id.includes("rice")
      ? "basmati"
      : id.includes("eastern") || id.includes("pepper")
      ? "eastern"
      : id.includes("cardamom")
      ? "cardamom"
      : id.includes("dutch") ||
        id.includes("turmeric") ||
        id.includes("soybean") ||
        id.includes("cumin") ||
        id.includes("coriander") ||
        id.includes("coffee")
      ? "dutch"
      : "indus";

  const seller = sellerProfiles[profileKey] || sellerProfiles.indus;

  return (
    <div className="w-full space-y-5 pb-24">
      {/* Top Header matching reference image */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 transition"
          aria-label="Back to opportunities"
        >
          <ArrowLeft size={20} />
        </button>

        <h1 className="text-lg font-bold tracking-tight text-slate-900">
          Seller Profile
        </h1>

        <Link
          href={`/supplier/message?chat=${profileKey}`}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 transition"
          aria-label="Message seller"
        >
          <MessageSquare size={20} />
        </Link>
      </div>

      {/* Main Seller Header Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-start gap-4">
          {/* Rounded Dark Avatar */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#0e1626] text-xl font-bold text-white shadow-xs">
            {seller.initials}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 truncate">
                {seller.name}
              </h2>
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
            </div>

            <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
              <MapPin size={13} className="text-slate-400" />
              <span>{seller.location}</span>
            </p>

            <div className="mt-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                <Check size={13} />
                {seller.verifiedBadge}
              </span>
            </div>
          </div>
        </div>

        {/* Purple Match for your business Banner */}
        <div className="flex items-center justify-between gap-4 rounded-xl border border-indigo-100 bg-[#eef2fe] px-4 py-3.5">
          <div>
            <p className="text-[10.5px] font-bold uppercase tracking-wider text-[#5546e8]">
              MATCH FOR YOUR BUSINESS
            </p>
            <p className="mt-0.5 text-xs text-slate-700 font-medium">
              {seller.matchReason}
            </p>
          </div>

          <div className="text-right shrink-0">
            <p className="text-2xl font-black text-[#027a48] leading-none">
              {seller.matchScore}
            </p>
            <p className="text-[9px] font-bold tracking-widest text-[#027a48] uppercase mt-0.5">
              MATCH
            </p>
          </div>
        </div>
      </div>

      {/* Key Metrics 3-Col Card */}
      <div className="grid grid-cols-3 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs text-center divide-x divide-slate-100">
        <div className="px-2">
          <div className="flex items-center justify-center gap-1.5 text-base sm:text-lg font-bold text-slate-900">
            <Star size={16} className="text-emerald-500 fill-emerald-500" />
            <span>{seller.trustScore}</span>
          </div>
          <p className="mt-1 text-[11px] font-medium text-slate-400">
            Trust score
          </p>
        </div>

        <div className="px-2">
          <div className="flex items-center justify-center gap-1.5 text-base sm:text-lg font-bold text-slate-900">
            <Package size={16} className="text-indigo-600" />
            <span>{seller.annualCapacity}</span>
          </div>
          <p className="mt-1 text-[11px] font-medium text-slate-400">
            Annual capacity
          </p>
        </div>

        <div className="px-2">
          <div className="flex items-center justify-center gap-1.5 text-base sm:text-lg font-bold text-slate-900">
            <MessageSquare size={16} className="text-amber-500" />
            <span>{seller.responseRate}</span>
          </div>
          <p className="mt-1 text-[11px] font-medium text-slate-400">
            Response rate
          </p>
        </div>
      </div>

      {/* Company Overview Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-base font-bold text-slate-900">
          <Building2 size={18} className="text-indigo-600" />
          <h3>Company overview</h3>
        </div>

        <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
          {seller.overview}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-100 p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600">
              <Calendar size={16} />
            </div>
            <div>
              <p className="text-[11px] text-slate-400">Established</p>
              <p className="text-xs font-bold text-slate-900">{seller.established}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-100 p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600">
              <Globe2 size={16} />
            </div>
            <div>
              <p className="text-[11px] text-slate-400">Export markets</p>
              <p className="text-xs font-bold text-slate-900">{seller.exportMarkets}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-100 p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600">
              <TrendingUp size={16} />
            </div>
            <div>
              <p className="text-[11px] text-slate-400">Completed orders</p>
              <p className="text-xs font-bold text-slate-900">{seller.completedOrders}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-100 p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600">
              <Building2 size={16} />
            </div>
            <div>
              <p className="text-[11px] text-slate-400">Business type</p>
              <p className="text-xs font-bold text-slate-900">{seller.businessType}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products and Capabilities Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-base font-bold text-slate-900">
          <Package size={18} className="text-indigo-600" />
          <h3>Products and capabilities</h3>
        </div>

        <p className="text-xs font-semibold text-slate-800">
          {seller.category}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {seller.capabilities.map((cap, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50/80 border border-emerald-200 px-3 py-1.5 text-xs font-semibold text-emerald-800"
            >
              <Check size={13} className="text-emerald-600" />
              {cap}
            </span>
          ))}
        </div>
      </div>

      {/* Certifications Card (from WhatsApp Image 16.32.50.jpeg) */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-base font-bold text-slate-900">
          <ShieldCheck size={18} className="text-indigo-600" />
          <h3>Certifications</h3>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          {seller.certifications.map((cert, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-xs font-bold text-slate-900"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Check size={12} />
              </div>
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Why this seller matches Card */}
      <div className="rounded-2xl border border-indigo-100 bg-[#eef2fe] p-5 shadow-xs space-y-2">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
          <Sparkles size={16} className="text-[#5546e8]" />
          <h3>Why this seller matches</h3>
        </div>
        <p className="text-xs leading-relaxed text-slate-700 font-medium">
          {seller.whyMatches}
        </p>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white p-4 shadow-lg lg:ml-[250px]">
        <div className="mx-auto flex w-full items-center gap-3">
          <button
            type="button"
            onClick={() => router.push(`/supplier/message?chat=${profileKey}`)}
            className="flex-1 sm:flex-initial sm:min-w-[140px] flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 transition shadow-xs"
          >
            <MessageSquare size={15} />
            <span>Message</span>
          </button>

          <button
            type="button"
            onClick={() => router.push(`/supplier/message?chat=${profileKey}`)}
            className="flex-1 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#0f172a] text-xs sm:text-sm font-semibold text-white hover:bg-slate-800 shadow-sm transition"
          >
            Connect with seller
          </button>
        </div>
      </div>
    </div>
  );
}