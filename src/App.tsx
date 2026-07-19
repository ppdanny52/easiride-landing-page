import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { HowItWorks } from './components/HowItWorks';
import { About } from './components/About';
import { RideOptions } from './components/RideOptions';
import { DriverPartner } from './components/DriverPartner';
import { SafetyGrid } from './components/SafetyGrid';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FadeIn } from './components/FadeIn';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FadeIn><StatsBar /></FadeIn>
        <FadeIn><HowItWorks /></FadeIn>
        <FadeIn><About /></FadeIn>
        <FadeIn><RideOptions /></FadeIn>
        <FadeIn><DriverPartner /></FadeIn>
        <FadeIn><SafetyGrid /></FadeIn>
        <FadeIn><Testimonials /></FadeIn>
        <FadeIn><Faq /></FadeIn>
        <FadeIn><CtaBanner /></FadeIn>
      </main>
      <Footer />
    </div>
  );
}
