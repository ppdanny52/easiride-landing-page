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
    <section id="book" className="section-padding relative pt-36 md:pt-44 overflow-hidden">
      {/* Background Image Visual of EasiRide Driver & Cab */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/images/easiride-hero-car.png"
          alt="EasiRide cab driver and blue car"
          className="h-full w-full object-cover object-[88%_85%] sm:object-[75%_center] md:object-[65%_center] lg:object-right transition-all duration-300"
        />
        {/* Dark Navy Gradient Overlay for high text legibility */}
        <div className="hero-gradient-overlay absolute inset-0" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-32 top-20 h-[520px] w-[520px] rounded-full bg-brand/10 blur-3xl animate-float" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl animate-float-reverse" />
      </div>

      <div className="container-wide relative z-10 flex min-h-[60vh] md:min-h-[70vh] items-center">
        <FadeIn direction="left" delay={150}>
          <div className="max-w-xl lg:max-w-2xl">
            <span className="label-tag">Premium mobility in Bayelsa</span>
            <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
              Your city ride,{' '}
              <span className="text-brand-light">elevated</span> from pickup to arrival
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-200">
              EasiRide connects you with professionally verified drivers in seconds. Experience safe, reliable, and convenient transportation across Yenagoa with upfront transparent pricing.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#download" className="btn-primary">
                Download app
                <ArrowIcon />
              </a>
              <a href="#about" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md">
                Learn more
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
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
              <p className="text-sm text-slate-200">
                Join thousands of commuters preparing for the launch in <span className="font-semibold text-white">Yenagoa</span>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
