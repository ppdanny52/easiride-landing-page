const footerLinks = {
  Product: [
    { label: 'Ride options', href: '#ride-options' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Safety', href: '#safety' },
    { label: 'Pricing', href: '#ride-options' },
  ],
  Company: [
    { label: 'About us', href: '#about' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  Drivers: [
    { label: 'Become a driver', href: '#drive' },
    { label: 'Driver app', href: '#download' },
    { label: 'Earnings', href: '#drive' },
    { label: 'Requirements', href: '#drive' },
  ],
  Support: [
    { label: 'Help center', href: '#' },
    { label: 'Contact us', href: '#' },
    { label: 'Privacy policy', href: '#' },
    { label: 'Terms of service', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-elevated">
      <div className="container-wide section-padding !py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#" className="text-xl font-bold tracking-tight">
              <span className="text-ink">Easi</span><span className="text-brand">Ride</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              EasiRide is Bayelsa State's technology-driven ride-hailing platform, connecting riders with verified drivers for safe, convenient, and transparent trips.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-ink">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-ink-muted">
            &copy; {new Date().getFullYear()} EasiRide. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm font-medium text-ink-muted transition-colors hover:text-brand"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
