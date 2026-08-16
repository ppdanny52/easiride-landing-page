import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
  formattingFn?: (val: number) => string;
}

export function CountUp({
  end,
  prefix = '',
  suffix = '',
  duration = 1800,
  className = '',
  decimals = 0,
  formattingFn,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Check reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(end);
      return;
    }

    let animationFrameId: number | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime: number | null = null;

          const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Cubic ease-out curve for rapid initial count slowing down smoothly
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = easeProgress * end;

            setCount(currentCount);

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animateCount);
            } else {
              setCount(end);
            }
          };

          animationFrameId = requestAnimationFrame(animateCount);
        } else {
          if (animationFrameId) cancelAnimationFrame(animationFrameId);
          setCount(0);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [end, duration]);

  const formatNumber = (val: number) => {
    if (formattingFn) return formattingFn(val);
    if (end >= 1000) {
      return Math.round(val).toLocaleString();
    }
    return val.toFixed(decimals);
  };

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
