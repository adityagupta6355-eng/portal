"use client";

import { ArrowLeft, Clock3, Globe2, Package, ShieldCheck } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const opportunities = [
  {
    id: "turmeric-powder",
    title: "Turmeric Powder",
    company: "Alpeasy Foods",
    location: "Rotterdam, Netherlands",
    quantity: "500 MT",
    match: "95%",
    category: "Spices",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&q=80",
    origin: "India",
    price: "USD 1,180–1,320 / MT",
    minimumOrder: "25 MT",
    available: "2,500 MT",
    leadTime: "10–14 days",
    description:
      "Premium export-quality product processed under strict quality controls. Suitable for international wholesale buyers and available with flexible packaging options.",
    specifications: [
      ["Curcumin", "3% minimum"],
      ["Form", "Fine powder"],
      ["Packaging", "20 kg bags"],
    ],
    supplier: "ABC Spices Pvt. Ltd.",
    trustScore: "91",
  },
  {
    id: "black-pepper",
    title: "Black Pepper",
    company: "Tillerycherry GmbH",
    location: "Dubai, UAE",
    quantity: "200 MT",
    match: "91%",
    category: "Spices",
    image:
      "https://images.unsplash.com/photo-1599909533730-f9d5b5f9c2b8?w=800&q=80",
    origin: "Vietnam",
    price: "USD 2,100–2,350 / MT",
    minimumOrder: "20 MT",
    available: "1,200 MT",
    leadTime: "12–16 days",
    description:
      "Premium quality black pepper suitable for international wholesale buyers with flexible packaging and shipment options.",
    specifications: [
      ["Grade", "ASTA 550"],
      ["Form", "Whole pepper"],
      ["Packaging", "25 kg bags"],
    ],
    supplier: "Tillerycherry GmbH",
    trustScore: "89",
  },
  {
    id: "cumin-seeds",
    title: "Cumin Seeds",
    company: "Global Foods",
    location: "London, UK",
    quantity: "100 MT",
    match: "88%",
    category: "Seeds",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
    origin: "India",
    price: "USD 1,850–2,050 / MT",
    minimumOrder: "10 MT",
    available: "800 MT",
    leadTime: "10–15 days",
    description:
      "High-quality cumin seeds prepared for bulk international trade with reliable supply and packaging options.",
    specifications: [
      ["Purity", "99% minimum"],
      ["Form", "Whole seeds"],
      ["Packaging", "25 kg bags"],
    ],
    supplier: "Global Foods",
    trustScore: "87",
  },
  {
    id: "coriander-seeds",
    title: "Coriander Seeds",
    company: "Euro Foods",
    location: "Berlin, Germany",
    quantity: "50 MT",
    match: "86%",
    category: "Seeds",
    image:
      "https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=800&q=80",
    origin: "India",
    price: "USD 1,300–1,500 / MT",
    minimumOrder: "10 MT",
    available: "500 MT",
    leadTime: "8–12 days",
    description:
      "Export-quality coriander seeds prepared for wholesale buyers with consistent quality and flexible packaging options.",
    specifications: [
      ["Purity", "98% minimum"],
      ["Form", "Whole seeds"],
      ["Packaging", "25 kg bags"],
    ],
    supplier: "Euro Foods",
    trustScore: "85",
  },
];

export default function OpportunityDetailsPage() {
  const router = useRouter();
  const params = useParams();

  const opportunity = opportunities.find(
    (item) => item.id === params.id
  );

  if (!opportunity) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          Opportunity not found
        </h1>

        <button
          onClick={() => router.push("/supplier/opportunities")}
          className="mt-4 rounded-md bg-black px-4 py-2 text-sm text-white"
        >
          Back to Opportunities
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7fa] p-6 pb-24">
      <button
        onClick={() => router.push("/supplier/opportunities")}
        className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black"
      >
        <ArrowLeft size={16} />
        Back to Opportunities
      </button>

      <div className="mb-5 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            {opportunity.title}
          </h1>

          <div className="mt-1 flex items-center gap-2 text-sm">
            <span className="font-semibold text-[#5146d8]">
              {opportunity.category}
            </span>

            <span className="text-gray-400">
              •
            </span>

            <span className="text-gray-500">
              {opportunity.company}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <Globe2 size={16} />
            Origin: {opportunity.origin}
          </div>
        </div>

        <div className="h-24 w-32 overflow-hidden rounded-xl border border-gray-200 bg-white">
          <img
            src={opportunity.image}
            alt={opportunity.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <section className="mb-4 rounded-xl border border-[#dedee5] bg-white p-5 shadow-sm">
        <div className="grid grid-cols-2 gap-y-5">
          <div className="border-r border-gray-200 pr-6">
            <p className="text-[11px] font-semibold uppercase text-gray-400">
              Price
            </p>

            <p className="mt-1 text-base font-bold">
              {opportunity.price}
            </p>
          </div>

          <div className="pl-6">
            <p className="text-[11px] font-semibold uppercase text-gray-400">
              Minimum Order
            </p>

            <p className="mt-1 text-base font-bold">
              {opportunity.minimumOrder}
            </p>
          </div>

          <div className="border-r border-gray-200 pr-6">
            <p className="text-[11px] font-semibold uppercase text-gray-400">
              Available
            </p>

            <p className="mt-1 text-base font-bold">
              {opportunity.available}
            </p>
          </div>

          <div className="pl-6">
            <p className="text-[11px] font-semibold uppercase text-gray-400">
              Lead Time
            </p>

            <p className="mt-1 flex items-center gap-1.5 text-base font-bold">
              <Clock3 size={16} />
              {opportunity.leadTime}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-4 rounded-xl border border-[#dedee5] bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold">
          About this product
        </h2>

        <p className="mt-2 max-w-4xl text-sm leading-6 text-gray-600">
          {opportunity.description}
        </p>

        <button className="mt-2 text-sm font-semibold text-[#5146d8]">
          Read more
        </button>
      </section>

      <section className="mb-4 rounded-xl border border-[#dedee5] bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold">
          Key specifications
        </h2>

        <div className="mt-3">
          {opportunity.specifications.map(([name, value]) => (
            <div
              key={name}
              className="flex items-center justify-between border-t border-gray-200 py-2.5"
            >
              <span className="text-sm text-gray-500">
                {name}
              </span>

              <span className="text-sm font-semibold">
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-[#dedee5] bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold">
          Supplier
        </h2>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
            <Package size={23} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold">
                {opportunity.supplier}
              </span>

              <ShieldCheck
                size={17}
                className="text-green-500"
              />
            </div>

            <p className="mt-1 text-xs text-gray-500">
              Verified supplier · India · Trust score{" "}
              {opportunity.trustScore}
            </p>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white px-6 py-3">
        <div className="flex justify-end gap-3">
          <button className="flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold">
            Message
          </button>

          <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-[#111827] px-6 text-sm font-semibold text-white">
            <Package size={16} />
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
}