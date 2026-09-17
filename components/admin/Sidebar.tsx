"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  MessageSquare,
  Handshake,
  Trophy,
  Package,
  BarChart3,
  User,
  Star,
  ShieldCheck,
  Settings,
  CreditCard,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/supplier",
    icon: LayoutDashboard,
  },
  {
    name: "Opportunities",
    href: "/supplier/opportunities",
    icon: BriefcaseBusiness,
  },
  {
    name: "RFQs",
    href: "/supplier/rfqs",
    icon: FileText,
  },
  {
    name: "message",
    href: "/supplier/message",
    icon: MessageSquare,
  },
  {
    name: "Quotes -- ",
    href: "/supplier/quotes",
    icon: MessageSquare,
  },
  {
    name: "Negotiations -- ",
    href: "/supplier/negotiations",
    icon: Handshake,
  },
  {
    name: "Deals --",
    href: "/supplier/deals",
    icon: Trophy,
  },
  {
    name: "Products",
    href: "/supplier/products",
    icon: Package,
  },
  {
    name: "Analytics",
    href: "/supplier/analytics",
    icon: BarChart3,
  },
  {
    name: "Reputation & Reviews",
    href: "/supplier/reputation",
    icon: Star,
  },
  {
  name: "Documents",
  href: "/supplier/documents",
  icon: FileText,
},
  {
  name: "Subscription",
  href: "/supplier/subscription",
  icon: CreditCard,
},
{
  name: "Settings",
  href: "/supplier/settings",
  icon: Settings,
},
  {
    name: "Profile",
    href: "/supplier/profile",
    icon: User,
  },
  {
    name: "Verification",
    href: "/supplier/verification",
    icon: ShieldCheck,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-[250px] bg-[#111827] text-white">
      <div className="flex h-[75px] items-center gap-3 border-b border-white/10 px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#6c5ce7] text-sm font-bold">
          TM
        </div>

        <div>
          <h1 className="text-[15px] font-bold">
            TradeMatchly
          </h1>

          <p className="text-[10px] text-gray-400">
            Supplier Portal
          </p>
        </div>
      </div>

      <nav className="h-[calc(100vh-75px)] overflow-y-auto px-3 py-5">
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
          Workspace
        </p>

        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            (item.href !== "/supplier" &&
              pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] transition ${
                active
                  ? "bg-[#272f43] text-white"
                  : "text-gray-400 hover:bg-[#1d2535] hover:text-white"
              }`}
            >
              <Icon size={17} />

              <span>{item.name}</span>

              {item.name === "Opportunities" && (
                <span className="ml-auto rounded-full bg-[#6c5ce7] px-2 py-0.5 text-[9px]">
                  12
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}