"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ServiceCard = memo(({ title, description, image, slug }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Service Image */}
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          layout="fill"
          aria-label={`Service: ${title}`}
        />
      </div>

      {/* Service Content */}
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2 font-vastago">{title}</h2>
        <p className="text-md font-nohemi tracking-wide text-gray-700">{description}</p>

        {/* CTA to View Details Page */}
        <Link href={`/services/${slug}`} passHref>
          <button
            className="mt-4 w-full py-3 text-center text-lemon bg-purple rounded-md font-nohemi hover:bg-lemon hover:text-purple transition-colors duration-300"
            aria-label={`Learn more about ${title}`}
          >
            View Details →
          </button>
        </Link>
      </div>
    </motion.div>
  );
});

export default ServiceCard;
