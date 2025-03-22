"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import TestimonialSection from "../sections/Testimonials";

// Sample services data
const services = [
  {
    id: 1,
    title: "Web Development",
    slug: "web-development",
    description: "We build fast, responsive, and SEO-optimized websites tailored to your needs.",
    image: "/images/web.png",
  },
  {
    id: 2,
    title: "SEO Optimization",
    slug: "seo-optimization",
    description: "Boost your website's ranking and drive more traffic with our SEO strategies.",
    image: "/images/seo.png",
  },
  {
    id: 3,
    title: "E-commerce Solutions",
    slug: "ecommerce-solutions",
    description: "Launch and scale your online store with our powerful e-commerce solutions.",
    image: "/images/e-comm.png",
  },
  {
    id: 4,
    title: "Consulting",
    slug: "consulting",
    description: "Get expert guidance on digital transformation, branding, and online strategy.",
    image: "/images/consult.png",
  },
  {
    id: 5,
    title: "Training & Workshops",
    slug: "training-workshops",
    description: "Upskill your team with our hands-on web development and SEO training.",
    image: "/images/train.png",
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
        <h1 className="text-black text-[56px] md:text-[96px] font-vastago">Services</h1>
      </div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12 pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            {/* Service Image */}
            <div className="relative w-full h-64">
              <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
            </div>

            {/* Service Content */}
            <div className="p-6">
              <h2 className="text-2xl font-vastago">{service.title}</h2>
              <p className="text-sm text-gray-500 font-nohemi">{service.description}</p>

              {/* CTA to View Details Page */}
              <Link href={`/services/${service.slug}`}>
                <button className="mt-4 w-full py-3 text-center text-lemon bg-purple rounded-md font-nohemi hover:bg-lemon hover:text-purple">
                  View Details →
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div>
        <TestimonialSection />
      </div>
    </div>
  );
}
