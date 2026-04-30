import { Button } from "@/components/ui/button";
import { CaptureFieldOverlay } from "@/components/ui/capture-field";
import { RetroGrid } from "@/components/ui/retro-grid";
import { cn } from "@/lib/utils";
import { SectionHeader } from "../ui/section";
import { SpecialButton } from "../ui/special-button";

type CTASectionProps = {
  headline: string;
  body?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

export function CTASection({
  headline,
  body,
  primaryCta,
  secondaryCta,
  className,
}: CTASectionProps) {
  return (
    <section className={cn("relative overflow-hidden py-24 md:py-32 lg:py-32", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,92,252,0.1),transparent_70%)] z-0" />
      <CaptureFieldOverlay />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* <video
          ref={null}
          src={'/mp4/gift.mp4'}
          preload="metadata"
          muted
          loop
          playsInline
          autoPlay
          className="mx-auto -mt-24 w-72 h-72 hue-rotate-240 brightness-70 object-contain transition-transform duration-700 group-hover:scale-105"
        /> */}
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeader
            title={headline}
            description={body}
          />
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <SpecialButton href={primaryCta.href} size="default">
              {primaryCta.label}
            </SpecialButton>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
