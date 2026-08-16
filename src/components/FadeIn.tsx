import { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  scale?: boolean;
  blur?: boolean;
  className?: string;
  threshold?: number;
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration = 650,
  scale = false,
  blur = false,
  className = '',
  threshold = 0.1,
}: FadeInProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setPrefersReducedMotion(true);
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const directionTransform = {
    up: 'translate3d(0, 32px, 0)',
    down: 'translate3d(0, -32px, 0)',
    left: 'translate3d(32px, 0, 0)',
    right: 'translate3d(-32px, 0, 0)',
    none: 'translate3d(0, 0, 0)',
  };

  const initialTransform = `${directionTransform[direction]} ${scale ? 'scale(0.97)' : ''}`.trim();
  const activeTransform = 'translate3d(0, 0, 0) scale(1)';

  return (
    <div
      ref={ref}
      className={`will-change-[transform,opacity] ${className}`}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? activeTransform : initialTransform,
        filter: blur ? (isIntersecting ? 'blur(0px)' : 'blur(4px)') : undefined,
        transitionProperty: 'opacity, transform, filter',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  );
}
