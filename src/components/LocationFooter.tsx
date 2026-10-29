"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  PhoneCall,
  MessageCircle,
  Navigation,
  ShieldCheck,
  Sparkles,
  Car,
  Send,
} from "lucide-react";
import {
  CLINIC_INFO,
  FEATURED_SERVICES,
  NAV_LINKS,
  getWhatsAppUrl,
} from "@/data/clinicData";

export default function LocationFooter() {
  const [selectedService, setSelectedService] = useState(
    FEATURED_SERVICES[0].title
  );
  const [selectedShift, setSelectedShift] = useState("الفترة المسائية (4:00 م - 10:30 م)");
  const [clientName, setClientName] = useState("");

  const handleQuickWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `مرحباً عيادات لوميير ديرما جدة ✨\nالاسم: ${
      clientName || "مراجعة كريمة"
    }\nأرغب في حجز موعد لخدمة: (${selectedService})\nالفترة المفضلة: ${selectedShift}`;
    window.open(getWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <footer
      id="location"
      className="bg-emerald-darker text-ivory relative overflow-hidden border-t-2 border-champagne/50 pb-24 md:pb-0"
    >
      {/* Ambient Luxury Glow */}
      <div className="pointer-events-none absolute -top-40 right-1/3 w-[32rem] h-[32rem] rounded-full bg-champagne/10 blur-3xl" />

      {/* Pre-Footer: Location, Working Hours & Instant WhatsApp Booking Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 relative">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne/15 border border-champagne/40 text-champagne-rose text-xs sm:text-sm font-bold">
            <MapPin className="w-4 h-4 text-champagne" />
            <span>موقع استراتيجي في قلب جدة • مواقف خاصة وفاليه مجاني</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ivory font-display">
            تشرفنا زيارتكِ في{" "}
            <span className="text-champagne-rose">فرع حي الروضة</span>
          </h2>
          <p className="text-sm sm:text-base text-ivory/80">
            تواصلي معنا مباشرة عبر الواتساب لتنسيق موعدكِ في الفترة الصباحية أو
            المسائية بكل يسر وخصوصية.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Right Column: Address, Shifts & Direct WhatsApp Mini-Form (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-6"
          >
            {/* Address & Working Hours Card */}
            <div className="rounded-3xl p-6 sm:p-8 bg-emerald-deep/75 backdrop-blur-md border border-champagne/35 space-y-6">
              {/* Address Details */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-champagne/20 border border-champagne/40 flex items-center justify-center text-champagne shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-champagne-rose">
                    العنوان في جدة
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-ivory font-display">
                    {CLINIC_INFO.address.city} — {CLINIC_INFO.address.district}
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/85 leading-relaxed">
                    {CLINIC_INFO.address.street}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs text-champagne-light pt-1 font-medium">
                    <Car className="w-4 h-4 text-champagne" />
                    <span>{CLINIC_INFO.address.landmark}</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-champagne/20" />

              {/* Morning & Evening Clinic Shifts */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-2 text-sm font-extrabold text-champagne-light">
                  <Clock className="w-4 h-4 text-champagne" />
                  <span>أوقات العمل (الفترة الصباحية والمسائية):</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {CLINIC_INFO.workingHours.map((shift, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-emerald-darker/80 border border-champagne/25 flex flex-col justify-between"
                    >
                      <span className="text-[11px] font-bold text-champagne-rose mb-1">
                        {shift.badge}
                      </span>
                      <p className="text-xs font-semibold text-ivory/90">
                        {shift.days}
                      </p>
                      <p className="text-xs font-extrabold text-champagne-light mt-1">
                        {shift.hours}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contact Numbers */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${CLINIC_INFO.phoneTel}`}
                  className="flex-1 min-w-[160px] py-3 px-4 rounded-xl bg-ivory/10 hover:bg-ivory/15 border border-champagne/30 text-ivory text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-champagne" />
                  <span>الرقم الموحد:</span>
                  <span dir="ltr">{CLINIC_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] py-3 px-4 rounded-xl bg-champagne/15 hover:bg-champagne/25 border border-champagne/40 text-champagne-light text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-champagne" />
                  <span>الانتقال عبر Google Maps</span>
                </a>
              </div>
            </div>

            {/* Instant WhatsApp Booking Form */}
            <form
              onSubmit={handleQuickWhatsAppSubmit}
              className="rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-emerald-deep to-emerald-darker border-2 border-champagne/60 shadow-gold-glow space-y-4"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-extrabold text-ivory font-display flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-champagne" />
                  <span>حجز فوري عبر الواتساب خلال ثوانٍ</span>
                </h3>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-champagne text-slate-midnight">
                  رد فوري
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-champagne-light mb-1.5">
                    الاسم الكريم (اختياري)
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="مثال: سارة الغامدي"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-darker/90 border border-champagne/35 text-ivory placeholder:text-ivory/40 text-xs sm:text-sm focus:outline-none focus:border-champagne"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-champagne-light mb-1.5">
                    الفترة المفضلة للموعد
                  </label>
                  <select
                    value={selectedShift}
                    onChange={(e) => setSelectedShift(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-darker/90 border border-champagne/35 text-ivory text-xs sm:text-sm focus:outline-none focus:border-champagne"
                  >
                    <option value="الفترة الصباحية (9:30 ص - 1:30 م)">
                      الفترة الصباحية (9:30 ص - 1:30 م)
                    </option>
                    <option value="الفترة المسائية (4:00 م - 10:30 م)">
                      الفترة المسائية (4:00 م - 10:30 م)
                    </option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-champagne-light mb-1.5">
                    الخدمة أو الاستشارة المطلوبة
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-darker/90 border border-champagne/35 text-ivory text-xs sm:text-sm focus:outline-none focus:border-champagne"
                  >
                    {FEATURED_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} (تبدأ من {s.priceStart} ر.س)
                      </option>
                    ))}
                    <option value="استشارة تجميلية شاملة مع الطبيب">
                      استشارة تجميلية شاملة مع الطبيب
                    </option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gold-gradient text-slate-midnight font-extrabold text-sm sm:text-base shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>إرسال طلب الحجز عبر واتساب الآن</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Left Column: Embedded Clean Google Map Interface (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="relative flex-1 min-h-[380px] sm:min-h-[460px] rounded-3xl p-2 bg-gradient-to-b from-champagne/60 to-emerald-deep/50 shadow-luxury overflow-hidden flex flex-col">
              <div className="relative flex-1 w-full h-full rounded-[1.35rem] overflow-hidden bg-slate-midnight">
                <iframe
                  title="موقع عيادات لوميير ديرما جدة - طريق الملك عبد العزيز حي الروضة"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14843.298186416455!2d39.1419!3d21.5732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sAl%20Rawdah%2C%20Jeddah%20Saudi%20Arabia!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "380px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-[1.02]"
                />

                {/* Overlay Floating Location Pin Card */}
                <div className="absolute bottom-4 right-4 left-4 p-4 rounded-2xl bg-emerald-darker/95 backdrop-blur-md border border-champagne/60 shadow-2xl flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-champagne-rose">
                      فرع جدة الرئيسي — حي الروضة
                    </p>
                    <p className="text-sm font-extrabold text-ivory">
                      طريق الملك عبد العزيز تقاطع شارع صاري
                    </p>
                  </div>
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-champagne text-slate-midnight font-extrabold text-xs inline-flex items-center gap-1.5 hover:bg-champagne-rose transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>افتح في خرائط جوجل</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Copyright & Regulatory Bar */}
      <div className="border-t border-champagne/20 bg-slate-midnight/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/70">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span className="font-bold text-champagne-light">
              © {new Date().getFullYear()} {CLINIC_INFO.nameAr} ({CLINIC_INFO.nameEn}) — جدة.
            </span>
            <span>جميع الحقوق محفوظة.</span>
            <span className="inline-flex items-center gap-1 text-champagne-rose font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-champagne" />
              {CLINIC_INFO.mohLicense}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-champagne transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
