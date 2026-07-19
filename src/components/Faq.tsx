import { useState } from 'react';

const faqs = [
  {
    question: 'How is my EasiRide fare calculated?',
    answer:
      'Fares are based on base fare, trip distance, and duration. You will see the exact upfront fare in the app before you book — what you see is what you pay, with no bargaining or surprise charges.',
  },
  {
    question: 'What payment options are accepted?',
    answer:
      'To make ride-hailing easy for everyone, EasiRide accepts cash, secure debit/credit cards, and your in-app wallet balance.',
  },
  {
    question: 'How are drivers verified for safety?',
    answer:
      'Safety is our core foundation. Every EasiRide driver undergoes strict identity checks, background screenings, and physical vehicle safety inspections before they can accept a single trip.',
  },
  {
    question: 'What safety features are in the app?',
    answer:
      'Our app includes an in-app Emergency SOS button, real-time live GPS trip tracking, and a one-tap feature to share your live route with family or friends.',
  },
  {
    question: 'How do I register as a driver?',
    answer:
      'Download the EasiRide Driver app or visit our Yenagoa onboarding office. Provide your driver\'s license, vehicle documents, and valid ID. Once verified, you can start earning within 48 hours.',
  },
  {
    question: 'Is EasiRide available throughout Bayelsa?',
    answer:
      'EasiRide is launching initially in Yenagoa, with plans to expand to other local government areas and major routes across Bayelsa State soon.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding">
      <div className="container-wide grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="label-tag">FAQ</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Questions? We&apos;ve got answers.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Everything you need to know about riding and driving with EasiRide.
          </p>
          <a href="#download" className="btn-primary mt-8 inline-flex">
            Contact support
          </a>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="card-premium overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink">{faq.question}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-brand transition-transform ${isOpen ? 'rotate-45' : ''}`}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border px-6 pb-6 pt-4">
                      <p className="leading-relaxed text-ink-muted">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
