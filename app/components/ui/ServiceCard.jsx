"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ title, description, image, slug }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <img className="w-full h-48 object-cover" src={image} alt={title} />

      <div className="p-6">
        {/* Title + See Details Link (Flexed) */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>

        <p className="text-gray-600">{description}</p>
        <Link href={`/services/${slug}`} className="mt-4 text-sm flex items-center text-purple underline hover:text-lemon transition duration-300">
          See Details <FaArrowRight className="ml-1 text-lemon" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
