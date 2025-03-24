"use client";
import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Lazy load the ServiceCard component
const ServiceCard = lazy(() => import("../components/ui/ServiceCard"));

// Services data
const services = [
  {
    id: 1,
    title: "Branding",
    slug: "branding",
    description:
      "Transform your brand with powerful, visually stunning designs that make a lasting impact. From logo creation to full branding with brand guide documentation.",
    image: "/images/brand.webp",
  },
  {
    id: 2,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "Create user-centric, engaging interfaces that boost customer retention and elevate user experiences. Intuitive design that turns visitors into loyal users.",
    image: "/images/product.webp",
  },
  {
    id: 3,
    title: "Web Development",
    slug: "web-development",
    description:
      "Develop high-performance websites with robust, scalable architectures. Optimize your online presence for speed, functionality, and success.",
    image: "/images/dev.webp",
  },
  {
    id: 4,
    title: "E-commerce Applications",
    slug: "e-commerce-applications",
    description:
      "Build dynamic, conversion-driven online stores with seamless user experiences. Empower your business with custom e-commerce solutions.",
    image: "/images/comm.webp",
  },
  {
    id: 5,
    title: "SEO Optimization",
    slug: "seo-optimization",
    description:
      "Maximize your online visibility and climb search engine rankings. We transform traffic into measurable growth.",
    image: "/images/seo.webp",
  },
  {
    id: 6,
    title: "Consultations",
    slug: "consultations",
    description:
      "Receive expert digital strategy guidance to refine your vision and achieve your goals. Tailored solutions for impactful results.",
    image: "/images/consult.webp",
  },
  {
    id: 7,
    title: "Web Development Training",
    slug: "web-development-training",
    description:
      "Gain hands-on experience with modern web development techniques. Master scalable solutions and future-ready skills for real-world projects.",
    image: "/images/training.webp",
  },
  {
    id: 8,
    title: "Custom Dashboards",
    slug: "custom-dashboards",
    description:
      "Experience data like never before with customized dashboards designed to empower smarter, data-driven decisions.",
    image: "/images/dashboard.webp",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen py-32">
      {/* Banner with Background Image */}
      <div
        className="relative h-32 md:h-48 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-pattern.webp')" }}
      >
        <h1 className="text-black text-4xl md:text-7xl font-vastago">
          Our Services
        </h1>
      </div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12 pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Service Image */}
            <div className="relative w-full h-64">
              <Image
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                loading="lazy"
                width={600}
                height={400}
                aria-label={`Image representing ${service.title}`}
              />
            </div>

            {/* Service Content */}
            <div className="p-6">
              <h2 className="text-2xl font-vastago">{service.title}</h2>
              <p className="text-sm text-gray-500 font-nohemi">
                {service.description}
              </p>

              {/* CTA to View Details Page */}
              <Link href={`/services/${service.slug}`}>
                <button
                  className="mt-4 w-full py-3 text-center text-lemon bg-purple rounded-md font-nohemi hover:bg-lemon hover:text-purple transition duration-300"
                  aria-label={`View details about ${service.title}`}
                  role="button"
                >
                  View Details →
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
