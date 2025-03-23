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
      image: "/images/brand.webp",
      pricing: [
        {
          tier: "Basic",
          features: ["Logo Design", "Color Palette", "Typography Selection"],
        },
        {
          tier: "Standard",
          features: ["Logo Design", "Mockup", "JPG/webp formats", "Social Media Assets (header & display picture)"],
        },
        {
          tier: "Premium",
          features: ["Standard", "Vector files(EPS, SVG)", "Stationery Design (Letterhead, Complimentary/Business card)", "Brand guide document"],
        },
      ],
    },
  
    "ui-ux-design": {
      "title": "UI/UX Design",
      "description": "Design engaging, user-friendly interfaces that enhance customer retention and drive user satisfaction. Transform visitors into loyal users with intuitive experiences.",
      "image": "/images/product.webp",
      "pricing": [
        {
          "tier": "Basic",
          "features": ["Wireframes", "Mobile & Desktop Layouts", "Low-Fidelity Prototyping"]
        },
        {
          "tier": "Standard",
          "features": ["Pixel-Perfect UI Design", "User Testing & Feedback", "Interactive Prototyping"]
        },
        {
          "tier": "Premium",
          "features": ["Comprehensive UX Research", "Design System & UI Kit", "UX Writing & Strategy"]
        }
      ]
    },
  
    "web-development": {
      "title": "Web Development",
      "description": "Develop high-performance websites with robust, scalable architectures. Optimize your online presence for speed, functionality, and long-term success.",
      "image": "/images/dev.webp",
      "pricing": [
        {
          "tier": "Basic",
          "features": ["Landing Page", "Fully Responsive Design", "SEO Optimization (Basic)", "Contact Form"]
        },
        {
          "tier": "Standard",
          "features": ["3-5 Page Website", "Fully Responsive Design", "SEO Optimization (Advanced)", "CMS Integration / Dashboard"]
        },
        {
          "tier": "Premium",
          "features": ["Custom Web Solution", "Unlimited Pages", "1 Free Feature/Page Upgrade", "Ongoing SEO & Performance Optimization"]
        }
      ]
    },
  
    "e-commerce-applications": {
      "title": "E-commerce Applications",
      "description": "Build scalable, high-converting online stores with seamless user experiences and secure transactions. Empower your business with custom e-commerce solutions optimized for growth.",
      "image": "/images/comm.webp",
      "pricing": [
        {
          "tier": "Basic",
          "features": ["Starter E-commerce Website", "Product Listings", "Shopping Cart"]
        },
        {
          "tier": "Standard",
          "features": ["Custom E-commerce UI/UX", "Payment Gateway Integration", "User Authentication & Profiles"]
        },
        {
          "tier": "Premium",
          "features": ["Multi-Vendor Marketplace Support", "Custom Checkout Flow", "Advanced Analytics & Reporting"]
        }
      ]
    },
  
   "consultations": {
      "title": "Consultations",
      "description": "Expert consulting for digital success. Get tailored insights to enhance business performance, optimize digital presence, and drive scalable growth with data-driven strategies.",
      "image": "/images/consult.webp",
      "pricing": [
        {
          "tier": "Basic",
          "features": ["FREE 30 minutes Session", "Basic Website Review", "Basic Digital Marketing Strategy"]
        },
        {
          "tier": "Standard",
          "features": ["30ins - 1Hour Strategy Session", "UX/UI Review", "Actionable SEO & Conversion Optimization"]
        },
        {
          "tier": "Premium",
          "features": ["Full Brand Audit", "Brand & Business Strategy", "Growth Consultation",]
        }
      ]
    },
      
    "web-development-training": {
      "title": "Web Development Training",
      "description": "Learn modern web development with practical, hands-on coding experience. Build responsive designs, dynamic applications, and scalable web solutions for real-world success.",
      "image": "/images/training.webp",
      "pricing": [
        {
          "tier": "Basic",
          "features": ["HTML & CSS Basics", "JavaScript Fundamentals", "Building Responsive Static Websites"]
        },
        {
          "tier": "Standard",
          "features": ["React & Next.js", "API Integration", "Dynamic Web Applications"]
        },
        {
          "tier": "Premium",
          "features": ["Full-Stack Development", "Real-World Projects", "Career Guidance & Positioning"]
        }
      ]
    },
    "seo-optimization": {
      "title": "SEO Optimization",
      "description": "Improve search rankings, increase organic traffic, and enhance user engagement with our expert SEO strategies. We optimize for Google’s latest algorithms to ensure long-term success.",
      "image": "/images/seo.webp",
      "pricing": [
        {
          "tier": "Basic",
          "features": ["On-Page Optimization", "Keyword Research", "Meta Tags & Descriptions"]
        },
        {
          "tier": "Standard",
          "features": ["Technical SEO", "Content Optimization", "Mobile & Page Speed Optimization"]
        },
        {
          "tier": "Premium",
          "features": ["Full SEO Audit", "Backlink Strategy", "Long-Term SEO Growth Plan"]
        }
      ]
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
