"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function SupplierLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // If on the onboarding/company registration page, render as clean standalone view
  const isRegisterPage = pathname?.includes("/supplier/register");

  if (isRegisterPage) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 antialiased">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7fa] text-slate-900 antialiased">
      {/* Sidebar (Desktop fixed & Mobile drawer) */}
      <Sidebar
        isMobileOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex min-h-screen flex-col transition-all duration-200 lg:ml-[250px] ml-0">
        {/* Header with hamburger trigger for mobile */}
        <Header onOpenMobileMenu={() => setIsMobileOpen(true)} />

        {/* Content with responsive padding */}
        <main className="w-full flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
