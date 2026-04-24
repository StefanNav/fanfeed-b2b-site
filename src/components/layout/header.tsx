"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, SITE_CONFIG, FOOTER_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { SpecialButton } from "@/components/ui/special-button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const pathname = usePathname();
  
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isTransitionReady, setIsTransitionReady] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setPastHero(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update sliding pill position
  useEffect(() => {
    // Small timeout to ensure fonts and layout have settled after mount/route change
    const updateIndicator = () => {
      const activeIndex = NAV_ITEMS.findIndex(item => pathname === item.href);
      if (activeIndex !== -1 && navRefs.current[activeIndex]) {
        const el = navRefs.current[activeIndex];
        setIndicatorStyle({
          left: el?.offsetLeft || 0,
          width: el?.offsetWidth || 0,
          opacity: 1,
        });
        
        // Enable transitions only after the initial position is locked in
        if (!isTransitionReady) {
          requestAnimationFrame(() => {
            setTimeout(() => setIsTransitionReady(true), 50);
          });
        }
      } else {
        setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
      }
    };
    
    updateIndicator();
    // Re-check shortly after mount just in case of late font loading shifting widths
    const timer = setTimeout(updateIndicator, 50);
    window.addEventListener('resize', updateIndicator);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
    <header
      className="fixed top-0 z-50 w-full"
      role="banner"
      style={{ animation: "hero-badge-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) both" }}
    >
      {/* Background gradient that fades out */}
      <div
        className={cn(
          "absolute inset-0 h-[120px] pointer-events-none transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0",
          "bg-gradient-to-b from-background via-background/90 to-transparent"
        )}
        aria-hidden="true"
      />

      <nav
        className={cn(
          "relative z-10 mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8 transition-all duration-300",
          scrolled ? "mt-0" : "mt-2"
        )}
        aria-label="Primary navigation"
      >
        <div className="w-40">
          <Link
            href="/"
            className="flex items-center"
            aria-label="FanFeed home"
          >
            <Image
              src="/svg/fanfeed-icon.svg"
              alt="FanFeed"
              width={30}
              height={30}
              priority
            />
          </Link>
        </div>

        <ul className="hidden items-center gap-1 md:flex relative" role="list">
          {/* Sliding Pill Indicator */}
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2 h-[36px] rounded-full bg-[#413149]/10",
              isTransitionReady ? "transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" : "transition-none"
            )}
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              opacity: indicatorStyle.opacity,
            }}
            aria-hidden="true"
          />
          {NAV_ITEMS.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <li 
                key={item.href} 
                className="relative z-10"
                ref={(el) => { navRefs.current[index] = el; }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-[#413149]"
                      : "text-muted hover:text-foreground hover:bg-surface/50"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex w-40 justify-end">
          <SpecialButton
            href="/contact"
            size="sm"
            isActive={pastHero}
          >
            Book a demo
          </SpecialButton>
        </div>

        <button
          type="button"
          className="rounded-xl p-2 text-muted hover:bg-surface md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>
    </header>

    <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-[999] flex flex-col bg-white md:hidden"
            role="dialog"
            aria-label="Mobile navigation"
          >
            {/* Top bar — logo + close (mirrors nav positioning) */}
            <div className={cn(
              "flex h-[72px] shrink-0 items-center justify-between px-6 transition-all duration-300",
              scrolled ? "mt-0" : "mt-2"
            )}>
              <Link
                href="/"
                className="flex items-center"
                aria-label="FanFeed home"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src="/svg/fanfeed-logo.svg"
                  alt="FanFeed"
                  width={190}
                  height={44}
                  priority
                />
              </Link>
              <button
                type="button"
                className="rounded-xl p-2 text-muted hover:bg-surface"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8">
              <ul className="space-y-2" role="list">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.35, ease: "easeOut" }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-2xl px-5 py-4 text-3xl font-semibold tracking-tight transition-colors",
                        pathname === item.href
                          ? "bg-[#413149]/5 text-[#413149]"
                          : "text-[#413149]/70 hover:bg-surface hover:text-[#413149]"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * NAV_ITEMS.length, duration: 0.35, ease: "easeOut" }}
                  className="pt-4 px-5"
                >
                  <SpecialButton
                    href="/contact"
                    size="default"
                    className="w-full justify-center text-lg"
                  >
                    Book a demo
                  </SpecialButton>
                </motion.li>
              </ul>
            </nav>

            {/* Footer area */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="shrink-0 border-t border-border/40 px-8 py-6"
            >
              <p className="text-sm leading-relaxed text-muted max-w-xs">
                {SITE_CONFIG.description}
              </p>

              <div className="mt-5 flex items-center gap-6">
                <div className="flex gap-3">
                  <a
                    href={SITE_CONFIG.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#413149]/5 text-muted transition-colors hover:text-foreground"
                    aria-label="FanFeed on X"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#413149]/5 text-muted transition-colors hover:text-foreground"
                    aria-label="FanFeed on Instagram"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#413149]/5 text-muted transition-colors hover:text-foreground"
                    aria-label="FanFeed on LinkedIn"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <span className="text-border">|</span>
                <div className="flex gap-4">
                  {FOOTER_LINKS.legal.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-xs text-muted transition-colors hover:text-foreground"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <a
                href="mailto:support@fanfeed.ai"
                className="mt-4 block text-xs text-muted transition-colors hover:text-foreground"
              >
                support@fanfeed.ai
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} FanFeed. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        )}
    </AnimatePresence>
    </>
  );
}
