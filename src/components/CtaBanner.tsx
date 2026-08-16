import { FadeIn } from './FadeIn';
import { Parallax } from './Parallax';

export function CtaBanner() {
  return (
    <section id="download" className="px-4 py-12 sm:px-6 md:px-8 lg:px-12 md:py-20 overflow-hidden">
      <div className="container-wide">
        <FadeIn direction="up" duration={700} scale threshold={0.15}>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand via-brand-light to-brand-dark px-6 pt-12 pb-14 text-white sm:px-10 md:px-12 md:pt-14 md:pb-16 shadow-2xl">
            {/* Background decorative glow orbs */}
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white blur-3xl animate-float" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white blur-3xl animate-float-reverse" />
            </div>

            {/* Grid Layout: Phone Mockup on Left, Content & Buttons on Right */}
            <div className="relative grid items-center gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
              
              {/* Left Column: Phone Mockup */}
              <div className="order-2 md:order-1 md:col-span-5 lg:col-span-5 flex justify-center md:justify-start">
                <Parallax speed={0.05} className="w-full flex justify-center md:justify-start">
                  <img
                    src="/phone-mockup.png"
                    alt="EasiRide App Mockup"
                    loading="lazy"
                    width="620"
                    height="1270"
                    className="h-auto w-[85%] max-w-[380px] md:max-w-[420px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.4)] animate-float-phone"
                  />
                </Parallax>
              </div>

              {/* Right Column: Text & Store CTA Buttons */}
              <div className="order-1 md:order-2 md:col-span-7 lg:col-span-7 flex flex-col justify-center text-center md:text-left">
                <FadeIn direction="up" delay={50} duration={600}>
                  <p className="text-sm font-medium text-white/80 tracking-wide">
                    Download the EasiRide app
                  </p>
                </FadeIn>

                <FadeIn direction="up" delay={100} duration={600}>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] leading-[1.15]">
                    Ready to ride smarter in Bayelsa? Get moving in seconds.
                  </h2>
                </FadeIn>

                <FadeIn direction="up" delay={200} duration={600}>
                  <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl">
                    Experience safe, reliable, and convenient transportation across Yenagoa with transparent upfront pricing and verified drivers.
                  </p>
                </FadeIn>

                <FadeIn direction="up" delay={300} duration={600}>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                    <a
                      href="#"
                      className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      App Store
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/25 transition-all hover:bg-white/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a01.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                      </svg>
                      Google Play
                    </a>
                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
