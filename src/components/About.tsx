import { ReactNode } from 'react';
import { FadeIn } from './FadeIn';

interface ValueItem {
  title: string;
  description: string;
  icon: ReactNode;
}

const values: ValueItem[] = [
  {
    title: 'Safety First',
    description: 'We prioritize the safety of our riders and drivers above everything else through verified identities, background checks, and live tracking.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Absolute Reliability',
    description: 'No more waiting at roadsides or guessing when a ride will arrive. EasiRide is there when you need it, matching you in seconds.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Customer Satisfaction',
    description: 'We believe in friendly support, transparent pricing, and clean rides that leave every passenger and driver with a smile.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Economic Empowerment',
    description: 'We create high-yield opportunities for local drivers in Bayelsa, offering flexible hours and daily earnings visibility.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16v1M10 20h4a2 2 0 002-2V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-surface overflow-hidden">
      <div className="container-wide">
        {/* Upper Title Block */}
        <FadeIn direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <span className="label-tag">About EasiRide</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Transforming How Bayelsa Moves
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              EasiRide is a technology-driven ride-hailing platform built to transform transportation in Bayelsa State, Nigeria, beginning with Yenagoa and expanding across the state.
            </p>
          </div>
        </FadeIn>

        {/* Core Layout Split */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          {/* Left Column: Story */}
          <FadeIn direction="up" delay={100} duration={650}>
            <div className="space-y-8">
              <div className="card-premium p-5 sm:p-8 md:p-10">
                <h3 className="text-xl font-bold text-ink">Our Mission & Core Promise</h3>
                <p className="mt-4 leading-relaxed text-ink-muted">
                  Our mission is to provide safe, affordable, reliable, and convenient transportation while creating economic opportunities for drivers.
                </p>
                <p className="mt-4 leading-relaxed text-ink-muted">
                  EasiRide connects riders with professionally verified drivers through an intuitive mobile application that makes requesting rides fast, transparent, and stress-free.
                </p>
                
                <div className="mt-6 flex flex-wrap gap-3">
                  {['Fast Pickups', 'Fair Pricing', 'Safe Rides', 'Verified Drivers'].map((promise) => (
                    <span key={promise} className="inline-flex items-center gap-1.5 rounded-2xl bg-accent/70 px-3 py-1 text-xs font-semibold text-brand">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {promise}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Values Grid */}
          <div className="space-y-6">
            <FadeIn direction="up" delay={150}>
              <h3 className="text-xl font-bold text-ink text-center lg:text-left">Our Company Values</h3>
            </FadeIn>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {values.map((val, index) => (
                <FadeIn key={val.title} direction="up" delay={200 + index * 90} duration={600}>
                  <div className="card-premium p-5 sm:p-6 flex gap-4 items-start border-l-4 border-l-brand">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-brand">
                      {val.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-ink">{val.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{val.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
