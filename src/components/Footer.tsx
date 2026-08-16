import { useState, FormEvent } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="border-t border-border bg-surface-elevated text-ink">
      <div className="container-wide section-padding !py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          
          {/* Left Column (Brand Statement & Contact) */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl leading-tight max-w-md">
              Your trusted partner for safe, reliable, and on-demand city rides.
            </h2>

            <a
              href="#download"
              className="mt-6 btn-primary inline-flex items-center justify-center rounded-2xl px-7 py-3.5 text-sm font-semibold shadow-lg shadow-brand/25"
            >
              Contact us
            </a>

            {/* Desktop Copyright */}
            <div className="mt-24 hidden lg:block border-t border-border pt-8 w-full">
              <p className="text-sm text-ink-muted">
                &copy; {new Date().getFullYear()} EasiRide. All rights reserved.
              </p>
            </div>
          </div>

          {/* Right Column (Subscribe Form & Navigation Grid) */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl lg:text-3xl max-w-md">
              Subscribe to be in touch with latest news.
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address*"
                  className="w-full sm:flex-1 rounded-2xl border border-border bg-surface px-5 py-3.5 text-sm text-ink placeholder:text-ink-muted outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto rounded-2xl px-6 py-3.5 text-sm font-semibold justify-center shadow-lg shadow-brand/25 shrink-0"
                >
                  Subscribe
                </button>
              </div>

              {subscribed && (
                <p className="mt-3 text-xs font-semibold text-emerald-400 animate-fadeIn text-center sm:text-left">
                  ✓ Thank you for subscribing to EasiRide news!
                </p>
              )}
            </form>

            {/* 3-Column Navigation Grid */}
            <div className="mt-12 sm:mt-16 w-full max-w-md grid grid-cols-3 gap-6 text-center sm:text-left">
              {/* Column 1 */}
              <div className="space-y-3">
                <a href="#about" className="block text-sm font-semibold text-ink transition-colors hover:text-brand">
                  About us
                </a>
                <a href="#ride-options" className="block text-sm font-semibold text-ink transition-colors hover:text-brand">
                  Pricing
                </a>
                <a href="#testimonials" className="block text-sm font-semibold text-ink transition-colors hover:text-brand">
                  Reviews
                </a>
              </div>

              {/* Column 2 */}
              <div className="space-y-3">
                <a href="#ride-options" className="block text-sm font-semibold text-ink transition-colors hover:text-brand">
                  Services
                </a>
                <a href="#drive" className="block text-sm font-semibold text-ink transition-colors hover:text-brand">
                  Drivers
                </a>
                <a href="#book" className="block text-sm font-semibold text-ink transition-colors hover:text-brand">
                  Taxi
                </a>
              </div>

              {/* Column 3 */}
              <div className="space-y-3">
                <a href="#" className="block text-sm font-semibold text-ink transition-colors hover:text-brand">
                  Instagram
                </a>
                <a href="#" className="block text-sm font-semibold text-ink transition-colors hover:text-brand">
                  TikTok
                </a>
                <a href="#" className="block text-sm font-semibold text-ink transition-colors hover:text-brand">
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Mobile Copyright */}
            <div className="mt-12 border-t border-border pt-8 w-full text-center lg:hidden">
              <p className="text-sm text-ink-muted">
                &copy; {new Date().getFullYear()} EasiRide. All rights reserved.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
