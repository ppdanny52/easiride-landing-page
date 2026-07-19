const benefits = [
  { title: 'Flexible Working Hours', description: 'Drive when you want — mornings, afternoons, or weekends. You are your own boss.' },
  { title: 'Competitive Earnings', description: 'Take home high commissions and benefit from our growing customer base in Bayelsa.' },
  { title: 'Fast Onboarding', description: 'Submit your documents, get verified, complete a safety check, and start driving in days.' },
  { title: 'Daily Earning Visibility', description: 'Track your earnings in real-time within the app and withdraw directly to your bank account daily.' },
  { title: 'Growing Customer Base', description: 'Connect with hundreds of daily commuters in Yenagoa ready for reliable transport.' },
  { title: 'Dedicated Driver Support', description: 'Access a dedicated helpline and local driver support center whenever you need help.' },
];

export function DriverPartner() {
  return (
    <section id="drive" className="section-padding bg-slate-950 text-white">
      <div className="container-wide grid items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
            Drive with EasiRide
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
            Turn your drive time into reliable income
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Join a community of professional drivers in Bayelsa who value flexibility, fair pay, and a platform that supports them at every turn. Start earning on your schedule.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-bold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{benefit.description}</p>
              </div>
            ))}
          </div>

          <a
            href="#download"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-white/90 active:scale-[0.98]"
          >
            Apply to drive
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="relative">
          <div className="card-premium overflow-hidden p-0">
            <div className="bg-gradient-to-br from-brand to-brand-dark p-8 md:p-10 text-white">
              <p className="text-sm font-medium text-white/80">Average weekly earnings</p>
              <p className="mt-2 text-5xl font-extrabold tracking-tight text-white">₦120,000</p>
              <p className="mt-2 text-sm text-white/70">Based on 30 hrs/week · Comfort tier in Yenagoa</p>
            </div>

            <div className="space-y-4 p-8 md:p-10">
              {[
                { day: 'Mon–Wed', amount: '₦40,000', trips: 25 },
                { day: 'Thu–Fri', amount: '₦38,000', trips: 22 },
                { day: 'Sat–Sun', amount: '₦42,000', trips: 28 },
              ].map((row) => (
                <div key={row.day} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-semibold text-ink">{row.day}</p>
                    <p className="text-xs text-ink-muted">{row.trips} trips</p>
                  </div>
                  <p className="text-lg font-bold text-ink">{row.amount}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-xl">
            +15% peak hour bonus active
          </div>
        </div>
      </div>
    </section>
  );
}
