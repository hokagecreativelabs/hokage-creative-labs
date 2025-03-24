"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Lazy load the Carousel only when needed (no SSR)
const Carousel = dynamic(() => import("./../components/ui/Carousel"), { ssr: false });

const images = [
  "/images/itl.webp",
  "/images/MP.webp",
  "/images/daylee.webp",
  "/images/kings.webp",
];

const Hero = () => {
  const [showCTA, setShowCTA] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const typingText = "Hokage Creative Labs";

  // Detect mobile device only once on mount (optimize performance)
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  // Typing effect with reduced complexity
  useEffect(() => {
    if (textIndex < typingText.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typingText[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, 10);
      return () => clearTimeout(typingTimeout);
    }
  }, [textIndex]);

  // CTA visibility based on scroll (debounced to reduce event firing)
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (Math.abs(currentScroll - lastScroll) > 20) {
        setShowCTA(currentScroll < 100);
        lastScroll = currentScroll;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <section
      className="relative w-full h-auto min-h-[876px] flex flex-col items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/bg-pattern.webp')" }}
    >
      <div className="w-full max-w-[1046px] flex flex-col items-center text-center gap-6 pt-[120px] sm:pt-[110px] px-4 sm:px-8">
        <h1 className="text-purple font-vastago font-semibold text-[76px] md:text-[96px] leading-[120%] tracking-[-0.02em]">
          {displayedText}
        </h1>

        <p className="max-w-[598px] text-[20px] leading-[145%] tracking-[-0.01em] font-nohemi">
          <span className="font-bold">Driven By Creativity. Powered By Technology.</span> <br />
          We craft innovative strategic solutions that bring your ideas to life.
        </p>

        {showCTA && (
          <button
            type="button"
            aria-label="Request a Quote"
            onClick={toggleModal}
            className="bg-purple text-white tracking-wide mt-[10px] md:mt-[40px] flex items-center justify-center gap-[8px] w-[191px] h-[56px] border border-[#21083F] rounded-[40px] px-[16px] py-[16px] hover:bg-white hover:text-black transition duration-300 ease-out whitespace-nowrap font-nohemi"
          >
            Request a Quote
            <Image
              src="/images/right-arrow.webp"
              width={24}
              height={24}
              alt="Arrow Icon"
              priority
            />
          </button>
        )}


        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full">
              <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
              <p className="mb-4">Fill out the form below to get started.</p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  className="w-full p-2 border rounded"
                />
                <textarea
                  placeholder="Your Message"
                  aria-label="Your Message"
                  className="w-full p-2 border rounded h-32"
                ></textarea>
                <button
                  type="submit"
                  aria-label="Submit your request"
                  className="w-full bg-purple text-white py-2 rounded"
                >
                  Submit
                </button>
              </form>
              <button
                onClick={toggleModal}
                aria-label="Close request form"
                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {isMobile ? (
          <Image
            src="/optimized/idea-600.webp"
            width={600}
            height={338}
            alt="Mobile Static Image"
            className="rounded-[24px]"
            priority
          />
        ) : (
          <div className="hidden lg:block">
            <Carousel images={images} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
