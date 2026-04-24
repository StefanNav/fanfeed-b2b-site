import { MessageSquare } from "lucide-react";
import { ContactForm } from "./contact-form";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export function ContactContent() {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[800px] w-[1000px] -translate-x-1/2 rounded-full bg-lavender/30 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 right-0 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-peach/30 blur-[100px]" />

      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
            {/* Left Column — Copy */}
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg lg:pt-8">
              <div
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-muted px-3 py-1.5 text-[11px] font-bold uppercase tracking-[2px] text-brand"
                style={{ animation: `hero-fade-in 0.8s ${EASE} both` }}
              >
                <MessageSquare className="h-3.5 w-3.5" />
                Contact Us
              </div>

              <h1
                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.1]"
                style={{ animation: `hero-fade-in 0.8s ${EASE} 0.1s both` }}
              >
                Let&apos;s talk about your{" "}
                <span className="text-brand">fan stack</span>
              </h1>

              <p
                className="mt-6 text-lg leading-relaxed text-muted sm:text-xl"
                style={{ animation: `hero-fade-in 0.8s ${EASE} 0.2s both` }}
              >
     Tell us what you are working through. Whether it is messy fan data, a clunky workflow, or a tool your team has outgrown, we are happy to dig in.
              </p>

              <p
                className="mt-6 text-sm text-muted"
                style={{ animation: `hero-fade-in 0.8s ${EASE} 0.25s both` }}
              >
                Or email us directly at{" "}
                <a href="mailto:support@fanfeed.ai" className="font-medium text-brand hover:underline">
                  support@fanfeed.ai
                </a>
              </p>
            </div>

            {/* Right Column — Form */}
            <div
              className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
              style={{ animation: `hero-fade-in 0.8s ${EASE} 0.3s both` }}
            >
              <div className="overflow-hidden md:rounded-[2rem] md:border md:border-border md:bg-white md:shadow-xl md:shadow-brand-muted/20">
                <div className="bg-gradient-to-br from-transparent md:from-brand-muted/30 md:via-white to-transparent p-0 sm:p-10">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
