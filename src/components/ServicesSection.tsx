"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Syringe,
  Zap,
  Activity,
  Crown,
  Check,
  Clock,
  MessageCircle,
  Gift,
  ArrowLeft,
} from "lucide-react";
import {
  FEATURED_SERVICES,
  SEASONAL_PACKAGES,
  getWhatsAppUrl,
  ServiceItem,
} from "@/data/clinicData";

const CATEGORIES = [
  { id: "all", label: "جميع الخدمات التجميلية" },
  { id: "injectables", label: "الفيلر والبوتوكس والنضارة" },
  { id: "laser", label: "الليزر البارد" },
  { id: "lifting", label: "الشد والميكرونيدلينغ" },
  { id: "facial", label: "التنظيف والعلاجات الملكية" },
] as const;

function getServiceIcon(category: ServiceItem["category"]) {
  switch (category) {
    case "injectables":
      return <Syringe className="w-6 h-6 text-champagne-dark" />;
    case "laser":
      return <Zap className="w-6 h-6 text-champagne-dark" />;
    case "lifting":
      return <Activity className="w-6 h-6 text-champagne-dark" />;
    case "facial":
      return <Crown className="w-6 h-6 text-champagne-dark" />;
  }
}

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? FEATURED_SERVICES
      : FEATURED_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-ivory relative overflow-hidden"
    >
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-champagne/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -left-40 w-96 h-96 rounded-full bg-emerald-deep/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne/15 border border-champagne/40 text-emerald-deep text-xs sm:text-sm font-bold">
            <Sparkles className="w-4 h-4 text-champagne-dark" />
            <span>خدماتنا التجميلية والطبية المتكاملة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-midnight font-display leading-tight">
            علاجات تجميلية فاخرة مصممة{" "}
            <span className="text-emerald-deep">لتألقكِ</span>
          </h2>

          <p className="text-sm sm:text-lg text-slate-charcoal/80 leading-relaxed">
            نقدم لكِ أحدث البروتوكولات التجميلية غير الجراحية في جدة، بإشراف
            مباشر من نخبة استشاريي الجلدية وبأسعار مدروسة وشفافة.
          </p>
        </motion.div>

        {/* Interactive Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                  isActive
                    ? "bg-emerald-deep text-ivory border-champagne shadow-emerald-glow"
                    : "bg-ivory-warm text-slate-charcoal hover:bg-champagne/15 border-champagne/30"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.article
                layout
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-[2rem] bg-ivory-warm/70 hover:bg-ivory border border-champagne/35 hover:border-champagne transition-all duration-300 hover:-translate-y-1.5 shadow-luxury hover:shadow-luxury-hover overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Image Banner + Floating Badges */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-emerald-darker">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-midnight/80 via-slate-midnight/20 to-transparent" />

                    {/* Top Right Badge */}
                    <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-emerald-deep/95 backdrop-blur-md text-champagne-light text-xs font-bold border border-champagne/50 shadow-md">
                      {service.badge}
                    </div>

                    {/* Top Left Duration */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-ivory/90 backdrop-blur-md text-slate-midnight text-xs font-bold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-deep" />
                      <span>{service.duration}</span>
                    </div>

                    {/* Bottom Icon & Subtitle inside Image */}
                    <div className="absolute bottom-4 right-5 left-5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-ivory shadow-md border border-champagne/60 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          {getServiceIcon(service.category)}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-champagne-light">
                            {service.subtitle}
                          </p>
                          <h3 className="text-lg sm:text-xl font-extrabold text-ivory font-display">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 space-y-5">
                    <p className="text-sm sm:text-base text-slate-charcoal/85 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features Bullet List */}
                    <ul className="space-y-2.5 pt-1">
                      {service.features.map((feat, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-midnight font-medium"
                        >
                          <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-mist text-emerald-deep flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Price Anchor + Instant WhatsApp Booking CTA */}
                <div className="px-6 sm:px-7 py-5 bg-ivory-pearl/70 border-t border-champagne/30 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="block text-xs text-slate-charcoal/75 font-semibold">
                      الأسعار تبدأ من
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-black text-emerald-deep font-display">
                        {service.priceStart}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-champagne-dark">
                        {service.priceUnit}
                      </span>
                      <span className="text-[11px] text-slate-charcoal/60 mr-1">
                        (شامل الضريبة للمواطنين)
                      </span>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl(service.whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-emerald-gradient hover:shadow-emerald-glow text-ivory font-bold text-xs sm:text-sm border border-champagne/50 transition-all inline-flex items-center gap-2 group/btn"
                  >
                    <MessageCircle className="w-4 h-4 text-champagne-rose group-hover/btn:scale-110 transition-transform" />
                    <span>احجزي الخدمة عبر واتساب</span>
                    <ArrowLeft className="w-3.5 h-3.5 text-champagne-rose group-hover/btn:-translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Seasonal Packages Sub-Section (#seasonal-packages) */}
        <div id="seasonal-packages" className="mt-20 sm:mt-24 pt-12 border-t border-champagne/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-deep text-champagne-light text-xs sm:text-sm font-bold border border-champagne/50">
              <Gift className="w-4 h-4 text-champagne" />
              <span>باقات الموسم الحصرية في فرع جدة</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-midnight font-display">
              باقات متكاملة بأسعار استثنائية
            </h3>
            <p className="text-sm sm:text-base text-slate-charcoal/80">
              صممنا لكِ باقات تجمع أشهر الإجراءات التجميلية الأكثر طلباً لتحصلي
              على نتيجة متناغمة وتوفير مميز.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {SEASONAL_PACKAGES.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                  idx === 0
                    ? "bg-emerald-gradient text-ivory border-2 border-champagne shadow-emerald-glow"
                    : "bg-ivory-warm text-slate-midnight border border-champagne/45 hover:border-champagne shadow-luxury"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                        idx === 0
                          ? "bg-champagne text-slate-midnight"
                          : "bg-emerald-deep/10 text-emerald-deep border border-emerald-deep/20"
                      }`}
                    >
                      {pkg.tag}
                    </span>
                  </div>

                  <h4
                    className={`text-xl font-extrabold font-display mb-4 ${
                      idx === 0 ? "text-ivory" : "text-slate-midnight"
                    }`}
                  >
                    {pkg.name}
                  </h4>

                  <ul className="space-y-3 mb-6">
                    {pkg.includes.map((inc, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2.5 text-xs sm:text-sm font-medium ${
                          idx === 0 ? "text-ivory/90" : "text-slate-charcoal"
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            idx === 0 ? "text-champagne" : "text-emerald-deep"
                          }`}
                        />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`pt-5 border-t ${
                    idx === 0 ? "border-champagne/30" : "border-champagne/35"
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span
                        className={`text-xs line-through block ${
                          idx === 0 ? "text-ivory/60" : "text-slate-charcoal/50"
                        }`}
                      >
                        السعر السابق: {pkg.originalPrice} ر.س
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span
                          className={`text-3xl font-black font-display ${
                            idx === 0 ? "text-champagne-light" : "text-emerald-deep"
                          }`}
                        >
                          {pkg.offerPrice}
                        </span>
                        <span
                          className={`text-xs font-bold ${
                            idx === 0 ? "text-champagne-rose" : "text-champagne-dark"
                          }`}
                        >
                          ر.س فقط
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg ${
                        idx === 0
                          ? "bg-ivory/10 text-champagne-light"
                          : "bg-champagne/20 text-champagne-dark"
                      }`}
                    >
                      متاح تقسيط تابي وتمارا
                    </span>
                  </div>

                  <a
                    href={getWhatsAppUrl(pkg.whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      idx === 0
                        ? "bg-gold-gradient text-slate-midnight hover:opacity-95 shadow-gold-glow"
                        : "bg-emerald-deep text-ivory hover:bg-emerald-rich border border-champagne/40"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>احجزي الباقة الآن عبر واتساب</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
