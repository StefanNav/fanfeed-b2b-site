import { cn } from "@/lib/utils";

export function RetroGrid({
  className,
  angle = 30,
}: {
  className?: string;
  angle?: number;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      style={{ perspective: "200px" }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{ transform: `rotateX(${angle}deg)` }}
      >
        <div
          className="animate-grid"
          style={{
            position: "absolute",
            inset: 0,
            width: "100vw",
            height: "300vh",
            transformOrigin: "10% 0 0",
            backgroundRepeat: "repeat",
            backgroundSize: "30px 30px",
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.1) 0.5px, transparent 0), linear-gradient(to bottom, rgba(0,0,0,0.1) 0.5px, transparent 0)",
          }}
        />
      </div>

      {/* Background Gradient — fades the distant horizon */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, var(--color-background) 0%, transparent 90%)",
        }}
      />
    </div>
  );
}
