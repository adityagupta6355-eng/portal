"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  HelpCircle,
  ChevronDown,
  ArrowLeft,
  Menu,
} from "lucide-react";
import NotificationDrawer from "./NotificationDrawer";

interface HeaderProps {
  onOpenMobileMenu?: () => void;
}

export default function Header({ onOpenMobileMenu }: HeaderProps) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 flex h-[70px] w-full items-center justify-between border-b border-[#e5e7eb] bg-white px-4 sm:px-6">
        {/* Left Side: Mobile Hamburger Menu & Back to Website */}
        <div className="flex items-center gap-3">
          {onOpenMobileMenu && (
            <button
              type="button"
              onClick={onOpenMobileMenu}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden transition"
              aria-label="Open sidebar menu"
            >
              <Menu size={22} />
            </button>
          )}

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-xs transition hover:bg-slate-50 hover:text-slate-900"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Back to Website</span>
            <span className="sm:hidden">Home</span>
          </Link>
        </div>

        {/* Right Side: Notifications, Help, Profile */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Notification Button */}
          <button
            type="button"
            onClick={() => setIsNotificationOpen(true)}
            className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition"
            aria-label="Open notifications"
          >
            <Bell size={19} />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-indigo-600 ring-2 ring-white" />
          </button>

          {/* Help */}
          <Link
            href="/supplier/settings"
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition"
            aria-label="Help & Settings"
          >
            <HelpCircle size={19} />
          </Link>

          {/* Divider */}
          <div className="h-6 w-px bg-slate-200" />

          {/* Profile */}
          <Link
            href="/supplier/profile"
            className="flex items-center gap-2 rounded-lg p-1 hover:bg-slate-50 transition"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eeeaff] text-xs font-bold text-[#6355d9]">
              SP
            </div>

            <div className="hidden text-left md:block">
              <p className="text-xs font-semibold text-slate-800">Sarah Patel</p>
              <p className="text-[10px] text-slate-400">Supplier Admin</p>
            </div>

            <ChevronDown size={14} className="hidden text-slate-400 sm:block" />
          </Link>
        </div>
      </header>

      <NotificationDrawer
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />
    </>
  );
}