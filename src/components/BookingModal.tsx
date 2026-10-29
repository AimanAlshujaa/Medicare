"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  MessageCircle,
  Calendar,
  User,
  ShieldCheck,
} from "lucide-react";
import {
  FEATURED_SERVICES,
  DOCTORS_LIST,
  getWhatsAppUrl,
} from "@/data/clinicData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [name, setName] = useState("");
  const [service, setService] = useState(FEATURED_SERVICES[0].title);
  const [doctor, setDoctor] = useState("أي استشاري متاح");
  const [shift, setShift] = useState("الفترة المسائية (4:00 م - 10:30 م)");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `مرحباً عيادات لوميير ديرما جدة ✨\nأرغب في تأكيد حجز استشارة:\n• الاسم: ${
      name || "مراجعة كريمة"
    }\n• الخدمة: ${service}\n• الطبيب المفضل: ${doctor}\n• الفترة: ${shift}`;
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-midnight/70 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-lg rounded-3xl bg-ivory border-2 border-champagne shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-emerald-gradient p-6 text-ivory relative">
              <button
                type="button"
                onClick={onClose}
                aria-label="إغلاق النافذة"
                className="absolute top-5 left-5 w-9 h-9 rounded-full bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center text-ivory transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-champagne/20 border border-champagne/40 text-champagne-light text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-champagne" />
                <span>فرع جدة — حي الروضة</span>
              </div>
              <h3 className="text-2xl font-extrabold font-display">
                احجزي استشارتكِ التجميلية
              </h3>
              <p className="text-xs sm:text-sm text-ivory/80 mt-1">
                اختاري الخدمة والفترة المناسبة وسيتم توجيهكِ مباشرة لمنسقة
                المواعيد عبر الواتساب.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-midnight mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-emerald-deep" />
                  <span>الاسم الكريم</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="اكتبي اسمكِ هنا..."
                  className="w-full px-4 py-3 rounded-xl bg-ivory-warm border border-champagne/40 text-slate-midnight text-sm focus:outline-none focus:border-emerald-deep"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-midnight mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-deep" />
                  <span>الخدمة التجميلية المطلوبة</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-ivory-warm border border-champagne/40 text-slate-midnight text-sm focus:outline-none focus:border-emerald-deep"
                >
                  {FEATURED_SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} — تبدأ من {s.priceStart} ر.س
                    </option>
                  ))}
                  <option value="باقة الإشراقة الملكية المتكاملة">
                    باقة الإشراقة الملكية المتكاملة (1,590 ر.س)
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-midnight mb-1.5">
                    الطبيب / الاستشاري المفضل
                  </label>
                  <select
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-ivory-warm border border-champagne/40 text-slate-midnight text-xs sm:text-sm focus:outline-none focus:border-emerald-deep"
                  >
                    <option value="أي استشاري متاح">أي استشاري متاح</option>
                    {DOCTORS_LIST.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-midnight mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-deep" />
                    <span>الفترة المفضلة</span>
                  </label>
                  <select
                    value={shift}
                    onChange={(e) => setShift(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-ivory-warm border border-champagne/40 text-slate-midnight text-xs sm:text-sm focus:outline-none focus:border-emerald-deep"
                  >
                    <option value="الفترة الصباحية (9:30 ص - 1:30 م)">
                      الفترة الصباحية (9:30 ص - 1:30 م)
                    </option>
                    <option value="الفترة المسائية (4:00 م - 10:30 م)">
                      الفترة المسائية (4:00 م - 10:30 م)
                    </option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-emerald-gradient text-ivory font-extrabold text-sm sm:text-base shadow-emerald-glow hover:opacity-95 border border-champagne/50 flex items-center justify-center gap-2.5 transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-champagne-rose" />
                  <span>تأكيد الموعد عبر الواتساب المباشر</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-charcoal/70 text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-deep shrink-0" />
                <span>بياناتكِ محفوظة بسرية تامة وفق معايير وزارة الصحة السعودية</span>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
