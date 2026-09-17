"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Download,
  Eye,
  FileText,
  RefreshCw,
  Search,
  TriangleAlert,
  X,
  Zap,
} from "lucide-react";

type ActivityType =
  | "quote"
  | "buyer"
  | "rfq"
  | "compliance";

type ActivityItem = {
  id: string;
  type: ActivityType;
  title: string;
  reference: string;
  description: string;
  time: string;
  status: string;
  actor: string;
  actionRequired: boolean;
  flagged: boolean;
};

const activities: ActivityItem[] = [
  {
    id: "1",
    type: "quote",
    title: "Quote Draft Incomplete",
    reference: "Q-88294",
    description:
      "Turmeric Powder · 500 MT · Metro Grocers EU. Missing Port of Loading and 60-day LC terms.",
    time: "12 mins ago",
    status: "Action Required",
    actor: "System",
    actionRequired: true,
    flagged: true,
  },

  {
    id: "2",
    type: "buyer",
    title: "Buyer Viewed Quote",
    reference: "Q-88291",
    description:
      "Global Foods Ltd · David Sterling viewed your quote at $12.50/kg and downloaded the moisture test.",
    time: "42 mins ago",
    status: "Viewed",
    actor: "David Sterling",
    actionRequired: false,
    flagged: false,
  },

  {
    id: "3",
    type: "rfq",
    title: "New RFQ Matched",
    reference: "RFQ-2023-9945",
    description:
      "20 containers · 1121 Steam Basmati Rice · Dubai Ports. AI Match: 94% · Target: $1,150/MT.",
    time: "2 hours ago",
    status: "New",
    actor: "AI Matching",
    actionRequired: true,
    flagged: false,
  },

  {
    id: "4",
    type: "compliance",
    title: "Product Verification Completed",
    reference: "PRD-2041",
    description:
      "USDA Organic certification verified successfully. Valid until 2026-12-31.",
    time: "3 hours ago",
    status: "Verified",
    actor: "Verification",
    actionRequired: false,
    flagged: false,
  },
];

const tabs = [
  "All Activity",
  "Quotes",
  "RFQs",
  "Buyer Activity",
  "Compliance",
];

function getIcon(type: ActivityType) {
  if (type === "quote") {
    return <FileText size={17} />;
  }

  if (type === "buyer") {
    return <Eye size={17} />;
  }

  if (type === "rfq") {
    return <Zap size={17} />;
  }

  return <CheckCircle2 size={17} />;
}

function getIconBackground(type: ActivityType) {
  if (type === "quote") {
    return "bg-[#f0edff] text-[#6257eb]";
  }

  if (type === "buyer") {
    return "bg-[#edf5ff] text-[#4385d9]";
  }

  if (type === "rfq") {
    return "bg-[#fff4df] text-[#df8c25]";
  }

  return "bg-[#e9f8f1] text-[#219765]";
}

function getTabType(tab: string): ActivityType | null {
  if (tab === "Quotes") return "quote";
  if (tab === "RFQs") return "rfq";
  if (tab === "Buyer Activity") return "buyer";
  if (tab === "Compliance") return "compliance";

  return null;
}

export default function ActivityPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All Activity");
  const [pendingOnly, setPendingOnly] = useState(false);
  const [dateFilter, setDateFilter] = useState("Last 7 days");
  const [showDateMenu, setShowDateMenu] = useState(false);

  const filteredActivities = useMemo(() => {
    const selectedType = getTabType(activeTab);

    return activities.filter((activity) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        activity.title.toLowerCase().includes(searchValue) ||
        activity.reference.toLowerCase().includes(searchValue) ||
        activity.description.toLowerCase().includes(searchValue) ||
        activity.actor.toLowerCase().includes(searchValue);

      const matchesTab =
        selectedType === null || activity.type === selectedType;

      const matchesPending =
        !pendingOnly || activity.actionRequired;

      return matchesSearch && matchesTab && matchesPending;
    });
  }, [search, activeTab, pendingOnly]);

  const handleActivityAction = (activity: ActivityItem) => {
    if (activity.type === "quote") {
      router.push("/supplier/quotes/new");
      return;
    }

    if (activity.type === "buyer") {
      router.push("/supplier/negotiations");
      return;
    }

    if (activity.type === "rfq") {
      router.push("/supplier/rfqs");
      return;
    }

    if (activity.type === "compliance") {
      router.push("/supplier/products");
    }
  };

  const handleDownload = () => {
    const headers = [
      "Activity",
      "Reference",
      "Description",
      "Time",
      "Status",
      "Actor",
    ];

    const rows = filteredActivities.map((activity) => [
      activity.title,
      activity.reference,
      activity.description,
      activity.time,
      activity.status,
      activity.actor,
    ]);

    const csv = [headers, ...rows]
      .map((row) =>
        row
          .map((value) => `"${value.replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "recent-activity.csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#f7f7fa]">

      <header className="border-b border-[#e4e4e8] bg-white">

        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-5">

          <div className="flex items-center gap-4">

            <button
              onClick={() => router.back()}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[#e1e1e6] bg-white text-[#555] hover:bg-[#f7f7fa]"
              title="Back"
            >
              <ArrowLeft size={17} />
            </button>

            <div>

              <div className="flex flex-wrap items-center gap-3">

                <h1 className="text-2xl font-bold text-[#20222a]">
                  All Recent Activity &amp; Audit Trail
                </h1>

                <span className="flex items-center gap-1.5 rounded-full bg-[#e8f8ef] px-2.5 py-1 text-[10px] font-semibold text-[#159966]">

                  <span className="h-1.5 w-1.5 rounded-full bg-[#1da66a]" />

                  LIVE FEED

                </span>

              </div>

              <p className="mt-1.5 text-[13px] text-[#858894]">
                Complete history of activity across your supplier account
              </p>

            </div>

          </div>


          <div className="flex items-center gap-2">

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 rounded-md border border-[#dedee4] bg-white px-3.5 py-2.5 text-[13px] font-semibold text-[#555] hover:bg-[#f7f7fa]"
            >
              <Download size={15} />
              CSV
            </button>

            <button
              onClick={() => router.push("/supplier")}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[#dedee4] text-[#777]"
              title="Close"
            >
              <X size={16} />
            </button>

          </div>

        </div>

      </header>

      <div className="border-b border-[#f0d58e] bg-[#fff9e8]">

        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-4">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff0c7] text-[#db8b19]">
              <TriangleAlert size={17} />
            </div>

            <div>

              <div className="flex flex-wrap items-center gap-2">

                <p className="text-[13px] font-bold text-[#8b5b16]">
                  Activity Sync Incomplete
                </p>

                <span className="rounded-full bg-[#f6dfa9] px-2.5 py-1 text-[10px] font-semibold text-[#966719]">
                  3 EVENTS PENDING
                </span>

              </div>

              <p className="mt-1 text-[11px] text-[#b17b28]">
                Some recent account events are still being synchronized.
              </p>

            </div>

          </div>

          <button
            className="flex items-center gap-1.5 text-[13px] font-semibold text-[#8b5b16]"
            onClick={() => window.location.reload()}
          >
            <RefreshCw size={14} />
            Sync Now
          </button>

        </div>

      </div>

      <main className="mx-auto max-w-[1200px] px-5 py-6">


        <section className="mb-5 rounded-md border border-[#e2e2e7] bg-white p-4">

          <div className="flex flex-wrap items-center gap-3">

            <div className="relative min-w-[260px] flex-1">

              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search activity, reference, buyer..."
                className="h-10 w-full rounded-md border border-[#dedee5] bg-white pl-10 pr-3 text-[13px] text-[#444] outline-none placeholder:text-[#aaa] focus:border-[#6a5ee8]"
              />

            </div>


            <div className="relative">

              <button
                onClick={() => setShowDateMenu(!showDateMenu)}
                className="flex h-10 items-center gap-2 rounded-md border border-[#dedee5] bg-white px-4 text-[13px] font-medium text-[#555]"
              >
                <CalendarDays size={15} />
                {dateFilter}
                <ChevronDown size={14} />
              </button>


              {showDateMenu && (

                <div className="absolute right-0 top-11 z-20 w-[160px] rounded-md border border-[#dedee5] bg-white p-1.5 shadow-lg">

                  {[
                    "Today",
                    "Last 7 days",
                    "Last 30 days",
                    "Last 90 days",
                  ].map((item) => (

                    <button
                      key={item}
                      onClick={() => {
                        setDateFilter(item);
                        setShowDateMenu(false);
                      }}
                      className="block w-full rounded px-3 py-2.5 text-left text-[13px] text-[#555] hover:bg-[#f5f5f8]"
                    >
                      {item}
                    </button>

                  ))}

                </div>

              )}

            </div>


            <button
              onClick={() => setPendingOnly(!pendingOnly)}
              className={`flex h-10 items-center gap-2 rounded-md border px-4 text-[13px] font-medium ${
                pendingOnly
                  ? "border-[#6257eb] bg-[#f2f0ff] text-[#584de9]"
                  : "border-[#dedee5] bg-white text-[#555]"
              }`}
            >

              <span
                className={`flex h-4 w-4 items-center justify-center rounded border ${
                  pendingOnly
                    ? "border-[#6257eb] bg-[#6257eb]"
                    : "border-[#c9c9d0]"
                }`}
              >

                {pendingOnly && (
                  <CheckCircle2
                    size={11}
                    className="text-white"
                  />
                )}

              </span>

              Pending action only

            </button>

          </div>

        </section>

        <section className="mb-5 flex items-center justify-between border-b border-[#e2e2e7]">

          <div className="flex gap-6 overflow-x-auto">

            {tabs.map((tab) => (

              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-3 text-[13px] font-semibold ${
                  activeTab === tab
                    ? "text-[#584de9]"
                    : "text-[#777b86]"
                }`}
              >

                {tab}

                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#6257eb]" />
                )}

              </button>

            ))}

          </div>


          <div className="hidden items-center gap-1.5 pb-3 text-[11px] text-[#888] sm:flex">

            <span>Showing</span>

            <strong className="text-[#444]">
              {filteredActivities.length}
            </strong>

            <span>events</span>

          </div>

        </section>

        <div className="mb-5 flex items-center justify-between rounded-md border border-[#efcaca] bg-[#fff7f7] px-4 py-3">

          <div className="flex items-center gap-2">

            <TriangleAlert
              size={15}
              className="text-[#d95858]"
            />

            <span className="text-[13px] font-semibold text-[#a23d3d]">
              2 flagged actions require attention
            </span>

          </div>

          <button
            onClick={() => setPendingOnly(true)}
            className="text-[11px] font-semibold text-[#b54141] underline"
          >
            View flagged
          </button>

        </div>


        <section className="overflow-hidden rounded-md border border-[#e2e2e7] bg-white">

          <div className="border-b border-[#eeeeef] px-5 py-4">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-[14px] font-bold text-[#33353d]">
                  Activity Timeline
                </h2>

                <p className="mt-1 text-[11px] text-[#92949d]">
                  Every important event is recorded for visibility and auditability.
                </p>

              </div>

              <span className="hidden text-[11px] text-[#999] sm:block">
                Auto-refresh enabled
              </span>

            </div>

          </div>


          <div>

            {filteredActivities.length === 0 ? (

              <div className="flex min-h-[240px] flex-col items-center justify-center">

                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#f1f1f5] text-[#888]">
                  <Search size={19} />
                </div>

                <p className="text-[13px] font-semibold text-[#555]">
                  No activity found
                </p>

                <p className="mt-1 text-[11px] text-[#999]">
                  Try changing your search or filters.
                </p>

              </div>

            ) : (

              filteredActivities.map((activity, index) => (

                <div
                  key={activity.id}
                  className={`relative px-5 py-5 ${
                    index !== filteredActivities.length - 1
                      ? "border-b border-[#eeeeef]"
                      : ""
                  }`}
                >

                  <div className="flex gap-4">

                    <div className="relative">

                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${getIconBackground(
                          activity.type
                        )}`}
                      >
                        {getIcon(activity.type)}
                      </div>

                      {index !==
                        filteredActivities.length - 1 && (

                        <span className="absolute left-1/2 top-10 h-[65px] w-px -translate-x-1/2 bg-[#e6e6eb]" />

                      )}

                    </div>

                    <div className="min-w-0 flex-1">

                      <div className="flex flex-wrap items-start justify-between gap-3">

                        <div>

                          <div className="flex flex-wrap items-center gap-2">

                            <h3 className="text-[13px] font-bold text-[#33353d]">
                              {activity.title}
                            </h3>

                            <span className="rounded bg-[#f2f2f5] px-2 py-1 text-[10px] font-medium text-[#777]">
                              {activity.reference}
                            </span>

                            {activity.flagged && (

                              <span className="rounded-full bg-[#fff0f0] px-2 py-1 text-[10px] font-semibold text-[#d05252]">
                                Flagged
                              </span>

                            )}

                          </div>


                          <p className="mt-1.5 text-[13px] leading-5 text-[#696c76]">
                            {activity.description}
                          </p>

                        </div>


                        <span className="shrink-0 text-[11px] text-[#999]">
                          {activity.time}
                        </span>

                      </div>


                      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">

                        <div className="flex flex-wrap items-center gap-3">

                          <span
                            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                              activity.actionRequired
                                ? "bg-[#fff1df] text-[#c87920]"
                                : activity.status === "Verified"
                                ? "bg-[#e9f8f1] text-[#188b5d]"
                                : "bg-[#eef4ff] text-[#487fc4]"
                            }`}
                          >
                            {activity.status}
                          </span>

                          <span className="text-[11px] text-[#999]">
                            By {activity.actor}
                          </span>

                        </div>


                        <button
                          onClick={() =>
                            handleActivityAction(activity)
                          }
                          className="flex items-center gap-1.5 rounded-md border border-[#dedee5] bg-white px-3 py-2 text-[11px] font-semibold text-[#555] hover:bg-[#f7f7fa]"
                        >
                          View Details
                          <ArrowRight size={12} />
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              ))

            )}

          </div>

        </section>

        <div className="mt-5 flex items-center justify-between">

          <p className="text-[11px] text-[#999]">
            Showing {filteredActivities.length} of{" "}
            {activities.length} recent events
          </p>


          <div className="flex items-center gap-1.5">

            <button
              disabled
              className="flex h-8 w-8 items-center justify-center rounded border border-[#e1e1e6] text-[#bbb]"
            >
              <ArrowLeft size={13} />
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded bg-[#6257eb] text-[11px] font-semibold text-white">
              1
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded border border-[#e1e1e6] text-[11px] text-[#666]">
              2
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded border border-[#e1e1e6] text-[11px] text-[#666]">
              3
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded border border-[#e1e1e6] text-[#666]">
              <ArrowRight size={13} />
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}