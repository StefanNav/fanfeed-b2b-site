"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FaqItem[];
  defaultOpen?: number;
};

function FaqRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "text-lg font-semibold transition-colors duration-200",
            isOpen ? "text-brand" : "text-foreground"
          )}
        >
          {item.question}
        </span>
        <span
          className={cn(
            "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
            isOpen
              ? "border-brand/30 bg-brand-muted text-brand rotate-45 opacity-0"
              : "border-border bg-transparent text-muted opacity-100"
          )}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 12 12"
            fill="none"
            className="h-3 w-3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="6" y1="1" x2="6" y2="11" />
            <line x1="1" y1="6" x2="11" y2="6" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-6 text-sm leading-relaxed text-muted">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqAccordion({ items, defaultOpen = 0 }: Props) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpen);

  const toggle = (i: number) => {
    setOpenIndex((prev) => {
      if (prev === i) {
        if (typeof window !== "undefined" && window.innerWidth >= 1024) {
          return prev;
        }
        return -1;
      }
      return i;
    });
  };

  return (
    <dl className="mx-auto mt-14 max-w-3xl">
      {items.map((faq, i) => (
        <FaqRow
          key={faq.question}
          item={faq}
          isOpen={openIndex === i}
          onToggle={() => toggle(i)}
        />
      ))}
    </dl>
  );
}
