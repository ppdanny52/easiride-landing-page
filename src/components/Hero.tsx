import { FadeIn } from './FadeIn';

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="book" className="section-padding relative pt-36 md:pt-44">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-20 h-[520px] w-[520px] rounded-full bg-brand/8 blur-3xl animate-float" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-brand/5 blur-3xl animate-float-reverse" />
      </div>

      <div className="container-wide relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn direction="left" delay={150}>
          <div className="max-w-xl">
            <span className="label-tag">Premium mobility in Bayelsa</span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.5rem]">
              Your city ride,{' '}
              <span className="text-brand">elevated</span> from pickup to arrival
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              EasiRide connects you with professionally verified drivers in seconds. Experience safe, reliable, and convenient transportation across Yenagoa with upfront transparent pricing.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#download" className="btn-primary">
                Download app
                <ArrowIcon />
              </a>
              <a href="#about" className="btn-secondary">
                Learn more
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {['E', 'R', 'B', 'Y'].map((initial) => (
                  <div
                    key={initial}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-brand text-xs font-bold text-white"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <p className="text-sm text-ink-muted">
                Join thousands of commuters preparing for the launch in <span className="font-semibold text-ink">Yenagoa</span>
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={300}>
          <div className="card-premium relative p-8 md:p-10">
            <div className="absolute -right-4 -top-4 rounded-2xl bg-brand px-4 py-2 text-xs font-semibold text-white shadow-lg">
              Avg. pickup 5 min
            </div>

            <h2 className="text-2xl font-bold text-ink">Why Choose EasiRide?</h2>
            <p className="mt-1 text-sm text-ink-muted">Move smarter and safer across Yenagoa</p>

            <ul className="mt-8 space-y-5">
              {[
                {
                  title: 'Fast Pickups',
                  desc: 'Get matched with a nearby driver in seconds.',
                  icon: (
                    <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  title: 'Upfront Pricing',
                  desc: 'Know your fare before you ride. Cash & card accepted.',
                  icon: (
                    <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 0a3 3 0 110 6m5 0a3 3 0 110-6m-5 6h5" />
                    </svg>
                  ),
                },
                {
                  title: 'Verified Drivers',
                  desc: '100% identity and vehicle safety verification.',
                  icon: (
                    <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  title: 'Emergency SOS Support',
                  desc: 'Built-in security tools and 24/7 customer care.',
                  icon: (
                    <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                },
              ].map((feat) => (
                <li key={feat.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink text-sm">{feat.title}</h3>
                    <p className="text-xs text-ink-muted leading-relaxed">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a href="#download" className="btn-primary mt-8 w-full">
              Get the EasiRide App
              <ArrowIcon />
            </a>

            <p className="mt-5 text-center text-xs text-ink-muted">
              Now launching in Yenagoa, Bayelsa State
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
