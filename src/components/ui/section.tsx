"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/use-mobile";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "surface" | "gradient" | "lavender" | "peach";
};

export function Section({
  children,
  className,
  id,
  background = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden py-24 md:py-32 lg:py-40",
        background === "surface" && "bg-surface",
        background === "gradient" &&
          "bg-gradient-to-b from-brand-muted/40 via-cream to-background",
        background === "lavender" &&
          "bg-gradient-to-b from-lavender/40 via-background to-background",
        background === "peach" &&
          "bg-gradient-to-b from-peach/50 via-cream/30 to-background",
        className
      )}
    >
      {/* Decorative Background Elements for lavender/peach */}
      {background === "lavender" && (
        <>
          <div className="pointer-events-none absolute -top-1/2 right-0 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-lavender/40 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/3 rounded-full bg-peach/40 blur-[120px]" />
        </>
      )}
      {background === "peach" && (
        <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-peach/20 blur-[120px]" />
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

export type SectionHeaderProps = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  eyebrow?: string | React.ReactNode;
  eyebrowIcon?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  align?: "center" | "left" | "row";
  children?: React.ReactNode;
  animate?: boolean;
};

export function SectionHeader({
  title,
  description,
  eyebrow,
  eyebrowIcon,
  className,
  titleClassName,
  descriptionClassName,
  align = "center",
  children,
  animate: animateProp = false,
}: SectionHeaderProps) {
  const isMobile = useIsMobile();
  const animate = animateProp && !isMobile;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const containerClassName = cn(
    align === "center" && "mx-auto max-w-3xl text-center",
    align === "left" && "max-w-3xl",
    align === "row" &&
      "flex flex-col justify-between gap-8 lg:flex-row lg:items-end",
    className
  );

  const inner = (
    <>
      <div className={cn(align === "row" && "max-w-2xl")}>
        {eyebrow && (
          <motion.div variants={animate ? itemVariants : undefined}>
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-muted px-3 py-1.5 text-[11px] font-bold uppercase tracking-[2px] text-brand",
                "mb-6"
              )}
            >
              {eyebrowIcon}
              {eyebrow}
            </span>
          </motion.div>
        )}
        <motion.div variants={animate ? itemVariants : undefined}>
          <h2
            className={cn(
              "text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.55rem] text-balance",
              titleClassName
            )}
          >
            {title}
          </h2>
        </motion.div>
      </div>

      {align === "row" ? (
        <div className="flex flex-col items-start lg:items-end gap-3 min-w-0 max-w-md">
          {description && (
            <motion.div variants={animate ? itemVariants : undefined}>
              <p
                className={cn(
                  "text-lg leading-relaxed text-muted md:text-xl lg:pb-2 lg:text-right",
                  descriptionClassName
                )}
              >
                {description}
              </p>
            </motion.div>
          )}
          {children && (
            <motion.div variants={animate ? itemVariants : undefined}>{children}</motion.div>
          )}
        </div>
      ) : (
        description && (
          <motion.div variants={animate ? itemVariants : undefined}>
            <p
              className={cn(
                "mt-6 text-lg leading-relaxed text-muted md:text-xl",
                descriptionClassName
              )}
            >
              {description}
            </p>
          </motion.div>
        )
      )}
    </>
  );

  if (animate) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className={containerClassName}
      >
        {inner}
      </motion.div>
    );
  }

  return <div className={containerClassName}>{inner}</div>;
}
