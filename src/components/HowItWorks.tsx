import { FadeIn } from './FadeIn';

const steps = [
  {
    number: '01',
    title: 'Set your route',
    description:
      'Enter your pickup and destination in the app. See your upfront fare estimate instantly — no hidden fees or guesswork.',
  },
  {
    number: '02',
    title: 'Choose your ride',
    description:
      'Select between our Economy, Comfort, or Premium tiers based on your style and budget.',
  },
  {
    number: '03',
    title: 'Track in real time',
    description:
      'Watch your verified driver approach on the live map, get real-time ETA updates, and share your status with loved ones.',
  },
  {
    number: '04',
    title: 'Arrive and pay',
    description:
      'Arrive safely at your destination. Pay seamlessly using cash, card, or your in-app wallet, then rate your driver.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding how-it-works-bg relative overflow-hidden">
      <div className="container-wide">
        <FadeIn direction="up" delay={0}>
          <div className="mx-auto max-w-2xl text-center">
            <span className="label-tag">Simple Process</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Four Steps to a Smoother Ride
            </h2>
            <p className="mt-4 text-lg text-white/80">
              From booking to arrival, every step of your trip is designed to be fast, transparent, and stress-free.
            </p>
          </div>
        </FadeIn>

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Animated Connecting Vertical Line */}
          <div className="absolute left-[27px] top-0 hidden h-full w-px bg-gradient-to-b from-brand via-brand/50 to-brand/10 md:block opacity-60" />

          <div className="space-y-10">
            {steps.map((step, index) => (
              <FadeIn key={step.number} direction="up" delay={index * 120} duration={650}>
                <article className="relative flex gap-8 md:gap-10 group">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-sm font-bold text-white shadow-lg shadow-brand/25 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-light">
                    {step.number}
                  </div>
                  <div className="card-premium flex-1 p-6 md:p-8">
                    <h3 className="text-xl font-bold text-ink">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink-muted">{step.description}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
