export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-elevated">
      <div className="container-wide section-padding !py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-md">
            <a href="#" className="text-xl font-bold tracking-tight">
              <span className="text-ink">Easi</span><span className="text-brand">Ride</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              EasiRide is Bayelsa State's technology-driven ride-hailing platform, connecting riders with verified drivers for safe, convenient, and transparent trips.
            </p>
          </div>

          <div className="flex gap-6">
            {['Instagram', 'TikTok'].map((social) => (
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

        <div className="mt-10 border-t border-border pt-8 text-center md:text-left">
          <p className="text-sm text-ink-muted">
            &copy; {new Date().getFullYear()} EasiRide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
