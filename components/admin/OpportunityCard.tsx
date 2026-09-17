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
      <div className="w-full rounded-xl border border-[#dedee5] bg-white p-5 shadow-sm">
        <div className="relative mb-4 flex items-center gap-4">
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-[#f5f5f5]">
            <img
              src={opportunity.image}
              alt={opportunity.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#222]">
              {opportunity.title}
            </h2>

            <p className="mt-1 text-sm font-semibold text-[#555]">
              {opportunity.company}
            </p>

            <p className="mt-1 text-sm text-[#888]">
              📍 {opportunity.location}
            </p>
          </div>

          <div className="absolute right-0 top-0 text-right">
            <p className="text-xs text-[#999]">
              AI Match
            </p>

            <p className="mt-1 text-sm font-bold text-[#6045e9]">
              {opportunity.match}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-[#fafafa] p-3">
            <p className="text-xs text-[#999]">
              Quantity
            </p>

            <p className="mt-1 text-sm font-bold">
              {opportunity.quantity}
            </p>
          </div>

          <div className="rounded-lg bg-[#fafafa] p-3">
            <p className="text-xs text-[#999]">
              Category
            </p>

            <p className="mt-1 text-sm font-bold">
              {opportunity.category}
            </p>
          </div>

          <div className="rounded-lg bg-[#fafafa] p-3">
            <p className="text-xs text-[#999]">
              Match
            </p>

            <p className="mt-1 text-sm font-bold text-[#6045e9]">
              {opportunity.match}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleViewDetail}
          className="mt-5 w-full rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white"
        >
          View Requirement
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 border-b border-[#eeeeef] py-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f0efff] text-[10px] font-bold text-[#5b50e8]">
        {letter}
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-semibold text-[#222]">
          {product}
        </div>

        <div className="mt-1 text-[8px] text-[#777b86]">
          {buyer}
        </div>
      </div>

      <div className="text-right">
        <div className="text-[9px] font-medium text-[#333]">
          {quantity}
        </div>

        <div className="mt-1 text-[7px] text-[#999]">
          Quantity
        </div>
      </div>

      <div className="text-right">
        <div className="text-[9px] font-medium text-[#333]">
          {destination}
        </div>

        <div className="mt-1 text-[7px] text-[#999]">
          Destination
        </div>
      </div>

      <div className="rounded-full bg-[#e8f8f0] px-2 py-1 text-[7px] font-semibold text-[#159966]">
        {match}
      </div>
    </div>
  );
}