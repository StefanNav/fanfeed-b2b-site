"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface DotPatternProps {
  className?: string;
  dotSize?: number;
  gap?: number;
  glowSize?: number;
  dotColor?: [number, number, number];
  glowColor?: [number, number, number];
  // Backward compatibility with previous API
  width?: any;
  height?: any;
  x?: any;
  y?: any;
  cx?: any;
  cy?: any;
  cr?: any;
  [key: string]: any;
}

interface Dot {
  bx: number;
  by: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function DotPattern({
  className,
  dotSize = 1.5,
  gap = 24,
  glowSize = 150,
  dotColor = [107, 101, 128], // muted (#6b6580)
  glowColor = [134, 25, 143], // dark plum (fuchsia-800)
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  ...props
}: DotPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = -1000;
    let mouseY = -1000;
    let time = 0;
    let dots: Dot[] = [];

    const initDots = (canvasWidth: number, canvasHeight: number) => {
      dots = [];
      const cols = Math.floor(canvasWidth / gap) + 2;
      const rows = Math.floor(canvasHeight / gap) + 2;
      const offsetX = (canvasWidth % gap) / 2;
      const offsetY = (canvasHeight % gap) / 2;

      for (let i = -1; i <= cols; i++) {
        for (let j = -1; j <= rows; j++) {
          const dx = i * gap + offsetX;
          const dy = j * gap + offsetY;
          dots.push({ bx: dx, by: dy, x: dx, y: dy, vx: 0, vy: 0 });
        }
      }
    };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = parent.clientWidth * dpr;
        canvas.height = parent.clientHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${parent.clientWidth}px`;
        canvas.style.height = `${parent.clientHeight}px`;
        initDots(parent.clientWidth, parent.clientHeight);
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    const draw = () => {
      const parentWidth = canvas.parentElement?.clientWidth || canvas.width;
      const parentHeight = canvas.parentElement?.clientHeight || canvas.height;

      ctx.clearRect(0, 0, parentWidth, parentHeight);

      dots.forEach((dot) => {
        const dxMouse = mouseX - dot.x;
        const dyMouse = mouseY - dot.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < glowSize) {
          const force = (glowSize - distMouse) / glowSize;
          const angle = Math.atan2(dyMouse, dxMouse);
          dot.vx -= Math.cos(angle) * force * 0.15;
          dot.vy -= Math.sin(angle) * force * 0.15;
        }

        const dxBase = dot.bx - dot.x;
        const dyBase = dot.by - dot.y;

        dot.vx += dxBase * 0.08;
        dot.vy += dyBase * 0.08;

        dot.vx *= 0.75;
        dot.vy *= 0.75;

        dot.x += dot.vx;
        dot.y += dot.vy;

        const distance = Math.sqrt(
          (mouseX - dot.bx) * (mouseX - dot.bx) +
            (mouseY - dot.by) * (mouseY - dot.by)
        );

        const wave =
          Math.sin(dot.bx * 0.01 + dot.by * 0.01 + time * 0.05) * 0.5 + 0.5;

        let size = dotSize;
        let opacity = 0.2 + wave * 0.3;

        if (distance < glowSize) {
          const intensity = Math.pow(1 - distance / glowSize, 2);
          size += intensity * 1.0;
          opacity += intensity * 0.5;

          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dotSize * 4 * intensity, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${glowColor[0]}, ${glowColor[1]}, ${
            glowColor[2]
          }, ${intensity * 0.1})`;
          ctx.fill();
        }

        opacity = Math.min(1, opacity);

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor[0]}, ${dotColor[1]}, ${dotColor[2]}, ${opacity})`;
        ctx.fill();
      });

      time += 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotSize, gap, glowSize, dotColor, glowColor]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 pointer-events-none", className)}
      aria-hidden="true"
      {...props}
    />
  );
}
