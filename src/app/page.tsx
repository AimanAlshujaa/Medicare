"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechBadges from "@/components/TechBadges";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import DoctorsSection from "@/components/DoctorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationFooter from "@/components/LocationFooter";
import StickyActions from "@/components/StickyActions";
import BookingModal from "@/components/BookingModal";

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-ivory selection:bg-emerald-deep selection:text-champagne-light">
      {/* 1. Sticky Luxury Header & Top Announcement Bar */}
      <Navbar onOpenBookingModal={() => setBookingModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. High-Impact Hero Section */}
        <Hero />

        {/* 3. Accredited Technologies & Regulatory Badges (Morpheus8, Candela, Hydrafacial MD, Fotona 4D) */}
        <TechBadges />

        {/* 4. Featured Cosmetic Services & Seasonal Packages Grid */}
        <ServicesSection />

        {/* 5. Interactive Before & After Comparison Slider */}
        <BeforeAfterSection />

        {/* 6. SCFHS-Accredited Medical Consultants Section */}
        <DoctorsSection />

        {/* 7. Verified Google Maps Reviews Section */}
        <TestimonialsSection />
      </main>

      {/* 8. Jeddah Location, Shifts, Google Map & Instant WhatsApp Booking Footer */}
      <LocationFooter />

      {/* Sticky Floating WhatsApp (Desktop) & Dual-Action Bottom Bar (Mobile) */}
      <StickyActions />

      {/* Quick Consultation Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
