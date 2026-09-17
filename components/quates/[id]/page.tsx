"use client";

import { useRouter, useParams } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  MapPin,
  Package,
  User,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const quoteDetails: Record<
  string,
  {
    product: {
      name: string;
      category: string;
      quantity: string;
      unit: string;
      description: string;
      origin: string;
      specifications: string;
    };
    buyer: {
      name: string;
      company: string;
      location: string;
      industry: string;
      requirement: string;
    };
    supplier: {
      name: string;
      company: string;
      location: string;
      industry: string;
      supplyCapacity: string;
    };
    matchScore: number;
  }
> = {
  "Q-88291": {
    product: {
      name: "Turmeric Powder",
      category: "Spices & Herbs",
      quantity: "500 MT",
      unit: "Metric Ton",
      description:
        "Premium quality turmeric powder suitable for international food and spice requirements.",
      origin: "India",
      specifications: "High Curcumin, Food Grade",
    },

    buyer: {
      name: "Global Foods Ltd",
      company: "Global Foods Ltd",
      location: "Dubai, UAE",
      industry: "Food & Beverage",
      requirement:
        "Bulk turmeric powder for food manufacturing and distribution.",
    },

    supplier: {
      name: "Premium Spice Suppliers",
      company: "Premium Spice Suppliers Pvt. Ltd.",
      location: "Gujarat, India",
      industry: "Spices & Herbs",
      supplyCapacity: "1,000 MT / Month",
    },

    matchScore: 98,
  },

  "Q-88290": {
    product: {
      name: "Black Pepper (Whole)",
      category: "Spices & Herbs",
      quantity: "250 MT",
      unit: "Metric Ton",
      description:
        "High-quality whole black pepper suitable for bulk international supply.",
      origin: "India",
      specifications: "Premium Grade, Cleaned",
    },

    buyer: {
      name: "EuroTrade GmbH",
      company: "EuroTrade GmbH",
      location: "Hamburg, Germany",
      industry: "Food Trading",
      requirement:
        "Bulk whole black pepper for European distribution.",
    },

    supplier: {
      name: "Premium Spice Suppliers",
      company: "Premium Spice Suppliers Pvt. Ltd.",
      location: "Gujarat, India",
      industry: "Spices & Herbs",
      supplyCapacity: "800 MT / Month",
    },

    matchScore: 95,
  },

  "Q-88285": {
    product: {
      name: "Cinnamon Sticks",
      category: "Spices & Herbs",
      quantity: "100 MT",
      unit: "Metric Ton",
      description:
        "Premium cinnamon sticks for food processing and retail distribution.",
      origin: "India",
      specifications: "Premium Grade",
    },

    buyer: {
      name: "Spice Importers Inc.",
      company: "Spice Importers Inc.",
      location: "New York, USA",
      industry: "Food & Beverage",
      requirement:
        "Bulk cinnamon sticks for retail and food processing.",
    },

    supplier: {
      name: "Premium Spice Suppliers",
      company: "Premium Spice Suppliers Pvt. Ltd.",
      location: "Gujarat, India",
      industry: "Spices & Herbs",
      supplyCapacity: "500 MT / Month",
    },

    matchScore: 93,
  },

  "Q-88282": {
    product: {
      name: "Cardamom Pods",
      category: "Spices & Herbs",
      quantity: "50 MT",
      unit: "Metric Ton",
      description:
        "Premium cardamom pods prepared for international bulk supply.",
      origin: "India",
      specifications: "Green Cardamom, Premium Grade",
    },

    buyer: {
      name: "Nordic Organics",
      company: "Nordic Organics",
      location: "Stockholm, Sweden",
      industry: "Organic Foods",
      requirement:
        "Premium cardamom pods for organic food products.",
    },

    supplier: {
      name: "Premium Spice Suppliers",
      company: "Premium Spice Suppliers Pvt. Ltd.",
      location: "Gujarat, India",
      industry: "Spices & Herbs",
      supplyCapacity: "300 MT / Month",
    },

    matchScore: 91,
  },

  "Q-88278": {
    product: {
      name: "Cumin Seeds",
      category: "Spices & Herbs",
      quantity: "200 MT",
      unit: "Metric Ton",
      description:
        "Premium cumin seeds suitable for bulk food and spice requirements.",
      origin: "India",
      specifications: "Machine Cleaned, Sortex Quality",
    },

    buyer: {
      name: "Fresh Market Europe",
      company: "Fresh Market Europe",
      location: "Berlin, Germany",
      industry: "Food Trading",
      requirement:
        "Bulk cumin seeds for European food distribution.",
    },

    supplier: {
      name: "Premium Spice Suppliers",
      company: "Premium Spice Suppliers Pvt. Ltd.",
      location: "Gujarat, India",
      industry: "Spices & Herbs",
      supplyCapacity: "700 MT / Month",
    },

    matchScore: 94,
  },

  "Q-88271": {
    product: {
      name: "Coriander Seeds",
      category: "Spices & Herbs",
      quantity: "150 MT",
      unit: "Metric Ton",
      description:
        "Quality coriander seeds for international food and spice applications.",
      origin: "India",
      specifications: "Cleaned, Machine Sorted",
    },

    buyer: {
      name: "Asia Food Trading",
      company: "Asia Food Trading",
      location: "Singapore",
      industry: "Food Trading",
      requirement:
        "Bulk coriander seeds for regional distribution.",
    },

    supplier: {
      name: "Premium Spice Suppliers",
      company: "Premium Spice Suppliers Pvt. Ltd.",
      location: "Gujarat, India",
      industry: "Spices & Herbs",
      supplyCapacity: "600 MT / Month",
    },

    matchScore: 89,
  },
};

export default function QuoteDetailPage() {
  const router = useRouter();
  const params = useParams();

  const id = params.id as string;

  const data =
    quoteDetails[id] || quoteDetails["Q-88291"];

  return (
    <div className="min-h-screen bg-[#faf9fc]">
      <main className="p-6">

        <div className="mb-5">
          <button
            onClick={() => router.push("/supplier/quotes")}
            className="mb-4 flex items-center gap-2 text-[15px] font-medium text-gray-500 hover:text-gray-800"
          >
            <ArrowLeft size={16} />
            Back to Quotes
          </button>

          <h1 className="text-[28px] font-bold tracking-[-0.5px] text-[#111827]">
            Quote Details
          </h1>

          <p className="mt-2 max-w-[500px] text-[13px] leading-5 text-[#667085]">
            View product, buyer, supplier and matching information.
          </p>
        </div>

        <div className="mb-5 rounded-lg border border-[#e5e3e9] bg-white p-5">
          <div className="flex items-center justify-between">

            <div>
              <div className="flex items-center gap-2">
                <Sparkles
                  size={16}
                  className="text-[#6355d9]"
                />

                <p className="text-[13px] font-semibold text-gray-700">
                  Match Score
                </p>
              </div>

              <p className="mt-1 text-[12px] text-gray-500">
                AI-based compatibility between buyer requirement
                and supplier offering.
              </p>
            </div>

            <div className="text-right">
              <p className="text-[28px] font-bold text-[#6355d9]">
                {data.matchScore}%
              </p>

              <div className="mt-1 flex items-center justify-end gap-1 text-[11px] font-medium text-emerald-600">
                <CheckCircle2 size={12} />
                Strong Match
              </div>
            </div>

          </div>

          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#eeeeF3]">
            <div
              className="h-full rounded-full bg-[#6657df]"
              style={{
                width: `${data.matchScore}%`,
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">

          <div className="rounded-lg border border-[#e5e3e9] bg-white p-5">

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0efff] text-[#6657df]">
                <Package size={16} />
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                  Product
                </p>

                <h2 className="mt-0.5 text-[15px] font-semibold text-[#171827]">
                  Product Details
                </h2>
              </div>
            </div>

            <div className="space-y-4">

              <DetailItem
                label="Product Name"
                value={data.product.name}
              />

              <DetailItem
                label="Category"
                value={data.product.category}
              />

              <DetailItem
                label="Quantity"
                value={`${data.product.quantity} (${data.product.unit})`}
              />

              <DetailItem
                label="Origin"
                value={data.product.origin}
              />

              <DetailItem
                label="Specifications"
                value={data.product.specifications}
              />

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                  Description
                </p>

                <p className="mt-1 text-[12px] leading-5 text-gray-600">
                  {data.product.description}
                </p>
              </div>

            </div>
          </div>

          <div className="rounded-lg border border-[#e5e3e9] bg-white p-5">

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef0ff] text-[#6556dc]">
                <User size={16} />
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                  Buyer
                </p>

                <h2 className="mt-0.5 text-[15px] font-semibold text-[#171827]">
                  Buyer Details
                </h2>
              </div>
            </div>

            <div className="space-y-4">

              <DetailItem
                label="Buyer Name"
                value={data.buyer.name}
              />

              <DetailItem
                label="Company"
                value={data.buyer.company}
              />

              <DetailItem
                label="Location"
                value={data.buyer.location}
                icon={<MapPin size={12} />}
              />

              <DetailItem
                label="Industry"
                value={data.buyer.industry}
              />

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                  Requirement
                </p>

                <p className="mt-1 text-[12px] leading-5 text-gray-600">
                  {data.buyer.requirement}
                </p>
              </div>

            </div>
          </div>

          <div className="rounded-lg border border-[#e5e3e9] bg-white p-5">

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e9faf4] text-emerald-500">
                <Building2 size={16} />
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                  Supplier
                </p>

                <h2 className="mt-0.5 text-[15px] font-semibold text-[#171827]">
                  Supplier Details
                </h2>
              </div>
            </div>

            <div className="space-y-4">

              <DetailItem
                label="Supplier Name"
                value={data.supplier.name}
              />

              <DetailItem
                label="Company"
                value={data.supplier.company}
              />

              <DetailItem
                label="Location"
                value={data.supplier.location}
                icon={<MapPin size={12} />}
              />

              <DetailItem
                label="Industry"
                value={data.supplier.industry}
              />

              <DetailItem
                label="Supply Capacity"
                value={data.supplier.supplyCapacity}
              />

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

function DetailItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">
        {label}
      </p>

      <div className="mt-1 flex items-center gap-1.5">
        {icon && (
          <span className="text-gray-400">
            {icon}
          </span>
        )}

        <p className="text-[13px] font-medium text-gray-700">
          {value}
        </p>
      </div>
    </div>
  );
}