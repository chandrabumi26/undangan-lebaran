"use client";

import { motion } from "motion/react";
import Image from "next/image";
import TwinklingStars from "./TwinklingStars";

export default function OpeningScreen({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-cream overflow-hidden"
      exit={{
        opacity: 0,
        scale: 1.1,
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-bg" />

      {/* Soft matte blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-pink-nude rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" />
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-[#e3d1cc] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-reverse" />
      <div
        className="absolute top-1/3 right-1/4 w-36 h-36 bg-[#cfb1a8] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"
        style={{ animationDelay: "3s" }}
      />

      <TwinklingStars />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
        {/* Mosque image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6"
        >
          <Image
            src="/mosque.png"
            alt="Mosque Illustration"
            width={280}
            height={280}
            className="drop-shadow-lg rounded-2xl"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base font-medium tracking-[0.25em] text-[#a4766b] uppercase mb-3"
        >
          Invitation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-5xl sm:text-6xl font-playfair font-bold text-deep-earth mb-3 leading-tight"
        >
          Eid Fitr Celebration
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-lg text-[#a4766b] font-medium mb-10"
        >
          1447 H / 2026
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="relative px-10 py-4 bg-pink-matte text-white font-semibold text-lg rounded-full shadow-md hover:bg-[#c78d80] transition-colors duration-300 cursor-pointer overflow-hidden group"
        >
          <span className="relative z-10 flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Open Invitation
          </span>
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1 }}
          className="mt-6 text-sm text-[#a4766b]/80"
        >
          Tino Pane & Family
        </motion.p>
      </div>
    </motion.div>
  );
}
