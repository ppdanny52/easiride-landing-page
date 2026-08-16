import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { HowItWorks } from './components/HowItWorks';
import { About } from './components/About';
import { RideOptions } from './components/RideOptions';
import { DriverPartner } from './components/DriverPartner';
import { SafetyGrid } from './components/SafetyGrid';
import { Testimonials } from './components/Testimonials';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-surface text-ink">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <HowItWorks />
        <About />
        <RideOptions />
        <DriverPartner />
        <SafetyGrid />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
