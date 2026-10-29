"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  GraduationCap,
  MessageCircle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { DOCTORS_LIST, getWhatsAppUrl } from "@/data/clinicData";

export default function DoctorsSection() {
  return (
    <section
      id="doctors"
      className="py-20 sm:py-28 bg-ivory relative overflow-hidden border-t border-champagne/25"
    >
      {/* Decorative Background Orbs */}
      <div className="pointer-events-none absolute top-12 left-10 w-80 h-80 rounded-full bg-champagne/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-mist border border-emerald-deep/20 text-emerald-deep text-xs sm:text-sm font-bold">
            <Award className="w-4 h-4 text-emerald-deep" />
            <span>نخبة الكفاءات الطبية المعتمدة في المملكة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-midnight font-display">
            بأنامل نخبة <span className="text-emerald-deep">أطبائنا واستشاريينا</span>
          </h2>

          <p className="text-sm sm:text-lg text-slate-charcoal/80 leading-relaxed">
            جميع أطبائنا مصنفون ومعتمدون من{" "}
            <span className="font-bold text-emerald-deep">
              الهيئة السعودية للتخصصات الصحية (SCFHS)
            </span>{" "}
            بخبرة واسعة في أدق الإجراءات التجميلية غير الجراحية.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS_LIST.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group rounded-[2rem] bg-ivory-warm/80 hover:bg-ivory border border-champagne/40 hover:border-champagne transition-all duration-300 hover:-translate-y-2 shadow-luxury hover:shadow-luxury-hover overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Doctor Portrait Container */}
                <div className="relative h-80 overflow-hidden bg-emerald-darker">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-darker/90 via-emerald-darker/20 to-transparent" />

                  {/* Experience Pill Top Right */}
                  <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-ivory/95 backdrop-blur-md text-emerald-deep text-xs font-extrabold border border-champagne/50 shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-champagne-dark" />
                    <span>{doc.experienceYears}</span>
                  </div>

                  {/* SCFHS Verified Badge Inside Image Bottom */}
                  <div className="absolute bottom-4 right-4 left-4 p-3 rounded-2xl bg-emerald-deep/95 backdrop-blur-md border border-champagne/50 text-ivory">
                    <div className="flex items-center gap-2 text-xs font-bold text-champagne-light">
                      <ShieldCheck className="w-4 h-4 text-champagne shrink-0" />
                      <span>{doc.scfhsRank}</span>
                    </div>
                    <p
                      className="text-[11px] text-ivory/75 mt-0.5 font-mono"
                      dir="rtl"
                    >
                      {doc.scfhsNumber}
                    </p>
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-midnight font-display">
                      {doc.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-emerald-deep mt-1">
                      {doc.title}
                    </p>
                  </div>

                  {/* Fellowship / Board */}
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-ivory-pearl/70 border border-champagne/25 text-xs text-slate-charcoal font-medium">
                    <GraduationCap className="w-4 h-4 text-champagne-dark shrink-0 mt-0.5" />
                    <span>{doc.fellowship}</span>
                  </div>

                  {/* Specialties Tags */}
                  <div>
                    <span className="text-xs font-bold text-slate-charcoal/70 block mb-2">
                      التخصصات الدقيقة:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-mist/70 text-emerald-deep text-xs font-semibold border border-emerald-deep/15"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-deep" />
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Doctor Booking CTA */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href={getWhatsAppUrl(doc.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-gradient hover:shadow-emerald-glow text-ivory font-bold text-xs sm:text-sm border border-champagne/50 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-champagne-rose" />
                  <span>احجزي موعداً مع {doc.name.split(" ").slice(0, 2).join(" ")}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
