import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "lg";
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
  external,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold rounded-[1rem] transition-all duration-200 cursor-pointer",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    size === "default" && "px-6 py-2.5 text-sm",
    size === "lg" && "px-8 py-3.5 text-[15px]",
    variant === "primary" &&
      "bg-brand text-white hover:bg-brand-dark shadow-sm hover:shadow-md hover:shadow-brand/20",
    variant === "secondary" &&
      "bg-foreground text-white hover:bg-foreground/90 shadow-sm",
    variant === "outline" &&
      "border border-border text-foreground hover:bg-white hover:border-muted-foreground/30 hover:shadow-sm",
    variant === "ghost" &&
      "text-brand hover:bg-brand-muted/40",
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
