"use client";

import {
  ShieldCheck,
  Building2,
  FileText,
  Lock,
  BadgeCheck,
  Clock3,
  FileBadge,
  Upload,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import BackButton from "@/components/common/BackButton";

export default function VerificationPage() {
  return (
    <div className="w-full space-y-6">
      <div>
        <BackButton label="Back to Dashboard" fallbackHref="/supplier" />
      </div>

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Verification Center
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Build buyer confidence and unlock trusted trade features.
        </p>
      </div>

      {/* Verification Status */}
      <section className="mb-4 overflow-hidden rounded-xl bg-[#0F172A] p-5 shadow-sm">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white">
              <ShieldCheck
                size={30}
                className="text-[#12B76A]"
              />
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#98A2B3]">
                Current Status
              </p>

              <h2 className="mt-1 text-2xl font-bold text-white">
                Trade Verified
              </h2>

              <p className="mt-2 max-w-4xl text-sm leading-6 text-[#D0D5DD]">
                Your business identity is verified. Complete document
                verification to strengthen your trust profile.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-[#ECFDF3] px-4 py-2">
            <span className="text-xs font-semibold text-[#12B76A]">
              TIER 1
            </span>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-[#D0D5DD]">
              Overall verification
            </span>

            <span className="text-sm font-semibold text-white">
              33%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-[#334155]">
            <div className="h-full w-[33%] rounded-full bg-[#12B76A]" />
          </div>
        </div>
      </section>

      {/* Verification Journey */}
      <section className="mb-4">
        <h2 className="text-lg font-bold text-[#101828]">
          Verification Journey
        </h2>

        <div className="mt-3 rounded-xl border border-[#dedee5] bg-white shadow-sm">
          {/* Business Identity */}
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF3]">
                <Building2
                  size={25}
                  className="text-[#12B76A]"
                />
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#101828]">
                  Business Identity
                </h3>

                <p className="mt-1 text-xs text-[#667085]">
                  Company information confirmed
                </p>
              </div>
            </div>

            <div className="rounded-full bg-[#ECFDF3] px-3 py-1.5">
              <span className="text-xs font-semibold text-[#12B76A]">
                ✓ Done
              </span>
            </div>
          </div>

          {/* Document Verification */}
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF]">
                <FileText
                  size={25}
                  className="text-[#5146E5]"
                />
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#101828]">
                  Document Verification
                </h3>

                <p className="mt-1 text-xs text-[#667085]">
                  Upload and verify official records
                </p>
              </div>
            </div>

            <span className="text-xs font-semibold text-[#5146E5]">
              Action needed
            </span>
          </div>

          {/* Transaction Verification */}
          <div className="flex items-center justify-between px-5 py-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F2F4F7]">
                <Lock
                  size={25}
                  className="text-[#98A2B3]"
                />
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#101828]">
                  Transaction Verification
                </h3>

                <p className="mt-1 text-xs text-[#667085]">
                  Unlocked after your first completed trade
                </p>
              </div>
            </div>

            <Lock
              size={18}
              className="text-[#98A2B3]"
            />
          </div>
        </div>
      </section>

      {/* Company Documents */}
      <section className="mb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#101828]">
            Company Documents
          </h2>

          <span className="text-xs font-medium text-[#667085]">
            1 of 3 complete
          </span>
        </div>

        <div className="mt-3 rounded-xl border border-[#dedee5] bg-white shadow-sm">
          {/* Business Registration Certificate */}
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF3]">
                <BadgeCheck
                  size={25}
                  className="text-[#12B76A]"
                />
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#101828]">
                  Business Registration Certificate
                </h3>

                <p className="mt-1 text-xs text-[#667085]">
                  Verified successfully
                </p>
              </div>
            </div>

            <span className="text-sm font-semibold text-[#12B76A]">
              Verified
            </span>
          </div>

          {/* Tax Identification Document */}
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF7ED]">
                <Clock3
                  size={25}
                  className="text-[#D97706]"
                />
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#101828]">
                  Tax Identification Document
                </h3>

                <p className="mt-1 text-xs text-[#667085]">
                  Review usually takes 1–2 business days
                </p>
              </div>
            </div>

            <span className="text-sm font-semibold text-[#D97706]">
              Pending
            </span>
          </div>

          {/* Trade License */}
          <div className="flex items-center justify-between px-5 py-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F2F4F7]">
                <FileBadge
                  size={25}
                  className="text-[#475467]"
                />
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#101828]">
                  Trade License / Export Permit
                </h3>

                <p className="mt-1 text-xs text-[#667085]">
                  PDF or image, maximum 10 MB
                </p>
              </div>
            </div>

            <button
              type="button"
              className="text-sm font-semibold text-[#5146E5]"
            >
              Upload
            </button>
          </div>

          {/* Upload Button */}
          <div className="p-4">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#111827] py-3 text-sm font-semibold text-white transition hover:bg-[#172033]"
            >
              <Upload size={17} />

              Upload Documents

              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Verify More */}
      <section className="rounded-xl border border-[#DDE3FF] bg-[#EEF2FF] p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
            <Sparkles
              size={21}
              className="text-[#5146E5]"
            />
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#101828]">
              Why verify more?
            </h3>

            <p className="mt-1 text-sm leading-6 text-[#667085]">
              Verified companies receive stronger match visibility,
              higher buyer confidence, and access to premium RFQs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}