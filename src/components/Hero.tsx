"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Star,
  Award,
  CheckCircle2,
  ArrowLeft,
  HeartHandshake,
} from "lucide-react";
import { CLINIC_INFO, getWhatsAppUrl } from "@/data/clinicData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 sm:pt-12 sm:pb-24 lg:py-24 bg-pearl-gradient">
      {/* Ambient Luxury Background Orbs & Grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-champagne/15 blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-[26rem] h-[26rem] rounded-full bg-emerald-deep/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#0F3E36 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Right Column (RTL Primary Text & CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 text-right space-y-6 sm:space-y-8"
          >
            {/* Floating Trust Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-ivory border border-champagne/50 shadow-sm">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-soft opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-deep" />
              </span>
              <span className="text-xs sm:text-sm font-bold text-emerald-deep">
                مرخص من وزارة الصحة السعودية
              </span>
              <span className="text-champagne">|</span>
              <span className="text-xs sm:text-sm font-semibold text-champagne-dark flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-champagne" />
                حي الروضة • طريق الملك عبد العزيز
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold text-slate-midnight leading-[1.28] sm:leading-[1.22] font-display tracking-tight">
              إشراقتكِ الطبيعية بأنامل{" "}
              <span className="relative inline-block text-emerald-deep">
                نخبة استشاريي
                <svg
                  className="absolute -bottom-2 right-0 w-full h-3 text-champagne/70"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9.5C55 2.5 145 2.5 198 9.5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              الجلدية والتجميل بجدة
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-charcoal/85 leading-relaxed max-w-2xl font-normal">
              نجمع بين الخبرة الطبية الموثوقة وأحدث التقنيات العالمية المعتمدة من
              هيئة الغذاء والدواء{" "}
              <span className="font-bold text-emerald-deep">(FDA & SFDA)</span>{" "}
              لتصميم خطط تجميلية وعلاجية مخصصة تبرز جمالكِ الطبيعي بأعلى معايير
              الأمان والخصوصية الفائقة.
            </p>

            {/* Quick Trust Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {[
                "أطباء مصنفون من هيئة التخصصات (SCFHS)",
                "أجهزة أصلية معتمدة FDA & SFDA",
                "خصوصية تامة وخدمة صف سيارات مجانية",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-midnight/90 bg-ivory/80 px-3.5 py-2.5 rounded-xl border border-champagne/25"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-deep shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2">
              <a
                href={getWhatsAppUrl(
                  "مرحباً عيادات لوميير ديرما جدة ✨، أرغب في حجز موعد عبر الواتساب المباشر."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden px-7 py-4 rounded-2xl bg-emerald-gradient text-ivory font-bold text-base sm:text-lg shadow-emerald-glow hover:shadow-luxury-hover border border-champagne/60 transition-all flex items-center justify-center gap-3"
              >
                <span className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-20 transition-opacity" />
                <MessageCircle className="w-5 h-5 text-champagne-rose shrink-0 group-hover:scale-110 transition-transform" />
                <span>حجز موعد عبر الواتساب (مباشر)</span>
                <ArrowLeft className="w-4 h-4 text-champagne-rose group-hover:-translate-x-1 transition-transform" />
              </a>

              <a
                href="#seasonal-packages"
                className="px-7 py-4 rounded-2xl bg-ivory hover:bg-champagne/15 text-emerald-deep font-bold text-base sm:text-lg border-2 border-champagne/70 shadow-sm hover:shadow-gold-glow transition-all flex items-center justify-center gap-2.5"
              >
                <Sparkles className="w-5 h-5 text-champagne-dark shrink-0" />
                <span>استكشف باقات الموسم</span>
              </a>
            </div>

            {/* Hero Bottom Stats Bar */}
            <div className="pt-4 border-t border-champagne/30 grid grid-cols-3 gap-4 sm:gap-8">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-deep font-display">
                  +15,000
                </p>
                <p className="text-xs sm:text-sm text-slate-charcoal/80 font-medium mt-0.5">
                  عميلة سعيدة في جدة
                </p>
              </div>
              <div className="border-r border-champagne/30 pr-4 sm:pr-8">
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-deep font-display">
                  +12 سنة
                </p>
                <p className="text-xs sm:text-sm text-slate-charcoal/80 font-medium mt-0.5">
                  خبرة طبية وتجميلية
                </p>
              </div>
              <div className="border-r border-champagne/30 pr-4 sm:pr-8">
                <p className="text-2xl sm:text-3xl font-extrabold text-champagne-dark font-display flex items-center gap-1">
                  <span>4.9</span>
                  <Star className="w-5 h-5 fill-champagne text-champagne inline" />
                </p>
                <p className="text-xs sm:text-sm text-slate-charcoal/80 font-medium mt-0.5">
                  تقييم خرائط جوجل
                </p>
              </div>
            </div>
          </motion.div>

          {/* Left Column (Layered Luxury Visual + Animated Floating Badges) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative Gold Arch Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 rounded-[2.25rem] bg-gold-gradient opacity-30 blur-lg" />
              <div className="relative rounded-[2rem] p-2.5 bg-gradient-to-b from-champagne/70 via-champagne-rose/40 to-emerald-deep/40 shadow-luxury">
                <div className="relative rounded-[1.6rem] overflow-hidden aspect-[4/5] bg-emerald-darker">
                  <img
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=85"
                    alt="استشارات الجلدية والتجميل الفاخرة في جدة"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-darker/85 via-emerald-darker/20 to-transparent" />

                  {/* Bottom Inside Image Caption */}
                  <div className="absolute bottom-5 right-5 left-5 p-4 rounded-2xl bg-ivory/95 backdrop-blur-md border border-champagne/50 shadow-lg">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-deep text-champagne flex items-center justify-center shrink-0">
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-champagne-dark">
                            إشراف طبي استشاري متكامل
                          </p>
                          <p className="text-sm font-extrabold text-slate-midnight">
                            خطط علاجية مخصصة لكل بشرة
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-mist text-emerald-deep border border-emerald-deep/20 shrink-0">
                        معتمد FDA
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: MOH License (Top Right) */}
              <div className="animate-float-slow absolute -top-4 -right-2 sm:-right-6 z-20 bg-ivory/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-champagne/60 shadow-luxury flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-deep/10 border border-emerald-deep/20 flex items-center justify-center text-emerald-deep">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <p className="text-xs font-extrabold text-emerald-deep">
                    مرخص من وزارة الصحة
                  </p>
                  <p className="text-[11px] text-slate-charcoal/75 font-medium">
                    معايير تعقيم وأمان عالمية
                  </p>
                </div>
              </div>

              {/* Floating Badge 2: Google Rating 4.9 ★ (Top/Mid Left) */}
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-float-delayed absolute top-1/4 -left-2 sm:-left-6 z-20 bg-ivory/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-champagne/60 shadow-luxury flex items-center gap-3 hover:scale-105 transition-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-champagne/20 border border-champagne/40 flex items-center justify-center text-champagne-dark">
                  <Star className="w-5 h-5 fill-champagne text-champagne" />
                </div>
                <div className="text-right">
                  <p className="text-xs font-extrabold text-slate-midnight">
                    تقييم 4.9 ★ على خرائط جوجل
                  </p>
                  <p className="text-[11px] text-champagne-dark font-semibold">
                    {CLINIC_INFO.googleReviewsCount} مراجعة موثقة بجدة
                  </p>
                </div>
              </a>

              {/* Floating Badge 3: +15,000 Happy Clients (Bottom Right above caption) */}
              <div className="animate-float-slow absolute bottom-28 -right-2 sm:-right-6 z-20 bg-emerald-deep text-ivory px-4 py-3 rounded-2xl border border-champagne/70 shadow-emerald-glow flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-champagne/20 flex items-center justify-center text-champagne-rose">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <p className="text-xs font-extrabold text-champagne-light">
                    +15,000 عميلة سعيدة
                  </p>
                  <p className="text-[11px] text-ivory/80">
                    نسبة رضا تتجاوز 99.2%
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
