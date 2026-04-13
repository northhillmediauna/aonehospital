import HeroSection from '../components/home/HeroSection';
import HighlightsSection from '../components/home/HighlightsSection';
import AboutPreview from '../components/home/AboutPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import DoctorSection from '../components/home/DoctorSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTABanner from '../components/home/CTABanner';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <DoctorSection />
      <TestimonialsSection />
      <CTABanner />
      <ContactSection />
    </main>
  );
}
