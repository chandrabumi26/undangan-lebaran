"use client";

import { motion, AnimatePresence } from "motion/react";
import { useRef, useSyncExternalStore } from "react";

const TARGET = new Date("2026-03-21T10:00:00+07:00").getTime();

function calcTimeLeft() {
  const distance = TARGET - Date.now();
  if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

function useCountdown() {
  const timeRef = useRef(calcTimeLeft());

  return useSyncExternalStore(
    (onStoreChange) => {
      const id = setInterval(() => {
        timeRef.current = calcTimeLeft();
        onStoreChange();
      }, 1000);
      return () => clearInterval(id);
    },
    () => timeRef.current,
    () => ({ days: 0, hours: 0, minutes: 0, seconds: 0 }) // SSR snapshot
  );
}

const TIME_UNITS = [
  { label: "Days" },
  { label: "Hours" },
  { label: "Mins" },
  { label: "Secs" },
] as const;

export default function CountdownTimer() {
  const timeLeft = useCountdown();

  const values = [
    timeLeft.days,
    timeLeft.hours,
    timeLeft.minutes,
    timeLeft.seconds,
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-5">
      {TIME_UNITS.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/70 border border-pink-matte flex items-center justify-center shadow-sm">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={values[index]}
                  initial={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl sm:text-3xl font-bold text-deep-earth font-playfair"
                >
                  {String(values[index]).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-nude rounded-full" />
          </div>
          <span className="mt-2 text-xs sm:text-sm font-medium text-[#c78d80] tracking-wider uppercase">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
