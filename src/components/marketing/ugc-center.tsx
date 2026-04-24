"use client";

import React from "react";
import Image from "next/image";
import {
  IconCameraFillDuo18,
  IconHeartFillDuo18,
  IconMessageFillDuo18,
  IconCircleCheckFillDuo18,
  IconUploadFillDuo18,
  IconDownloadFillDuo18,
} from "nucleo-ui-fill-duo-18";

export function UgcCenter() {
  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left Side: UGC Feed */}
        <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] border border-border/50 bg-white md:bg-white/50 md:backdrop-blur-xl shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] overflow-hidden p-4 md:p-8">
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-brand/5 rounded-full blur-[60px] md:blur-3xl -translate-y-1/2 translate-x-1/2" />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 md:gap-4 mb-5 md:mb-8 relative z-10">
            <div>
              <h3 className="text-base md:text-xl font-semibold text-foreground flex items-center gap-2">
                <IconCameraFillDuo18 className="w-5 h-5 text-brand" />
                Fan Content Feed
              </h3>
              <p className="text-[10px] md:text-sm text-muted-foreground mt-1">
                Pre-approved, high-quality UGC ready for your campaigns.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-semibold">
              <IconCircleCheckFillDuo18 className="w-3.5 h-3.5" />
              142 new
            </div>
          </div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 relative z-10">
            {/* Post 1 */}
            <div className="group relative rounded-xl md:rounded-2xl bg-surface border border-border/50 shadow-sm overflow-hidden aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1713592231622-34097be8e1e1?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fan content"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                <div className="flex justify-between items-start">
                  <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-[10px] flex items-center gap-1">
                      <IconUploadFillDuo18 className="w-3 h-3" />
                    @sarah_music
                  </div>
                  <div className="group/btn bg-emerald-500 text-white p-1 rounded-full shadow-lg relative hover:bg-brand transition-colors cursor-pointer">
                    <IconCircleCheckFillDuo18 className="w-3 h-3 md:w-4 md:h-4 transition-opacity group-hover/btn:opacity-0 absolute inset-0 m-auto" />
                    <IconDownloadFillDuo18 className="w-3 h-3 md:w-4 md:h-4 transition-opacity opacity-0 group-hover/btn:opacity-100 absolute inset-0 m-auto" />
                    <div className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white text-xs">
                  <span className="flex items-center gap-1"><IconHeartFillDuo18 className="w-3 h-3" /> 2.4k</span>
                  <span className="flex items-center gap-1"><IconMessageFillDuo18 className="w-3 h-3" /> 128</span>
                </div>
              </div>
            </div>

            <div className="grid grid-rows-2 gap-3 md:gap-4">
              {/* Post 2 */}
              <div className="group relative rounded-xl md:rounded-2xl bg-surface border border-border/50 shadow-sm overflow-hidden h-full">
                <Image
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop"
                  alt="Fan content"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                  <div className="flex justify-between items-start">
                    <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-[10px] flex items-center gap-1">
                      <IconUploadFillDuo18 className="w-3 h-3" />
                      @mike_beats
                    </div>
                    <div className="group/btn bg-emerald-500 text-white p-1 rounded-full shadow-lg relative hover:bg-brand transition-colors cursor-pointer">
                      <IconCircleCheckFillDuo18 className="w-3 h-3 md:w-4 md:h-4 transition-opacity group-hover/btn:opacity-0 absolute inset-0 m-auto" />
                      <IconDownloadFillDuo18 className="w-3 h-3 md:w-4 md:h-4 transition-opacity opacity-0 group-hover/btn:opacity-100 absolute inset-0 m-auto" />
                      <div className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-white text-xs">
                    <span className="flex items-center gap-1"><IconHeartFillDuo18 className="w-3 h-3" /> 1.1k</span>
                    <span className="flex items-center gap-1"><IconMessageFillDuo18 className="w-3 h-3" /> 84</span>
                  </div>
                </div>
              </div>

              {/* Post 3 */}
              <div className="group relative rounded-xl md:rounded-2xl bg-surface border border-border/50 shadow-sm overflow-hidden h-full">
                <Image
                  src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=600&auto=format&fit=crop"
                  alt="Fan content"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                  <div className="flex justify-between items-start">
                    <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-[10px] flex items-center gap-1">
                      <IconUploadFillDuo18 className="w-3 h-3" />
                      @tonycargo
                    </div>
                    <div className="group/btn bg-emerald-500 text-white p-1 rounded-full shadow-lg relative hover:bg-brand transition-colors cursor-pointer">
                      <IconCircleCheckFillDuo18 className="w-3 h-3 md:w-4 md:h-4 transition-opacity group-hover/btn:opacity-0 absolute inset-0 m-auto" />
                      <IconDownloadFillDuo18 className="w-3 h-3 md:w-4 md:h-4 transition-opacity opacity-0 group-hover/btn:opacity-100 absolute inset-0 m-auto" />
                      <div className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-white text-xs">
                    <span className="flex items-center gap-1"><IconHeartFillDuo18 className="w-3 h-3" /> 892</span>
                    <span className="flex items-center gap-1"><IconMessageFillDuo18 className="w-3 h-3" /> 45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: UGC Workflow */}
        <div className="hidden lg:flex flex-col gap-4 md:gap-6 relative justify-center">
          <div className="space-y-2 md:space-y-3 relative z-10">
            {[
              { iconSrc: "/svg/isometric/opt-in.svg", title: "Opt-In Collection", desc: "Fans easily submit photos and videos directly to your brand.", color: "text-pink-500", bg: "bg-pink-50", borderColor: "hover:border-pink-500/30" },
              { iconSrc: "/svg/isometric/rights.svg", title: "Automated Rights", desc: "Digital consent and rights clearance handled automatically.", color: "text-blue-500", bg: "bg-blue-50", borderColor: "hover:border-blue-500/30" },
              { iconSrc: "/svg/isometric/curation.svg", title: "Smart Curation", desc: "We surface the highest-quality, most engaging content.", color: "text-purple-500", bg: "bg-purple-50", borderColor: "hover:border-purple-500/30" },
              { iconSrc: "/svg/isometric/deployment.svg", title: "Seamless Content Deployment", desc: "Put approved UGC to work across the channels that drive results.", color: "text-emerald-500", bg: "bg-emerald-50", borderColor: "hover:border-emerald-500/30" },
            ].map((action, i) => (
              <div key={i} className={`group flex items-center mb-6 justify-between ${action.borderColor} transition-all cursor-pointer`}>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 ${action.bg} ${action.color} group-hover:scale-110 transition-transform p-1.5 relative`}>
                    <Image src={action.iconSrc} alt="" fill className="object-contain p-1.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground transition-colors">{action.title}</h4>
                    <p className="text-lg text-muted-foreground mt-0.5">{action.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
