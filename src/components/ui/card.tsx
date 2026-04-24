import Image from "next/image";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { HoverPlayingVideo } from "./hover-playing-video";

type CardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
};

export function Card({
  title,
  description,
  icon: Icon,
  iconSrc,
  videoSrc,
  className,
}: {
  title: string;
  description: React.ReactNode;
  icon?: React.ElementType;
  iconSrc?: string;
  videoSrc?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group rounded-2xl bg-white p-7",
        className
      )}
    >
      {videoSrc && <HoverPlayingVideo src={videoSrc} />}
      {iconSrc && (
        <div className="mb-auto">
          <Image src={iconSrc} alt="" width={24} height={24} className="h-6 w-6" aria-hidden="true" />
        </div>
      )}
      {!iconSrc && Icon && (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#413149]/10 text-[#413149] transition-colors group-hover:bg-[#413149]/20">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
      )}
      <h3 className="text-xl font-semibold leading-snug">{title}</h3>
      <div className="mt-2.5 text-lg leading-relaxed text-muted">{description}</div>
    </div>
  );
}

type FeatureCardProps = {
  icon: React.ElementType;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-border/60 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md",
        className
      )}
    >
      {Icon && (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 text-white shadow-inner">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
      )}
      <h3 className="text-[17px] font-bold leading-snug text-slate-800 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{description}</p>
    </div>
  );
}

type StepCardProps = {
  step: number;
  title: string;
  description: string;
};

export function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="relative flex gap-5 rounded-2xl border border-border/60 bg-white p-6 shadow-sm">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
        {step}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </div>
  );
}
