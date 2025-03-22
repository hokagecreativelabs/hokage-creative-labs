"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const works = [
  { id: 1, title: "Mfon Usoro Books", slug: "mfon-usoro-books", description: "A book launch platform using Sanity CMS.", image: "/images/MP.webp", tags: ["2 weeks", "Website + CMS", "Book Launch"] },
  { id: 2, title: "The Oladayo Akinmokun", slug: "the-oladayo-akinmokun", description: "A personal portfolio website for a designer.", image: "/images/daylee.webp", tags: ["1 Week", "SPA", "Portfolio"] },
  { id: 3, title: "Enauf Homes", slug: "enauf-homes", description: "A real estate web platform with property listings.", image: "/images/enauf.webp", tags: ["1 week", "Web Development", "Real Estate"] },
  { id: 4, title: "ITL Conference", slug: "itl-conference", description: "A conference website with custom dashboard.", image: "/images/itl.webp", tags: ["12 weeks", "Website + Dashboard", "Conference"] },
];

export default function SingleProjectPage() {
  const { slug } = useParams();
  const project = works.find((work) => work.slug === slug);

  if (!project) {
    return <p className="text-center text-gray-500 mt-12">Project not found.</p>;
  }

  return (
    <motion.div
      className="container mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/projects" className="text-blue-500 mb-4 inline-block">← Back to Projects</Link>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-3">{project.title}</h1>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span key={index} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
