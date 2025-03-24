"use client";
import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

const ServiceCard = lazy(() => import("../components/ui/ServiceCard"));

const services = [
  {
    title: "Branding",
    slug: "branding",
    description:
      "Transform your brand with powerful, visually stunning designs that make a lasting impact. We offer from basic (logo only) to premium (Full branding + Brand guide doc) services.",
    image: "/images/brand.webp",
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "Create user-centric, engaging interfaces that boost customer retention and elevate user experiences. Intuitive design that turns visitors into loyal users.",
    image: "/images/product.webp",
  },
  {
    title: "Web Development",
    slug: "web-development",
    description:
      "Develop high-performance websites with robust, scalable architectures. Optimize your online presence for speed, functionality, and success.",
    image: "/images/dev.webp",
  },
  {
    title: "E-commerce Applications",
    slug: "e-commerce-applications",
    description:
      "Build dynamic, conversion-driven online stores with seamless user experiences. Empower your business with custom e-commerce solutions.",
    image: "/images/comm.webp",
  },
  {
    title: "Consultations",
    slug: "consultations",
    description:
      "Receive expert digital strategy guidance to refine your vision and achieve your goals. Tailored solutions for impactful results.",
    image: "/images/consult.webp",
  },
  {
    title: "Web Development Training",
    slug: "web-development-training",
    description:
      "Gain hands-on experience with modern web development techniques. Master scalable solutions and future-ready skills for real-world projects.",
    image: "/images/training.webp",
  },
];

// Bottom Services
const bottomServices = [
  {
    title: "Custom Dashboards",
    slug: "custom-dashboards",
    description:
      "Experience data like never before with customized dashboards designed to empower smarter, data-driven decisions.",
    image: "/images/dashboard.webp",
  },
  {
    title: "SEO Optimization",
    slug: "seo-optimization",
    description:
      "Maximize your online visibility and climb search engine rankings. We transform traffic into measurable growth.",
    image: "/images/seo.webp",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Fallback loader component
const Loader = () => (
  <div className="flex items-center justify-center p-6">
    <p className="text-gray-500">Loading services...</p>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="flex flex-col gap-12 pb-20 mx-auto max-w-[1248px] px-6">
      {/* Heading */}
      <motion.h2
        className="font-vastago text-[48px] font-normal leading-[120%] tracking-[-1px] mb-[-25px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our Services
      </motion.h2>

      {/* Top Services Grid */}
      <Suspense fallback={<Loader />}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </Suspense>

      {/* Bottom Services Grid */}
      <Suspense fallback={<Loader />}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {bottomServices.map((service) => (
            <motion.div key={service.slug} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </Suspense>
    </section>
  );
};

export default ServicesSection;
