"use client";

import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import OpeningScreen from "./OpeningScreen";
import FloatingParticles from "./FloatingParticles";
import CountdownTimer from "./CountdownTimer";
import AnimatedSection from "./AnimatedSection";
import OrnamentalDivider from "./OrnamentalDivider";
import Image from "next/image";

export default function InvitationApp() {
  const [isOpened, setIsOpened] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" as const },
    }),
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!isOpened && (
          <OpeningScreen key="opening" onOpen={() => setIsOpened(true)} />
        )}
      </AnimatePresence>

      {isOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="min-h-screen bg-cream text-deep-earth overflow-hidden relative"
        >
          <FloatingParticles />

          {/* Repeating pattern background */}
          <div className="fixed inset-0 pattern-bg pointer-events-none z-0" />

          {/* Soft matte gradient orbs */}
          <div className="fixed top-0 left-0 w-96 h-96 bg-pink-nude rounded-full mix-blend-multiply filter blur-[100px] opacity-30 -translate-x-1/2 -translate-y-1/2" />
          <div className="fixed top-1/3 right-0 w-80 h-80 bg-blush rounded-full mix-blend-multiply filter blur-[100px] opacity-40 translate-x-1/3" />
          <div className="fixed bottom-0 left-1/3 w-72 h-72 bg-pink-matte rounded-full mix-blend-multiply filter blur-[80px] opacity-20" />

          <main className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
            {/* ─── Hero Section ─── */}
            <AnimatedSection className="text-center mb-12">
              <motion.div custom={0} variants={fadeInUp} className="relative mb-6">
                <Image
                  src="/floral.png"
                  alt="Floral decoration"
                  width={500}
                  height={500}
                  className="w-full max-w-md mx-auto rounded-2xl drop-shadow-lg"
                  priority
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-12">
                  <motion.p
                    custom={0.2}
                    variants={fadeInUp}
                    className="text-sm sm:text-base tracking-[0.3em] uppercase text-[#a4766b] font-medium mb-2"
                  >
                    Invitation
                  </motion.p>
                  <motion.h1
                    custom={0.4}
                    variants={fadeInUp}
                    className="text-3xl sm:text-5xl font-playfair font-bold text-deep-earth leading-tight mb-2"
                  >
                    Eid Fitr Celebration
                  </motion.h1>
                  <motion.p
                    custom={0.6}
                    variants={fadeInUp}
                    className="text-base sm:text-lg text-[#a4766b] font-medium"
                  >
                    1447 H / 2026
                  </motion.p>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* ─── Greeting Section ─── */}
            <AnimatedSection className="glass-card rounded-3xl p-6 sm:p-10 mb-8 text-center relative overflow-hidden">
              <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-pink-matte/50 rounded-tl-xl" />
              <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-pink-matte/50 rounded-tr-xl" />
              <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-pink-matte/50 rounded-bl-xl" />
              <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-pink-matte/50 rounded-br-xl" />

              <motion.div custom={0} variants={fadeInUp}>
                <p className="text-2xl sm:text-3xl font-playfair font-semibold italic text-deep-earth mb-6 leading-relaxed">
                  بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                </p>
              </motion.div>

              <motion.div custom={0.2} variants={fadeInUp}>
                <p className="text-lg sm:text-xl font-medium italic text-[#a4766b] mb-4">
                  Assalamualaikum,
                </p>
              </motion.div>

              <motion.div custom={0.4} variants={fadeInUp}>
                <p className="text-base sm:text-lg text-deep-earth leading-relaxed">
                  <span className="font-semibold">Dear Abang, Adik-adik, Keponakan</span>
                </p>
              </motion.div>

              <OrnamentalDivider />

              <motion.div custom={0.6} variants={fadeInUp}>
                <p className="text-base sm:text-lg text-deep-earth leading-relaxed">
                  You are invited to join our{" "}
                  <span className="font-bold text-[#c78d80]">Eid Fitr Celebration</span>{" "}
                  which will be held on:
                </p>
              </motion.div>
            </AnimatedSection>

            {/* ─── Event Details Section ─── */}
            <AnimatedSection className="relative mb-8">
              <motion.div custom={0} variants={fadeInUp} className="glass-card rounded-3xl overflow-hidden shadow-sm">
                <div className="bg-pink-matte text-white py-4 px-6 text-center">
                  <h2 className="text-xl sm:text-2xl font-playfair font-bold tracking-wider flex items-center justify-center gap-3">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Event Details
                  </h2>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Date */}
                  <motion.div custom={0.1} variants={fadeInUp} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blush flex items-center justify-center transition-colors duration-300">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a4766b]">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#a4766b] uppercase tracking-wider mb-1">Date</p>
                      <p className="text-lg sm:text-xl font-bold text-deep-earth">Saturday, March 21st, 2026</p>
                    </div>
                  </motion.div>

                  <div className="h-px bg-gradient-to-r from-transparent via-pink-nude to-transparent" />

                  {/* Time */}
                  <motion.div custom={0.2} variants={fadeInUp} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blush flex items-center justify-center transition-colors duration-300">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a4766b]">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#a4766b] uppercase tracking-wider mb-1">Time</p>
                      <p className="text-lg sm:text-xl font-bold text-deep-earth">10:00 AM onwards</p>
                    </div>
                  </motion.div>

                  <div className="h-px bg-gradient-to-r from-transparent via-pink-nude to-transparent" />

                  {/* Location */}
                  <motion.div custom={0.3} variants={fadeInUp} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blush flex items-center justify-center transition-colors duration-300">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a4766b]">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#a4766b] uppercase tracking-wider mb-1">Location</p>
                      <p className="text-lg sm:text-xl font-bold text-deep-earth">Perum. Citra 3 Blok B2/7</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* ─── Countdown Section ─── */}
            <AnimatedSection className="glass-card rounded-3xl p-6 sm:p-10 mb-8 text-center">
              <motion.div custom={0} variants={fadeInUp}>
                <h2 className="text-xl sm:text-2xl font-playfair font-bold text-deep-earth mb-2">
                  Countdown to the Special Day
                </h2>
                <p className="text-sm text-[#a4766b] mb-6">Saturday, March 21st, 2026</p>
              </motion.div>
              <motion.div custom={0.2} variants={fadeInUp}>
                <CountdownTimer />
              </motion.div>
            </AnimatedSection>

            {/* ─── Maps Section ─── */}
            <AnimatedSection className="mb-8">
              <motion.div custom={0} variants={fadeInUp} className="glass-card rounded-3xl overflow-hidden shadow-sm">
                <div className="bg-[#a4766b] py-4 px-6 text-center">
                  <h2 className="text-white text-xl sm:text-2xl font-playfair font-bold tracking-wider flex items-center justify-center gap-3">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Event Location
                  </h2>
                </div>

                <motion.div custom={0.2} variants={fadeInUp} className="p-4">
                  <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-pink-nude">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.39!2d106.7058042!3d-6.1286799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>
                </motion.div>

                <div className="px-4 pb-4">
                  <motion.a
                    href="https://www.google.com/maps/@-6.1286799,106.7058042,21z"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-blush hover:bg-pink-nude border border-pink-matte rounded-xl text-deep-earth font-semibold transition-colors duration-300"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Open in Google Maps
                  </motion.a>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* ─── Closing Section ─── */}
            <AnimatedSection className="glass-card rounded-3xl p-6 sm:p-10 mb-8 text-center relative overflow-hidden">
              <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-pink-matte/50 rounded-tl-xl" />
              <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-pink-matte/50 rounded-tr-xl" />
              <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-pink-matte/50 rounded-bl-xl" />
              <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-pink-matte/50 rounded-br-xl" />

              <motion.div custom={0} variants={fadeInUp}>
                <p className="text-base sm:text-lg text-deep-earth leading-relaxed mb-6">
                  We look forward to seeing you there...
                </p>
              </motion.div>

              <OrnamentalDivider />

              <motion.div custom={0.3} variants={fadeInUp}>
                <p className="text-lg text-[#a4766b] mb-3 italic">Wassalamualaikum,</p>
                <p className="text-sm tracking-widest uppercase text-[#c78d80] mb-2">Warm Regards,</p>
                <p className="text-3xl sm:text-4xl font-playfair font-bold text-deep-earth mb-1">
                  Tino Pane
                </p>
                <p className="text-lg font-medium text-[#c78d80]">& Family</p>
              </motion.div>
            </AnimatedSection>

            {/* ─── Footer ─── */}
            <motion.footer
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center py-8"
            >
              <p className="text-xs text-[#a4766b]/70">
                Eid Fitr Celebration 1447 H — Citra Family
              </p>
              <div className="flex justify-center gap-1 mt-2">
                <motion.span
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-sm"
                >
                  🤍
                </motion.span>
              </div>
            </motion.footer>
          </main>
        </motion.div>
      )}
    </>
  );
}
