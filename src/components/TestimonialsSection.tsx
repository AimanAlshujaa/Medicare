"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  CheckCircle2,
  MapPin,
  ExternalLink,
  Quote,
} from "lucide-react";
import { CLINIC_INFO, GOOGLE_REVIEWS } from "@/data/clinicData";

export default function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 bg-pearl-gradient relative overflow-hidden border-t border-champagne/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header + Google Maps Verified Summary Card */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne/20 border border-champagne/50 text-emerald-deep text-xs sm:text-sm font-bold">
              <Star className="w-4 h-4 fill-champagne text-champagne" />
              <span>ثقة مراجعاتنا في جدة هي سر تميزنا</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-midnight font-display">
              تجارب حقيقية موثقة على{" "}
              <span className="text-emerald-deep">خرائط جوجل</span>
            </h2>

            <p className="text-sm sm:text-lg text-slate-charcoal/80 leading-relaxed">
              نفخر بحصول عيادات لوميير ديرما بجدة على تقييم{" "}
              <span className="font-bold text-slate-midnight">4.9 من 5</span>{" "}
              بناءً على أكثر من 1,480 مراجعة حقيقية من عميلاتنا.
            </p>
          </motion.div>

          {/* Official Google Maps Badge Card */}
          <motion.a
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-auto p-5 rounded-3xl bg-ivory border-2 border-champagne/60 shadow-luxury hover:shadow-gold-glow transition-all flex items-center justify-between sm:justify-start gap-5 group"
          >
            <div className="flex items-center gap-3.5">
              {/* Google G Style Badge */}
              <div className="w-14 h-14 rounded-2xl bg-emerald-deep text-champagne flex flex-col items-center justify-center font-display font-black text-xl border border-champagne/40 shrink-0">
                <span>4.9</span>
                <span className="text-[10px] text-champagne-rose -mt-1">★ ★ ★ ★ ★</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-extrabold text-slate-midnight">
                    تقييم Google Maps الرسمي
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-deep" />
                </div>
                <p className="text-xs text-slate-charcoal/75 mt-0.5">
                  بناءً على {CLINIC_INFO.googleReviewsCount} مراجعة موثقة في جدة
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-deep mt-1 group-hover:text-champagne-dark transition-colors">
                  <span>تصفح جميع التقييمات على خرائط جوجل</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </motion.a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {GOOGLE_REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-3xl p-6 sm:p-7 bg-ivory border border-champagne/35 hover:border-champagne transition-all duration-300 shadow-luxury hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Top Reviewer Row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-emerald-gradient text-champagne-light font-extrabold text-base flex items-center justify-center border border-champagne/50 shrink-0">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm sm:text-base font-extrabold text-slate-midnight">
                          {review.author}
                        </h3>
                        {review.verifiedGoogle && (
                          <CheckCircle2
                            className="w-4 h-4 text-emerald-deep shrink-0"
                            aria-label="مراجعة موثقة"
                          />
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-charcoal/70 mt-0.5">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-champagne-dark" />
                          {review.neighborhood}
                        </span>
                        <span>•</span>
                        <span>{review.dateAgo}</span>
                      </div>
                    </div>
                  </div>

                  <Quote className="w-7 h-7 text-champagne/35 shrink-0" />
                </div>

                {/* 5 Stars + Service Tag */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-champagne text-champagne"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-mist text-emerald-deep">
                    {review.serviceTag}
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-slate-charcoal/90 leading-relaxed">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Verified Google Footer */}
              <div className="mt-5 pt-3.5 border-t border-champagne/20 flex items-center justify-between text-[11px] text-slate-charcoal/65 font-semibold">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-deep" />
                  مراجعة موثقة عبر Google Reviews
                </span>
                <span className="text-champagne-dark">جدة</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
