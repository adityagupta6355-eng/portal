"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Bell,
  HelpCircle,
  ChevronDown,
  ArrowLeft,
  Menu,
  LogOut,
} from "lucide-react";
import NotificationDrawer from "./NotificationDrawer";

interface HeaderProps {
  onOpenMobileMenu?: () => void;
}

export default function Header({ onOpenMobileMenu }: HeaderProps) {
  const router = useRouter();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Logout handler
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("email");
      localStorage.removeItem("tradematchly_supplier_registered");
      localStorage.removeItem("tradematchly_supplier_profile");
    }
    setIsProfileOpen(false);
    router.push("/login");
  };

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

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsProfileOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-lg p-1 hover:bg-slate-50 transition cursor-pointer"
              aria-expanded={isProfileOpen}
              aria-haspopup="true"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eeeaff] text-xs font-bold text-[#6355d9]">
                SP
              </div>

              <div className="hidden text-left md:block">
                <p className="text-xs font-semibold text-slate-800">Sarah Patel</p>
                <p className="text-[10px] text-slate-400">Supplier Admin</p>
              </div>

              <ChevronDown
                size={14}
                className={`hidden text-slate-400 sm:block transition-transform duration-200 ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-lg z-50 animate-in fade-in zoom-in-95 duration-100">
                {/* User Details */}
                <div className="px-2 py-1.5">
                  <p className="text-xs font-semibold text-slate-800">Sarah Patel</p>
                  <p className="text-[10px] text-slate-400">Supplier Admin</p>
                </div>

                {/* Divider */}
                <div className="my-1 border-t border-slate-100" />

                {/* Logout Button */}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 transition cursor-pointer"
                >
                  <LogOut size={14} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <NotificationDrawer
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />
    </>
  );
}