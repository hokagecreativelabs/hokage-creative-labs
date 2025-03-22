"use client";
import ServiceCard from "../components/ui/ServiceCard";

const services = [
  {
    title: "Branding",
    description: "Transform your brand with powerful, visually stunning designs that make a lasting impact. We offer from basic (logo only) to premium (Full branding + Brand guide doc) services.",
    image: "/images/web.png",
  },
  {
    title: "UI/UX Design",
    description: "Create user-centric, engaging interfaces that boost customer retention and elevate user experiences. Intuitive design that turns visitors into loyal users.",
    image: "/images/seo.png",
  },
  {
    title: "Web Development",
    description: "Develop high-performance websites with robust, scalable architectures. Optimize your online presence for speed, functionality, and success.",
    image: "/images/web.png",
  },
  {
    title: "E-commerce Applications",
    description: "Build dynamic, conversion-driven online stores with seamless user experiences. Empower your business with custom e-commerce solutions.",
    image: "/images/e-comm.png",
  },
  {
    title: "Consultations",
    description: "Receive expert digital strategy guidance to refine your vision and achieve your goals. Tailored solutions for impactful results.",
    image: "/images/consult.png",
  },
  {
    title: "Web Development Training",
    description: "Gain hands-on experience with modern web development techniques. Master scalable solutions and future-ready skills for real-world projects.",
    image: "/images/train.png",
  },
];


const bottomServices = [
    { title: "Custom Dashboards", description: "Experience data like never before with customized dashboards designed to empower smarter, data-driven decisions.", image: "/images/service2.png" },
    { title: "SEO Optimization", description: "Maximize your online visibility and climb search engine rankings. We transform traffic into measurable growth.", image: "/images/22.png" },
  ];
  

  const ServicesSection = () => {
    return (
      <section className="flex flex-col gap-12 pb-20 mx-auto max-w-[1248px] px-6">
        <h2 className="font-vastago text-[48px] font-normal leading-[120%] tracking-[-1px] mb-[-25px]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              wide
            />
          ))}
        </div>
      </section>
    );
  };
  
  export default ServicesSection;