"use client";

import { useRouter } from "next/navigation";

type Opportunity = {
  title: string;
  company: string;
  location: string;
  quantity: string;
  match: string;
  category: string;
  image: string;
};

type OpportunityCardProps = {
  opportunity?: Opportunity;

  letter?: string;
  product?: string;
  buyer?: string;
  quantity?: string;
  destination?: string;
  match?: string;
};

export default function OpportunityCard({
  opportunity,
  letter,
  product,
  buyer,
  quantity,
  destination,
  match,
}: OpportunityCardProps) {
  const router = useRouter();

  if (opportunity) {
    const handleViewDetail = () => {
      const id = opportunity.title
        .toLowerCase()
        .replace(/\s+/g, "-");

      router.push(`/supplier/opportunities/${id}`);
    };

    return (
      <div className="w-full rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
        <div className="relative mb-4 flex items-center gap-4">
          {opportunity.image ? (
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100 border border-slate-200">
              <img
                src={opportunity.image}
                alt={opportunity.title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          ) : (
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 font-bold text-xl border border-indigo-100">
              {opportunity.title.charAt(0)}
            </div>
          )}

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 rounded px-1.5 py-0.5">
                Product
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                {opportunity.title}
              </h2>
            </div>

            <p className="text-sm font-semibold text-slate-700">
              {opportunity.company}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              📍 {opportunity.location}
            </p>
          </div>

          <div className="absolute right-0 top-0 text-right">
            <p className="text-xs text-slate-400">
              AI Match
            </p>

            <p className="mt-0.5 text-sm font-bold text-indigo-600">
              {opportunity.match}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-slate-50 border border-slate-100 p-3">
            <p className="text-xs text-slate-400">
              Quantity
            </p>

            <p className="mt-1 text-sm font-bold text-slate-900">
              {opportunity.quantity}
            </p>
          </div>

          <div className="rounded-lg bg-slate-50 border border-slate-100 p-3">
            <p className="text-xs text-slate-400">
              Category
            </p>

            <p className="mt-1 text-sm font-bold text-slate-900">
              {opportunity.category}
            </p>
          </div>

          <div className="rounded-lg bg-slate-50 border border-slate-100 p-3">
            <p className="text-xs text-slate-400">
              Match Score
            </p>

            <p className="mt-1 text-sm font-bold text-indigo-600">
              {opportunity.match}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleViewDetail}
          className="mt-4 w-full rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 transition"
        >
          View Requirement
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 hover:bg-slate-50/80 rounded-lg transition-colors">
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 text-sm font-bold text-indigo-600">
          {letter || (product ? product.charAt(0) : "P")}
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200/60 rounded px-1.5 py-0.5">
              Product
            </span>
            <span className="text-sm font-bold text-slate-900 truncate">
              {product}
            </span>
          </div>
          <div className="mt-0.5 text-xs text-slate-500 truncate">
            Buyer: <span className="font-medium text-slate-700">{buyer}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 text-xs">
        <div className="text-left sm:text-right">
          <div className="font-semibold text-slate-800">
            {quantity}
          </div>
          <div className="text-[10px] text-slate-400">
            Qty Required
          </div>
        </div>

        <div className="text-left sm:text-right">
          <div className="font-semibold text-slate-800">
            {destination}
          </div>
          <div className="text-[10px] text-slate-400">
            Destination
          </div>
        </div>

        <div className="shrink-0 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
          {match}
        </div>

        <button
          type="button"
          onClick={() => router.push("/supplier/opportunities")}
          className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800 transition shrink-0"
        >
          View
        </button>
      </div>
    </div>
  );
}