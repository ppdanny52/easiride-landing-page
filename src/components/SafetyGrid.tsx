const features = [
  {
    title: 'Driver & Vehicle Verification',
    description: 'Every EasiRide driver undergoes strict identity checks, background screenings, and thorough vehicle inspections before they can accept trips.',
    size: 'large',
  },
  {
    title: 'Real-time Trip Sharing',
    description: 'Share your live ride status and GPS location with trusted contacts in just one tap.',
    size: 'small',
  },
  {
    title: 'Emergency SOS Button',
    description: 'Get instant access to local security contacts and our 24/7 safety dispatch team directly from the app.',
    size: 'small',
  },
  {
    title: 'Real-time GPS Tracking',
    description: 'All trips are tracked live on our central map to monitor route deviations and ensure safety.',
    size: 'medium',
  },
  {
    title: 'Secure Cash & Card Payments',
    description: 'Pay with absolute ease using cash or secure in-app card payments with transparent billing.',
    size: 'medium',
  },
];

export function SafetyGrid() {
  return (
    <section id="safety" className="section-padding">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="label-tag">Safety first</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Built for peace of mind
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Safety isn&apos;t a feature — it&apos;s the foundation of every ride on EasiRide.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-6 md:grid-rows-2">
          <article className="card-premium flex flex-col justify-between p-8 md:col-span-3 md:row-span-2 md:p-10">
            <div>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10">
                <svg className="h-7 w-7 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-ink">{features[0].title}</h3>
              <p className="mt-4 max-w-md leading-relaxed text-ink-muted">{features[0].description}</p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="rounded-xl bg-accent px-4 py-3">
                <p className="text-2xl font-extrabold text-brand">100%</p>
                <p className="text-xs font-medium text-ink-muted">Drivers verified</p>
              </div>
              <div className="rounded-xl bg-accent px-4 py-3">
                <p className="text-2xl font-extrabold text-brand">0</p>
                <p className="text-xs font-medium text-ink-muted">Tolerance policy</p>
              </div>
            </div>
          </article>

          {features.slice(1).map((feature, index) => (
            <article
              key={feature.title}
              className={`card-premium p-6 md:p-8 ${
                index < 2 ? 'md:col-span-3' : 'md:col-span-3'
              }`}
            >
              <h3 className="text-lg font-bold text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
