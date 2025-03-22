"use client";

import TestimonialSection from "@/app/sections/Testimonials";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Sample service data (Ideally, this comes from an API or database)
const serviceDetails = {
    "branding": {
      title: "Branding",
      description:
        "Transform your brand with powerful, visually stunning designs that make a lasting impact. We offer from basic (logo only) to premium (Full branding + Brand guide doc) services.",
      image: "/images/web.png",
      pricing: [
        {
          tier: "Basic",
          features: ["Logo Design", "Color Palette", "Typography Selection"],
        },
        {
          tier: "Standard",
          features: ["Logo Design", "Mockup", "JPG/PNG formats", "Social Media Assets (header & display picture)"],
        },
        {
          tier: "Premium",
          features: ["Standard", "Vector files(EPS, SVG)", "Stationery Design (Letterhead, Complimentary/Business card)", "Brand guide document"],
        },
      ],
    },
  
    "ui-ux-design": {
      title: "UI/UX Design",
      description:
        "Create user-centric, engaging interfaces that boost customer retention and elevate user experiences. Intuitive design that turns visitors into loyal users.",
      image: "/images/seo.png",
      pricing: [
        {
          tier: "Basic",
          price: "$400",
          features: ["Wireframes", "Mobile & Desktop Layouts", "Basic Prototyping"],
        },
        {
          tier: "Standard",
          price: "$900",
          features: ["High-Fidelity UI", "User Testing", "Interactive Prototyping"],
        },
        {
          tier: "Premium",
          price: "$1800",
          features: ["Full UX Research", "Complete UI Kit", "UX Writing & Strategy"],
        },
      ],
    },
  
    "web-development": {
      title: "Web Development",
      description:
        "Develop high-performance websites with robust, scalable architectures. Optimize your online presence for speed, functionality, and success.",
      image: "/images/web.png",
      pricing: [
        {
          tier: "Basic",
          features: ["Landing Page", "Mobile responsive", "Basic SEO", "Contact form"],
        },
        {
          tier: "Standard",
          features: ["3-5 page website", "Mobile responsive", "Advanced SEO", "CMS Integration"],
        },
        {
          tier: "Premium",
          features: ["Standard", "One Page / Feature Extra whenever needed (Free)", "Ongoing SEO",]
        },
      ],
    },
  
    "ecommerce-solutions": {
      title: "E-commerce Applications",
      description:
        "Build dynamic, conversion-driven online stores with seamless user experiences. Empower your business with custom e-commerce solutions.",
      image: "/images/e-comm.png",
      pricing: [
        {
          tier: "Basic",
          price: "$800",
          features: ["Basic Storefront", "Product Listings", "Shopping Cart"],
        },
        {
          tier: "Standard",
          price: "$1500",
          features: ["Custom UI", "Payment Gateway Integration", "User Authentication"],
        },
        {
          tier: "Premium",
          price: "$3000",
          features: ["Multi-Vendor Support", "Custom Checkout Flow", "AI Recommendations"],
        },
      ],
    },
  
    "consultations": {
      title: "Consultations",
      description:
        "Receive expert digital strategy guidance to refine your vision and achieve your goals. Tailored solutions for impactful results.",
      image: "/images/consult.png",
      pricing: [
        {
          tier: "Basic",
          price: "$150",
          features: ["1-Hour Session", "Basic Website Review", "Marketing Advice"],
        },
        {
          tier: "Standard",
          price: "$400",
          features: ["3-Hour Strategy Session", "UX/UI Review", "SEO Optimization Tips"],
        },
        {
          tier: "Premium",
          price: "$900",
          features: ["Full Digital Audit", "Brand & Business Strategy", "Growth Consultation"],
        },
      ],
    },
  
    "web-development-training": {
      title: "Web Development Training",
      description:
        "Gain hands-on experience with modern web development techniques. Master scalable solutions and future-ready skills for real-world projects.",
      image: "/images/train.png",
      pricing: [
        {
          tier: "Basic",
          price: "$300",
          features: ["HTML & CSS Basics", "JavaScript Fundamentals", "Building Static Websites"],
        },
        {
          tier: "Standard",
          price: "$750",
          features: ["React & Next.js", "API Integration", "Frontend & Backend Basics"],
        },
        {
          tier: "Premium",
          price: "$1500",
          features: ["Full-Stack Development", "Real-World Projects", "Career Guidance"],
        },
      ],
    },
  };
  

export default function ServiceDetails() {
  const { slug } = useParams();
  const router = useRouter();
  const [service, setService] = useState(null);

  useEffect(() => {
    if (slug && serviceDetails[slug]) {
      setService(serviceDetails[slug]);
    }
  }, [slug]);

  if (!service) return <div className="text-center py-20 text-xl">Loading...</div>;

  return (
    <div className="relative min-h-screen py-32">
      {/* Back to Services Link */}
      <div className="max-w-5xl mx-auto px-4 md:px-12">
        <button
          onClick={() => router.push("/services")}
          className="mb-4 inline-flex items-center text-purple hover:text-lemon transition duration-300"
        >
          ← Go to Services
        </button>
      </div>

      {/* Banner with Background Image */}
      <div
        className="relative h-32 md:h-48 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-pattern.webp')" }} 
      >
        <h1 className="px-4 text-black text-[46px] md:text-[96px] font-vastago">{service.title}</h1>
      </div>

      {/* Service Details */}
      <div className="max-w-5xl mx-auto px-4 md:px-12">
        <img src={service.image} alt={service.title} className="w-full h-72 object-cover rounded-lg mt-6" />
        <p className="text-lg text-gray-700 font-nohemi mt-6">{service.description}</p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {service.pricing.map((plan, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-3xl font-vastago font-semibold">{plan.tier}</h3>
              <ul className="text-gray-700 mt-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-md font-medium text-left my-2">• {feature}</li>
                ))}
              </ul>
              <button className="mt-4 w-full py-3 text-center text-lemon bg-purple rounded-md font-nohemi hover:bg-lemon hover:text-purple">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <TestimonialSection />
      </div>
    </div>
  );
}
