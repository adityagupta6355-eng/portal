"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Download,
  FileText,
  MoreHorizontal,
  Search,
} from "lucide-react";

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

function RFQRow({
  rfq,
  onView,
}: {
  rfq: (typeof rfqs)[0];
  onView: () => void;
}) {
  return (
    <tr className="border-b border-[#eaecf0] last:border-0">
      <td className="px-5 py-4">
        <div>
          <p className="text-[13px] font-semibold text-[#344054]">
            {rfq.product}
          </p>
          <p className="mt-1 text-[12px] text-[#667085]">
            {rfq.id}
          </p>
        </div>
      </td>

      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef4ff] text-[10px] font-semibold text-[#3b82f6]">
            {rfq.initials}
          </div>

          <div>
            <p className="text-[12px] font-medium text-[#344054]">
              {rfq.buyer}
            </p>
            <p className="mt-1 text-[11px] text-[#98a2b3]">
              {rfq.location}
            </p>
          </div>
        </div>
      </td>

      <td className="px-5 py-4">
        <p className="text-[12px] font-medium text-[#344054]">
          {rfq.requirement}
        </p>
        <p className="mt-1 text-[11px] text-[#98a2b3]">
          {rfq.incoterm}
        </p>
      </td>

      <td className="px-5 py-4">
        <p className="text-[12px] font-semibold text-[#344054]">
          {rfq.estimated}
        </p>
      </td>

      <td className="px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-[45px] overflow-hidden rounded-full bg-[#eaecf0]">
            <div
              className="h-full rounded-full bg-[#12b76a]"
              style={{ width: `${rfq.matchScore}%` }}
            />
          </div>

          <span className="text-[11px] font-medium text-[#344054]">
            {rfq.matchScore}%
          </span>
        </div>
      </td>

      <td className="px-5 py-4">
        <div className="flex items-center gap-2">
          <CalendarDays
            size={14}
            className="text-[#98a2b3]"
          />
          <span className="text-[12px] text-[#344054]">
            {rfq.deadline} days
          </span>
        </div>
      </td>

      <td className="px-5 py-4">
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-medium ${
            rfq.status === "New"
              ? "bg-[#eff8ff] text-[#1570ef]"
              : rfq.status === "Negotiating"
              ? "bg-[#fffaeb] text-[#b54708]"
              : "bg-[#ecfdf3] text-[#027a48]"
          }`}
        >
          {rfq.status}
        </span>
      </td>

      <td className="px-5 py-4 text-right">
        <button
          onClick={onView}
          className="rounded-md p-2 text-[#98a2b3] hover:bg-[#f2f4f7] hover:text-[#344054]"
        >
          <MoreHorizontal size={17} />
        </button>
      </td>
    </tr>
  );
}

export default function RFQsPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("All Active");
  const [search, setSearch] = useState("");
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [selectedDate, setSelectedDate] = useState("All Dates");

  const filteredRFQs = useMemo(() => {
    let result = rfqs;

    if (activeTab !== "All Active") {
      result = result.filter(
        (rfq) => rfq.status === activeTab
      );
    }

    if (selectedDate !== "All Dates") {
      result = result.filter((rfq) => {
        if (selectedDate === "0-7 Days") {
          return rfq.deadline <= 7;
        }

        if (selectedDate === "8-14 Days") {
          return (
            rfq.deadline >= 8 &&
            rfq.deadline <= 14
          );
        }

        if (selectedDate === "15+ Days") {
          return rfq.deadline >= 15;
        }

        return true;
      });
    }

    if (search.trim()) {
      const value = search.toLowerCase();

      result = result.filter(
        (rfq) =>
          rfq.id.toLowerCase().includes(value) ||
          rfq.product.toLowerCase().includes(value) ||
          rfq.buyer.toLowerCase().includes(value) ||
          rfq.location.toLowerCase().includes(value)
      );
    }

    return result;
  }, [activeTab, search, selectedDate]);

  const handleExport = () => {
    const headers = [
      "RFQ ID",
      "Product",
      "Description",
      "Buyer",
      "Location",
      "Requirement",
      "Incoterm",
      "Estimated Value",
      "Match Score",
      "Deadline",
      "Status",
    ];

    const rows = filteredRFQs.map((rfq) => [
      rfq.id,
      rfq.product,
      rfq.description,
      rfq.buyer,
      rfq.location,
      rfq.requirement,
      rfq.incoterm,
      rfq.estimated,
      `${rfq.matchScore}%`,
      `${rfq.deadline} days`,
      rfq.status,
    ]);

    const csvContent = [headers, ...rows]
      .map((row) =>
        row
          .map((value) =>
            `"${String(value).replace(/"/g, '""')}"`
          )
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "rfqs.csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[28px] font-bold text-[#101828]">
            RFQs
          </h1>

          <p className="mt-1 text-[13px] leading-5 text-[#667085]">
            Manage and respond to buyer requests for quotation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExport}
            className="flex items-center gap-2 rounded-md border border-[#d0d5dd] bg-white px-3 py-2 text-[13px] font-medium text-[#344054] hover:bg-[#f9fafb]"
          >
            <Download size={14} />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-md border border-[#e4e7ec] bg-white p-5">
          <p className="text-[15px] font-medium text-[#667085]">
            Total Active RFQs
          </p>

          <p className="mt-2 text-[24px] font-bold text-[#101828]">
            24
          </p>

          <p className="mt-1 text-[12px] text-[#12b76a]">
            +4 this week
          </p>
        </div>

        <div className="rounded-md border border-[#e4e7ec] bg-white p-5">
          <p className="text-[15px] font-medium text-[#667085]">
            New RFQs
          </p>

          <p className="mt-2 text-[24px] font-bold text-[#101828]">
            8
          </p>

          <p className="mt-1 text-[12px] text-[#1570ef]">
            3 require response
          </p>
        </div>

        <div className="rounded-md border border-[#e4e7ec] bg-white p-5">
          <p className="text-[15px] font-medium text-[#667085]">
            Negotiating
          </p>

          <p className="mt-2 text-[24px] font-bold text-[#101828]">
            6
          </p>

          <p className="mt-1 text-[12px] text-[#b54708]">
            2 awaiting action
          </p>
        </div>

        <div className="rounded-md border border-[#e4e7ec] bg-white p-5">
          <p className="text-[15px] font-medium text-[#667085]">
            Response Rate
          </p>

          <p className="mt-2 text-[24px] font-bold text-[#101828]">
            87%
          </p>

          <p className="mt-1 text-[12px] text-[#12b76a]">
            +5.2% this month
          </p>
        </div>
      </div>

      <div className="rounded-md border border-[#e4e7ec] bg-white">
        <div className="border-b border-[#eaecf0] px-5">
          <div className="flex items-center gap-6">
            {[
              "All Active",
              "New",
              "Negotiating",
              "Responded",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-4 text-[13px] font-medium ${
                  activeTab === tab
                    ? "text-[#1570ef]"
                    : "text-[#667085]"
                }`}
              >
                {tab}

                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#1570ef]" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-b border-[#eaecf0] px-5 py-4">
          <div className="relative w-[300px]">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#98a2b3]"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search RFQs..."
              className="h-9 w-full rounded-md border border-[#d0d5dd] bg-white pl-9 pr-3 text-[12px] text-[#344054] outline-none placeholder:text-[#98a2b3] focus:border-[#84adff]"
            />
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setShowDateFilter((prev) => !prev)
              }
              className="flex items-center gap-2 rounded-md border border-[#d0d5dd] bg-white px-3 py-2 text-[13px] font-medium text-[#344054]"
            >
              Date
              <ChevronDown size={13} />
            </button>

            {showDateFilter && (
              <div className="absolute right-0 top-full z-40 mt-2 w-[170px] rounded-md border border-[#d0d5dd] bg-white p-1 shadow-lg">
                {[
                  "All Dates",
                  "0-7 Days",
                  "8-14 Days",
                  "15+ Days",
                ].map((date) => (
                  <button
                    key={date}
                    type="button"
                    onClick={() => {
                      setSelectedDate(date);
                      setShowDateFilter(false);
                    }}
                    className="w-full rounded-md px-3 py-2 text-left text-[13px] text-[#344054] hover:bg-[#f2f4f7]"
                  >
                    {date}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px]">
            <thead>
              <tr className="border-b border-[#eaecf0] bg-[#f9fafb]">
                <th className="px-5 py-3 text-left text-[13px] font-semibold uppercase tracking-wide text-[#667085]">
                  RFQ
                </th>

                <th className="px-5 py-3 text-left text-[13px] font-semibold uppercase tracking-wide text-[#667085]">
                  Buyer
                </th>

                <th className="px-5 py-3 text-left text-[13px] font-semibold uppercase tracking-wide text-[#667085]">
                  Requirement
                </th>

                <th className="px-5 py-3 text-left text-[13px] font-semibold uppercase tracking-wide text-[#667085]">
                  Estimated Value
                </th>

                <th className="px-5 py-3 text-left text-[13px] font-semibold uppercase tracking-wide text-[#667085]">
                  Match
                </th>

                <th className="px-5 py-3 text-left text-[13px] font-semibold uppercase tracking-wide text-[#667085]">
                  Deadline
                </th>

                <th className="px-5 py-3 text-left text-[13px] font-semibold uppercase tracking-wide text-[#667085]">
                  Status
                </th>

                <th className="px-5 py-3 text-right text-[13px] font-semibold uppercase tracking-wide text-[#667085]">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredRFQs.slice(0, 3).map((rfq) => (
                <RFQRow
                  key={rfq.id}
                  rfq={rfq}
                  onView={() =>
                    router.push(
                      `/supplier/rfqs/${rfq.id.replace(
                        "#",
                        ""
                      )}`
                    )
                  }
                />
              ))}
            </tbody>
          </table>
        </div>

        {filteredRFQs.length === 0 && (
          <div className="py-10 text-center">
            <FileText
              size={28}
              className="mx-auto text-[#98a2b3]"
            />

            <p className="mt-2 text-[13px] font-medium text-[#667085]">
              No RFQs found
            </p>
          </div>
        )}

        <div className="flex items-center justify-between border-t border-[#eaecf0] px-5 py-4">
          <p className="text-[13px] text-[#667085]">
            Showing {Math.min(filteredRFQs.length, 3)} of{" "}
            {filteredRFQs.length} RFQs
          </p>

          <div className="flex items-center gap-2">
            <button className="rounded-md border border-[#d0d5dd] p-2 text-[#667085] hover:bg-[#f9fafb]">
              <ArrowLeft size={14} />
            </button>

            <button className="rounded-md border border-[#d0d5dd] p-2 text-[#667085] hover:bg-[#f9fafb]">
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}