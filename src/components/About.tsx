const values = [
  {
    title: 'Safety First',
    description: 'We prioritize the safety of our riders and drivers above everything else through verified identities, background checks, and live tracking.',
    icon: (
      <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Absolute Reliability',
    description: 'No more waiting at roadsides or guessing when a ride will arrive. EasiRide is there when you need it, matching you in seconds.',
    icon: (
      <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Customer Satisfaction',
    description: 'We believe in friendly support, transparent pricing, and clean rides that leave every passenger and driver with a smile.',
    icon: (
      <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Economic Empowerment',
    description: 'We create high-yield opportunities for local drivers in Bayelsa, offering flexible hours and daily earnings visibility.',
    icon: (
      <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16v1M10 20h4a2 2 0 002-2V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const comparisons = [
  { feature: 'Live Ride GPS Tracking', easiride: true, traditional: false },
  { feature: 'Upfront Transparent Pricing', easiride: true, traditional: false },
  { feature: 'Vetted, Verified Drivers', easiride: true, traditional: false },
  { feature: 'Cash & Card Payments', easiride: true, traditional: false },
  { feature: 'In-app Emergency SOS Button', easiride: true, traditional: false },
  { feature: '24/7 Support & Dispute Resolution', easiride: true, traditional: false },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-wide">
        {/* Upper Title Block */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="label-tag">About EasiRide</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Transforming How Bayelsa Moves
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            EasiRide is a technology-driven ride-hailing platform built to transform transportation in Bayelsa State, Nigeria, beginning with Yenagoa and expanding across the state.
          </p>
        </div>

        {/* Core Layout Split */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Column: Mission & Comparison */}
          <div className="space-y-8">
            <div className="card-premium p-8 md:p-10">
              <h3 className="text-xl font-bold text-ink">Our Mission & Core Promise</h3>
              <p className="mt-4 leading-relaxed text-ink-muted">
                Our mission is to provide safe, affordable, reliable, and convenient transportation while creating economic opportunities for drivers.
              </p>
              <p className="mt-4 leading-relaxed text-ink-muted">
                EasiRide connects riders with professionally verified drivers through an intuitive mobile application that makes requesting rides fast, transparent, and stress-free.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                {['Fast Pickups', 'Fair Pricing', 'Safe Rides', 'Verified Drivers'].map((promise) => (
                  <span key={promise} className="inline-flex items-center gap-1.5 rounded-full bg-accent/70 px-3 py-1 text-xs font-semibold text-brand">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {promise}
                  </span>
                ))}
              </div>
            </div>

            {/* Comparison Box */}
            <div className="card-premium p-8 md:p-10">
              <h3 className="text-xl font-bold text-ink">Why EasiRide is Different</h3>
              <p className="mt-2 text-sm text-ink-muted">
                Unlike traditional taxis, we provide a modern tech stack to keep you secure and comfortable.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-left border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-surface border-b border-border">
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-ink-muted">Feature</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-brand text-center">EasiRide</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-ink-muted text-center">Traditional Taxi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((row, idx) => (
                      <tr key={idx} className="border-b border-border last:border-0 bg-surface-elevated">
                        <td className="p-4 text-sm font-medium text-ink">{row.feature}</td>
                        <td className="p-4 text-center">
                          <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-50 text-green-600">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-50 text-red-500">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column: Values Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-ink mb-6">Our Company Values</h3>
            </div>
            {values.map((val) => (
              <div key={val.title} className="card-premium p-6 flex gap-4 items-start">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent">
                  {val.icon}
                </div>
                <div>
                  <h4 className="font-bold text-ink">{val.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
