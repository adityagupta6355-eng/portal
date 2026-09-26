"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Building2,
  Pencil,
  BadgeCheck,
  CheckCircle2,
  Store,
  Archive,
  Award,
  Settings,
  ChevronRight,
  LogOut,
} from "lucide-react";
import BackButton from "@/components/common/BackButton";

export default function ProfilePage() {
  const router = useRouter();

  // User & Profile State with defaults matching the uploaded reference design
  const [userData, setUserData] = useState({
    name: "rahul",
    role: "SELLER",
    company: "bikanare",
    category: "Textiles & Garments",
    completionScore: 75,
  });

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const rawUser = localStorage.getItem("user");
        let parsedName = "";
        let parsedRole = "";

        if (rawUser) {
          const u = JSON.parse(rawUser);
          parsedName = u.fullName || u.name || u.firstName || u.username || "";
          parsedRole = u.role || "";
        }

        const rawProfile = localStorage.getItem("tradematchly_supplier_profile");
        let parsedCompany = "";
        let parsedCategory = "";

        if (rawProfile) {
          const p = JSON.parse(rawProfile);
          parsedCompany = p.companyName || "";
          parsedCategory = p.category || "";
        }

        setUserData((prev) => ({
          ...prev,
          name: parsedName || prev.name,
          role: parsedRole ? parsedRole.toUpperCase() : prev.role,
          company: parsedCompany || prev.company,
          category: parsedCategory || prev.category,
        }));
      }
    } catch {}
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
    router.push("/login");
  };

  return (
    <div className="mx-auto w-full max-w-lg space-y-4 pb-12 antialiased">
      {/* Back button */}
      <div>
        <BackButton label="Back to Dashboard" fallbackHref="/supplier" />
      </div>

      {/* ========================================================
          1. TOP USER CARD (Dark navy rounded banner)
          ======================================================== */}
      <section className="flex items-center justify-between rounded-3xl bg-[#0B1528] p-5 text-white shadow-md">
        <div className="flex items-center gap-3.5">
          {/* Avatar Icon */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#5244E3] text-white shadow-xs">
            <User size={28} strokeWidth={2} />
          </div>

          {/* User Details */}
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white leading-tight">
              {userData.name}
            </h1>
            <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-slate-300">
              {userData.role}
            </p>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-300">
              <Building2 size={13} className="shrink-0 text-slate-400" />
              <span className="truncate">{userData.company}</span>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <button
          type="button"
          onClick={() => router.push("/supplier/profile/edit")}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1C2638] text-slate-200 hover:bg-[#25334a] hover:text-white transition shadow-2xs cursor-pointer"
          aria-label="Edit Profile"
        >
          <Pencil size={15} />
        </button>
      </section>

      {/* ========================================================
          2. PROFILE COMPLETION CARD
          ======================================================== */}
      <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xs space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-800">
              PROFILE COMPLETION
            </h2>
            <p className="mt-0.5 text-xs text-slate-400">
              Unlock more qualified matches
            </p>
          </div>

          <span className="rounded-full border border-[#C6F3DE] bg-[#EAFBF3] px-2.5 py-0.5 text-[11px] font-bold text-[#059669]">
            Setup needed
          </span>
        </div>

        {/* Score & Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-0.5">
            <span className="text-3xl font-extrabold text-slate-900 leading-none">
              {userData.completionScore}
            </span>
            <span className="text-sm font-semibold text-slate-400">/100</span>
          </div>

          <BadgeCheck
            size={24}
            className="text-[#5244E3] stroke-[1.8]"
          />
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-[#059669] transition-all duration-500"
            style={{ width: `${userData.completionScore}%` }}
          />
        </div>

        {/* Completion Breakdown List */}
        <div className="divide-y divide-slate-100 text-xs">
          <div className="flex items-center justify-between py-2.5">
            <span className="text-slate-500 font-medium">Personal</span>
            <span className="font-bold text-slate-800">10/25</span>
          </div>

          <div className="flex items-center justify-between py-2.5">
            <span className="text-slate-500 font-medium">Company details</span>
            <span className="font-bold text-slate-800">35/35</span>
          </div>

          <div className="flex items-center justify-between py-2.5">
            <span className="text-slate-500 font-medium">Documents</span>
            <span className="font-bold text-slate-800">25/25</span>
          </div>

          <div className="flex items-center justify-between py-2.5">
            <span className="text-slate-500 font-medium">Products</span>
            <span className="font-bold text-slate-800">5/15</span>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. STATUS CARD
          ======================================================== */}
      <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xs space-y-3.5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800">
            STATUS
          </span>

          <span className="rounded-md border border-[#C6F3DE] bg-[#EAFBF3] px-2 py-0.5 text-[11px] font-bold text-[#059669]">
            {userData.role}
          </span>
        </div>

        {/* Headline */}
        <div className="flex items-center gap-2">
          <CheckCircle2 size={20} className="text-[#059669] shrink-0" />
          <h3 className="text-base font-bold text-slate-900">
            Trade Verified
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-500 leading-relaxed">
          {userData.company} is verified for trade in {userData.category}.
        </p>

        {/* View Verification Button */}
        <button
          type="button"
          onClick={() => router.push("/supplier/verification")}
          className="w-full rounded-xl bg-[#0B1528] py-3 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-slate-800 transition cursor-pointer"
        >
          View Verification
        </button>
      </section>

      {/* ========================================================
          4. NAVIGATION LIST CARD
          ======================================================== */}
      <section className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xs divide-y divide-slate-100">
        {/* 1. Business Profile */}
        <button
          type="button"
          onClick={() => router.push("/supplier/profile/edit")}
          className="flex w-full items-center justify-between p-4 text-left transition hover:bg-slate-50/80 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
              <Building2 size={18} />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              Business Profile
            </span>
          </div>
          <ChevronRight size={18} className="text-slate-400" />
        </button>

        {/* 2. Product Catalog */}
        <button
          type="button"
          onClick={() => router.push("/supplier/products")}
          className="flex w-full items-center justify-between p-4 text-left transition hover:bg-slate-50/80 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
              <Store size={18} />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              Product Catalog
            </span>
          </div>
          <ChevronRight size={18} className="text-slate-400" />
        </button>

        {/* 3. Trade Documents */}
        <button
          type="button"
          onClick={() => router.push("/supplier/documents")}
          className="flex w-full items-center justify-between p-4 text-left transition hover:bg-slate-50/80 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
              <Archive size={18} />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              Trade Documents
            </span>
          </div>
          <ChevronRight size={18} className="text-slate-400" />
        </button>

        {/* 4. Subscription Plan */}
        <button
          type="button"
          onClick={() => router.push("/supplier/subscription")}
          className="flex w-full items-center justify-between p-4 text-left transition hover:bg-slate-50/80 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-[#5244E3]">
              <Award size={18} />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              Subscription Plan
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-md bg-[#5244E3] px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
              PRO
            </span>
            <ChevronRight size={18} className="text-slate-400" />
          </div>
        </button>

        {/* 5. App Settings */}
        <button
          type="button"
          onClick={() => router.push("/supplier/settings")}
          className="flex w-full items-center justify-between p-4 text-left transition hover:bg-slate-50/80 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
              <Settings size={18} />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              App Settings
            </span>
          </div>
          <ChevronRight size={18} className="text-slate-400" />
        </button>
      </section>

      {/* ========================================================
          5. SEPARATE LOGOUT BUTTON CARD
          ======================================================== */}
      <button
        type="button"
        onClick={handleLogout}
        className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-3.5 px-4 text-xs sm:text-sm font-bold text-slate-900 shadow-xs hover:bg-slate-50 transition cursor-pointer"
      >
        <LogOut size={17} className="text-slate-700" />
        <span>Logout</span>
      </button>
    </div>
  );
}