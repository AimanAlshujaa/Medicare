"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  MoveHorizontal,
  ShieldAlert,
  UserCheck,
  Calendar,
  Layers,
  MessageCircle,
} from "lucide-react";
import { BEFORE_AFTER_CASES, getWhatsAppUrl } from "@/data/clinicData";

export default function BeforeAfterSection() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(5, Math.min(95, percentage)));
  }, []);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section
      id="before-after"
      className="py-20 sm:py-28 bg-ivory-pearl/60 relative overflow-hidden border-t border-champagne/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne/20 border border-champagne/50 text-emerald-deep text-xs sm:text-sm font-bold">
            <Sparkles className="w-4 h-4 text-champagne-dark" />
            <span>نتائج حقيقية وموثقة من عياداتنا</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-midnight font-display">
            شواهد التحول: <span className="text-emerald-deep">قبل وبعد</span>
          </h2>

          <p className="text-sm sm:text-lg text-slate-charcoal/80 leading-relaxed">
            اسحبي المؤشر الذهبي يميناً ويساراً لمقارنة النتائج الطبيعية الدقيقة
            التي نحققها لمراجعاتنا في جدة مع الحفاظ التام على الهوية الجمالية.
          </p>
        </motion.div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-10">
          {BEFORE_AFTER_CASES.map((item, idx) => {
            const active = idx === activeCaseIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                  active
                    ? "bg-emerald-deep text-ivory border-champagne shadow-emerald-glow"
                    : "bg-ivory text-slate-charcoal hover:bg-champagne/15 border-champagne/35"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Main Interactive Comparison Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Interactive Drag Slider Box (7 Cols) */}
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7"
          >
            <div className="p-2.5 rounded-[2rem] bg-gradient-to-br from-champagne/70 via-champagne-rose/40 to-emerald-deep/40 shadow-luxury">
              <div
                ref={containerRef}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                onPointerMove={handlePointerMove}
                onClick={(e) => handleMove(e.clientX)}
                className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-[1.5rem] overflow-hidden select-none cursor-ew-resize touch-none bg-slate-midnight"
                dir="ltr"
              >
                {/* Base Layer: AFTER Image (Full Width) */}
                <img
                  src={currentCase.afterImage}
                  alt={currentCase.afterLabel}
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                />

                {/* Clipped Layer: BEFORE Image (Left clip according to sliderPosition) */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                  }}
                >
                  <img
                    src={currentCase.beforeImage}
                    alt={currentCase.beforeLabel}
                    draggable={false}
                    className="w-full h-full object-cover object-center filter saturate-[0.75] contrast-[0.95] brightness-[0.93]"
                  />
                </div>

                {/* Top Labels: قبل / بعد */}
                <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-slate-midnight/85 backdrop-blur-md text-ivory text-xs font-bold border border-ivory/20">
                  {currentCase.beforeLabel}
                </div>
                <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-emerald-deep/95 backdrop-blur-md text-champagne-light text-xs font-bold border border-champagne/50">
                  {currentCase.afterLabel}
                </div>

                {/* Vertical Divider Line & Gold Handle */}
                <div
                  className="absolute top-0 bottom-0 z-30 w-1 bg-gold-gradient shadow-gold-glow pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ivory border-2 border-champagne shadow-2xl flex items-center justify-center text-emerald-deep">
                    <MoveHorizontal className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Helper Bar inside image */}
                <div
                  dir="rtl"
                  className="absolute bottom-3 right-3 left-3 z-20 px-4 py-2 rounded-xl bg-slate-midnight/75 backdrop-blur-md text-ivory/90 text-[11px] sm:text-xs flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-champagne shrink-0" />
                    <span>
                      تم عرض الحالة بعد موافقة المراجعة مع مراعاة الخصوصية التامة
                    </span>
                  </span>
                  <span className="hidden sm:inline text-champagne-rose font-bold">
                    اسحبي للمقارنة ↔
                  </span>
                </div>
              </div>
            </div>

            {/* Accessible Range Control for Mobile & Keyboard */}
            <div className="mt-4 px-2 flex items-center gap-4">
              <span className="text-xs font-bold text-slate-charcoal shrink-0">
                قبل الإجراء
              </span>
              <input
                type="range"
                min={5}
                max={95}
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                aria-label="مؤشر مقارنة النتيجة قبل وبعد"
                className="w-full accent-emerald-deep cursor-pointer h-2 bg-champagne/30 rounded-lg"
              />
              <span className="text-xs font-bold text-emerald-deep shrink-0">
                بعد الإجراء
              </span>
            </div>
          </motion.div>

          {/* Case Clinical Details Card (5 Cols) */}
          <motion.div
            key={`${currentCase.id}-details`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 bg-ivory rounded-3xl p-6 sm:p-8 border border-champagne/40 shadow-luxury space-y-6"
          >
            <div className="space-y-2">
              <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-emerald-mist text-emerald-deep">
                تفاصيل الحالة العلاجية
              </span>
              <h3 className="text-2xl font-extrabold text-slate-midnight font-display">
                {currentCase.title}
              </h3>
              <p className="text-sm font-semibold text-champagne-dark">
                {currentCase.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-charcoal/85 leading-relaxed">
              {currentCase.description}
            </p>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-2xl bg-ivory-warm border border-champagne/25 flex items-start gap-3">
                <Layers className="w-5 h-5 text-emerald-deep shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-charcoal/70 block">
                    التقنية المستخدمة
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-midnight">
                    {currentCase.treatment}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-ivory-warm border border-champagne/25 flex items-start gap-3">
                <Calendar className="w-5 h-5 text-emerald-deep shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-charcoal/70 block">
                    عدد الجلسات والمدة
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-midnight">
                    {currentCase.sessions} ({currentCase.duration})
                  </span>
                </div>
              </div>

              <div className="sm:col-span-2 p-3.5 rounded-2xl bg-ivory-warm border border-champagne/25 flex items-start gap-3">
                <UserCheck className="w-5 h-5 text-emerald-deep shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-charcoal/70 block">
                    الطبيب المشرف على الحالة
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-deep">
                    {currentCase.doctor} — مصنف من هيئة التخصصات الصحية
                  </span>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(
                `مرحباً عيادات لوميير ديرما، شاهدت نتائج (${currentCase.title}) وأرغب بحجز استشارة مماثلة.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-emerald-gradient text-ivory font-bold text-sm sm:text-base shadow-emerald-glow hover:opacity-95 border border-champagne/50 transition-all flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-5 h-5 text-champagne-rose" />
              <span>احجزي استشارة للحصول على نتيجة مماثلة</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
