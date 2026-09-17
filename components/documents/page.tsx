"use client";

import { FileText, BadgeCheck, Clock3, Plus } from "lucide-react";

const stats = [
  {
    label: "TOTAL",
    value: "0",
    icon: FileText,
    iconColor: "#5146e5",
    bgColor: "#eef0ff",
  },
  {
    label: "VERIFIED",
    value: "0",
    icon: BadgeCheck,
    iconColor: "#059669",
    bgColor: "#e9fbf3",
  },
  {
    label: "ACTION",
    value: "0",
    icon: Clock3,
    iconColor: "#d97706",
    bgColor: "#fff3c7",
  },
];

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-[#faf9fc]">
      <div className="p-6">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-[28px] font-bold text-[#1d1d1f]">
              Documents
            </h1>

            <p className="mt-1 text-[13px] text-[#777]">
              Store and manage your trade credentials.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-md bg-[#171717] px-4 py-2 text-[13px] font-medium text-white hover:bg-[#292929]"
          >
            <Plus size={16} />
            Upload
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-md border border-[#e5e3e9] bg-white p-4"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-md"
                  style={{ backgroundColor: stat.bgColor }}
                >
                  <Icon
                    size={20}
                    strokeWidth={2}
                    style={{ color: stat.iconColor }}
                  />
                </div>

                <div className="mt-4">
                  <p className="text-[24px] font-bold text-[#222]">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-[12px] font-medium tracking-wide text-[#777]">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}