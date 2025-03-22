"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ServiceCard = ({ title, description, image, slug }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/services/${slug}`);
  };

  return (
    <motion.div
      className="flex flex-col gap-6 w-full cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      onClick={handleClick} // Navigate on click
    >
      {/* Image Wrapper */}
      <div className="relative w-full h-[300px] overflow-hidden rounded-[16px] md:rounded-[25px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <h3 className="font-vastago text-[32px] font-medium leading-[140%] tracking-[-1px]">
          {title}
        </h3>
        <p className="font-nohemi text-[18px] font-normal leading-[150%] text-[#667185]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
