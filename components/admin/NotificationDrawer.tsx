"use client";

import { useState } from "react";
import {
  X,
  Sparkles,
  MessageSquare,
  FileText,
  CheckCircle2,
  Package,
  CheckCheck,
} from "lucide-react";

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: "match" | "offer" | "rfq" | "verification" | "order";
}

const initialNotifications: NotificationItem[] = [
  {
    id: "1",
    title: "New 94% product match",
    description: "A buyer in Rotterdam is looking for 500 MT of turmeric powder.",
    time: "8 min ago",
    read: false,
    type: "match",
  },
  {
    id: "2",
    title: "Counter-offer received",
    description: "Dutch Spice Imports sent new pricing and payment terms.",
    time: "32 min ago",
    read: false,
    type: "offer",
  },
  {
    id: "3",
    title: "RFQ response viewed",
    description: "ABC Importers viewed your quote for RFQ #TM-10482.",
    time: "2 hours ago",
    read: false,
    type: "rfq",
  },
  {
    id: "4",
    title: "Verification approved",
    description: "Your business registration certificate has been approved.",
    time: "Yesterday",
    read: true,
    type: "verification",
  },
  {
    id: "5",
    title: "Order milestone updated",
    description: "The shipment documents for deal #DL-1042 are ready for review.",
    time: "Sep 3",
    read: true,
    type: "order",
  },
];

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationDrawer({
  isOpen,
  onClose,
}: NotificationDrawerProps) {
  const [notifications, setNotifications] = useState<NotificationItem[]>(
    initialNotifications
  );
  const [activeTab, setActiveTab] = useState<"all" | "unread">("all");

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const toggleRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  const displayedNotifications =
    activeTab === "unread"
      ? notifications.filter((n) => !n.read)
      : notifications;

  const renderIcon = (type: NotificationItem["type"]) => {
    switch (type) {
      case "match":
        return (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eef0ff] text-[#4f46e5]">
            <Sparkles size={18} />
          </div>
        );
      case "offer":
        return (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eff6ff] text-[#2563eb]">
            <MessageSquare size={18} />
          </div>
        );
      case "rfq":
        return (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fef7e7] text-[#d97706]">
            <FileText size={18} />
          </div>
        );
      case "verification":
        return (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ecfdf3] text-[#059669]">
            <CheckCircle2 size={18} />
          </div>
        );
      case "order":
        return (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ecfdf5] text-[#0d9488]">
            <Package size={18} />
          </div>
        );
    }
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-50 bg-slate-900/30 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Slide-over panel */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-[420px] flex-col bg-[#fafafc] shadow-2xl transition-transform duration-300 ease-in-out sm:border-l sm:border-slate-200 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Header */}
        <div className="border-b border-slate-100 bg-white px-6 pt-6 pb-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Updates
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                {unreadCount > 0
                  ? `${unreadCount} notifications need your attention`
                  : "You're all caught up"}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {unreadCount > 0 && (
                <button
                  type="button"
                  onClick={markAllRead}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition"
                >
                  <CheckCheck size={14} />
                  Mark all read
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
                aria-label="Close panel"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Tab switcher */}
          <div className="mt-5 flex rounded-xl bg-slate-100/90 p-1">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`flex-1 rounded-lg py-2 text-xs font-semibold transition ${
                activeTab === "all"
                  ? "bg-white text-indigo-600 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("unread")}
              className={`flex-1 rounded-lg py-2 text-xs font-semibold transition ${
                activeTab === "unread"
                  ? "bg-white text-indigo-600 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Unread {unreadCount > 0 && `(${unreadCount})`}
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-3.5">
          {displayedNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <CheckCircle2 size={24} />
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-700">
                No notifications found
              </p>
              <p className="mt-1 text-xs text-slate-400">
                You have reviewed all your updates.
              </p>
            </div>
          ) : (
            displayedNotifications.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleRead(item.id)}
                className={`group relative flex cursor-pointer items-start gap-3.5 rounded-2xl border p-4 transition-all duration-150 ${
                  !item.read
                    ? "border-indigo-200/90 bg-[#f4f6ff] hover:bg-[#eef2ff] shadow-xs"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs"
                }`}
              >
                {/* Icon */}
                {renderIcon(item.type)}

                {/* Content */}
                <div className="min-w-0 flex-1 pr-4">
                  <h4 className="text-[13px] font-bold text-slate-900 group-hover:text-indigo-950">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                  <span className="mt-2.5 inline-block text-[11px] font-medium text-slate-400">
                    {item.time}
                  </span>
                </div>

                {/* Unread indicator dot */}
                {!item.read && (
                  <span
                    className="absolute top-4 right-4 h-2.5 w-2.5 rounded-full bg-indigo-600 ring-4 ring-indigo-100"
                    title="Unread"
                  />
                )}
              </div>
            ))
          )}
        </div>
      </aside>
    </>
  );
}

