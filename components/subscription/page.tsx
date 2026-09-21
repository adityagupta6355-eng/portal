"use client";

import {
  ArrowRight,
  Check,
  CreditCard,
  Diamond,
  FileText,
  MessageSquare,
  PackageCheck,
  Receipt,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import BackButton from "@/components/common/BackButton";

export default function SubscriptionPage() {
  return (
    <div className="w-full space-y-6">
      <div>
        <BackButton label="Back to Dashboard" fallbackHref="/supplier" />
      </div>

      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Subscription & Plans
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your subscription plan, usage quotas, and billing.
          </p>
        </div>

          <div className="flex rounded-lg bg-[#f1f2f5] p-1">
            <button
              type="button"
              className="rounded-md px-4 py-2 text-sm font-semibold text-gray-500"
            >
              Monthly
            </button>

            <button
              type="button"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#111827] shadow-sm"
            >
              Yearly
            </button>
          </div>
        </div>

        <section className="mb-5 rounded-xl bg-[#111827] p-5 text-white shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#5846e8]">
                <Diamond size={29} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Current Plan
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Business
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                  Advanced trade tools for growing import and export teams.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 rounded-full bg-[#ecfdf3] px-3 py-1.5 text-sm font-semibold text-[#039855]">
              <Check size={15} />
              Active
            </div>
          </div>

          <div className="mt-6 flex items-end justify-between">
            <div>
              <span className="text-base font-semibold">$</span>

              <span className="text-[38px] font-bold leading-none">
                79
              </span>

              <span className="ml-1 text-sm text-gray-400">
                / month
              </span>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#111827]"
            >
              Manage
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="mt-5 border-t border-white/10 pt-4">
            <p className="text-xs text-gray-400">
              Billed yearly · Renews Sep 7, 2027
            </p>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="mb-3 text-lg font-bold text-[#101828]">
            Plan usage
          </h2>

          <div className="rounded-xl border border-[#dedee5] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4 border-b border-gray-200 py-4 first:pt-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f1efff] text-[#5846e8]">
                <PackageCheck size={20} />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#101828]">
                    Active products
                  </p>

                  <p className="text-xs font-semibold text-gray-600">
                    18 of 50
                  </p>
                </div>

                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[36%] rounded-full bg-[#5846e8]" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-gray-200 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fff7e8] text-[#d98200]">
                <FileText size={20} />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#101828]">
                    RFQ responses
                  </p>

                  <p className="text-xs font-semibold text-gray-600">
                    64 of 100
                  </p>
                </div>

                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[64%] rounded-full bg-[#d98200]" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 py-4 last:pb-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ecfdf3] text-[#079455]">
                <Users size={20} />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#101828]">
                    Team members
                  </p>

                  <p className="text-xs font-semibold text-gray-600">
                    6 of 10
                  </p>
                </div>

                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[60%] rounded-full bg-[#079455]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#101828]">
              Included features
            </h2>

            <span className="text-xs font-bold uppercase text-[#5846e8]">
              Business Plan
            </span>
          </div>

          <div className="rounded-xl border border-[#dedee5] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4 border-b border-gray-200 py-4 first:pt-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f1efff] text-[#5846e8]">
                <Sparkles size={20} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-[#101828]">
                  Mesh AI matching
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Priority recommendations and insights
                </p>
              </div>

              <Check size={20} className="text-[#039855]" />
            </div>

            <div className="flex items-center gap-4 border-b border-gray-200 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ecfdf3] text-[#079455]">
                <MessageSquare size={20} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-[#101828]">
                  Advanced messaging
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  AI summaries and negotiation support
                </p>
              </div>

              <Check size={20} className="text-[#039855]" />
            </div>

            <div className="flex items-center gap-4 border-b border-gray-200 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fff7e8] text-[#d98200]">
                <ShieldCheck size={20} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-[#101828]">
                  Verification tools
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Document and company trust workflows
                </p>
              </div>

              <Check size={20} className="text-[#039855]" />
            </div>

            <div className="flex items-center gap-4 py-4 last:pb-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f1efff] text-[#5846e8]">
                <Zap size={20} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-[#101828]">
                  Priority visibility
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Higher placement in qualified searches
                </p>
              </div>

              <Check size={20} className="text-[#039855]" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-[#101828]">
            Billing
          </h2>

          <div className="rounded-xl border border-[#dedee5] bg-white p-5 shadow-sm">
            <button
              type="button"
              className="flex w-full items-center gap-4 border-b border-gray-200 py-4 text-left first:pt-0"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                <CreditCard size={20} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-[#101828]">
                  Payment method
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Visa ending in 4242
                </p>
              </div>

              <ArrowRight size={18} className="text-gray-500" />
            </button>

            <button
              type="button"
              className="flex w-full items-center gap-4 py-4 text-left last:pb-0"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                <Receipt size={20} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-[#101828]">
                  Invoices
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  View and download billing history
                </p>
              </div>

              <ArrowRight size={18} className="text-gray-500" />
            </button>
          </div>
        </section>
    </div>
  );
}