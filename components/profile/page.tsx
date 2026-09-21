"use client";

import { useRouter } from "next/navigation";
import {
  UserRound,
  Building2,
  BadgeCheck,
  FileText,
  CreditCard,
  Settings,
  Users,
  Package,
  Pencil,
  ChevronRight,
  LogOut,
  Info,
  TrendingUp,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import BackButton from "@/components/common/BackButton";

const menuItems = [
  {
    title: "Business Profile",
    icon: Building2,
    route: "/supplier/profile",
  },
  {
    title: "Product Catalog",
    icon: Package,
    route: "/supplier/products",
  },
  {
    title: "Trade Documents",
    icon: FileText,
    route: "/supplier/documents",
  },
  {
    title: "Team Management",
    icon: Users,
    route: "/supplier/team-management",
  },
  {
    title: "Subscription Plan",
    icon: CreditCard,
    route: "/supplier/subscription",
    badge: "PRO",
  },
  {
    title: "App Settings",
    icon: Settings,
    route: "/supplier/settings",
  },
];

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="w-full space-y-6">
      <div>
        <BackButton label="Back to Dashboard" fallbackHref="/supplier" />
      </div>
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          My Company & Profile
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage your verified exporter profile, organization details, and account preferences.
        </p>
      </div>

      <div className="rounded-md border border-[#e5e3e9] bg-white p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#e1e6ed] bg-[#f3f5f8]">
                <UserRound
                  size={32}
                  strokeWidth={1.8}
                  className="text-[#334155]"
                />
              </div>

              <div>
                <h1 className="text-[24px] font-bold leading-tight text-[#1d1d1f]">
                  Sarah Jenkins
                </h1>

                <p className="mt-1 text-[13px] text-[#777]">
                  Export Manager
                </p>

                <div className="mt-2 flex items-center gap-2 text-[13px] text-[#444]">
                  <Building2 size={16} />
                  <span>AgriCorp Global</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => router.push("/supplier/profile/edit")}
              className="flex h-9 w-9 items-center justify-center rounded-md bg-[#f3f5f8] text-[#475569] transition hover:bg-[#e9edf2]"
            >
              <Pencil size={17} />
            </button>
          </div>
        </div>

        <div className="mt-5 rounded-md border border-[#e5e3e9] bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#777]">
                Status
              </p>

              <div className="mt-2 flex items-center gap-2">
                <BadgeCheck
                  size={25}
                  strokeWidth={2}
                  className="text-[#059669]"
                />

                <h2 className="text-[20px] font-bold text-[#222]">
                  Trade Verified
                </h2>
              </div>
            </div>

            <span className="rounded-md bg-[#e9faf3] px-3 py-1.5 text-[12px] font-semibold text-[#059669]">
              Tier 1
            </span>
          </div>

          <p className="mt-4 max-w-[850px] text-[13px] leading-5 text-[#777]">
            Your business identity has been verified. Unlock more features by
            completing additional tiers.
          </p>

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between text-[#94a3b8]">
              <div className="flex items-center gap-2">
                <FileText size={18} />
                <span className="text-[13px]">Document Verified</span>
              </div>

              <BadgeCheck size={18} />
            </div>

            <div className="flex items-center justify-between text-[#94a3b8]">
              <div className="flex items-center gap-2">
                <CreditCard size={18} />
                <span className="text-[13px]">Transaction Verified</span>
              </div>

              <BadgeCheck size={18} />
            </div>
          </div>

          <button
            type="button"
            onClick={() => router.push("/supplier/verification")}
            className="mt-5 h-10 w-full rounded-md bg-[#171717] text-[13px] font-medium text-white transition hover:bg-[#292929]"
          >
            Verify More
          </button>
        </div>

        <div className="mt-5 rounded-md border border-[#e5e3e9] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-semibold uppercase tracking-wide text-[#777]">
              Company Trust Score
            </p>

            <Info size={17} className="text-[#475569]" />
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div>
              <span className="text-[32px] font-bold leading-none text-[#222]">
                91
              </span>
              <span className="text-[15px] text-[#777]">/100</span>
            </div>

            <div className="flex items-center gap-1.5 rounded-md bg-[#e9faf3] px-3 py-1.5 text-[12px] font-semibold text-[#059669]">
              <TrendingUp size={16} />
              Excellent
            </div>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#edf0f3]">
            <div
              className="h-full rounded-full bg-[#059669]"
              style={{ width: "91%" }}
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between border-b border-[#e5e7eb] py-3">
              <span className="text-[13px] text-[#777]">
                Business Verification
              </span>
              <span className="text-[13px] font-semibold text-[#222]">
                30/30
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#e5e7eb] py-3">
              <span className="text-[13px] text-[#777]">
                Trade Credentials
              </span>
              <span className="text-[13px] font-semibold text-[#222]">
                45/50
              </span>
            </div>

            <div className="flex items-center justify-between py-3">
              <span className="text-[13px] text-[#777]">
                Platform Activity
              </span>
              <span className="text-[13px] font-semibold text-[#222]">
                16/20
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-4">
          <div className="flex items-center gap-2 rounded-md border border-[#e5e3e9] bg-white px-4 py-3">
            <Sparkles size={18} className="text-[#d97706]" />
            <span className="text-[12px] font-semibold text-[#222]">
              Top Supplier
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-md border border-[#e5e3e9] bg-white px-4 py-3">
            <MessageSquare size={18} className="text-[#4f46e5]" />
            <span className="text-[12px] font-semibold text-[#222]">
              98% Response Rate
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-md border border-[#e5e3e9] bg-white px-4 py-3">
            <Users size={18} className="text-[#6366f1]" />
            <span className="text-[12px] font-semibold text-[#222]">
              142 Connections
            </span>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-md border border-[#e5e3e9] bg-white">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => router.push(item.route)}
                className={`flex w-full items-center gap-3 px-5 py-3.5 text-left transition hover:bg-[#fafafa] ${
                  index !== menuItems.length - 1
                    ? "border-b border-[#e5e7eb]"
                    : ""
                }`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#f3f5f8]">
                  <Icon size={18} className="text-[#475569]" />
                </div>

                <span className="flex-1 text-[13px] font-semibold text-[#222]">
                  {item.title}
                </span>

                {item.badge && (
                  <span className="rounded-md bg-[#5146e5] px-2.5 py-1 text-[10px] font-semibold text-white">
                    {item.badge}
                  </span>
                )}

                <ChevronRight size={18} className="text-[#777]" />
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-md border border-[#e5e3e9] bg-white text-[13px] font-semibold text-[#222] transition hover:bg-[#fafafa]"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
  );
}