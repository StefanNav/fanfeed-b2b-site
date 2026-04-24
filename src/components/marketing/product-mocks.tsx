import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Users, Star, Activity } from "lucide-react";

export function StatCard({
  label,
  value,
  trend,
  trendValue,
  className,
}: {
  label: string;
  value: string;
  trend?: "up" | "down";
  trendValue?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]",
        className
      )}
    >
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <div className="mt-2 flex items-end gap-2">
        <span className="text-2xl font-semibold tracking-tight">{value}</span>
        {trend && trendValue && (
          <span
            className={cn(
              "mb-0.5 flex items-center gap-0.5 text-xs font-semibold",
              trend === "up" ? "text-success" : "text-accent"
            )}
          >
            {trend === "up" ? (
              <TrendingUp className="h-3 w-3" aria-hidden="true" />
            ) : (
              <TrendingDown className="h-3 w-3" aria-hidden="true" />
            )}
            {trendValue}
          </span>
        )}
      </div>
    </div>
  );
}

export function ProfileCard({
  name,
  role,
  score,
  className,
}: {
  name: string;
  role: string;
  score: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3.5 rounded-2xl border border-white/40 bg-white/80 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]",
        className
      )}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-500 shadow-inner">
        <Users className="h-5 w-5 text-white" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
      <div className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 shadow-sm border border-blue-100">
        <Star className="h-3.5 w-3.5 text-blue-500 fill-blue-500" aria-hidden="true" />
        <span className="text-xs font-semibold text-blue-700">{score}</span>
      </div>
    </div>
  );
}

export function MiniBarChart({ className }: { className?: string }) {
  const bars = [40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 65];
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]",
        className
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-medium text-muted-foreground">
          Fan engagement
        </p>
        <Activity className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
      </div>
      <div className="flex items-end gap-1.5" style={{ height: 64 }}>
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600 to-teal-500 shadow-sm transition-all hover:opacity-100"
            style={{ height: `${h}%`, opacity: 0.6 + (h / 250) }}
          />
        ))}
      </div>
    </div>
  );
}

export function GaugeCard({
  label,
  value,
  className,
}: {
  label: string;
  value: number;
  className?: string;
}) {
  const circumference = 2 * Math.PI * 36;
  const dashOffset = circumference - (value / 100) * circumference;

  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-2xl border border-white/40 bg-white/80 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]",
        className
      )}
    >
      <div className="relative">
        <svg width="100" height="100" viewBox="0 0 100 100" aria-hidden="true" className="drop-shadow-sm">
          <defs>
            <linearGradient id="gauge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-slate-100"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="url(#gauge-gradient)"
            strokeWidth="8"
            strokeDasharray={circumference * (42/36)}
            strokeDashoffset={dashOffset * (42/36)}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">{value}%</span>
        </div>
      </div>
      <p className="mt-3 text-sm font-semibold text-slate-600">{label}</p>
    </div>
  );
}

export function IntegrationGrid({ className }: { className?: string }) {
  const integrations = [
    { name: "Ticketmaster", color: "bg-blue-100 text-blue-600" },
    { name: "Salesforce", color: "bg-sky-100 text-sky-600" },
    { name: "Mailchimp", color: "bg-yellow-100 text-yellow-600" },
    { name: "Shopify", color: "bg-green-100 text-green-600" },
    { name: "HubSpot", color: "bg-orange-100 text-orange-600" },
    { name: "Stripe", color: "bg-purple-200/50 text-purple-900" },
  ];

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]",
        className
      )}
    >
      <p className="mb-3 text-xs font-medium text-muted-foreground">
        Connected sources
      </p>
      <div className="grid grid-cols-3 gap-2">
        {integrations.map((item) => (
          <div
            key={item.name}
            className={cn(
              "flex items-center justify-center rounded-xl px-2 py-2.5 text-[11px] font-semibold shadow-sm ring-1 ring-inset ring-white/20 transition-transform hover:scale-105",
              item.color
            )}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ActiveCustomersCard({ className }: { className?: string }) {
  const fans = [
    { name: "Sarah Mitchell", segment: "Superfan" },
    { name: "James Rodriguez", segment: "Season Holder" },
    { name: "Emily Chen", segment: "VIP" },
    { name: "Marcus Johnson", segment: "Emerging" },
  ];

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]",
        className
      )}
    >
      <p className="mb-4 text-xs font-medium text-muted-foreground">
        Active fan profiles
      </p>
      <div className="space-y-4">
        {fans.map((fan) => (
          <div key={fan.name} className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-teal-100 text-sm font-semibold text-blue-700 shadow-sm border border-blue-200/50">
              {fan.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-800">{fan.name}</p>
              <p className="text-xs font-medium text-slate-500">{fan.segment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
