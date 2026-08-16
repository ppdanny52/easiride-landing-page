const testimonials = [
  {
    quote:
      'With work and everything else, I just want a simple way to get where I’m going. EasiRide has been really helpful for me. I can request a ride when I need one and get on with my day. It’s convenient, easy to use, and I’m glad we have something like this here in Bayelsa.',
    name: 'Bobby Pere Igo',
    role: 'Civil Servant',
    rating: 5,
    avatar: '/assets/images/testimonial-1.jpg',
  },
  {
    quote:
      'I’ve really enjoyed driving with EasiRide. Before, finding passengers could take a lot of time, but with the app, I can get ride requests directly on my phone. It makes things easier and helps me spend more time driving and earning instead of waiting around.',
    name: 'Peter Kalaigo',
    role: 'Driver',
    rating: 5,
    avatar: '/assets/images/testimonial-2.jpg',
  },
  {
    quote:
      'I honestly find EasiRide really helpful. I use it when I’m going to school, meeting up with friends, or heading home. I don’t have to worry too much about finding a ride anymore. I just book through the app and go. It’s made moving around a lot easier for me.',
    name: 'Tariebi Alex',
    role: 'Student',
    rating: 5,
    avatar: '/assets/images/testimonial-3.jpg',
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
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-brand/30 shadow-md"
                />
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
