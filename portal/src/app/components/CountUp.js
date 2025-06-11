"use client";

import { useEffect, useState, useRef } from 'react';

const CountUp = ({ end, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);
  const startTimeRef = useRef(null);

  const animate = (timestamp) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const progress = timestamp - startTimeRef.current;
    const percentage = Math.min(progress / (duration * 1000), 1);
    const currentCount = Math.floor(percentage * end);

    setCount(currentCount);

    if (progress < duration * 1000) {
      frameRef.current = requestAnimationFrame(animate);
    } else {
      setCount(end); // Ensure it ends on the exact number
    }
  };

  useEffect(() => {
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration]);

  return <span>{count}</span>;
};

export default CountUp;
