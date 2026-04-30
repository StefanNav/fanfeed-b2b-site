"use client";

import { useEffect, useRef } from "react";

const RX = 7;                 // border-radius (rounded-[7px])
const ACTIVE_DURATION = 3.5;  // seconds each beam is visible (slower head)
const FADE_PORTION = 0.18;    // last 18% of active window is fade-out
const BLOOM_PAD = 60;         // px padding around each box so glow can bleed out
const COOLDOWN_MS = 500;      // min gap between consecutive triggers per box

const boxes = [
  { w: 76,  h: 76,  top: "22%", left: "10%", opacity: 0.6,  delay: "0s" },
  { w: 138, h: 108, top: "11%", left: "26%", opacity: 0.7,  delay: "-1.8s" },
  { w: 42,  h: 42,  top: "15%", left: "37%", opacity: 0.55, delay: "-4.2s" },
  { w: 72,  h: 72,  top: "12%", left: "70%", opacity: 0.6,  delay: "-2.6s" },
  { w: 94,  h: 92,  top: "27%", left: "86%", opacity: 0.5,  delay: "-5.1s" },
  { w: 210, h: 128, top: "37%", left: "21%", opacity: 0.5,  delay: "-1s" },
  { w: 172, h: 122, top: "34%", left: "72%", opacity: 0.6,  delay: "-3.4s" },
  { w: 34,  h: 34,  top: "49%", left: "70%", opacity: 0.7,  delay: "-6s" },
  { w: 134, h: 116, top: "59%", left: "14%", opacity: 0.55, delay: "-2.2s" },
  { w: 152, h: 108, top: "73%", left: "28%", opacity: 0.45, delay: "-4.8s" },
  { w: 128, h: 114, top: "72%", left: "70%", opacity: 0.5,  delay: "-1.4s" },
  { w: 104, h: 118, top: "66%", left: "84%", opacity: 0.55, delay: "-3.8s" },
  { w: 60,  h: 60,  top: "85%", left: "63%", opacity: 0.45, delay: "-5.8s" },
];

/** Trace a rounded-rect perimeter as ~1px-spaced points (CSS px). */
function perimeterPoints(w: number, h: number, r: number) {
  const pts: { x: number; y: number }[] = [];
  const step = 1;
  const rr = Math.min(r, w / 2, h / 2);
  // top edge
  for (let x = rr; x < w - rr; x += step) pts.push({ x, y: 0 });
  // top-right corner
  for (let a = -Math.PI / 2; a < 0; a += step / rr)
    pts.push({ x: w - rr + Math.cos(a) * rr, y: rr + Math.sin(a) * rr });
  // right edge
  for (let y = rr; y < h - rr; y += step) pts.push({ x: w, y });
  // bottom-right corner
  for (let a = 0; a < Math.PI / 2; a += step / rr)
    pts.push({ x: w - rr + Math.cos(a) * rr, y: h - rr + Math.sin(a) * rr });
  // bottom edge
  for (let x = w - rr; x > rr; x -= step) pts.push({ x, y: h });
  // bottom-left corner
  for (let a = Math.PI / 2; a < Math.PI; a += step / rr)
    pts.push({ x: rr + Math.cos(a) * rr, y: h - rr + Math.sin(a) * rr });
  // left edge
  for (let y = h - rr; y > rr; y -= step) pts.push({ x: 0, y });
  // top-left corner
  for (let a = Math.PI; a < (3 * Math.PI) / 2; a += step / rr)
    pts.push({ x: rr + Math.cos(a) * rr, y: rr + Math.sin(a) * rr });
  return pts;
}

export function CaptureFieldOverlay() {
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
  const borderRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const TAIL_MAX = isMobile ? 220 : 400;

    type BoxState = {
      canvas: HTMLCanvasElement;
      ctx: CanvasRenderingContext2D;
      borderEl: HTMLSpanElement;
      pts: { x: number; y: number }[];
      cssW: number;
      cssH: number;
      triggerTime: number | null;
      lastTriggerTime: number;
      insideLastFrame: boolean;
      ro: ResizeObserver;
    };

    const states: BoxState[] = [];

    canvasRefs.current.forEach((canvas, i) => {
      const borderEl = borderRefs.current[i];
      if (!canvas || !borderEl) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const state: BoxState = {
        canvas,
        ctx,
        borderEl,
        pts: [],
        cssW: 0,
        cssH: 0,
        triggerTime: null,
        lastTriggerTime: -Infinity,
        insideLastFrame: false,
        ro: null as unknown as ResizeObserver,
      };

      const resize = () => {
        const rect = canvas.getBoundingClientRect();
        state.cssW = rect.width;
        state.cssH = rect.height;
        canvas.width = Math.round(rect.width * dpr);
        canvas.height = Math.round(rect.height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const innerW = rect.width - BLOOM_PAD * 2;
        const innerH = rect.height - BLOOM_PAD * 2;
        const inner = perimeterPoints(innerW, innerH, RX);
        state.pts = inner.map((p) => ({ x: p.x + BLOOM_PAD, y: p.y + BLOOM_PAD }));
      };
      resize();

      const ro = new ResizeObserver(resize);
      ro.observe(canvas);
      state.ro = ro;
      states.push(state);
    });

    // Hover detection — global mousemove. Compute rect on every move for
    // robustness against layout shifts (cheap: only ~13 elements).
    const onMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const x = e.clientX;
      const y = e.clientY;
      for (let i = 0; i < states.length; i++) {
        const s = states[i];
        const r = s.borderEl.getBoundingClientRect();
        const inside = x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
        if (inside && !s.insideLastFrame) {
          // Don't retrigger while the current beam is still running.
          // Also enforce a small cooldown after completion to avoid spam on rapid re-entry.
          const beamRunning = s.triggerTime !== null;
          if (!beamRunning && now - s.lastTriggerTime >= COOLDOWN_MS) {
            s.triggerTime = now;
            s.lastTriggerTime = now;
          }
        }
        s.insideLastFrame = inside;
      }
    };

    let rafId = 0;

    const tick = (now: number) => {
      for (const s of states) {
        const { ctx, pts, cssW, cssH, triggerTime } = s;
        if (pts.length === 0) continue;

        // Inactive: nothing to draw (canvas already cleared from last active frame)
        if (triggerTime === null) continue;

        const localSec = (now - triggerTime) / 1000;
        // Beam finished — clear once and mark inactive
        if (localSec > ACTIVE_DURATION) {
          ctx.clearRect(0, 0, cssW, cssH);
          s.triggerTime = null;
          continue;
        }

        ctx.clearRect(0, 0, cssW, cssH);

        const t = localSec / ACTIVE_DURATION; // 0..1
        let fade = 1;
        if (t < 0.03) fade = t / 0.03;
        else if (t > 1 - FADE_PORTION) fade = (1 - t) / FADE_PORTION;
        fade = Math.max(0, Math.min(1, fade));

        const total = pts.length;
        if (total < 8) continue; // path too small to draw a beam
        const tail = Math.min(TAIL_MAX, Math.max(1, Math.floor(total * 0.55)));
        const head = ((Math.floor(t * total) % total) + total) % total;

        // Tail particles (white, additive blend)
        ctx.globalCompositeOperation = "lighter";
        for (let i = 0; i < tail; i++) {
          const idx = ((head - i) % total + total) % total;
          const p = pts[idx];
          if (!p) continue;
          // Softer falloff (1.3) keeps the tail visible further back
          const alpha = Math.pow((tail - i) / tail, 1.3) * 0.75 * fade;
          const sz = i < 3 ? 2 : 1.25;
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.fillRect(p.x - sz / 2, p.y - sz / 2, sz, sz);
        }

        // Head bloom: white core + lavender + purple wash
        const hp = pts[head];
        if (!hp) {
          ctx.globalCompositeOperation = "source-over";
          continue;
        }

        const g1 = ctx.createRadialGradient(hp.x, hp.y, 0, hp.x, hp.y, 12);
        g1.addColorStop(0, `rgba(255,255,255,${0.85 * fade})`);
        g1.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g1;
        ctx.beginPath();
        ctx.arc(hp.x, hp.y, 12, 0, Math.PI * 2);
        ctx.fill();

        const g2 = ctx.createRadialGradient(hp.x, hp.y, 0, hp.x, hp.y, 18);
        g2.addColorStop(0, `rgba(196,181,253,${0.22 * fade})`);
        g2.addColorStop(1, "rgba(196,181,253,0)");
        ctx.fillStyle = g2;
        ctx.beginPath();
        ctx.arc(hp.x, hp.y, 18, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalCompositeOperation = "source-over";
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      } else if (rafId === 0) {
        // Reset hover edge-detection so we don't false-trigger on resume
        states.forEach((s) => {
          s.insideLastFrame = false;
        });
        rafId = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisibility);
      states.forEach((s) => s.ro.disconnect());
    };
  }, []);

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
      {boxes.map((box, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            // Larger wrapper sized to box + bloom padding, shifted so the
            // visible box still sits at the original (box.top, box.left).
            top: `calc(${box.top} - ${BLOOM_PAD}px)`,
            left: `calc(${box.left} - ${BLOOM_PAD}px)`,
            width: box.w + BLOOM_PAD * 2,
            height: box.h + BLOOM_PAD * 2,
          }}
        >
          {/* Canvas fills the entire wrapper — bloom can bleed BLOOM_PAD outside box */}
          <canvas
            ref={(el) => {
              canvasRefs.current[i] = el;
            }}
            className="absolute inset-0"
            style={{ width: "100%", height: "100%" }}
          />

          {/* Static dimmed border with soft pulse — inset by BLOOM_PAD to match the original box position.
              This element is the hit-test target for cursor hover detection. */}
          <span
            ref={(el) => {
              borderRefs.current[i] = el;
            }}
            className="absolute rounded-[7px] capture-pulse"
            style={{
              top: BLOOM_PAD,
              left: BLOOM_PAD,
              width: box.w,
              height: box.h,
              border: "1px solid rgba(196, 181, 253, 0.45)",
              boxShadow:
                "0 0 20px rgba(139,92,246,0.06), inset 0 0 24px rgba(255,255,255,0.25)",
              "--box-opacity": box.opacity,
              "--delay": box.delay,
            } as React.CSSProperties}
          />
        </div>
      ))}
    </div>
  );
}
