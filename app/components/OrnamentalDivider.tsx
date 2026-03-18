"use client";

import { motion } from "motion/react";

export default function OrnamentalDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex items-center gap-3 my-8 px-8"
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
      <div className="w-2 h-2 rotate-45 bg-pink-300" />
      <div className="w-1.5 h-1.5 rotate-45 bg-green-400" />
      <div className="w-2 h-2 rotate-45 bg-pink-300" />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
    </motion.div>
  );
}
