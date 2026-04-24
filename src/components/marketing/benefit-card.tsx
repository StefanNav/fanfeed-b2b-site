"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type BenefitCardProps = {
  iconSrc: string;
  title: string;
  description: string;
  illustration?: React.ReactNode;
  className?: string;
};

export function BenefitCard({
  iconSrc,
  title,
  description,
  illustration,
  className,
}: BenefitCardProps) {
  return (
    <div
      className={cn(
        "group relative flex z-2 h-full md:h-[240px] flex-col justify-end overflow-hidden rounded-xl md:rounded-2xl bg-white px-4 pt-4 pb-3 md:px-7 md:pt-7 md:pb-5 border border-transparent transition-colors duration-300 hover:border-border",
        className
      )}
    >
      {illustration && (
        <div className="pointer-events-none absolute top-0 -right-18 w-[90%] h-[70%] z-0 opacity-100 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 hidden md:block">
          {illustration}
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-white via-white/50 to-transparent hidden md:block" />
      <div className="relative z-10 flex flex-col flex-1 md:flex-initial md:block">
        <Image src={iconSrc} alt="" width={24} height={24} className="mb-auto min-h-fit md:mb-3 h-8 w-8 md:h-9 md:w-9 transition-opacity duration-300 pb-2 md:pb-0" aria-hidden="true" />
        <h3 className="text-base md:text-xl font-semibold leading-snug">{title}</h3>
        <div className="relative mt-1.5 md:mt-2.5 overflow-hidden md:transition-[max-height] md:duration-500 md:ease-[cubic-bezier(0.16,1,0.3,1)] md:max-h-[2.625rem] md:group-hover:max-h-24">
          <p className="text-xs md:text-lg leading-relaxed text-muted">
            {description}
          </p>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/80 to-transparent transition-opacity duration-500 group-hover:opacity-0 hidden md:block" />
        </div>
      </div>
    </div>
  );
}
