"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/use-mobile";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  viewportMargin?: string;
};

export function FadeIn({
  children,
  className,
  style,
  delay = 0,
  direction = "up",
  distance = 32,
  viewportMargin = "-100px",
}: FadeInProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const initial: Record<string, number> = { opacity: 0 };
  if (direction === "up") initial.y = distance;
  else if (direction === "down") initial.y = -distance;
  else if (direction === "left") initial.x = -distance;
  else if (direction === "right") initial.x = distance;

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{ duration: 1.0, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
