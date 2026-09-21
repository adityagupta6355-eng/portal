"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Sparkles,
  Target,
  FileText,
  MessageSquare,
  Package,
  UserCircle,
  Building2,
  ShieldCheck,
  Boxes,
  BarChart3,
  Star,
  Users,
  CreditCard,
  Settings,
  X,
  LucideIcon,
} from "lucide-react";

interface MenuItem {
  name: string;
  href: string;
  icon: LucideIcon;
  badge?: {
    text: string;
    variant: "dark" | "gray" | "blue";
  };
  rightLabel?: string;
}

interface MenuSection {
  title?: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    items: [
      {
        name: "Dashboard",
        href: "/supplier",
        icon: LayoutGrid,
      },
      {
        name: "Opportunities",
        href: "/supplier/opportunities",
        icon: Target,
        badge: {
          text: "12",
          variant: "dark",
        },
      },
      {
        name: "Match AI",
        href: "/supplier/match-ai",
        icon: Sparkles,
        badge: {
          text: "AI",
          variant: "blue",
        },
      },
      {
        name: "RFQs",
        href: "/supplier/rfqs",
        icon: FileText,
        badge: {
          text: "8",
          variant: "gray",
        },
      },
      {
        name: "Messages",
        href: "/supplier/message",
        icon: MessageSquare,
        badge: {
          text: "3",
          variant: "blue",
        },
      },
    ],
  },
  {
    title: "BUSINESS",
    items: [
      {
        name: "My Products",
        href: "/supplier/products",
        icon: Package,
      },
      {
        name: "My Company",
        href: "/supplier/profile",
        icon: Building2,
      },
      {
        name: "Verification Center",
        href: "/supplier/verification",
        icon: ShieldCheck,
      },
      {
        name: "Documents",
        href: "/supplier/documents",
        icon: Boxes,
      },
    ],
  },
  {
    title: "PERFORMANCE",
    items: [
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
    ],
  },
  {
    title: "SYSTEM",
    items: [
      {
        name: "Team Management",
        href: "/supplier/team",
        icon: Users,
      },
      {
        name: "Subscription",
        href: "/supplier/subscription",
        icon: CreditCard,
        rightLabel: "Business Plan",
      },
      {
        name: "Settings",
        href: "/supplier/settings",
        icon: Settings,
      },
    ],
  },
];

interface SidebarProps {
  isMobileOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({
  isMobileOpen = false,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();

  const renderBadge = (badge: MenuItem["badge"]) => {
    if (!badge) return null;

    if (badge.variant === "blue") {
      return (
        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1.5 text-[10px] font-bold text-white shadow-xs">
          {badge.text}
        </span>
      );
    }

    if (badge.variant === "dark") {
      return (
        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full border border-slate-700 bg-[#1e293b] px-1.5 text-[10px] font-bold text-slate-200">
          {badge.text}
        </span>
      );
    }

    return (
      <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-[#1f293d] px-1.5 text-[10px] font-bold text-slate-300">
        {badge.text}
      </span>
    );
  };

  const navContent = (
    <div className="flex h-full flex-col bg-[#0B0F17] text-white">
      <div className="flex h-[70px] shrink-0 items-center justify-between border-b border-[#1e232e] px-5">
        <Link
          href="/supplier"
          onClick={onClose}
          className="flex items-center gap-3 transition hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white shadow-md shadow-indigo-500/20">
            TM
          </div>

          <div>
            <h1 className="text-[15px] font-bold tracking-tight text-white">
              TradeMatchly
            </h1>
            <p className="text-[10px] font-medium text-slate-400">
              Supplier Portal
            </p>
          </div>
        </Link>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-[#1a202c] hover:text-white lg:hidden"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <nav className="flex-1 space-y-4 overflow-y-auto px-3 py-4">
        {menuSections.map((section, idx) => (
          <div key={section.title || `section-${idx}`} className="space-y-1">
            {section.title && (
              <p className="px-3 pb-1 pt-2 text-[10.5px] font-bold uppercase tracking-wider text-slate-400">
                {section.title}
              </p>
            )}

            <div className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;

                const isActive =
                  pathname === item.href ||
                  (item.href !== "/supplier" &&
                    pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] transition ${
                      isActive
                        ? "border-l-2 border-indigo-500 bg-[#182030] font-semibold text-white shadow-xs"
                        : "font-medium text-slate-300 hover:bg-[#141a26] hover:text-white"
                    }`}
                  >
                    <Icon
                      size={17}
                      className={
                        isActive
                          ? "shrink-0 text-indigo-400"
                          : "shrink-0 text-slate-400 group-hover:text-slate-200"
                      }
                    />

                    <span className="truncate">{item.name}</span>

                    {renderBadge(item.badge)}

                    {item.rightLabel && (
                      <span className="ml-auto rounded border border-indigo-800/40 bg-indigo-950/60 px-1.5 py-0.5 text-[10px] font-medium text-indigo-300">
                        {item.rightLabel}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        <div className="border-t border-[#1e232e] pt-3">
          <Link
            href="/supplier/profile"
            onClick={onClose}
            className="flex items-center gap-2.5 rounded-lg p-2 transition hover:bg-[#141a26]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-indigo-500/40 bg-indigo-600/30 text-indigo-300">
              <UserCircle size={20} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-white">
                Profile
              </p>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );

  return (
    <>
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[250px] flex-col border-r border-[#1e232e] bg-[#0B0F17] lg:flex">
        {navContent}
      </aside>

      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 animate-in bg-black/75 backdrop-blur-xs fade-in"
            onClick={onClose}
          />

          <aside className="fixed left-0 top-0 z-50 h-screen w-[270px] max-w-[85vw] animate-in border-r border-[#1e232e] shadow-2xl slide-in-from-left duration-200">
            {navContent}
          </aside>
        </div>
      )}
    </>
  );
}