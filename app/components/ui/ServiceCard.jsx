"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ServiceCard = memo(({ title, description, image, slug }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Service Image */}
      <div className="relative w-full h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          aria-label={`Service: ${title}`}
        />
      </div>

      {/* Service Content */}
      <div className="p-3">
        <h2 className="text-2xl font-semibold mb-4 font-vastago">{title}</h2>
        <p className="text-md font-nohemi tracking-wide">{description}</p>

        {/* CTA to View Details Page */}
        <Link href={`/services/${slug}`}>
          <button
            className="mt-4 w-full py-3 text-center text-lemon bg-purple rounded-md font-nohemi hover:bg-lemon hover:text-purple"
            aria-label={`Learn more about ${title}`}
          >
            View Details  →
          </button>
        </Link>
      </div>
    </motion.div>
  );
});

export default ServiceCard;
