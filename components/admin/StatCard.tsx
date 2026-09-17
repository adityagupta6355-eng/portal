import {
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  subtitle?: string;
  positive?: boolean;
  icon?: React.ReactNode;
  borderColor?: string;
  className?: string;
}

export default function StatCard({
  title,
  value,
  change,
  subtitle,
  positive = true,
  icon,
  borderColor,
  className,
}: StatCardProps) {
  return (
    <div
      className={`rounded-xl border border-[#e6e6eb] bg-white p-5 shadow-sm ${
        borderColor || ""
      } ${className || ""}`}
    >

      <div className="flex items-start justify-between">

        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
            {title}
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#171827]">
            {value}
          </h2>
        </div>

        {icon && (
          <div className="rounded-lg bg-[#f1efff] p-2 text-[#6c5ce7]">
            {icon}
          </div>
        )}

      </div>

      <div className="mt-3 flex items-center gap-2">

        {change && (
          <span
            className={`flex items-center gap-0.5 text-[11px] font-semibold ${
              positive ? "text-emerald-500" : "text-red-500"
            }`}
          >
            {positive ? (
              <ArrowUpRight size={13} />
            ) : (
              <ArrowDownRight size={13} />
            )}

            {change}
          </span>
        )}

        {subtitle && (
          <span className="text-[10px] text-gray-400">
            {subtitle}
          </span>
        )}

      </div>
    </div>
  );
}