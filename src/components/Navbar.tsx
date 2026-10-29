"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  PhoneCall,
  Menu,
  X,
  ShieldCheck,
  MapPin,
  Star,
  CalendarCheck,
  MessageCircle,
} from "lucide-react";
import { CLINIC_INFO, NAV_LINKS, getWhatsAppUrl } from "@/data/clinicData";

interface NavbarProps {
  onOpenBookingModal: () => void;
}

export default function Navbar({ onOpenBookingModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Luxury Trust Bar */}
      <div className="bg-emerald-deep text-ivory/95 border-b border-champagne/25 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-1.5 font-medium text-champagne-rose">
              <ShieldCheck className="w-3.5 h-3.5 text-champagne shrink-0" />
              <span>{CLINIC_INFO.mohLicense}</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-ivory/80">
              <MapPin className="w-3.5 h-3.5 text-champagne shrink-0" />
              <span>جدة — حي الروضة، طريق الملك عبد العزيز</span>
            </span>
          </div>

          <div className="flex items-center gap-4 mr-auto sm:mr-0">
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-champagne-rose transition-colors"
            >
              <Star className="w-3.5 h-3.5 fill-champagne text-champagne" />
              <span className="font-semibold text-champagne-light">
                {CLINIC_INFO.googleRating} ★
              </span>
              <span className="hidden sm:inline text-ivory/80">
                ({CLINIC_INFO.googleReviewsCount} تقييم موثق على جوجل)
              </span>
            </a>
            <span className="hidden lg:inline text-champagne/40">|</span>
            <a
              href={`tel:${CLINIC_INFO.phoneTel}`}
              className="hidden lg:inline-flex items-center gap-1.5 text-ivory/90 hover:text-champagne transition-colors font-medium"
              dir="ltr"
            >
              <PhoneCall className="w-3.5 h-3.5 text-champagne" />
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-xl shadow-luxury border-b border-champagne/30 py-3"
            : "bg-ivory/85 backdrop-blur-md border-b border-champagne/15 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Clinic Brand / Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-gradient flex items-center justify-center border border-champagne/60 shadow-gold-glow group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-champagne-rose" />
              <span className="absolute -bottom-1 -left-1 w-3.5 h-3.5 rounded-full bg-champagne border-2 border-ivory" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-emerald-deep font-display">
                  {CLINIC_INFO.nameAr}
                </span>
                <span className="hidden sm:inline-block text-[10px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-full bg-champagne/15 text-champagne-dark border border-champagne/30 font-semibold">
                  JEDDAH
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-charcoal/75 font-medium">
                {CLINIC_INFO.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Quick Navigation Links */}
          <nav
            aria-label="التنقل الرئيسي"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-midnight/85 hover:text-emerald-deep hover:bg-champagne/15 transition-all relative group"
              >
                {link.label}
                <span className="absolute bottom-1 right-3.5 left-3.5 h-0.5 bg-champagne scale-x-0 group-hover:scale-x-100 transition-transform origin-right rounded-full" />
              </a>
            ))}
          </nav>

          {/* Primary CTA & Quick Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenBookingModal}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-emerald-deep bg-champagne/15 hover:bg-champagne/25 border border-champagne/40 transition-all inline-flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-champagne-dark" />
              <span>حجز سريع</span>
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-ivory bg-emerald-gradient hover:shadow-emerald-glow border border-champagne/50 transition-all inline-flex items-center gap-2 group"
            >
              <span className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-20 transition-opacity" />
              <MessageCircle className="w-4 h-4 text-champagne-rose group-hover:rotate-12 transition-transform" />
              <span>احجز استشارتك</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-ivory bg-emerald-deep border border-champagne/50 inline-flex items-center gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-champagne-rose" />
              <span>احجز الآن</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="فتح القائمة"
              className="p-2.5 rounded-xl bg-ivory-pearl border border-champagne/30 text-emerald-deep hover:bg-champagne/20 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-ivory/98 backdrop-blur-xl border-b border-champagne/30 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold text-slate-midnight hover:bg-champagne/15 hover:text-emerald-deep transition-colors border border-transparent hover:border-champagne/30"
                >
                  <span>{link.label}</span>
                  <span className="text-champagne text-sm">←</span>
                </a>
              ))}

              <div className="pt-3 mt-3 border-t border-champagne/25 grid grid-cols-1 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBookingModal();
                  }}
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm text-emerald-deep bg-champagne/20 border border-champagne/50 flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4 text-emerald-deep" />
                  <span>طلب حجز استشارة مخصصة</span>
                </button>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm text-ivory bg-emerald-gradient border border-champagne/50 flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-champagne-rose" />
                  <span>احجز استشارتك عبر الواتساب</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
