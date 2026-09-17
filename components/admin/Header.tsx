"use client";

import Link from "next/link";
import {
  Bell,
  HelpCircle,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-[70px] items-center justify-between border-b border-[#e5e7eb] bg-white px-7">

      {/* Back to Website */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-md border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
      >
        <ArrowLeft size={17} />
        <span>Back to Website</span>
      </Link>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Notification */}
        <button
          className="relative text-gray-500 hover:text-gray-800"
          aria-label="Notifications"
        >
          <Bell size={19} />

          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Help */}
        <button
          className="text-gray-500 hover:text-gray-800"
          aria-label="Help"
        >
          <HelpCircle size={19} />
        </button>

        {/* Divider */}
        <div className="h-7 w-px bg-gray-200" />

        {/* Profile */}
        <button className="flex items-center gap-2">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eeeaff] text-xs font-bold text-[#6355d9]">
            SP
          </div>

          <div className="hidden text-left md:block">
            <p className="text-xs font-semibold">
              Sarah Patel
            </p>

            <p className="text-[10px] text-gray-400">
              Supplier Admin
            </p>
          </div>

          <ChevronDown
            size={15}
            className="text-gray-400"
          />

        </button>

      </div>
    </header>
  );
}