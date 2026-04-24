"use client";

import { useEffect, useRef } from "react";

export function HoverPlayingVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Find the closest parent with the 'group' class to detect hover on the whole card
    const parentCard = video.closest(".group");
    if (!parentCard) return;

    const playVideo = () => video.play().catch(() => {});
    const pauseVideo = () => video.pause();

    parentCard.addEventListener("mouseenter", playVideo);
    parentCard.addEventListener("mouseleave", pauseVideo);

    return () => {
      parentCard.removeEventListener("mouseenter", playVideo);
      parentCard.removeEventListener("mouseleave", pauseVideo);
    };
  }, []);

  return (
    <div className="mb-6 aspect-video w-full overflow-hidden rounded-xl bg-surface border border-border/40">
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        muted
        loop
        playsInline
        className="h-full w-full hue-rotate-240 brightness-70 object-contain transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
}
