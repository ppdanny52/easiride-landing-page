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
    <section id="book" className="section-padding relative pt-36 md:pt-44 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image of EasiRide Driver & Cab */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero-driver-bg.jpg"
          alt="EasiRide cab driver driving"
          className="h-full w-full object-cover object-[25%_65%] sm:object-[35%_50%] md:object-center opacity-95 sm:opacity-90 md:opacity-85 dark:opacity-90 dark:md:opacity-75 transition-all duration-300"
        />
        {/* Responsive Overlay Gradients to ensure text readability while making the EasiRide car logo pop cleanly */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/30 to-slate-950/80 md:bg-gradient-to-r md:from-slate-950/90 md:via-slate-950/55 md:to-slate-950/20 dark:from-surface/90 dark:via-surface/40 dark:to-surface/85 md:dark:from-surface md:dark:via-surface/85 md:dark:to-surface/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-slate-950/40 md:to-slate-950/30" />
      </div>

      <div className="container-wide relative z-10 flex items-center justify-start text-left w-full">
        <FadeIn direction="left" delay={150} className="w-full">
          <div className="max-w-xl lg:max-w-2xl text-left mr-auto">
            <span className="label-tag">Premium mobility in Bayelsa</span>
            <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold leading-[1.08] tracking-tight text-white dark:text-ink md:text-5xl lg:text-[3.5rem] text-left">
              Your city ride,{' '}
              <span className="text-brand-light dark:text-brand">elevated</span> from pickup to arrival
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-200 dark:text-ink-muted text-left">
              EasiRide connects you with professionally verified drivers in seconds. Experience safe, reliable, and convenient transportation across Yenagoa with upfront transparent pricing.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
              <a href="#download" className="btn-primary">
                Download app
                <ArrowIcon />
              </a>
              <a href="#about" className="btn-secondary">
                Learn more
              </a>
            </div>

            <div className="mt-12 flex items-center justify-start gap-6">
              <div className="flex -space-x-3">
                {['E', 'R', 'B', 'Y'].map((initial) => (
                  <div
                    key={initial}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-brand text-xs font-bold text-white shadow-sm"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-300 dark:text-ink-muted text-left">
                Join thousands of commuters preparing for launch in <span className="font-semibold text-white dark:text-ink">Yenagoa</span>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
