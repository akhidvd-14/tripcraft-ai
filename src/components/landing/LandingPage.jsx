import Hero from './Hero.jsx';
import Segments from './Segments.jsx';
import Packages from './Packages.jsx';
import HowItWorks from './HowItWorks.jsx';
import Features from './Features.jsx';
import Testimonials from './Testimonials.jsx';
import CtaFooter from './CtaFooter.jsx';

export default function LandingPage({ onGoPlan, onGoItinerary, onSelectPackage, onSubmitContact }) {
  return (
    <div>
      <Hero onGoPlan={onGoPlan} />
      <Segments onGoPlan={onGoPlan} />
      <Packages onSelectPackage={onSelectPackage} onGoItinerary={onGoItinerary} />
      <HowItWorks onGoPlan={onGoPlan} />
      <Features />
      <Testimonials />
      <CtaFooter onGoPlan={onGoPlan} onSubmitContact={onSubmitContact} />
    </div>
  );
}
