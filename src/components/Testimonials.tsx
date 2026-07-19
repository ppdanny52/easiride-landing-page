const testimonials = [
  {
    quote:
      'Commuting to the State Secretariat used to be a hassle every morning with traditional taxis. EasiRide has changed that. The app is fast, fares are clear, and I arrive completely stress-free.',
    name: 'Ebimene K.',
    role: 'State Civil Servant',
    rating: 5,
  },
  {
    quote:
      'Driving with EasiRide gives me the flexibility and independence I need. The onboarding was fast, and the daily earning visibility helps me budget and support my family without delays.',
    name: 'Tamara S.',
    role: 'EasiRide Driver Partner',
    rating: 5,
  },
  {
    quote:
      'I use the Comfort tier for meetings around Yenagoa and trips to NDU. Clean cars, air conditioning, professional drivers, and upfront pricing make it the best option in Bayelsa.',
    name: 'Tari E.',
    role: 'Local Business Consultant',
    rating: 5,
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="section-padding bg-surface-elevated">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="label-tag">Community voices</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Loved by riders and drivers alike
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="card-premium flex flex-col p-8">
              <StarRow count={item.rating} />
              <p className="mt-5 flex-1 leading-relaxed text-ink-muted">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-ink">{item.name}</cite>
                  <p className="text-sm text-ink-muted">{item.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
