"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  ShieldCheck,
  Sparkles,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { ACCREDITED_DEVICES, getWhatsAppUrl } from "@/data/clinicData";

export default function TechBadges() {
  return (
    <section
      id="technologies"
      className="py-16 sm:py-20 bg-emerald-deep text-ivory relative overflow-hidden border-y border-champagne/40"
    >
      {/* Subtle Luxury Background Pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-champagne/10 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-emerald-soft/30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne/15 border border-champagne/40 text-champagne-rose text-xs sm:text-sm font-bold">
            <Cpu className="w-4 h-4 text-champagne" />
            <span>أحدث تكنولوجيا الطب التجميلي في العالم</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-ivory font-display">
            أجهزة وتقنيات معتمدة من{" "}
            <span className="text-champagne-rose">FDA & SFDA</span>
          </h2>
          <p className="text-sm sm:text-base text-ivory/80 leading-relaxed">
            نلتزم في عيادات لوميير ديرما بجدة باستخدام الأجهزة الأصلية المعتمدة
            عالمياً ومحلياً فقط، لضمان نتائج ملموسة وأمان تام لجميع ألوان وأنواع
            البشرة.
          </p>
        </motion.div>

        {/* 4 Accredited Devices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACCREDITED_DEVICES.map((device, index) => (
            <motion.div
              key={device.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl p-6 bg-emerald-darker/70 backdrop-blur-md border border-champagne/30 hover:border-champagne transition-all duration-300 hover:-translate-y-1.5 hover:shadow-gold-glow flex flex-col justify-between"
            >
              <div>
                {/* Top Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-champagne/20 text-champagne-light border border-champagne/40">
                    {device.approvalBadge}
                  </span>
                  <span className="text-[11px] text-ivory/65 font-medium">
                    {device.origin}
                  </span>
                </div>

                {/* Device English & Arabic Name */}
                <div className="mb-3">
                  <p
                    className="text-lg sm:text-xl font-black text-champagne tracking-wide font-display"
                    dir="ltr"
                  >
                    {device.nameEn}
                  </p>
                  <h3 className="text-base font-bold text-ivory mt-1">
                    {device.nameAr}
                  </h3>
                  <p className="text-xs text-champagne-rose/90 font-medium mt-0.5">
                    {device.category}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-ivory/75 leading-relaxed mb-5">
                  {device.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {device.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-ivory/90 font-medium"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-champagne shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book Device Session Link */}
              <a
                href={getWhatsAppUrl(
                  `مرحباً عيادات لوميير ديرما، أرغب في الاستفسار وحجز جلسة بجهاز (${device.nameAr} - ${device.nameEn}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-champagne/15 hover:bg-champagne text-champagne-light hover:text-slate-midnight font-bold text-xs border border-champagne/40 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>احجزي جلسة {device.nameEn}</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Regulatory Trust Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-champagne/20 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm text-ivory/85"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-champagne" />
            <span>ترخيص وزارة الصحة السعودية (MOH)</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-champagne" />
            <span>معتمدة من هيئة الغذاء والدواء السعودية (SFDA)</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-champagne" />
            <span>إشراف استشاريين مصنفين من هيئة التخصصات الصحية (SCFHS)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
