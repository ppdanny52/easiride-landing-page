import { FadeIn } from './FadeIn';
import { CountUp } from './CountUp';

export function StatsBar() {
  return (
    <section className="border-y border-border bg-surface-elevated">
      <div className="container-wide grid grid-cols-2 gap-x-4 gap-y-8 px-6 py-12 md:grid-cols-4 md:px-10 md:py-14 lg:px-16">
        <FadeIn delay={0} direction="up" className="text-center md:text-left">
          <p className="text-3xl font-extrabold tracking-tight text-brand md:text-4xl">
            <CountUp end={100} suffix="%" duration={1600} />
          </p>
          <p className="mt-2 text-sm font-medium text-ink-muted">Professionally Verified Drivers</p>
        </FadeIn>

        <FadeIn delay={100} direction="up" className="text-center md:text-left">
          <p className="text-3xl font-extrabold tracking-tight text-brand md:text-4xl">
            <CountUp end={5} suffix=" min" duration={1400} />
          </p>
          <p className="mt-2 text-sm font-medium text-ink-muted">Average Pickup Time</p>
        </FadeIn>

        <FadeIn delay={200} direction="up" className="text-center md:text-left">
          <p className="text-3xl font-extrabold tracking-tight text-brand md:text-4xl">
            24/7
          </p>
          <p className="mt-2 text-sm font-medium text-ink-muted">SOS Emergency Support</p>
        </FadeIn>

        <FadeIn delay={300} direction="up" className="text-center md:text-left">
          <p className="text-3xl font-extrabold tracking-tight text-brand md:text-4xl">
            <CountUp end={0} duration={1000} />
          </p>
          <p className="mt-2 text-sm font-medium text-ink-muted">Surge Pricing Surprises</p>
        </FadeIn>
      </div>
    </section>
  );
}
