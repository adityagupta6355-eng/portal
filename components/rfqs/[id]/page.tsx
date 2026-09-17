"use client";

import { ArrowLeft, FileText, Package, User } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const rfqs = [
  {
    id: "#TM-10482",
    product: "Premium Basmati Rice",
    description: "1121 Basmati Rice, Steam",
    buyer: "Global Market Foods",
    initials: "GM",
    location: "Dubai, UAE",
    requirement: "500 MT",
    incoterm: "CIF Jebel Ali",
    estimated: "$480k",
    matchScore: 98,
    deadline: 2,
    status: "New",
  },
  {
    id: "#TM-10445",
    product: "Black Pepper (500g/l)",
    description: "Vietnam Black Pepper, ASTA",
    buyer: "EuroSpice Imports Ltd.",
    initials: "EI",
    location: "Hamburg, Germany",
    requirement: "2 FCL",
    incoterm: "FOB Ho Chi Minh",
    estimated: "$110k",
    matchScore: 85,
    deadline: 5,
    status: "Negotiating",
  },
  {
    id: "#TM-10421",
    product: "Green Cardamom 8mm",
    description: "Green Cardamom, Grade A",
    buyer: "Al-Fardan Trading",
    initials: "AT",
    location: "Riyadh, KSA",
    requirement: "5,000 KG",
    incoterm: "CFR Jeddah",
    estimated: "$95k",
    matchScore: 92,
    deadline: 8,
    status: "Responded",
  },
  {
    id: "#TM-10408",
    product: "Organic Turmeric Powder",
    description: "Organic Turmeric Powder, 5% Curcumin",
    buyer: "Nordic Organic Foods",
    initials: "NO",
    location: "Stockholm, Sweden",
    requirement: "1,000 KG",
    incoterm: "DAP Stockholm",
    estimated: "$42k",
    matchScore: 88,
    deadline: 12,
    status: "New",
  },
  {
    id: "#TM-10395",
    product: "Ceylon Cinnamon Sticks",
    description: "Ceylon Cinnamon, Grade Alba",
    buyer: "European Spice House",
    initials: "ES",
    location: "Berlin, Germany",
    requirement: "2,500 KG",
    incoterm: "FOB Colombo",
    estimated: "$75k",
    matchScore: 94,
    deadline: 15,
    status: "Responded",
  },
  {
    id: "#TM-10382",
    product: "Black Cumin Seeds",
    description: "Black Cumin Seeds, Premium Grade",
    buyer: "Middle East Trading Co.",
    initials: "MT",
    location: "Abu Dhabi, UAE",
    requirement: "3,000 KG",
    incoterm: "CIF Abu Dhabi",
    estimated: "$61k",
    matchScore: 81,
    deadline: 18,
    status: "Negotiating",
  },
];

function DetailCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md border border-[#e4e7ec] bg-white p-4">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-[#98a2b3]">
        {label}
      </p>

      <p className="mt-1 text-[14px] font-medium text-[#344054]">
        {value}
      </p>
    </div>
  );
}

export default function RFQDetailsPage() {
  const router = useRouter();
  const params = useParams();

  const id = String(params.id);

  const rfq = rfqs.find(
    (item) => item.id.replace("#", "") === id
  );

  if (!rfq) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <p className="text-[18px] font-semibold text-[#101828]">
            RFQ not found
          </p>

          <button
            onClick={() => router.back()}
            className="mt-4 rounded-md bg-[#1570ef] px-4 py-2 text-[13px] font-medium text-white"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="rounded-md border border-[#d0d5dd] bg-white p-2 text-[#667085] hover:bg-[#f9fafb]"
        >
          <ArrowLeft size={17} />
        </button>

        <div>
          <h1 className="text-[26px] font-bold text-[#101828]">
            RFQ Details
          </h1>

          <p className="mt-1 text-[13px] text-[#667085]">
            Review buyer request and supplier requirements.
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-[#e4e7ec] bg-white p-5">
        <div className="flex items-start justify-between">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#eef4ff]">
              <FileText
                size={22}
                className="text-[#1570ef]"
              />
            </div>

            <div>
              <p className="text-[12px] font-medium text-[#667085]">
                {rfq.id}
              </p>

              <h2 className="mt-1 text-[20px] font-bold text-[#101828]">
                {rfq.product}
              </h2>

              <p className="mt-1 text-[13px] text-[#667085]">
                {rfq.description}
              </p>
            </div>

          </div>

          <span
            className={`rounded-full px-3 py-1.5 text-[11px] font-medium ${
              rfq.status === "New"
                ? "bg-[#eff8ff] text-[#1570ef]"
                : rfq.status === "Negotiating"
                ? "bg-[#fffaeb] text-[#b54708]"
                : "bg-[#ecfdf3] text-[#027a48]"
            }`}
          >
            {rfq.status}
          </span>

        </div>
      </div>
      <div className="rounded-lg border border-[#e4e7ec] bg-white p-5">

        <div className="mb-5 flex items-center gap-2">
          <Package
            size={18}
            className="text-[#1570ef]"
          />

          <h2 className="text-[18px] font-bold text-[#101828]">
            Product Details
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <DetailCard
            label="Product"
            value={rfq.product}
          />
          <DetailCard
            label="Description"
            value={rfq.description}
          />
          <DetailCard
            label="RFQ ID"
            value={rfq.id}
          />
          <DetailCard
            label="Estimated Value"
            value={rfq.estimated}
          />

        </div>
      </div>
      <div className="rounded-lg border border-[#e4e7ec] bg-white p-5">

        <div className="mb-5 flex items-center gap-2">
          <User
            size={18}
            className="text-[#1570ef]"
          />

          <h2 className="text-[18px] font-bold text-[#101828]">
            Buyer Details
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <DetailCard
            label="Buyer"
            value={rfq.buyer}
          />
          <DetailCard
            label="Buyer Initials"
            value={rfq.initials}
          />

          <DetailCard
            label="Location"
            value={rfq.location}
          />

          <DetailCard
            label="Incoterm"
            value={rfq.incoterm}
          />

        </div>
      </div>
      <div className="rounded-lg border border-[#e4e7ec] bg-white p-5">

        <div className="mb-5 flex items-center gap-2">
          <FileText
            size={18}
            className="text-[#1570ef]"
          />

          <h2 className="text-[18px] font-bold text-[#101828]">
            Supplier Requirement
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <DetailCard
            label="Required Quantity"
            value={rfq.requirement}
          />

          <DetailCard
            label="Delivery Terms"
            value={rfq.incoterm}
          />

          <DetailCard
            label="Deadline"
            value={`${rfq.deadline} days`}
          />

          <DetailCard
            label="Estimated Value"
            value={rfq.estimated}
          />

        </div>
      </div>

      <div className="rounded-lg border border-[#e4e7ec] bg-white p-5">

        <h2 className="text-[18px] font-bold text-[#101828]">
          Match Score
        </h2>

        <div className="mt-5 flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ecfdf3]">
            <span className="text-[23px] font-bold text-[#027a48]">
              {rfq.matchScore}%
            </span>
          </div>

          <div className="flex-1">

            <p className="text-[14px] font-semibold text-[#344054]">
              Product Match
            </p>

            <p className="mt-1 text-[12px] text-[#667085]">
              This RFQ has a {rfq.matchScore}% match
              with your supplier profile.
            </p>

            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#eaecf0]">
              <div
                className="h-full rounded-full bg-[#12b76a]"
                style={{
                  width: `${rfq.matchScore}%`,
                }}
              />
            </div>

          </div>

        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => router.back()}
          className="rounded-md border border-[#d0d5dd] bg-white px-4 py-2 text-[13px] font-medium text-[#344054] hover:bg-[#f9fafb]"
        >
          Back to RFQs
        </button>
      </div>

    </div>
  );
} 