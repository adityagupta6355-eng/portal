"use client";

import { useState } from "react";
import {
  ChevronDown,
  Eye,
  Sparkles,
  FileText,
  CircleDollarSign,
  TrendingUp,
  Target,
  Globe2,
  ArrowUpRight,
} from "lucide-react";

const growthData = [
  { label: "W1", value: 42 },
  { label: "W2", value: 58 },
  { label: "W3", value: 46 },
  { label: "W4", value: 68 },
  { label: "W5", value: 60 },
  { label: "W6", value: 78 },
  { label: "W7", value: 70 },
  { label: "Now", value: 90 },
];

const funnelData = [
  {
    label: "Opportunities viewed",
    value: 126,
    width: "100%",
    color: "bg-[#5146e5]",
  },
  {
    label: "Requirements opened",
    value: 74,
    width: "59%",
    color: "bg-[#6366e8]",
  },
  {
    label: "Quotes submitted",
    value: 38,
    width: "30%",
    color: "bg-[#e68a00]",
  },
  {
    label: "Deals closed",
    value: 11,
    width: "9%",
    color: "bg-[#12b76a]",
  },
];

const exportMarkets = [
  {
    country: "United Arab Emirates",
    city: "Dubai",
    value: 34,
  },
  {
    country: "Netherlands",
    city: "Rotterdam",
    value: 27,
  },
  {
    country: "Germany",
    city: "Hamburg",
    value: 21,
  },
  {
    country: "Singapore",
    city: "Singapore",
    value: 14,
  },
];

export default function AnalyticsPage() {
  const [period, setPeriod] = useState("30 days");
  const [showPeriod, setShowPeriod] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf9fc]">
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-[28px] font-bold text-[#1d1d1f]">
              Analytics
            </h1>

            <p className="mt-1 text-[13px] text-[#777]">
              Business performance at a glance
            </p>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setShowPeriod((prev) => !prev)}
              className="flex items-center gap-2 rounded-md border border-[#dedde3] bg-white px-4 py-2 text-[13px] font-medium text-[#444] hover:bg-[#f7f7f8]"
            >
              {period}
              <ChevronDown size={15} />
            </button>

            {showPeriod && (
              <div className="absolute right-0 top-full z-30 mt-2 w-[130px] rounded-md border border-[#dedde3] bg-white p-1 shadow-lg">
                {["7 days", "30 days", "90 days", "1 year"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setPeriod(item);
                      setShowPeriod(false);
                    }}
                    className="w-full rounded-md px-3 py-2 text-left text-[13px] text-[#444] hover:bg-[#f7f7f8]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mb-5 grid grid-cols-4 gap-4">
          <div className="rounded-md border border-[#e5e3e9] bg-white p-4">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-[#eef0ff]">
              <Eye size={19} className="text-[#5146e5]" />
            </div>

            <p className="text-[12px] text-[#777]">Profile Views</p>

            <p className="mt-2 text-[24px] font-bold text-[#222]">
              1,284
            </p>

            <p className="mt-1 text-[12px] text-[#12b76a]">
              +18.4% vs prior
            </p>
          </div>

          <div className="rounded-md border border-[#e5e3e9] bg-white p-4">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-[#ecfdf3]">
              <Sparkles size={19} className="text-[#12b76a]" />
            </div>

            <p className="text-[12px] text-[#777]">
              Matched Opportunities
            </p>

            <p className="mt-2 text-[24px] font-bold text-[#222]">
              126
            </p>

            <p className="mt-1 text-[12px] text-[#12b76a]">
              +12.2% vs prior
            </p>
          </div>

          <div className="rounded-md border border-[#e5e3e9] bg-white p-4">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-[#fff8e8]">
              <FileText size={19} className="text-[#b54708]" />
            </div>

            <p className="text-[12px] text-[#777]">Quotes Sent</p>

            <p className="mt-2 text-[24px] font-bold text-[#222]">
              38
            </p>

            <p className="mt-1 text-[12px] text-[#12b76a]">
              +4.6% vs prior
            </p>
          </div>

          <div className="rounded-md border border-[#e5e3e9] bg-white p-4">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-[#eef0ff]">
              <CircleDollarSign size={19} className="text-[#5146e5]" />
            </div>

            <p className="text-[12px] text-[#777]">Deal Value</p>

            <p className="mt-2 text-[24px] font-bold text-[#222]">
              $84.2K
            </p>

            <p className="mt-1 text-[12px] text-[#d34848]">
              -2.1% vs prior
            </p>
          </div>
        </div>

        <div className="mb-5 rounded-md border border-[#e5e3e9] bg-white p-5">
          <div className="mb-5 flex items-start justify-between">
            <div>
              <h2 className="text-[18px] font-semibold text-[#222]">
                Opportunity growth
              </h2>

              <p className="mt-1 text-[13px] text-[#777]">
                Qualified matches received
              </p>
            </div>

            <div className="flex items-center gap-1 text-[12px] font-medium text-[#12b76a]">
              <TrendingUp size={15} />
              +16.8%
            </div>
          </div>

          <div className="flex h-[170px] items-end justify-between gap-1">
            {growthData.map((item) => (
              <div
                key={item.label}
                className="flex h-full flex-1 flex-col items-center justify-end"
              >
                <div className="flex h-[140px] w-[38%] items-end overflow-hidden rounded-t-sm bg-[#f2f4f7]">
                  <div
                    className="w-full rounded-t-sm bg-[#5146e5]"
                    style={{
                      height: `${item.value}%`,
                    }}
                  />
                </div>

                <span className="mt-2 text-[11px] text-[#777]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-5 rounded-md border border-[#e5e3e9] bg-white p-5">
          <div className="mb-5 flex items-start justify-between">
            <div>
              <h2 className="text-[18px] font-semibold text-[#222]">
                Conversion funnel
              </h2>

              <p className="mt-1 text-[13px] text-[#777]">
                From match to completed deal
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#eef0ff]">
              <Target size={18} className="text-[#5146e5]" />
            </div>
          </div>

          <div className="space-y-4">
            {funnelData.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[13px] text-[#777]">
                    {item.label}
                  </span>

                  <span className="text-[13px] font-semibold text-[#222]">
                    {item.value}
                  </span>
                </div>

                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#eaecf0]">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{
                      width: item.width,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between rounded-md bg-[#eef0ff] px-4 py-3">
            <span className="text-[11px] font-semibold text-[#5146e5]">
              OVERALL CONVERSION
            </span>

            <span className="text-[16px] font-bold text-[#5146e5]">
              8.7%
            </span>
          </div>
        </div>

        <div className="mb-5 border-t border-[#e5e3e9] pt-6">
          <h2 className="text-[24px] font-bold text-[#222]">
            Overview
          </h2>

          <p className="mt-1 text-[13px] text-[#777]">
            Your business at a glance
          </p>
        </div>

        <div className="mb-5 rounded-md border border-[#e5e3e9] bg-white p-5">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h2 className="text-[18px] font-semibold text-[#222]">
                Top export markets
              </h2>

              <p className="mt-1 text-[13px] text-[#777]">
                By opportunity volume
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#f2f4f7]">
              <Globe2 size={18} className="text-[#475467]" />
            </div>
          </div>

          <div>
            {exportMarkets.map((market, index) => (
              <div
                key={market.country}
                className={`py-4 ${
                  index !== exportMarkets.length - 1
                    ? "border-b border-[#e5e3e9]"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#f2f4f7]">
                    <Globe2 size={18} className="text-[#667085]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[13px] font-semibold text-[#222]">
                          {market.country}
                        </p>

                        <p className="mt-1 text-[12px] text-[#777]">
                          {market.city}
                        </p>
                      </div>

                      <span className="text-[15px] font-bold text-[#222]">
                        {market.value}
                      </span>
                    </div>

                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#eaecf0]">
                      <div
                        className="h-full rounded-full bg-[#5146e5]"
                        style={{
                          width: `${(market.value / 34) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-[#5146e5] bg-[#eef0ff] p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white">
              <Sparkles size={20} className="text-[#5146e5]" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold tracking-wide text-[#5146e5]">
                MESH AI INSIGHT
              </p>

              <h3 className="mt-1 text-[18px] font-semibold text-[#222]">
                Your response speed is improving
              </h3>

              <p className="mt-1 text-[13px] text-[#777]">
                Replies within four hours are converting 2.3× better this month.
              </p>
            </div>

            <ArrowUpRight
              size={20}
              className="shrink-0 text-[#5146e5]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}