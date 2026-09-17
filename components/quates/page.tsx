"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Search,
  Plus,
  FileText,
  Zap,
  CheckCircle2,
  Clock3,
  CalendarDays,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";

const quotes = [
  {
    id: "Q-88291",
    buyer: "Global Foods Ltd",
    product: "Turmeric Powder",
    price: "$12.50/kg",
    quantity: "500 MT",
    total: "$6,250,000",
    status: "Negotiating",
    validUntil: "Oct 24, 2023",
  },
  {
    id: "Q-88290",
    buyer: "EuroTrade GmbH",
    product: "Black Pepper (Whole)",
    price: "$8.20/kg",
    quantity: "250 MT",
    total: "$2,050,000",
    status: "Submitted",
    validUntil: "Oct 28, 2023",
  },
  {
    id: "Q-88285",
    buyer: "Spice Importers Inc.",
    product: "Cinnamon Sticks",
    price: "$15.00/kg",
    quantity: "100 MT",
    total: "$1,500,000",
    status: "Accepted",
    validUntil: "Nov 01, 2023",
  },
  {
    id: "Q-88282",
    buyer: "Nordic Organics",
    product: "Cardamom Pods",
    price: "$28.50/kg",
    quantity: "50 MT",
    total: "$1,425,000",
    status: "Expiring",
    validUntil: "Oct 18, 2023",
  },
  {
    id: "Q-88278",
    buyer: "Fresh Market Europe",
    product: "Cumin Seeds",
    price: "$9.80/kg",
    quantity: "200 MT",
    total: "$1,960,000",
    status: "Draft",
    validUntil: "Nov 05, 2023",
  },
  {
    id: "Q-88271",
    buyer: "Asia Food Trading",
    product: "Coriander Seeds",
    price: "$7.50/kg",
    quantity: "150 MT",
    total: "$1,125,000",
    status: "Rejected",
    validUntil: "Oct 30, 2023",
  },
];

const tabs = [
  "All",
  "Draft",
  "Submitted",
  "Shortlisted",
  "Negotiating",
  "Accepted",
  "Rejected",
  "Expired",
];

const statusFilters = [
  "All Status",
  "Draft",
  "Submitted",
  "Shortlisted",
  "Negotiating",
  "Accepted",
  "Rejected",
  "Expired",
];

const dateFilters = [
  "All Dates",
  "Expiring Soon",
  "October 2023",
  "November 2023",
];

export default function QuotesPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const [dateFilter, setDateFilter] = useState("All Dates");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const [showDateFilter, setShowDateFilter] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const dateRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = 4;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dateRef.current &&
        !dateRef.current.contains(event.target as Node)
      ) {
        setShowDateFilter(false);
      }

      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setShowMoreFilters(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter quotes
  const filteredQuotes = quotes.filter((quote) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      quote.id.toLowerCase().includes(searchText) ||
      quote.buyer.toLowerCase().includes(searchText) ||
      quote.product.toLowerCase().includes(searchText);

    const matchesTab =
      activeTab === "All" ||
      quote.status === activeTab;

    const matchesStatus =
      statusFilter === "All Status" ||
      quote.status === statusFilter;

    let matchesDate = true;

    if (dateFilter === "Expiring Soon") {
      matchesDate = quote.status === "Expiring";
    }

    if (dateFilter === "October 2023") {
      matchesDate = quote.validUntil.includes("Oct");
    }

    if (dateFilter === "November 2023") {
      matchesDate = quote.validUntil.includes("Nov");
    }

    return (
      matchesSearch &&
      matchesTab &&
      matchesStatus &&
      matchesDate
    );
  });

  // Total pages
  const totalPages = Math.max(
    1,
    Math.ceil(filteredQuotes.length / itemsPerPage)
  );

  // Reset page when filter/search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [
    search,
    activeTab,
    dateFilter,
    statusFilter,
  ]);

  // Current page data
  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const endIndex =
    startIndex + itemsPerPage;

  const currentQuotes =
    filteredQuotes.slice(
      startIndex,
      endIndex
    );

  // View Quote
  const handleViewQuote = (quoteId: string) => {
    router.push(
      `/supplier/quotes/${quoteId}`
    );
  };

  return (
    <div className="min-h-screen bg-[#faf9fc]">

      <main className="p-6">

        <div className="mb-5 flex items-start justify-between">

          <div>

            <h1 className="text-[28px] font-bold tracking-[-0.5px] text-[#111827]">
              Quotes
            </h1>

            <p className="mt-2 max-w-[430px] text-[13px] leading-5 text-[#667085]">
              Manage and track your submitted offers.
            </p>

          </div>

          <Link
            href="/supplier/quotes/new"
            className="flex items-center gap-2 rounded-md bg-[#080808] px-4 py-2 text-[13px] font-semibold text-white hover:bg-[#222]"
          >
            <Plus size={14} />
            New Quote
          </Link>

        </div>

        <div className="mb-5 grid grid-cols-4 gap-4">

          <QuoteStatCard
            title="Total Quotes"
            value="24"
            icon={<FileText size={14} />}
            iconClass="bg-[#f0efff] text-[#6657df]"
          />

          <QuoteStatCard
            title="Active"
            value="18"
            icon={<Zap size={14} />}
            iconClass="bg-[#eef0ff] text-[#6556dc]"
          />

          <QuoteStatCard
            title="Accepted"
            value="4"
            icon={<CheckCircle2 size={14} />}
            iconClass="bg-[#e9faf4] text-emerald-500"
            valueClass="text-emerald-600"
          />

          <QuoteStatCard
            title="Expiring Soon"
            value="2"
            icon={<Clock3 size={14} />}
            iconClass="bg-[#fff3e7] text-orange-500"
            valueClass="text-[#222]"
          />

        </div>

        <div className="overflow-hidden rounded-lg border border-[#e5e3e9] bg-white">

          <div className="flex items-center gap-5 border-b border-[#eceaf0] px-4">

            {tabs.map((tab) => (

              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-3 text-[13px] font-medium transition ${
                  activeTab === tab
                    ? "font-semibold text-[#6355d9]"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >

                {tab}

                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#6657df]" />
                )}

              </button>

            ))}

          </div>

          <div className="flex items-center justify-between border-b border-[#eeeeF2] p-3">

            <div className="flex w-[260px] items-center gap-2 rounded-md border border-[#e2e0e6] px-3 py-2">

              <Search
                size={13}
                className="text-gray-400"
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search by ID or Buyer..."
                className="w-full text-[12px] outline-none placeholder:text-gray-400"
              />

            </div>

            <div className="flex items-center gap-2">

              {/* DATE FILTER */}

              <div
                ref={dateRef}
                className="relative"
              >

                <button
                  type="button"
                  onClick={() => {
                    setShowDateFilter(
                      (prev) => !prev
                    );
                    setShowMoreFilters(false);
                  }}
                  className="flex items-center gap-2 rounded-md border border-[#e2e0e6] px-3 py-2 text-[13px] text-gray-600 hover:bg-gray-50"
                >

                  <CalendarDays size={12} />

                  {dateFilter === "All Dates"
                    ? "Date"
                    : dateFilter}

                  <ChevronDown
                    size={11}
                    className={`transition-transform ${
                      showDateFilter
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {showDateFilter && (

                  <div className="absolute right-0 top-full z-40 mt-1 w-[170px] overflow-hidden rounded-md border border-[#e2e0e6] bg-white shadow-lg">

                    {dateFilters.map((date) => (

                      <button
                        key={date}
                        type="button"
                        onClick={() => {
                          setDateFilter(date);
                          setShowDateFilter(false);
                        }}
                        className={`flex w-full items-center justify-between px-3 py-2 text-left text-[13px] hover:bg-[#f7f5ff] ${
                          dateFilter === date
                            ? "bg-[#f7f5ff] font-semibold text-[#6355d9]"
                            : "text-gray-600"
                        }`}
                      >

                        {date}

                        {dateFilter === date && (
                          <CheckCircle2 size={13} />
                        )}

                      </button>

                    ))}

                  </div>

                )}

              </div>

              {/* MORE FILTERS */}

              <div
                ref={filterRef}
                className="relative"
              >

                <button
                  type="button"
                  onClick={() => {
                    setShowMoreFilters(
                      (prev) => !prev
                    );
                    setShowDateFilter(false);
                  }}
                  className="flex items-center gap-2 rounded-md border border-[#e2e0e6] px-3 py-2 text-[13px] text-gray-600 hover:bg-gray-50"
                >

                  <Filter size={12} />

                  More Filters

                  <ChevronDown
                    size={11}
                    className={`transition-transform ${
                      showMoreFilters
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {showMoreFilters && (

                  <div className="absolute right-0 top-full z-40 mt-1 w-[180px] overflow-hidden rounded-md border border-[#e2e0e6] bg-white shadow-lg">

                    {statusFilters.map((status) => (

                      <button
                        key={status}
                        type="button"
                        onClick={() => {
                          setStatusFilter(status);
                          setShowMoreFilters(false);
                        }}
                        className={`flex w-full items-center justify-between px-3 py-2 text-left text-[13px] hover:bg-[#f7f5ff] ${
                          statusFilter === status
                            ? "bg-[#f7f5ff] font-semibold text-[#6355d9]"
                            : "text-gray-600"
                        }`}
                      >

                        {status}

                        {statusFilter === status && (
                          <CheckCircle2 size={13} />
                        )}

                      </button>

                    ))}

                  </div>

                )}

              </div>

            </div>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[950px] border-collapse">

              <thead>

                <tr className="bg-[#fbfafc]">

                  <TableHeader>
                    Quote ID
                  </TableHeader>

                  <TableHeader>
                    Buyer
                  </TableHeader>

                  <TableHeader>
                    Product
                  </TableHeader>

                  <TableHeader>
                    Price
                  </TableHeader>

                  <TableHeader>
                    Quantity
                  </TableHeader>

                  <TableHeader>
                    Total Value
                  </TableHeader>

                  <TableHeader>
                    Status
                  </TableHeader>

                  <TableHeader>
                    Valid Until
                  </TableHeader>

                  <TableHeader>
                    Action
                  </TableHeader>

                </tr>

              </thead>

              <tbody>

                {currentQuotes.map((quote) => (

                  <tr
                    key={quote.id}
                    className="border-t border-[#eeeeF2] hover:bg-[#faf9ff]"
                  >

                    <td className="px-3 py-3">

                      <span className="text-[13px] font-semibold text-[#5c50c9]">
                        {quote.id}
                      </span>

                    </td>

                    <td className="px-3 py-3">

                      <span className="text-[13px] font-medium text-gray-700">
                        {quote.buyer}
                      </span>

                    </td>

                    <td className="px-3 py-3">

                      <span className="text-[13px] text-gray-700">
                        {quote.product}
                      </span>

                    </td>

                    <td className="px-3 py-3">

                      <span className="text-[13px] text-gray-700">
                        {quote.price}
                      </span>

                    </td>

                    <td className="px-3 py-3">

                      <span className="text-[13px] text-gray-700">
                        {quote.quantity}
                      </span>

                    </td>

                    <td className="px-3 py-3">

                      <span className="text-[13px] font-medium text-gray-700">
                        {quote.total}
                      </span>

                    </td>

                    <td className="px-3 py-3">

                      <QuoteStatus
                        status={quote.status}
                      />

                    </td>

                    <td className="px-3 py-3">

                      <span
                        className={`text-[13px] ${
                          quote.status === "Expiring"
                            ? "font-semibold text-red-500"
                            : "text-gray-600"
                        }`}
                      >
                        {quote.validUntil}
                      </span>

                    </td>

                    <td className="px-3 py-3">

                      {quote.status === "Expiring" ? (

                        <button
                          onClick={() =>
                            handleViewQuote(
                              quote.id
                            )
                          }
                          className="flex items-center gap-1 rounded border border-[#dedce4] px-2.5 py-1.5 text-[13px] font-medium text-gray-600 hover:bg-gray-50"
                        >

                          <Eye size={11} />

                        </button>

                      ) : (

                        <button
                          onClick={() =>
                            handleViewQuote(
                              quote.id
                            )
                          }
                          className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                        >

                          <Eye size={14} />

                        </button>

                      )}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {filteredQuotes.length === 0 && (

            <div className="py-12 text-center">

              <FileText
                size={28}
                className="mx-auto text-gray-300"
              />

              <p className="mt-3 text-sm font-semibold text-gray-600">
                No quotes found
              </p>

              <p className="mt-1 text-[10px] text-gray-400">
                Try changing your search or selected filter.
              </p>

            </div>

          )}

          <div className="flex items-center justify-between border-t border-[#eeeeF2] px-4 py-3">

            <p className="text-[13px] text-[#667085]">
              Showing{" "}
              {filteredQuotes.length === 0
                ? 0
                : startIndex + 1}{" "}
              to{" "}
              {Math.min(
                endIndex,
                filteredQuotes.length
              )}{" "}
              of {filteredQuotes.length} entries
            </p>

            <div className="flex items-center gap-1">

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.max(1, prev - 1)
                  )
                }
                disabled={currentPage === 1}
                className="flex h-7 w-7 items-center justify-center rounded border border-[#e2e0e7] text-gray-400 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
              >

                <ChevronLeft size={12} />

              </button>

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (

                <PaginationButton
                  key={page}
                  active={
                    currentPage === page
                  }
                  onClick={() =>
                    setCurrentPage(page)
                  }
                >
                  {page}
                </PaginationButton>

              ))}

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(
                      totalPages,
                      prev + 1
                    )
                  )
                }
                disabled={
                  currentPage === totalPages
                }
                className="flex h-7 w-7 items-center justify-center rounded border border-[#e2e0e7] text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
              >

                <ChevronRight size={12} />

              </button>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

function QuoteStatCard({
  title,
  value,
  icon,
  iconClass,
  valueClass = "text-[#171827]",
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconClass: string;
  valueClass?: string;
}) {
  return (
    <div className="rounded-lg border border-[#e5e3e9] bg-white p-4">

      <div className="flex items-start justify-between">

        <p className="text-[9px] font-semibold text-gray-500">
          {title}
        </p>

        <div
          className={`flex h-7 w-7 items-center justify-center rounded-full ${iconClass}`}
        >
          {icon}
        </div>

      </div>

      <p
        className={`mt-3 text-[24px] font-bold ${valueClass}`}
      >
        {value}
      </p>

    </div>
  );
}

function TableHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <th className="px-3 py-3 text-left text-[8px] font-semibold uppercase tracking-wide text-gray-500">
      {children}
    </th>
  );
}

function QuoteStatus({
  status,
}: {
  status: string;
}) {
  const styles: Record<string, string> = {
    Negotiating:
      "bg-[#eeeaff] text-[#6355d9]",
    Submitted:
      "bg-[#edf1f7] text-[#596274]",
    Accepted:
      "bg-[#e7faf3] text-emerald-600",
    Expiring:
      "bg-[#fff0e3] text-orange-600",
    Draft:
      "bg-[#f1f1f3] text-gray-500",
    Rejected:
      "bg-[#ffe9e9] text-red-500",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2 py-1 text-[8px] font-semibold ${
        styles[status] ||
        "bg-gray-100 text-gray-500"
      }`}
    >
      {status}
    </span>
  );
}

function PaginationButton({
  children,
  active = false,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex h-7 min-w-7 items-center justify-center rounded border px-2 text-[12px] ${
        active
          ? "border-[#7567e8] bg-[#f1efff] font-semibold text-[#6355d9]"
          : "border-[#e2e0e7] text-gray-600 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
}