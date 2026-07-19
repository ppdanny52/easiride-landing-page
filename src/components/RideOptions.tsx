import { ReactNode } from 'react';

interface RideOption {
  name: string;
  tagline: string;
  price: string;
  eta: string;
  seats: number;
  features: string[];
  accent: string;
  featured?: boolean;
  dark?: boolean;
  icon: ReactNode;
}

const rides: RideOption[] = [
  {
    name: 'EasiRide Sedan',
    tagline: 'Comfort & Value',
    price: 'From ₦1,500',
    eta: '3–5 min',
    seats: 4,
    features: ['Full air conditioning', 'Clean standard sedans', 'Perfect for daily commutes & quick errands'],
    accent: 'bg-accent ring-2 ring-brand/20',
    featured: true,
    dark: false,
    icon: (
      <svg className="h-7 w-7 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3C13 6.9 11.8 6 10 6H4c-1.1 0-2 .9-2 2v8c0 .6.4 1 1 1h2" />
        <circle cx="7.5" cy="17.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16.5" cy="17.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 17h6" />
      </svg>
    ),
  },
  {
    name: 'EasiRide Van',
    tagline: 'Spacious & Group Travel',
    price: 'From ₦3,500',
    eta: '5–8 min',
    seats: 7,
    features: ['Spacious seating for up to 7', 'Perfect for family trips or extra luggage', 'Comfortable climate control'],
    accent: 'bg-surface',
    dark: false,
    icon: (
      <svg className="h-7 w-7 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 17h2.5c.8 0 1.5-.7 1.5-1.5v-3.5c0-.8-.4-1.5-1-2l-3-2.5H15V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v10c0 .8.7 1.5 1.5 1.5h1.5" />
        <circle cx="7.5" cy="17.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16.5" cy="17.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 17h6" />
      </svg>
    ),
  },
];

export function RideOptions() {
  return (
    <section id="ride-options" className="section-padding bg-surface-elevated">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="label-tag">Ride Options</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Choose the Ride that Fits Your Day
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Whether you are running a quick solo errand or traveling with a group, we have you covered.
            </p>
          </div>
          <a href="#download" className="btn-secondary shrink-0 self-start md:self-auto">
            Get the app
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {rides.map((ride) => (
            <article
              key={ride.name}
              className={`card-premium relative overflow-hidden p-8 ${ride.accent} ${ride.dark ? 'border-ink/20' : ''}`}
            >
              {ride.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                  Popular
                </span>
              )}

              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10">
                {ride.icon}
              </div>

              <p className={`text-sm font-semibold uppercase tracking-wide ${ride.dark ? 'text-white/60' : 'text-brand'}`}>
                {ride.tagline}
              </p>
              <h3 className={`mt-1 text-2xl font-bold ${ride.dark ? 'text-white' : 'text-ink'}`}>
                {ride.name}
              </h3>

              <div className={`mt-6 flex items-baseline gap-3 ${ride.dark ? 'text-white' : ''}`}>
                <span className="text-3xl font-extrabold">{ride.price}</span>
                <span className={`text-sm ${ride.dark ? 'text-white/60' : 'text-ink-muted'}`}>
                  · {ride.eta} pickup
                </span>
              </div>

              <ul className={`mt-6 space-y-3 ${ride.dark ? 'text-white/80' : 'text-ink-muted'}`}>
                {ride.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`mt-0.5 h-4 w-4 shrink-0 ${ride.dark ? 'text-white' : 'text-brand'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <p className={`mt-6 text-xs ${ride.dark ? 'text-white/50' : 'text-ink-muted'}`}>
                Up to {ride.seats} passengers
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
