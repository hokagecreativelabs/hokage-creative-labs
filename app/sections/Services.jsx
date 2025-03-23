"use client";
import { Suspense, lazy } from "react";

const ServiceCard = lazy(() => import("../components/ui/ServiceCard"));

const services = [
  {
    title: "Branding",
    slug: "branding",
    description: "Transform your brand with powerful, visually stunning designs that make a lasting impact. We offer from basic (logo only) to premium (Full branding + Brand guide doc) services.",
    image: "/images/brand.webp",
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Create user-centric, engaging interfaces that boost customer retention and elevate user experiences. Intuitive design that turns visitors into loyal users.",
    image: "/images/product.webp",
  },
  {
    title: "Web Development",
    slug: "web-development",
    description: "Develop high-performance websites with robust, scalable architectures. Optimize your online presence for speed, functionality, and success.",
    image: "/images/dev.webp",
  },
  {
    title: "E-commerce Applications",
    slug: "e-commerce-applications",
    description: "Build dynamic, conversion-driven online stores with seamless user experiences. Empower your business with custom e-commerce solutions.",
    image: "/images/comm.webp",
  },
  {
    title: "Consultations",
    slug: "consultations",
    description: "Receive expert digital strategy guidance to refine your vision and achieve your goals. Tailored solutions for impactful results.",
    image: "/images/consult.webp",
  },
  {
    title: "Web Development Training",
    slug: "web-development-training",
    description: "Gain hands-on experience with modern web development techniques. Master scalable solutions and future-ready skills for real-world projects.",
    image: "/images/training.webp",
  },
];

const bottomServices = [
  {
    title: "Custom Dashboards",
    slug: "custom-dashboards",
    description: "Experience data like never before with customized dashboards designed to empower smarter, data-driven decisions.",
    image: "/images/dashboard.webp",
  },
  {
    title: "SEO Optimization",
    slug: "seo-optimization",
    description: "Maximize your online visibility and climb search engine rankings. We transform traffic into measurable growth.",
    image: "/images/seo.webp",
  },
];

const ServicesSection = () => {
  return (
    <section className="flex flex-col gap-12 pb-20 mx-auto max-w-[1248px] px-6">
      <h2 className="font-vastago text-[48px] font-normal leading-[120%] tracking-[-1px] mb-[-25px]">
        Our Services
      </h2>
      
      <Suspense fallback={<p>Loading services...</p>}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              slug={service.slug} // Pass slug for navigation
            />
          ))}
        </div>
      </Suspense>

      <Suspense fallback={<p>Loading additional services...</p>}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              slug={service.slug} // Pass slug for navigation
            />
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default ServicesSection;
