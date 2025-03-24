"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFilter } from "react-icons/fa";
import TestimonialSection from "../sections/Testimonials";

const projects = [
  { id: 1, title: "Mfon Usoro Books", slug: "mfon-usoro-books", category: "Web Development", image: "/images/MP.webp" },
  { id: 2, title: "The Oladayo Akinmokun", slug: "the-oladayo-akinmokun", category: "Web Development", image: "/images/daylee.webp" },
  { id: 3, title: "The ITL Conference", slug: "itl-conference", category: "Web Development", image: "/images/itl.webp" },
  { id: 4, title: "Party Deal Catering", slug: "party-deal", category: "Branding", image: "/images/partyy.webp" },
  { id: 5, title: "Hokage Creative Labs", slug: "hokage-creative", category: "Branding", image: "/images/hoka.webp" },
  { id: 6, title: "Asake Foods", slug: "asake-foods", category: "Branding", image: "/images/asake-foods.webp" },
];

const categories = ["All", "Branding", "UI/UX", "Web Development"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative min-h-screen mx-auto py-32">
      {/* Banner */}
      <div className="relative h-32 md:h-48 flex items-center justify-center bg-cover" style={{ backgroundImage: "url('/images/bg-pattern.webp')" }}>
        <h1 className="text-black text-[56px] md:text-[96px] font-vastago">Projects</h1>
      </div>

      {/* Mobile Filter Button */}
      <div className="p-4 md:hidden flex justify-center">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 px-12 py-6 bg-purple text-lemon text-lg tracking-wider rounded-md font-nohemi"
          aria-label="Open filter menu"
        >
          <FaFilter /> Filter
        </button>
      </div>

      {/* Filter Modal (Mobile) */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-3/4 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 font-nohemi">Filter by Category</h3>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsFilterOpen(false);
                }}
                className={`block w-full px-4 py-2 my-1 text-left rounded-md font-nohemi ${
                  selectedCategory === category ? "bg-purple text-white" : "hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
            <button
              onClick={() => setIsFilterOpen(false)}
              className="mt-3 w-full py-2 text-center text-white bg-purple rounded-md font-nohemi"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Desktop Filters */}
      <div className="hidden md:flex justify-center gap-4 my-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-nohemi transition ${
              selectedCategory === category ? "bg-lemon text-purple" : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12 pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden" whileHover={{ scale: 1.03 }}>
            <picture>
              <source srcSet={`${project.image.large}`} media="(min-width: 1280px)" />
              <source srcSet={`${project.image.medium}`} media="(min-width: 640px)" />
              <img src={project.image.small} alt={`Project - ${project.title}`} loading="lazy" className="w-full h-64 object-cover" />
            </picture>
            <div className="p-6">
              <h2 className="text-2xl font-vastago">{project.title}</h2>
              <p className="text-sm text-gray-500 font-nohemi">{project.category}</p>
              <Link href={`/projects/${project.slug}`} className="block mt-4 text-purple hover:underline">See Case Study →</Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <TestimonialSection />
    </div>
  );
}