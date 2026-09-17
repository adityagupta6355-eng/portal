"use client";

import { useState } from "react";
import {
  Search,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const conversations = [
  {
    initials: "DS",
    buyer: "Dutch Spice Imports",
    product: "Turmeric Powder - 500kg",
    time: "10:42 AM",
    unread: true,
    reference: "RFQ #TM-8992",
    status: "Action Required",
    statusType: "action",
    message:
      "Buyer requested a revised quote including expedited air freight to Rotterdam.",
    summary:
      "Buyer requested a revised quote including expedited air freight to Rotterdam. Needs response by EOD.",
  },
  {
    initials: "AG",
    buyer: "AgriCorp Global",
    product: "Organic Cardamom",
    time: "Yesterday",
    unread: false,
    reference: "Deal #DL-1042",
    status: "In Transit",
    statusType: "transit",
    message:
      "Perfect, we have received the bill of lading. Tracking shows it cleared customs yesterday...",
  },
  {
    initials: "NF",
    buyer: "Nordic Foods Ltd",
    product: "Cinnamon Sticks",
    time: "Mon",
    unread: false,
    reference: "RFQ #TM-7103",
    status: "",
    statusType: "",
    message:
      "Thank you for the samples. The quality is acceptable but we need to discuss the bulk...",
  },
];

export default function MessagesPage() {
  const [search, setSearch] = useState("");
  const [aiEnabled, setAiEnabled] = useState(true);

  const filteredConversations = conversations.filter(
    (conversation) =>
      conversation.buyer
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      conversation.product
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      conversation.reference
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-full">
      <div className="mb-5">
        <h1 className="text-[24px] font-bold leading-tight text-[#101828]">
          Inbox
        </h1>

        <p className="mt-1 text-[13px] text-[#667085]">
          Stay connected with buyers and partners
        </p>
      </div>

      <div className="mb-5 rounded-lg border border-[#e4e7ec] bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3">
          <Search className="h-5 w-5 shrink-0 text-[#344054]" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search conversations, buyers..."
            className="w-full bg-transparent text-[13px] text-[#101828] outline-none placeholder:text-[#98a2b3]"
          />
        </div>
      </div>

      <div className="mb-5 flex items-center justify-between rounded-lg border border-[#c7d2fe] bg-[#eef2ff] px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center">
            <Sparkles className="h-6 w-6 text-[#5546e8]" />
          </div>

          <h2 className="text-[15px] font-bold text-[#101828]">
            Mesh AI Summaries
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setAiEnabled(!aiEnabled)}
          className={`relative h-6 w-10 rounded-full transition ${
            aiEnabled ? "bg-[#5546e8]" : "bg-[#98a2b3]"
          }`}
        >
          <span
            className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
              aiEnabled ? "left-5" : "left-1"
            }`}
          />
        </button>
      </div>

      <div className="space-y-4">
        {filteredConversations.map((conversation, index) => (
          <div
            key={index}
            className={`rounded-lg border bg-white p-5 shadow-sm transition hover:shadow-md ${
              conversation.unread
                ? "border-[#c7d2fe]"
                : "border-[#e4e7ec]"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f2ff] text-[15px] font-bold text-[#5546e8]">
                  {conversation.initials}
                </div>

                <div className="min-w-0">
                  <h2 className="text-[17px] font-bold text-[#101828]">
                    {conversation.buyer}
                  </h2>

                  <p className="mt-1 text-[13px] font-semibold text-[#344054]">
                    {conversation.product}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <span className="text-[12px] font-medium text-[#667085]">
                  {conversation.time}
                </span>

                {conversation.unread && (
                  <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
                )}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-[#6254e8] bg-[#f5f3ff] px-3 py-1.5 text-[12px] font-semibold text-[#4f46e5]">
                {conversation.reference}
              </span>

              {conversation.status && (
                <span
                  className={`rounded-md border px-3 py-1.5 text-[12px] font-semibold ${
                    conversation.statusType === "action"
                      ? "border-[#25a875] bg-[#ecfdf3] text-[#159966]"
                      : "border-[#6254e8] bg-[#f5f3ff] text-[#4f46e5]"
                  }`}
                >
                  {conversation.status}
                </span>
              )}
            </div>

            <p className="mt-4 max-w-5xl text-[13px] leading-5 text-[#344054]">
              {conversation.message}
            </p>

            {aiEnabled && conversation.summary && (
              <div className="mt-4 flex items-start gap-3 rounded-lg border border-[#e4e7ec] bg-[#f8fafc] px-4 py-3">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#5546e8]" />

                <p className="text-[12px] leading-5 text-[#475467]">
                  {conversation.summary}
                </p>
              </div>
            )}

            <button
              type="button"
              className="mt-4 flex items-center gap-1.5 text-[13px] font-semibold text-[#5546e8]"
            >
              Open conversation
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        ))}

        {filteredConversations.length === 0 && (
          <div className="rounded-lg border border-[#e4e7ec] bg-white p-8 text-center">
            <p className="text-[13px] text-[#667085]">
              No conversations found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}