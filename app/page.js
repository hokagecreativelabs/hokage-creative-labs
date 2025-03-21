import AboutSection from "./sections/About";
import QnASection from "./sections/FAQs";
import Hero from "./sections/Hero";
import ServicesSection from "./sections/Services";
import TestimonialSection from "./sections/Testimonials";
import WorksSection from "./sections/Works";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <TestimonialSection />
      <QnASection />
    </>
  );
}
