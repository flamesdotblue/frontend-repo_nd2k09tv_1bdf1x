import React, { useEffect, useMemo, useRef, useState } from 'react';

const COLORS = [
  '#4285F4', // G - Blue
  '#EA4335', // o - Red
  '#FBBC05', // o - Yellow
  '#4285F4', // g - Blue
  '#34A853', // l - Green
  '#EA4335', // e - Red
];

const LETTERS = ['G', 'o', 'o', 'g', 'l', 'e'];

export default function GoogleLogo({ fall = false }) {
  const [y, setY] = useState(() => Array(LETTERS.length).fill(0));
  const [rot, setRot] = useState(() => Array(LETTERS.length).fill(0));
  const startedRef = useRef(false);
  const velRef = useRef(Array(LETTERS.length).fill(0));
  const rotVelRef = useRef(
    Array(LETTERS.length)
      .fill(0)
      .map(() => Math.random() * 240 - 120) // deg per second
  );
  const lastTimeRef = useRef(null);
  const rafRef = useRef(0);

  const gravity = 2200; // px/s^2 for a snappy fall

  useEffect(() => {
    if (!fall || startedRef.current) return;
    startedRef.current = true;

    // Give each letter a tiny random initial upward or downward velocity for variety
    velRef.current = velRef.current.map(() => Math.random() * 200 - 100);

    const step = (ts) => {
      if (lastTimeRef.current == null) {
        lastTimeRef.current = ts;
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      const dt = (ts - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = ts;

      // Update physics
      velRef.current = velRef.current.map((v) => v + gravity * dt);

      setY((prev) => prev.map((yy, i) => yy + velRef.current[i] * dt));
      setRot((prev) => prev.map((rr, i) => rr + rotVelRef.current[i] * dt));

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafRef.current);
  }, [fall]);

  const spans = useMemo(
    () =>
      LETTERS.map((ch, i) => (
        <span
          key={i}
          className="inline-block select-none"
          style={{
            color: COLORS[i],
            transform: `translate3d(0, ${y[i]}px, 0) rotate(${rot[i]}deg)`,
            transformOrigin: '50% 50%',
            willChange: 'transform',
          }}
        >
          {ch}
        </span>
      )),
    [y, rot]
  );

  return (
    <div className="w-full flex items-center justify-center">
      <h1
        className="font-semibold leading-none tracking-tight text-[64px] md:text-[96px]"
        style={{
          fontFamily:
            'Product Sans, Google Sans, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        {spans}
      </h1>
    </div>
  );
}
