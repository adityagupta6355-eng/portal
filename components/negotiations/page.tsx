"use client";

import { useMemo, useState } from "react";

import {
  Filter,
  Plus,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Eye,
  Sparkles,
  ArrowUpRight,
  X,
} from "lucide-react";

type NegotiationStatus =
  | "Counter Pending"
  | "Buyer Reviewing"
  | "Agreed";

type Negotiation = {
  initials: string;
  buyer: string;
  country: string;
  flag: string;
  rfq: string;
  product: string;
  category: string;
  quantity: string;
  offer: string;
  unit: string;
  offerType: string;
  status: NegotiationStatus;
  lastActivity: string;
  activityBy: string;
  action: "Open Workspace" | "View Contract";
};

const negotiations: Negotiation[] = [
  {
    initials: "GM",
    buyer: "Global Merch Inc.",
    country: "Germany",
    flag: "🇩🇪",
    rfq: "RFQ-9821A",
    product: "Industrial Grade Silicon",
    category: "Raw Materials",
    quantity: "500 MT",
    offer: "$2,450.00",
    unit: "/MT",
    offerType: "25% from Ask",
    status: "Counter Pending",
    lastActivity: "2 hrs ago",
    activityBy: "Buyer Countered",
    action: "Open Workspace",
  },
  {
    initials: "NE",
    buyer: "Nordic Electronics",
    country: "Sweden",
    flag: "🇸🇪",
    rfq: "RFQ-7748B",
    product: "Circuit Boards Type C",
    category: "Electronics",
    quantity: "10,000 Units",
    offer: "$12.50",
    unit: "/Unit",
    offerType: "Target Price Met",
    status: "Buyer Reviewing",
    lastActivity: "Yesterday",
    activityBy: "You Submitted",
    action: "Open Workspace",
  },
  {
    initials: "AT",
    buyer: "Atlas Trading",
    country: "USA",
    flag: "🇺🇸",
    rfq: "RFQ-9910C",
    product: "Premium Cotton Rolls",
    category: "Textiles",
    quantity: "2,000 Rolls",
    offer: "$85.00",
    unit: "/Roll",
    offerType: "Final Terms",
    status: "Agreed",
    lastActivity: "Oct 24, 2023",
    activityBy: "System Auto-close",
    action: "View Contract",
  },
  {
    initials: "TC",
    buyer: "TechCorp Asia",
    country: "Singapore",
    flag: "🇸🇬",
    rfq: "RFQ-8832D",
    product: "Industrial Sensors",
    category: "Electronics",
    quantity: "4,000 Units",
    offer: "$42.00",
    unit: "/Unit",
    offerType: "Target Price Met",
    status: "Buyer Reviewing",
    lastActivity: "3 hrs ago",
    activityBy: "You Submitted",
    action: "Open Workspace",
  },
  {
    initials: "GF",
    buyer: "Global Foods Ltd.",
    country: "UAE",
    flag: "🇦🇪",
    rfq: "RFQ-7612E",
    product: "Premium Turmeric",
    category: "Spices",
    quantity: "800 MT",
    offer: "$1,850.00",
    unit: "/MT",
    offerType: "25% from Ask",
    status: "Counter Pending",
    lastActivity: "5 hrs ago",
    activityBy: "Buyer Countered",
    action: "Open Workspace",
  },
  {
    initials: "ES",
    buyer: "EuroSpice House",
    country: "France",
    flag: "🇫🇷",
    rfq: "RFQ-6521F",
    product: "Black Pepper Grade A",
    category: "Spices",
    quantity: "300 MT",
    offer: "$3,100.00",
    unit: "/MT",
    offerType: "Final Terms",
    status: "Agreed",
    lastActivity: "Yesterday",
    activityBy: "Buyer Accepted",
    action: "View Contract",
  },
  {
    initials: "AT",
    buyer: "Asia Trading Co.",
    country: "India",
    flag: "🇮🇳",
    rfq: "RFQ-5432G",
    product: "Organic Cotton",
    category: "Textiles",
    quantity: "1,500 Rolls",
    offer: "$72.00",
    unit: "/Roll",
    offerType: "Target Price Met",
    status: "Buyer Reviewing",
    lastActivity: "Yesterday",
    activityBy: "You Submitted",
    action: "Open Workspace",
  },
  {
    initials: "MC",
    buyer: "Mercury Components",
    country: "Italy",
    flag: "🇮🇹",
    rfq: "RFQ-4312H",
    product: "Steel Components",
    category: "Machinery",
    quantity: "7,500 Units",
    offer: "$18.50",
    unit: "/Unit",
    offerType: "25% from Ask",
    status: "Counter Pending",
    lastActivity: "1 day ago",
    activityBy: "Buyer Countered",
    action: "Open Workspace",
  },
  {
    initials: "NF",
    buyer: "Nordic Foods",
    country: "Norway",
    flag: "🇳🇴",
    rfq: "RFQ-3218I",
    product: "Organic Cardamom",
    category: "Spices",
    quantity: "2,000 KG",
    offer: "$14.20",
    unit: "/KG",
    offerType: "Final Terms",
    status: "Agreed",
    lastActivity: "2 days ago",
    activityBy: "System Auto-close",
    action: "View Contract",
  },
  {
    initials: "PM",
    buyer: "Pacific Markets",
    country: "Australia",
    flag: "🇦🇺",
    rfq: "RFQ-2187J",
    product: "Basmati Rice",
    category: "Food Grains",
    quantity: "1,000 MT",
    offer: "$490.00",
    unit: "/MT",
    offerType: "Target Price Met",
    status: "Buyer Reviewing",
    lastActivity: "2 days ago",
    activityBy: "You Submitted",
    action: "Open Workspace",
  },
  {
    initials: "AM",
    buyer: "Alpine Merchants",
    country: "Switzerland",
    flag: "🇨🇭",
    rfq: "RFQ-1876K",
    product: "Ceylon Cinnamon",
    category: "Spices",
    quantity: "2,500 KG",
    offer: "$8.50",
    unit: "/KG",
    offerType: "25% from Ask",
    status: "Counter Pending",
    lastActivity: "3 days ago",
    activityBy: "Buyer Countered",
    action: "Open Workspace",
  },
  {
    initials: "ME",
    buyer: "Middle East Exports",
    country: "Qatar",
    flag: "🇶🇦",
    rfq: "RFQ-1765L",
    product: "Green Cardamom",
    category: "Spices",
    quantity: "4,000 KG",
    offer: "$13.80",
    unit: "/KG",
    offerType: "Final Terms",
    status: "Agreed",
    lastActivity: "3 days ago",
    activityBy: "Buyer Accepted",
    action: "View Contract",
  },
];

export default function NegotiationsPage() {
  const [activeTab, setActiveTab] = useState("Active");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const [filterStatus, setFilterStatus] = useState<
    "All" | NegotiationStatus
  >("All");
  const [message, setMessage] = useState("");

  const tabs = [
    {
      name: "Active",
      count: 12,
    },
    {
      name: "All",
    },
    {
      name: "Completed",
    },
    {
      name: "Cancelled",
    },
    {
      name: "Disputed",
      count: 2,
    },
  ];

  const filteredNegotiations = useMemo(() => {
    let result = negotiations;

    if (activeTab === "Active") {
      result = result.filter(
        (item) =>
          item.status === "Counter Pending" ||
          item.status === "Buyer Reviewing"
      );
    }

    if (activeTab === "Completed") {
      result = result.filter(
        (item) => item.status === "Agreed"
      );
    }

    if (
      filterStatus !== "All"
    ) {
      result = result.filter(
        (item) => item.status === filterStatus
      );
    }

    return result;
  }, [activeTab, filterStatus]);

  const itemsPerPage = 3;

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredNegotiations.length / itemsPerPage
    )
  );

  const safePage = Math.min(
    currentPage,
    totalPages
  );

  const startIndex =
    (safePage - 1) * itemsPerPage;

  const visibleNegotiations =
    filteredNegotiations.slice(
      startIndex,
      startIndex + itemsPerPage
    );

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleFilterChange = (
    status: "All" | NegotiationStatus
  ) => {
    setFilterStatus(status);
    setCurrentPage(1);
    setShowFilter(false);
  };

  const handleAction = (
    action: "Open Workspace" | "View Contract",
    buyer: string
  ) => {
    if (action === "Open Workspace") {
      setMessage(`Opening workspace for ${buyer}`);
    } else {
      setMessage(`Opening contract for ${buyer}`);
    }
  };

  const handleReview = () => {
    setMessage("Reviewing Global Merch Inc. negotiation");
  };

  const handleAttachDocs = () => {
    setMessage("Opening document attachment");
  };

  const handleNewOffer = () => {
    setMessage("New offer workspace opened");
  };

  return (
    <main className="min-h-screen bg-[#f8f7f9] px-5 py-5 text-[#202124]">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h1 className="text-[28px] font-bold tracking-[-0.5px] text-[#222]">
            Negotiations
          </h1>

          <p className="mt-1 text-[13px] text-[#707070]">
            Track and manage active trade terms and pricing discussions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setShowFilter((prev) => !prev)}
              className="flex h-[34px] items-center gap-2 rounded-md border border-[#e0e0e5] bg-white px-4 text-[13px] font-semibold text-[#444] shadow-sm hover:bg-[#fafafa]"
            >
              <Filter size={14} strokeWidth={2} />
              Filter
            </button>

            {showFilter && (
              <div className="absolute right-0 top-[40px] z-50 w-[190px] rounded-lg border border-[#e1e1e6] bg-white p-2 shadow-lg">
                {[
                  "All",
                  "Counter Pending",
                  "Buyer Reviewing",
                  "Agreed",
                ].map((status) => (
                  <button
                    key={status}
                    onClick={() =>
                      handleFilterChange(
                        status as
                          | "All"
                          | NegotiationStatus
                      )
                    }
                    className="w-full rounded-md px-3 py-2 text-left text-[12px] font-medium text-[#444] hover:bg-[#f5f4f7]"
                  >
                    {status}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleNewOffer}
            className="flex h-[34px] items-center gap-2 rounded-md bg-[#050505] px-4 text-[13px] font-semibold text-white shadow-sm hover:bg-[#222]"
          >
            <Plus size={14} />
            New Offer
          </button>
        </div>
      </div>

      {message && (
        <div className="mb-4 flex items-center justify-between rounded-md border border-[#ddd6ff] bg-[#f6f3ff] px-4 py-2.5 text-[12px] font-medium text-[#6045e8]">
          <span>{message}</span>

          <button
            onClick={() => setMessage("")}
            className="text-[#6045e8]"
          >
            <X size={14} />
          </button>
        </div>
      )}

      <div className="mb-5 flex items-center gap-6 border-b border-[#dedee4]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;

          return (
            <button
              key={tab.name}
              onClick={() => handleTabChange(tab.name)}
              className={`relative flex h-[34px] items-center gap-1.5 text-[13px] font-semibold ${
                isActive
                  ? "text-[#5940e8]"
                  : "text-[#555]"
              }`}
            >
              {tab.name}

              {tab.count !== undefined && (
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[11px] ${
                    tab.name === "Disputed"
                      ? "bg-[#e9e8ed] text-[#777]"
                      : "bg-transparent text-[#555]"
                  }`}
                >
                  {tab.count}
                </span>
              )}

              {isActive && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] rounded-full bg-[#6045e8]" />
              )}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,1fr)_220px]">
        <section className="overflow-hidden rounded-xl border border-[#e1e1e6] bg-white">
          <div className="grid grid-cols-[1.35fr_1fr_.7fr_1fr_.8fr_.9fr] border-b border-[#e5e5e8] bg-[#fafafa] px-3 py-3">
            <TableHeader>
              Buyer / Reference
            </TableHeader>

            <TableHeader>
              Product
              <br />
              Details
            </TableHeader>

            <TableHeader>
              Current
              <br />
              Offer
            </TableHeader>

            <TableHeader>
              Status
            </TableHeader>

            <TableHeader>
              Last
              <br />
              Activity
            </TableHeader>

            <TableHeader>
              Action
            </TableHeader>
          </div>

          {visibleNegotiations.length > 0 ? (
            visibleNegotiations.map(
              (negotiation, index) => (
                <NegotiationRow
                  key={negotiation.rfq}
                  negotiation={negotiation}
                  last={
                    index ===
                    visibleNegotiations.length - 1
                  }
                  onAction={handleAction}
                />
              )
            )
          ) : (
            <div className="py-12 text-center">
              <p className="text-[13px] font-semibold text-[#777]">
                No negotiations found
              </p>
            </div>
          )}

          <div className="flex items-center justify-between border-t border-[#e5e5e8] bg-[#fbfafc] px-3 py-3">
            <p className="text-[13px] text-[#777]">
              Showing{" "}
              {filteredNegotiations.length === 0
                ? 0
                : startIndex + 1}
              –
              {Math.min(
                startIndex + itemsPerPage,
                filteredNegotiations.length
              )}{" "}
              of {filteredNegotiations.length} active
            </p>

            <div className="flex items-center gap-1">
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.max(1, prev - 1)
                  )
                }
                disabled={safePage === 1}
                className="flex h-7 w-7 items-center justify-center rounded text-[#aaa] hover:bg-[#f0f0f3] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={13} />
              </button>

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (
                <button
                  key={page}
                  onClick={() =>
                    setCurrentPage(page)
                  }
                  className={`flex h-7 w-7 items-center justify-center rounded text-[12px] ${
                    safePage === page
                      ? "bg-black font-bold text-white"
                      : "text-[#555] hover:bg-[#f0f0f3]"
                  }`}
                >
                  {page}
                </button>
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
                disabled={safePage === totalPages}
                className="flex h-7 w-7 items-center justify-center rounded text-[#777] hover:bg-[#f0f0f3] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </section>

        <aside className="space-y-3">
          <div className="rounded-xl border border-[#e1e1e6] bg-white p-3">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-[#f0edff] text-[#6045e8]">
                <TrendingUp size={14} />
              </div>

              <h2 className="text-[13px] font-bold text-[#333]">
                Negotiation Insights
              </h2>
            </div>

            <div className="mb-3 rounded-lg bg-[#f6f5f7] p-3">
              <p className="text-[11px] font-bold uppercase tracking-wide text-[#777]">
                Avg. Cycle Time
              </p>

              <div className="mt-1 flex items-end gap-1">
                <span className="text-[26px] font-bold leading-none text-[#222]">
                  4.2
                </span>

                <span className="mb-0.5 text-[11px] text-[#777]">
                  Days
                </span>
              </div>

              <p className="mt-2 text-[10px] font-semibold text-[#29966b]">
                ↘ -12% vs last month
              </p>
            </div>

            <div className="rounded-lg bg-[#f6f5f7] p-3">
              <p className="text-[11px] font-bold uppercase tracking-wide text-[#777]">
                Mesh AI Success Rate
              </p>

              <div className="mt-1 flex items-end gap-1">
                <span className="text-[27px] font-bold leading-none text-[#6045e8]">
                  78%
                </span>
              </div>

              <p className="mt-2 text-[10px] text-[#888]">
                Of AI price suggestions accepted
              </p>

              <div className="mt-3 h-1 overflow-hidden rounded-full bg-[#dedde5]">
                <div className="h-full w-[78%] rounded-full bg-[#6045e8]" />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#e1e1e6] bg-white p-3">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertCircle
                  size={14}
                  className="text-[#e64b4b]"
                />

                <h2 className="text-[13px] font-bold text-[#333]">
                  High Priority
                </h2>
              </div>

              <span className="rounded-full bg-[#e84c4c] px-2 py-1 text-[9px] font-bold text-white">
                3 Needs Action
              </span>
            </div>

            <div className="mb-2 rounded-md border border-[#f1cccc] bg-[#fff8f8] p-2.5">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold text-[#555]">
                  Global Merch Inc.
                </p>

                <span className="text-[9px] font-semibold text-[#e84c4c]">
                  Stalled
                </span>
              </div>

              <p className="mt-1 text-[10px] leading-[14px] text-[#777]">
                Pending your counter-offer for 48hrs
              </p>

              <button
                onClick={handleReview}
                className="mt-2 text-[10px] font-semibold text-[#6045e8]"
              >
                Review Now →
              </button>
            </div>

            <div className="rounded-md border border-[#e6e6ea] bg-white p-2.5">
              <p className="text-[11px] font-bold text-[#555]">
                TechCorp Asia
              </p>

              <p className="mt-1 text-[10px] leading-[14px] text-[#777]">
                Buyer requested technical documentation
                before final pricing.
              </p>

              <button
                onClick={handleAttachDocs}
                className="mt-2 text-[10px] font-semibold text-[#6045e8]"
              >
                Attach Docs →
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

function TableHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-2 text-[10px] font-bold leading-[12px] text-[#777]">
      {children}
    </div>
  );
}

function NegotiationRow({
  negotiation,
  last,
  onAction,
}: {
  negotiation: Negotiation;
  last: boolean;
  onAction: (
    action:
      | "Open Workspace"
      | "View Contract",
    buyer: string
  ) => void;
}) {
  return (
    <div
      className={`grid grid-cols-[1.35fr_1fr_.7fr_1fr_.8fr_.9fr] px-3 ${
        !last ? "border-b border-[#e7e7ea]" : ""
      }`}
    >
      <div className="flex min-w-0 items-center gap-2 px-2 py-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f0f0f2] text-[11px] font-bold text-[#555]">
          {negotiation.initials}
        </div>

        <div className="min-w-0">
          <p className="truncate text-[13px] font-bold text-[#444]">
            {negotiation.buyer}
          </p>

          <div className="mt-1 flex items-center gap-1">
            <span className="text-[11px]">
              {negotiation.flag}
            </span>

            <span className="text-[11px] text-[#777]">
              {negotiation.country}
            </span>

            <span className="text-[#ccc]">
              •
            </span>

            <span className="text-[11px] font-semibold text-[#6045e8]">
              {negotiation.rfq}
            </span>
          </div>
        </div>
      </div>

      <div className="px-2 py-4">
        <p className="text-[13px] font-bold leading-[16px] text-[#555]">
          {negotiation.product}
        </p>

        <p className="mt-1 text-[11px] text-[#777]">
          {negotiation.category} |
        </p>

        <p className="text-[11px] text-[#777]">
          {negotiation.quantity}
        </p>
      </div>

      <div className="px-2 py-4">
        <p className="text-[15px] font-bold text-[#333]">
          {negotiation.offer}
        </p>

        <p className="mt-0.5 text-[11px] text-[#777]">
          {negotiation.unit}
        </p>

        <p
          className={`mt-1 text-[10px] font-semibold ${
            negotiation.offerType ===
            "Target Price Met"
              ? "text-[#29966b]"
              : negotiation.offerType ===
                "Final Terms"
              ? "text-[#777]"
              : "text-[#e85a5a]"
          }`}
        >
          {negotiation.offerType}
        </p>
      </div>

      <div className="px-2 py-4">
        <StatusBadge
          status={negotiation.status}
        />

        {negotiation.status ===
          "Counter Pending" && (
          <div className="mt-2 inline-flex items-center gap-1 rounded border border-[#ddd6ff] bg-[#f6f3ff] px-2 py-1 text-[10px] font-semibold text-[#6045e8]">
            <Sparkles size={10} />
            AI Suggestion
          </div>
        )}
      </div>

      <div className="px-2 py-4">
        <p className="text-[11px] font-semibold text-[#555]">
          {negotiation.lastActivity}
        </p>

        <p className="mt-1 text-[10px] leading-[13px] text-[#777]">
          {negotiation.activityBy}
        </p>
      </div>

      <div className="flex items-start px-2 py-4">
        {negotiation.action ===
        "Open Workspace" ? (
          <button
            onClick={() =>
              onAction(
                negotiation.action,
                negotiation.buyer
              )
            }
            className="flex min-w-[90px] items-center justify-center gap-1 rounded-md border border-[#cfcfcf] bg-[#fafafa] px-2.5 py-2 text-[10px] font-semibold leading-[12px] text-[#555] shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:bg-[#f1f1f1]"
          >
            <span>
              Open
              <br />
              Workspace
            </span>

            <ArrowUpRight size={11} />
          </button>
        ) : (
          <button
            onClick={() =>
              onAction(
                negotiation.action,
                negotiation.buyer
              )
            }
            className="flex items-center gap-1 px-2 py-2 text-[10px] font-semibold text-[#6045e8] hover:underline"
          >
            <Eye size={12} />

            <span>
              View
              <br />
              Contract
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: NegotiationStatus;
}) {
  if (status === "Counter Pending") {
    return (
      <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-[#fff3df] px-2.5 py-1 text-[10px] font-semibold text-[#e28a18]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#e28a18]" />
        Counter Pending
      </span>
    );
  }

  if (status === "Buyer Reviewing") {
    return (
      <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-[#eaf0ff] px-2.5 py-1 text-[10px] font-semibold text-[#4875dc]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#4875dc]" />
        Buyer Reviewing
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-[#e7f7f0] px-2.5 py-1 text-[10px] font-semibold text-[#29966b]">
      <CheckCircle2 size={11} />
      Agreed
    </span>
  );
}