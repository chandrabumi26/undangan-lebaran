"use client";

import { motion } from "motion/react";
import { useState } from "react";

// Pre-generate particle data once via lazy useState initializer to avoid
// calling Math.random() during render (React strict mode / purity rule).
function createParticles() {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: (i % 5) + 3,
    x: (i * 37 + 11) % 100,
    y: (i * 53 + 7) % 100,
    duration: (i % 4) + 7,
    delay: (i * 0.7) % 5,
    opacity: 0.15 + (i % 4) * 0.1,
    drift: ((i * 17) % 40) - 20,
  }));
}

export default function FloatingParticles() {
  const [particles] = useState(createParticles);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background:
              p.id % 3 === 0
                ? "rgba(224, 180, 168, 0.5)" // pink-matte
                : p.id % 3 === 1
                ? "rgba(232, 201, 193, 0.5)" // pink-nude
                : "rgba(155, 154, 137, 0.5)", // sage
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, p.drift, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
