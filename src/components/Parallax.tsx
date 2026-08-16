import { useEffect, useRef, useState, ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // e.g. 0.05 to 0.15
  className?: string;
}

export function Parallax({ children, speed = 0.06, className = '' }: ParallaxProps) {
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    // Disable parallax on mobile or if reduced motion is preferred
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMobile || prefersReducedMotion) {
      return;
    }

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Only calculate when element is in or near viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const centerDistance = rect.top + rect.height / 2 - viewportHeight / 2;
        const calculatedOffset = centerDistance * speed * -1;
        setOffsetY(calculatedOffset);
      }
    };

    const onScroll = () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className}`}
      style={{
        transform: offsetY ? `translate3d(0, ${offsetY.toFixed(2)}px, 0)` : 'none',
        transition: 'transform 0.1s cubic-bezier(0,0,0.2,1)',
      }}
    >
      {children}
    </div>
  );
}
