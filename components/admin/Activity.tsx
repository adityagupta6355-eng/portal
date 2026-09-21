"use client";

import Link from "next/link";
import {
  CheckCircle2,
  MessageSquare,
  Sparkles,
  FileText,
  Clock,
  ArrowRight,
  ShieldCheck,
  Package,
  AlertTriangle,
} from "lucide-react";

interface ActivityItem {
  id: string;
  type: "deal" | "message" | "ai" | "quote" | "rfq";
  title: string;
  description: string;
  time: string;
  link?: string;
}

const recentActivities: ActivityItem[] = [
  {
    id: "1",
    type: "deal",
    title: "Deal Won: Cumin Seeds",
    description: "Contract signed with EuroFoods Gmbh for 100 MT ($12,400).",
    time: "2 hours ago",
    link: "/supplier/opportunities",
  },
  {
    id: "2",
    type: "message",
    title: "New Message from Buyer",
    description: "Regarding RFQ-2023-11A (Cardamom) specs and packaging.",
    time: "4 hours ago",
    link: "/supplier/message",
  },
  {
    id: "3",
    type: "ai",
    title: "3 New Matches Found",
    description: "Mesh AI identified qualified buyers in the EU & UK market.",
    time: "Yesterday",
    link: "/supplier/opportunities",
  },
  {
    id: "4",
    type: "quote",
    title: "Quote Submitted",
    description: "Submitted quote for 50 MT Coriander to Global Spice Co.",
    time: "Yesterday",
    link: "/supplier/rfqs",
  },
  {
    id: "5",
    type: "rfq",
    title: "RFQ Closing Soon",
    description: "RFQ #88392 (Turmeric Powder) closes in 6 hours.",
    time: "2 days ago",
    link: "/supplier/rfqs",
  },
];

export default function Activity() {
  const getIcon = (type: ActivityItem["type"]) => {
    switch (type) {
      case "deal":
        return (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600">
            <CheckCircle2 size={16} />
          </div>
        );
      case "message":
        return (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 border border-blue-200 text-blue-600">
            <MessageSquare size={16} />
          </div>
        );
      case "ai":
        return (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-50 border border-purple-200 text-purple-600">
            <Sparkles size={16} />
          </div>
        );
      case "quote":
        return (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-50 border border-amber-200 text-amber-600">
            <FileText size={16} />
          </div>
        );
      case "rfq":
        return (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-50 border border-rose-200 text-rose-600">
            <Clock size={16} />
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Action Required Box from original Activity */}
      <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle size={17} className="text-amber-600" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800">
            Actions Required
          </h3>
        </div>

        <div className="space-y-3">
          {/* KYC Doc Alert */}
          <div className="flex items-start justify-between gap-3 rounded-lg border border-amber-200/80 bg-white p-3 shadow-xs">
            <div className="flex items-start gap-2.5">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-amber-100 text-amber-700">
                <ShieldCheck size={16} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800">
                  Complete KYC Verification
                </h4>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  Submit export license & GST certificate to unlock direct deals.
                </p>
              </div>
            </div>
            <Link
              href="/supplier/verification"
              className="shrink-0 rounded-md bg-amber-600 px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-amber-700 transition"
            >
              Verify
            </Link>
          </div>

          {/* Product Verification Alert */}
          <div className="flex items-start justify-between gap-3 rounded-lg border border-amber-200/80 bg-white p-3 shadow-xs">
            <div className="flex items-start gap-2.5">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-amber-100 text-amber-700">
                <Package size={16} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800">
                  1 Product Awaiting Review
                </h4>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  Industrial Cotton Canvas is pending verification.
                </p>
              </div>
            </div>
            <Link
              href="/supplier/products"
              className="shrink-0 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:bg-slate-100 transition"
            >
              Review
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Activity Timeline Widget */}
      <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Recent Activity</h3>
            <p className="text-[11px] text-slate-500">Live operational updates</p>
          </div>
          <Link
            href="/supplier/activity"
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
          >
            View All
          </Link>
        </div>

        <div className="relative flex-1">
          {/* Vertical timeline connector line */}
          <div className="absolute left-4 top-3 bottom-3 w-px bg-slate-200" />

          <div className="space-y-4">
            {recentActivities.map((item) => (
              <div key={item.id} className="relative flex items-start gap-3.5">
                <div className="relative z-10 bg-white">{getIcon(item.type)}</div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xs font-semibold text-slate-900 truncate">
                      {item.title}
                    </h4>
                    <span className="shrink-0 text-[10px] text-slate-400">
                      {item.time}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[11px] leading-4 text-slate-500">
                    {item.description}
                  </p>
                  {item.link && (
                    <Link
                      href={item.link}
                      className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-indigo-600 hover:underline"
                    >
                      Details <ArrowRight size={11} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 border-t border-slate-100 pt-4">
          <Link
            href="/supplier/activity"
            className="flex w-full items-center justify-center rounded-lg border border-slate-200 bg-slate-50 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
          >
            View Full Activity Log
          </Link>
        </div>
      </div>
    </div>
  );
}