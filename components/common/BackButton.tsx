"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  label?: string;
  fallbackHref?: string;
  className?: string;
}

export default function BackButton({
  label = "Back",
  fallbackHref,
  className = "",
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else if (fallbackHref) {
      router.push(fallbackHref);
    } else {
      router.push("/supplier");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 hover:text-slate-900 transition ${className}`}
    >
      <ArrowLeft size={15} />
      <span>{label}</span>
    </button>
  );
}

