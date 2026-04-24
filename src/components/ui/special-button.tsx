import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SpecialButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg";
  isActive?: boolean;
}

export function SpecialButton({ href, children, className, size = "default", isActive = true }: SpecialButtonProps) {
  return (
    <div className={cn("relative group inline-block", className)}>
      {/* Outer Glow */}
      <div className={cn(
        "absolute -inset-[1px] rounded-[1rem] bg-gradient-to-r from-[#F472C8] via-[#B89CFC] to-[#9B7EF8] transition-all duration-500",
        isActive 
          ? "opacity-40 blur-[8px] scale-100 group-hover:opacity-80 group-hover:blur-[12px]" 
          : "opacity-0 blur-[0px] scale-95"
      )}></div>
      
      {/* Solid Gradient Border */}
      <div className={cn(
        "absolute -inset-[3px] rounded-[1.125rem] bg-gradient-to-r from-[#F472C8] via-[#B89CFC] to-[#9B7EF8] transition-all duration-500",
        isActive 
          ? "opacity-100 scale-100" 
          : "opacity-0 scale-95"
      )}></div>
      
      <Button
        href={href}
        className={cn(
          "relative rounded-[1rem] bg-[#2A1D33] text-white hover:bg-[#1F1528] font-medium transition-all flex items-center justify-center m-[1px]",
          size === "default" && "px-5 py-4 text-[0.9375rem] md:px-6 md:py-6 md:text-[1.0625rem] gap-3 min-w-[11rem] md:min-w-[14rem] h-[2.75rem] md:h-[3.25rem]",
          size === "sm" && "px-4 py-2 text-sm gap-2 min-w-[8rem] h-10",
          size === "lg" && "px-8 py-8 text-lg gap-4 min-w-[16rem] h-14"
        )}
      >
        {children}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width={size === "sm" ? "14" : "18"} height={size === "sm" ? "14" : "18"} viewBox="0 0 24 24" className="opacity-90">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m0 0l-6-6m6 6l6-6"/>
        </svg> */}
      </Button>
    </div>
  );
}
