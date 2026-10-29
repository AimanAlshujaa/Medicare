"use client";

import React from "react";
import { MessageCircle, PhoneCall } from "lucide-react";
import { CLINIC_INFO, getWhatsAppUrl } from "@/data/clinicData";

export default function StickyActions() {
  return (
    <>
      {/* Desktop & Tablet Floating Sticky WhatsApp Button with Pulse/Ping Animation */}
      <div className="hidden md:flex fixed bottom-7 left-7 z-40 items-center gap-3 group">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="محادثة واتساب مباشرة"
          className="relative flex items-center gap-3 pl-5 pr-4 py-3.5 rounded-full bg-emerald-gradient text-ivory font-bold text-sm border-2 border-champagne shadow-emerald-glow hover:scale-105 transition-all"
        >
          {/* Pulse Ring */}
          <span className="absolute -inset-1 rounded-full bg-champagne/35 animate-ping opacity-60 pointer-events-none" />

          <span className="relative w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md shrink-0">
            <MessageCircle className="w-5 h-5 fill-current" />
          </span>
          <div className="relative text-right">
            <span className="block text-[10px] text-champagne-rose font-semibold">
              متصلون الآن • رد فوري
            </span>
            <span className="block text-xs font-extrabold text-ivory">
              احجزي عبر الواتساب
            </span>
          </div>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (اتصال هاتفي مباشر + محادثة واتساب سريعة) */}
      <div className="md:hidden fixed bottom-0 right-0 left-0 z-50 bg-ivory/95 backdrop-blur-xl border-t-2 border-champagne/60 px-3 py-2.5 shadow-[0_-10px_30px_rgba(15,62,54,0.15)]">
        <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
          {/* Direct Phone Call Button */}
          <a
            href={`tel:${CLINIC_INFO.phoneTel}`}
            className="py-3 px-3 rounded-xl bg-ivory-pearl hover:bg-champagne/20 text-emerald-deep font-extrabold text-xs border border-champagne/60 flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform"
          >
            <PhoneCall className="w-4 h-4 text-champagne-dark shrink-0" />
            <span>اتصال هاتفي مباشر</span>
          </a>

          {/* Quick WhatsApp Chat Button with Subtle Pulse */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="relative py-3 px-3 rounded-xl bg-emerald-gradient text-ivory font-extrabold text-xs border border-champagne flex items-center justify-center gap-2 shadow-emerald-glow active:scale-95 transition-transform overflow-hidden"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-80" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
            </span>
            <MessageCircle className="w-4 h-4 text-champagne-rose shrink-0" />
            <span>محادثة واتساب سريعة</span>
          </a>
        </div>
      </div>
    </>
  );
}
