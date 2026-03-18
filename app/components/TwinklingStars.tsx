"use client";

import { useState } from "react";

// Pre-generate star data once via lazy useState initializer to avoid
// calling Math.random() during render (React strict mode / purity rule).
function createStars() {
  return Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: (i * 31 + 7) % 100,
    y: (i * 47 + 13) % 100,
    delay: (i * 0.25) % 3,
    size: (i % 3) + 1,
  }));
}

export default function TwinklingStars() {
  const [stars] = useState(createStars);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute animate-twinkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            backgroundColor: s.id % 2 === 0 ? "#e0b4a8" : "#e8c9c1",
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
