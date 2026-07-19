import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Ride options', href: '#ride-options' },
  { label: 'Safety', href: '#safety' },
  { label: 'Drive with us', href: '#drive' },
];

export function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-10 lg:px-16 transition-all duration-300">
      <nav
        className={`container-wide flex items-center justify-between rounded-2xl px-6 py-3.5 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-[0_12px_40px_-12px_rgba(10,15,28,0.12)]'
            : 'border-transparent bg-transparent shadow-none'
        }`}
      >
        <a href="#" className="flex items-center text-xl font-bold tracking-tight">
          <span className="text-ink">Easi</span>
          <span className="text-brand">Ride</span>
          <span className="text-brand font-extrabold text-2xl leading-none ml-0.5 animate-pulse">.</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative pb-1 text-sm font-medium text-ink-muted transition-colors hover:text-brand after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-ink-muted transition-all hover:bg-accent hover:text-brand hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <svg className="h-5 w-5 transition-transform hover:rotate-12 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="h-5 w-5 transition-transform hover:rotate-90 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.122 8.485A4 4 0 1112 8a4 4 0 015.657 5.657z" />
              </svg>
            )}
          </button>

          {/* Desktop CTA */}
          <a href="#download" className="btn-primary hidden sm:inline-flex">
            Get the app
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-ink-muted transition-colors hover:bg-accent hover:text-brand md:hidden cursor-pointer"
            aria-label="Open Menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Sliding Panel */}
        <div
          className={`absolute right-0 top-0 h-screen w-72 bg-surface-elevated p-6 shadow-2xl border-l border-border transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-between">
                <a href="#" className="flex items-center text-xl font-bold tracking-tight" onClick={() => setIsMenuOpen(false)}>
                  <span className="text-ink">Easi</span>
                  <span className="text-brand">Ride</span>
                  <span className="text-brand font-extrabold text-2xl leading-none ml-0.5 animate-pulse">.</span>
                </a>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-ink-muted hover:text-brand cursor-pointer"
                  aria-label="Close Menu"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <ul className="mt-12 space-y-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-lg font-semibold text-ink hover:text-brand transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <a
                href="#download"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary w-full text-center py-3.5 block"
              >
                Get the app
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
