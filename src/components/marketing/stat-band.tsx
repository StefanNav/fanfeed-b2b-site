export function StatBand() {
  const stats = [
    { value: "20%", label: "Growth in fan engagement" },
    { value: "$8.5k", label: "Reduced cost to reach new fans" },
    { value: "4X", label: "Faster time to launch campaigns" },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-800/50 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md transition-all hover:bg-slate-800/80">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-teal-500/5 pointer-events-none" />
      
      <div className="relative z-10 grid gap-8 sm:grid-cols-3 sm:divide-x sm:divide-slate-700">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium text-slate-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
