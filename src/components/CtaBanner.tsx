export function CtaBanner() {
  return (
    <section id="download" className="section-padding pb-28">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand via-brand-light to-brand-dark px-8 py-16 text-center text-white md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white blur-3xl animate-float" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white blur-3xl animate-float-reverse" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Ready to ride smarter in Bayelsa?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Download the EasiRide app today. Experience safe, reliable, and convenient transportation 
              across Yenagoa with transparent upfront pricing and verified drivers.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-white/90 active:scale-[0.98]"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/25 transition-all hover:bg-white/20 active:scale-[0.98]"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a01.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
