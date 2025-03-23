import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ title, description, image, slug }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />

      <div className="p-6">
        {/* Title + See Details Link (Flexed) */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">{title}</h2>

        </div>

        <p className="text-gray-600">{description}</p>
          <Link href={`/services/${slug}`} className="mt-4 text-sm flex items-center text-blue-600 underline hover:text-blue-800 transition duration-300">
            See Details <FaArrowRight className="ml-1" />
          </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
