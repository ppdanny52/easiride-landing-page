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
    <section id="book" className="hero-driver-bg relative pt-36 pb-24 md:pt-44 md:pb-32 px-6 md:px-10 lg:px-16 overflow-hidden">
      {/* Vignette & dark gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/90" />

      {/* Floating ambient glow lights */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-20 h-[520px] w-[520px] rounded-full bg-blue-600/15 blur-3xl animate-float" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl animate-float-reverse" />
      </div>

      <div className="container-wide relative z-10 grid items-center gap-12 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn direction="left" delay={150}>
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 backdrop-blur-md">
              Premium mobility in Bayelsa
            </span>
            
            <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
              Your city ride,{' '}
              <span className="text-blue-400">elevated</span> from pickup to arrival
            </h1>
            
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300">
              EasiRide connects you with professionally verified drivers in seconds. Experience safe, reliable, and convenient transportation across Yenagoa with upfront transparent pricing.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#download" className="btn-primary bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30">
                Download app
                <ArrowIcon />
              </a>
              <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 backdrop-blur-md px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-slate-500 hover:bg-slate-800/80 active:scale-[0.98]">
                Learn more
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex -space-x-3">
                {['E', 'R', 'B', 'Y'].map((initial) => (
                  <div
                    key={initial}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-950 bg-blue-600 text-xs font-bold text-white shadow-md"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-300">
                Join thousands of commuters preparing for the launch in <span className="font-semibold text-white">Yenagoa</span>
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={300}>
          <div className="relative rounded-3xl border border-slate-800/80 bg-slate-950/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/50 transition-all duration-300 hover:border-slate-700">
            <div className="absolute -right-3 -top-3 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg border border-blue-400/30">
              Avg. pickup 5 min
            </div>

            <h2 className="text-2xl font-bold text-white">Why Choose EasiRide?</h2>
            <p className="mt-1 text-sm text-slate-400">Move smarter and safer across Yenagoa</p>

            <ul className="mt-8 space-y-5">
              {[
                {
                  title: 'Fast Pickups',
                  desc: 'Get matched with a nearby driver in seconds.',
                  icon: (
                    <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  title: 'Upfront Pricing',
                  desc: 'Know your fare before you ride. Cash & card accepted.',
                  icon: (
                    <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 0a3 3 0 110 6m5 0a3 3 0 110-6m-5 6h5" />
                    </svg>
                  ),
                },
                {
                  title: 'Verified Drivers',
                  desc: '100% identity and vehicle safety verification.',
                  icon: (
                    <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  title: 'Emergency SOS Support',
                  desc: 'Built-in security tools and 24/7 customer care.',
                  icon: (
                    <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                },
              ].map((feat) => (
                <li key={feat.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-slate-800">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{feat.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a href="#download" className="btn-primary bg-blue-600 hover:bg-blue-500 text-white mt-8 w-full justify-center shadow-lg shadow-blue-600/30">
              Get the EasiRide App
              <ArrowIcon />
            </a>

            <p className="mt-5 text-center text-xs text-slate-400">
              Now launching in Yenagoa, Bayelsa State
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
