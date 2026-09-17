"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const opportunities = [
  {
    title: "Turmeric Powder",
    company: "Alpeasy Foods",
    location: "Rotterdam, Netherlands",
    quantity: "500 MT",
    match: "95%",
    category: "Spices",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&q=80",
    type: "Recommended",
  },
  {
    title: "Black Pepper",
    company: "Tillerycherry GmbH",
    location: "Dubai, UAE",
    quantity: "200 MT",
    match: "91%",
    category: "Spices",
    image:
    "https://images.unsplash.com/photo-1509351631165-9e6c0f0f6e8f?w=800&q=80",
    type: "Recommended",
  },
  {
    title: "Cumin Seeds",
    company: "Global Foods",
    location: "London, UK",
    quantity: "100 MT",
    match: "88%",
    category: "Seeds",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
    type: "Recommended",
  },
  {
    title: "Coriander Seeds",
    company: "Euro Foods",
    location: "Berlin, Germany",
    quantity: "50 MT",
    match: "86%",
    category: "Seeds",
    image:
      "https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=800&q=80",
    type: "New",
  },
];

const tabs = ["Recommended", "New", "Saved"];

export default function OpportunitiesPage() {
  const [activeTab, setActiveTab] = useState("Recommended");
  const router = useRouter();

  const filteredOpportunities =
    activeTab === "Saved"
      ? []
      : opportunities.filter((item) => item.type === activeTab);

  const handleViewRequirement = (title: string) => {
    const id = title.toLowerCase().replace(/\s+/g, "-");
    router.push(`/supplier/opportunities/${id}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Opportunities</h1>

      <p className="mt-1 text-sm text-gray-500">
        AI-matched buyer opportunities for your business.
      </p>

      <div className="mt-6 border-b border-[#e3e3e7]">
        <div className="flex h-10 items-end gap-7">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative h-10 text-sm font-medium ${
                activeTab === tab
                  ? "text-[#4f46e5]"
                  : "text-[#64748b]"
              }`}
            >
              {tab}

              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4f46e5]" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {filteredOpportunities.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-xl border border-[#dedee5] bg-white p-5 shadow-sm"
          >
            <div className="relative mb-4 flex items-center gap-4">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-[#f5f5f5]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#222]">
                  {item.title}
                </h2>

                <p className="mt-1 text-sm font-semibold text-[#555]">
                  {item.company}
                </p>

                <p className="mt-1 text-sm text-[#888]">
                  📍 {item.location}
                </p>
              </div>

              <div className="absolute right-0 top-0 text-right">
                <p className="text-xs text-[#999]">
                  AI Match
                </p>

                <p className="mt-1 text-sm font-bold text-[#6045e9]">
                  {item.match}
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-[#fafafa] p-3">
                <p className="text-xs text-[#999]">
                  Quantity
                </p>

                <p className="mt-1 text-sm font-bold">
                  {item.quantity}
                </p>
              </div>

              <div className="rounded-lg bg-[#fafafa] p-3">
                <p className="text-xs text-[#999]">
                  Category
                </p>

                <p className="mt-1 text-sm font-bold">
                  {item.category}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleViewRequirement(item.title)}
              className="mt-5 w-full rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white"
            >
              View Requirement
            </button>
          </div>
        ))}
      </div>

      {activeTab === "Saved" &&
        filteredOpportunities.length === 0 && (
          <div className="mt-6 rounded-xl border border-[#dedee5] bg-white p-8 text-center">
            <p className="text-sm text-gray-500">
              No saved opportunities yet.
            </p>
          </div>
        )}
    </div>
  );
}